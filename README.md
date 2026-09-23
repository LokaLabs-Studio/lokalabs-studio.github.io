# lokalabs-studio.github.io

Website for Loka Labs, and home of the privacy policy, terms and data deletion pages for our apps.

Built with [Astro](https://astro.build). Every push to `main` deploys to GitHub Pages.

## Running it

```bash
npm install
npm run dev
```

`npm run build:ci` is what CI runs: type check, build, then `scripts/check-dist.mjs`, which fails if any page loads something from another domain. The site doesn't use analytics, cookies or third-party resources, and that check keeps it that way.

## Adding an app

1. Create `src/content/apps/<id>/` with `index.md`, `icon.png` and `lockup.svg`. See `src/content.config.ts` for the fields.
2. Add `privacy.md`, `terms.md` and `delete-data.md` to `src/content/legal/<id>/`.
3. FAQ entries go in `src/content/faq/<id>/`.

The app page and its legal pages are generated from these. Their URLs (`/apps/<id>/privacy/` etc.) end up in Play Console, so don't rename them.

## Share images

`public/og/` is rendered from the `/dev/og/` pages. Start `npm run dev`, then run `npm run og`. The first time, run `npx playwright install chromium`.

## AdMob

When the AdMob account is live, add its seller line to `public/app-ads.txt`:

```
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

## License

The code is MIT licensed. The Loka Labs and LiftLab names, logos and artwork are not.
