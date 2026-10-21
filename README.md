# Art De Writx

Website for Art De Writx, a live Arabic calligraphy artist based in the UAE. Built with [Astro](https://astro.build) and deployed to Netlify.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static files to dist/
```

## Where things live

| What | Where |
|---|---|
| Pages | `src/pages/` (`index`, `live-events`, `custom-art`, `workshops`) |
| Header, footer and shared sections | `src/components/` |
| Contact details (email, WhatsApp, Instagram) | `src/data/site.ts` |
| Home page portfolio photos and testimonials | `src/data/portfolio.ts` |
| Colours, fonts and shared styles | `src/styles/global.css` |
| Photos | `public/images/` |

Text marked `[ADD: …]` (prices, durations, dates) still needs real details from the client.

## Deploying

Netlify reads `netlify.toml`: it runs `npm run build` and publishes `dist/`. Every push to the connected branch redeploys the site.
