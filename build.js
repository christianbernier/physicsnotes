// build.js
// Creates the HTML pages in public/ for all the blog pages in notes/

// TODO:
// - programmatically create shareimages

const fs = require('fs-extra')
const markdown = require("markdown-wasm")
const katex = require('katex')
const tc = require("title-case")
const recursive = require("recursive-readdir")
const matter = require('gray-matter')
const spellchecker = require('spellchecker')

const CHECK_SPELLING = false

// Generates a date string given a date object
// ex. Tuesday, February 1, 2022
const prettyDate = d => d.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

// Returns the filepath of the HTML note page, given its markdown filepath
// ex. "notes/test/test-page.md" becomes "/public/test/test-page.html"
const notePageUrl = mdFilepath => `${((process.env.NETLIFY) ? "" : "/public/") + mdFilepath.substring(6, mdFilepath.length - 3)}.html`

// Returns the filepath of a topic page, given the topic
// ex. "test-topic" becomes "/public/test-topic.html"
const topicPageUrl = topic => `${((process.env.NETLIFY) ? "" : "/public/") + topic}.html`

// Generates the HTML link tag for a note page, from the corresponding topic page
const notePageLinkTag = (note, topic) => `<a class="note-link" href="${((process.env.NETLIFY) ? "" : `${__dirname}/public/`) + topic}/${note}.html">${tc.titleCase(note.substring(2).replace(/-/g, " "))}</a>`

// Generates the HTMl link tag for a topic page, from the index page
const topicPageLinkTag = topic => `<a class="topic-link" href="${((process.env.NETLIFY) ? "" : `${__dirname}/public/`) + topic}.html">${tc.titleCase(topic.substring(3).replace(/-/g, " "))}</a>`

// Generates a list of topics found in the notes/ folder, and the notes associated with each topic
const generateTopicStructure = files => {
    let topics = []

    for (const file of files) {
        // splits filepath like "notes/relativity/conservation-laws.md"
        // into fileTopic = "relativity"
        // and  fileTitle = "conservation-laws"
        const fileStructure = file.split("/")
        const fileTopic = fileStructure[1]
        const fileTitle = fileStructure[2].split(".")[0]

        let found = false

        // searches topics so far for the current file's topic
        for (let topic of topics) {
            if (topic.topic === fileTopic) {
                topic.notes.push(fileTitle)
                found = true
                break
            }
        }

        // if the topic is new, a new topic object is added
        if (!found) {
            topics.push({
                topic: fileTopic,
                notes: [
                    fileTitle
                ]
            })
        }
    }

    return topics
}

// Goes through the .md files in notes/ and creates HTML versions of each note and topic pages for each directory
const generatePages = () => recursive("notes/", (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    // ensures topics and notes are in the correct order
    // note: topic folders are given names such as "/00-relativity/"
    // and notes are given names such as "2-twin-paradox.md"
    // so that they are displayed in the correct order. anywhere with
    // substring(2) or substring(3) is simply getting rid of that for
    // displaying to the user
    files.sort();

    // uses the list of all note files to generate the topic structure
    const topicStructure = generateTopicStructure(files)

    // generates the index page filled with links to each topic page
    const template = fs.readFileSync("src/index-template.html", "utf8")
    const html = template.replace(/TOPIC_LINKS/g, topicStructure.map(t => topicPageLinkTag(t.topic)).join(""))

    // console.log(`Generating index page`)
    fs.outputFileSync(__dirname + "/public/index.html", html)

    const cssFile = fs.readFileSync("src/styles.css", "utf8")
    fs.outputFileSync(__dirname + "/public/styles.css", cssFile)
    // console.log(`Generating styles.css`)

    const images = fs.copySync("images", __dirname + "/public/images")
    console.log(images)

    // generates a topic page for each topic found with notes in the notes/ folder
    for (const topic of topicStructure) {
        const template = fs.readFileSync("src/topic-template.html", "utf8")
        const html = template
            .replace(/TOPIC/g, tc.titleCase(topic.topic.substring(3).replace(/-/g, " ")))
            .replace(/NOTES/g, topic.notes.map(n => notePageLinkTag(n, topic.topic)).join(""))

        console.log(`Generating topic page for ${topic.topic} at ${__dirname + topicPageUrl(topic.topic)}`)
        fs.outputFileSync(`${((process.env.NETLIFY) ? "" : "/public/") + topic.topic}.html`, html)
        // fs.outputFileSync(((process.env.NETLIFY) ? "" : __dirname) + topicPageUrl(topic.topic), html)
    }

    // generates a note page for each note found within the notes/ page
    for (const file of files) {
        if (file.substring(file.length - 3) !== ".md") continue

        const topic = file.split("/")[1]
        const template = fs.readFileSync("src/note-template.html", "utf8")
        const noteContents = matter(fs.readFileSync(file, "utf8"))
        const markdownAsHtml = markdown.parse(noteContents.content.replace(/\$\$/g, "$$$$$$"))
        const date = prettyDate(noteContents.data.date)
        const html = template
            .replace(/CONTENT/g, markdownAsHtml)
            .replace(/TITLE/g, noteContents.data.title)
            .replace(/TOPIC_NAME/g, tc.titleCase(topic.substring(3).replace(/-/g, " ")))
            .replace(/TOPIC_LINK/g, `${((process.env.NETLIFY) ? "" : `${__dirname}/public/`) + topic}.html`)
            .replace(/DATE/g, date)
            .replace(/\$\$(.+?)\$\$/g, (_, latex) => katex.renderToString(latex.replace(/<\/?em>/g, "*").replace(/<\/?del>/g, "~"), { throwOnError: false, displayMode: true }))
            .replace(/\$(.+?)\$/g, (_, latex) => katex.renderToString(latex.replace(/<\/?em>/g, "*").replace(/<\/?del>/g, "~"), { throwOnError: false }))
            .replace(/!!(.*)!!/g, `<span class="special">$1</span>`)

        if (CHECK_SPELLING) {
            if (file.indexOf("test") === -1) {
                for (const word of noteContents.content.replace(/\$(.+?)\$/g, "").split(" ")) {
                    if (spellchecker.isMisspelled(word))
                        console.log('\u001b[' + 31 + 'm' + `POSSIBLE SPELLING ERROR: "${word}" found in ${file}` + '\u001b[0m')
                }
            }
        }

        // console.log(`Generating note page for ${file}`)
        fs.outputFileSync(__dirname + notePageUrl(file), html)
    }
})

generatePages()