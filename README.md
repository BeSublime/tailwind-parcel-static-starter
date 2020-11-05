# Simple static HTML site template
A repo template for a simple static HTML page based on HTML5 Boilerplate and utilizing Tailwind CSS for flexible styling.
Great for coming soon and landing pages.
Easily deployable to GitHub pages or any other static site host.

## Usage
Click the "Use this template" button at the top of the [main page](https://github.com/BeSublime/simple-static) of the repository on GitHub.
Edit the contents of index.html and/or main.js and deploy to your favorite static host.

For quick access, you can also go to https://github.com/BeSublime/simple-static-boilerplate/generate

Once your repository is created and cloned to your local environment, be sure to run `npm install` to install dependencies before continuing.

## Development
From the terminal, run `npm run dev` to start up a simple server (using Parcel) which will monitor index.html (and any JS/CSS contained within it) and reload automatically when changes are made.

## Deployment
To deploy to GitHub pages, [enable github pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) in your repository's settings, and select the `/docs` directory as the source.

To update the published GitHub pages site,  run `npm run build`, then commit and push the changes to the remote repository. (This command uses parcel to compile the css, bundle any scripts, and output everything to the `/docs` directory.)
