# Daley Plumbing Website

Static marketing site for Daley Plumbing (Tacoma, WA) — built with Astro and Tailwind,
deployed on Vercel. See `AGENT.md` for brand voice, SEO rules, and content briefs.

## Structure

- `src/pages/` — one page per route. Service pages use `layouts/ServicePage.astro`,
  city pages use `layouts/CityPage.astro`; both feed FAQ and breadcrumb schema into `Layout.astro`.
- `src/components/` — homepage sections plus the shared `Header` and `Footer`.
- `public/` — logos, favicon, hero photo, `robots.txt`.

## Environment

Copy `.env.example` to `.env` and fill it in. Both variables are build-time and public.

- `PUBLIC_WEB3FORMS_KEY` — **required for the estimate forms to work.** Without it every
  form tells visitors to call instead of submitting, and the build logs a warning.
- `PUBLIC_GA4_ID` — optional. When set, Google Analytics 4 is included.

Set the same values in the Vercel project's Environment Variables, then redeploy —
these are baked in at build time, so changing them requires a new build.

## Development

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build     # outputs to dist/, generates sitemap-index.xml
yarn preview
```
