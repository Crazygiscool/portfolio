# Crazygiscool's Portfolio

A static Astro portfolio for a hobbyist who likes making game plugins, desktop apps, language tools, and web projects for fun.

## Run locally

Requirements: Node.js 22.12 or newer and npm.

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run check
npm run build
npm run preview
```

The static production site is generated in `dist/`.

## Build-time data

Copy `.env.example` to `.env` to customize the build:

- `GITHUB_USERNAME` selects the account used for the profile image, links, skills, and contribution data.
- Contributions are read from GitHub's native `/users/<username>/contributions` page at build time, including the exact dates, activity levels, and accessible count tooltips. The chart is statically rendered into the hero, moves from right to left, fades beneath the intro, and respects reduced-motion preferences. No contribution API is used.
- `GITHUB_TOKEN` is optional and only raises the GitHub REST API rate limit.
- `WAKATIME_API_KEY` enables both the seven-day and all-time summaries. The key is read during static generation only.

The defaults work without a `.env` file. Failed external requests fall back gracefully; changing these values requires a new build.

## Navigation

The floating icon dock tracks the visible Projects, Skills, Activity, and Contact section as you scroll. Hover or focus an icon to reveal its label.

## Deploy

The site uses Astro's static output and is ready for Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 22.12 or newer

The canonical URL is configured as `https://crazyg.is-a.dev` in `astro.config.mjs`. Assigning the domain and DNS records is handled by the hosting provider and the `is-a.dev` domain configuration.
