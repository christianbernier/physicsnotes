// build.js
// builds every page and share-image for every note, based on the notes in notes.json

const fs = require('fs-extra')
const markdown = require("markdown-wasm")
const katex = require('katex')
const spellchecker = require('spellchecker')
const matter = require('gray-matter')
const canvas = require('canvas') 

// should the files be checked for spelling?
const CHECK_SPELLING = false

// gets the structure of the notes from the notes.json file
const fileStructure = JSON.parse(fs.readFileSync("notes.json", "utf8"))
const modernPhysics = fileStructure.subjects[0]

// HTML templates for each type of page
const indexTemplate = fs.readFileSync("src/index-template.html", "utf8")
const topicTemplate = fs.readFileSync("src/topic-template.html", "utf8")
const noteTemplate = fs.readFileSync("src/note-template.html", "utf8")

// generates a date string given a date object
// d    Date    the date to be processed
// ex. Tuesday, February 1, 2022
const prettyDate = d => d.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

// generates the HTML link tag for a note page, from the corresponding topic page
// note     Note    the note object the link is for
// topic    Topic   the topic of the note the link is for
const notePageLinkTag = (note, topic) => `<a class="note-link" href="${((process.env.NETLIFY) ? "" : `${__dirname}/public/`) + topic.folder}/${note.file}.html">${note.name}</a>`

// generates the HTMl link tag for a topic page, from the index page
// topic    Topic   the topic the link is for
const topicPageLinkTag = topic =>
    `<a href="${((process.env.NETLIFY) ? "" : `${__dirname}/public/`) + topic.folder}.html" class="topic-tile-link">    
        <div class="topic-tile-body">
            <p class="topic-tile-title">${topic.name}</p>
            <img src="${topic.image}" class="topic-tile-picture">
        </div>
    </a>`

// generates the index page at /public/index.html
const generateIndexPage = () => {
    const indexHtml = indexTemplate
        .replace(/TOPIC_LINKS/g, modernPhysics.topics.map(t => topicPageLinkTag(t)).join(""))
    fs.outputFileSync(__dirname + "/public/index.html", indexHtml)
}

// given a topic object, generates a page for that topic at /public/{topic}.html
// and all its notes as separate note pages (see generateNotePage method)
// topic    Topic   the topic to generate a page for
const generateTopicPage = topic => {
    const topicHtml = topicTemplate
        .replace(/TOPIC/g, topic.name)
        .replace(/NOTES/g, topic.notes.map(note => notePageLinkTag(note, topic)).join(""))
    fs.outputFileSync(__dirname + `/public/${topic.folder}.html`, topicHtml)

    topic.notes.forEach(n => generateNotePage(n, topic))
}

// given a note object and topic object, generates a page for that note at /public/{topic}/{note}.html
// note     Note    the note the page is for
// topic    Topic   the topic of the note the page is for
const generateNotePage = (note, topic) => {
    // reads the data in the header of each note (includes title and date)
    const noteData = matter(fs.readFileSync(`notes/${topic.folder}/${note.file}.md`, "utf8"))

    // generates the share image for the note if not on Netlify
    if (!process.env.NETLIFY)
        generateImageForNote(note, topic)

    // converts note file (written in Markdown) into HTML
    let noteHtml = markdown.parse(
        noteData.content
            .replace(/_/g, "\\_")
            .replace(/\$\$/g, "$$$$$$")
            .replace(/\.\.\/\.\.\/public/g, ".."))

    // replace fields in the template with note data
    const noteDate = prettyDate(noteData.data.date)
    noteHtml = noteTemplate
        .replace(/CONTENT/g, noteHtml)
        .replace(/TITLE/g, note.name)
        .replace(/TOPIC_NAME/g, topic.name)
        .replace(/TOPIC_LINK/g, `../${topic.folder}.html`)
        .replace(/SHARE_IMAGE/g, `../images/shareimages/${topic.folder}/${note.file}.png`)
        .replace(/DATE/g, noteDate)
        .replace(/\$\$(.+?)\$\$/g, (_, latex) => katex.renderToString(latex.replace(/<\/?em>/g, "*").replace(/<\/?del>/g, "~").replace(/amp;/g, "&"), { throwOnError: false, displayMode: true, strict: ec => ec !== "newLineInDisplayMode" }))
        .replace(/\$(.+?)\$/g, (_, latex) => katex.renderToString(latex.replace(/<\/?em>/g, "*").replace(/<\/?del>/g, "~").replace(/amp;/g, "&"), { throwOnError: false }))
        .replace(/!!(.*)!!/g, `<span class="special">$1</span>`)

    // if the CHECK_SPELLING const is set, and it's not building for production,
    // check the spelling of each file
    if (CHECK_SPELLING && !process.env.NETLIFY) {
        // dictionary of allowed words (mostly names)
        const dictionary = JSON.parse(fs.readFileSync("dictionary.json", "utf8"))

        // get rid of latex and punctuation
        let words = noteData.content.replace(/\$(.+?)\$/g, "").replace(/[^a-zA-Z]/g, " ").split(" ")

        // loop through words and check each one's spelling
        for (const word of words) {
            // if the word is in the allowed words in the dictionary, skip it
            if (dictionary.allowedWords.indexOf(word.toLowerCase()) !== -1) continue

            // if the word is misspelt, console.log it in red
            if (spellchecker.isMisspelled(word))
                console.log('\u001b[' + 31 + 'm' + `POSSIBLE SPELLING ERROR: "${word}" found in ${topic.name}/${note.name}` + '\u001b[0m')
        }
    }

    fs.outputFileSync(__dirname + `/public/${topic.folder}/${note.file}.html`, noteHtml)
}

// given an array of lines of text, creates a string with lines
// of max length maxChars with newline breaks
// lines        [String]    the lines of text to be wrapped 
// maxChars     int         the maximum number of characters allowed on one line
// ex. given ["super long string"] with maxChars = 6: "super\nlong\nstring"
const wrap = (lines, maxChars) => {
    // if every line is within maxChars, return that as a string
    if (lines.every(l => l.length <= maxChars)) return lines.join("\n")

    // get the next line to be processed (at the end of lines)
    let rest = lines.pop().split(" ")
    let next = ""

    // so long as the next line is within maxChars and there are
    // more words to add, keep adding words to it
    while (rest.length !== 0 && next.length + rest[0].length <= maxChars)
        next += rest.shift() + " "

    // get rid of the extra space at the end
    next = next.substring(0, next.length - 1)

    // keep doing this until the entire string is processed
    return wrap([...lines, next, rest.join(" ")], maxChars)
}

// generates the share image for a note and puts it in the public/ folder
// note     Note    the note this share image is for
// topic    Topic   the topic of the note this share image is for
const generateImageForNote = async (note, topic) => {
    // set up image
    const image = canvas.createCanvas(1200, 630)
    const ctx = image.getContext("2d")

    // background
    ctx.fillStyle = "#EEEBE3"
    ctx.fillRect(0, 0, 1200, 630)

    // load topic image
    const topicImg = await canvas.loadImage(topic.image.replace("transparent", "dark"))
    ctx.drawImage(topicImg, 50, 50, 100, 100)

    // load favicon
    const faviconImg = await canvas.loadImage(`images/favicon.png`)
    ctx.drawImage(faviconImg, 1050, 480, 100, 100)

    // draws "physics.notes.cbernier.com" next to the favicon
    ctx.fillStyle = "#020029"
    ctx.font = "bold 48px PT Sans"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.fillText("physics.notes.cbernier.com", 1030, 530)

    // draws topic name next to the topic icon
    ctx.textAlign = "left"
    ctx.fillText(topic.name, 170, 100)

    // draws note name
    ctx.font = "900 72px PT Sans"
    const wrappedText = wrap([note.name], 30)
    const lines = wrappedText.split("\n").length
    const yOffset = 36 * (lines - 1) // adjust for multiple lines of text
    ctx.fillText(wrappedText, 50, 315 - yOffset)

    // export image
    const buffer = image.toBuffer()
    const url = `${__dirname}/images/shareimages/${topic.folder}/${note.file}.png`
    fs.createFileSync(url)
    fs.writeFileSync(url, buffer)
}

// begin the building process using methods above
generateIndexPage()
modernPhysics.topics.forEach(t => generateTopicPage(t))

// copies styles.css to the public/ folder
const cssFile = fs.readFileSync("src/styles.css", "utf8")
fs.outputFileSync(__dirname + "/public/styles.css", cssFile)

// copies images to the public/ folder
fs.copySync("images", __dirname + "/public/images")