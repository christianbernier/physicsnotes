// build.js
// Creates the HTML pages in public/ for all the blog pages in notes/

const fs = require('fs-extra')
const markdown = require("markdown-wasm")
const recursive = require("recursive-readdir")
const matter = require('gray-matter')

// Generates a date string given a date object
// ex. Tuesday, February 1, 2022
const prettyDate = d => d.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

// Returns the filepath of the HTML note page, given its markdown filepath
// ex. "notes/test/test-page.md" becomes "/public/test/test-page.html"
const notePageUrl = mdFilepath => `/public/${mdFilepath.substring(6, mdFilepath.length - 3)}.html`

// Goes through the .md files in notes/ and creates HTML versions of each note
const generateNotePages = () => recursive("notes/", function (err, files) {
    if (err) {
        console.error(err)
        return
    }

    for (const file of files) {
        if (file.substring(file.length - 3) !== ".md") continue

        const template = fs.readFileSync("src/note-template.html", "utf8")
        const noteContents = matter(fs.readFileSync(file))
        const markdownAsHtml = markdown.parse(noteContents.content)
        const date = prettyDate(noteContents.data.date)
        const html = template.replace(/CONTENT/g, markdownAsHtml)
            .replace(/TITLE/g, noteContents.data.title)
            .replace(/DATE/g, date)

        fs.outputFileSync(__dirname + notePageUrl(file), html)
    }

})

generateNotePages()