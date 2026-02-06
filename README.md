# iNZight Website and Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 16.14+

## Installation

```bash
bun install
```

## Local Development

```bash
bun run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true bun run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> bun run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

```
inzight-website/
├── blog/           # Blog posts
├── docs/           # User guide and reference documentation
├── src/
│   ├── components/ # React components
│   ├── css/        # Custom styles
│   └── pages/      # Standalone pages (about, install, related)
├── static/         # Static assets (images, favicons)
└── support/        # Support documentation (FAQ, contact, etc.)
```

## Contributing

See the [Development page](https://inzight.nz/about/development) for information on how to contribute to iNZight.
