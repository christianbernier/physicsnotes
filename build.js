// build.js
// creates the HTML pages in public/ for all the blog pages in notes/

// TODO
// - programmatically create shareimages

const fs = require('fs-extra')
const markdown = require("markdown-wasm")
const katex = require('katex')
const spellchecker = require('spellchecker')
const matter = require('gray-matter')

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
// ex. Tuesday, February 1, 2022
const prettyDate = d => d.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

// generates the HTML link tag for a note page, from the corresponding topic page
const notePageLinkTag = (note, topic) => `<a class="note-link" href="${((process.env.NETLIFY) ? "" : `${__dirname}/public/`) + topic.folder}/${note.file}.html">${note.name}</a>`

// generates the HTMl link tag for a topic page, from the index page
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
const generateTopicPage = topic => {
    const topicHtml = topicTemplate
        .replace(/TOPIC/g, topic.name)
        .replace(/NOTES/g, topic.notes.map(note => notePageLinkTag(note, topic)).join(""))
    fs.outputFileSync(__dirname + `/public/${topic.folder}.html`, topicHtml)

    topic.notes.forEach(n => generateNotePage(n, topic))
}

// given a note object and topic object, generates a page for that note at /public/{topic}/{note}.html
const generateNotePage = (note, topic) => {
    // reads the data in the header of each note (includes title and date)
    const noteData = matter(fs.readFileSync(`notes/${topic.folder}/${note.file}.md`, "utf8"))

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
        .replace(/DATE/g, noteDate)
        .replace(/\$\$(.+?)\$\$/g, (_, latex) => katex.renderToString(latex.replace(/<\/?em>/g, "*").replace(/<\/?del>/g, "~"), { throwOnError: false, displayMode: true, strict: ec => ec !== "newLineInDisplayMode" }))
        .replace(/\$(.+?)\$/g, (_, latex) => katex.renderToString(latex.replace(/<\/?em>/g, "*").replace(/<\/?del>/g, "~"), { throwOnError: false }))
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

generateIndexPage()
modernPhysics.topics.forEach(t => generateTopicPage(t))

// copies styles.css to the public/ folder
const cssFile = fs.readFileSync("src/styles.css", "utf8")
fs.outputFileSync(__dirname + "/public/styles.css", cssFile)

// copies images to the public/ folder
fs.copySync("images", __dirname + "/public/images")