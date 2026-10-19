# pixelized.me

Personal site of Mathew Henson, built with [Astro](https://astro.build).

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run check`   | Type-check the project                   |
| `npm run build`   | Build the static site to `./dist/`       |
| `npm run preview` | Preview the build locally                |

## Adding a project

Create a folder in `src/content/projects/<slug>/` with an `index.mdx` and its images. The folder name becomes the URL (`/projects/<slug>/`). Frontmatter fields are defined in `src/content.config.ts`.

Write-ups can use:

- `<YouTube id="..." title="..." />`
- `<GoogleSlides src="..." title="..." />` with a URL from Google Slides' _Publish to web_
