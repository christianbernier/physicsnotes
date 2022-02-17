# physicsnotes
A collection of my notes for my physics class, written in Markdown then rendered to HTML and LaTeX, organized by topic.

## Development

I created this site using HTML, CSS, and JavaScript. I have a node script (`build.js`) that takes an HTML template for a note page, topic page, and the index page, then uses the file structure in the `notes` folder to build static HTML pages for each note and topic. The LaTeX is rendered using the KaTeX library.

## Build

To build the site, run

```
npm run build
```

This takes files from the `src` and `notes` folders and exports the built site to the `public` folder.
