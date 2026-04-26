# Team Velo Official Web

Official showcase website for **Team 12 - Velo**, an ESE5160 embedded systems final project.

**Live site:** https://team-velo-upenn.vercel.app  
**Final narrated demo:** https://team-velo-upenn.vercel.app/gallery#final-narrated-demo  
**Direct demo video:** https://team-velo-upenn.vercel.app/media/videos/velo-final-narrated-demo-full.mp4

Velo is a compact embedded reminder panel that combines a physical touchscreen product, hook LEDs, cloud-backed context, signed A/B OTA, fallback recovery, validation evidence, and release tooling.

## Pages

- `/` - project overview and proof highlights
- `/product` - product story, use case, and future direction
- `/engineering` - firmware, hardware, cloud, and OTA architecture
- `/ota-lab` - interactive release/reject/recover explanation
- `/validation` - validation matrix and release timeline
- `/gallery` - photos, videos, release proof, and final narrated demo
- `/archive` - technical archive, code scale, and implementation evidence

## Tech Stack

- Next.js
- React
- TypeScript
- Framer Motion
- Lucide React
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:3000
```

## Production Build

```bash
npm run build
```

## Deploy

```bash
npx vercel --prod --yes
```

The deployed production alias should point to:

```text
https://team-velo-upenn.vercel.app
```

## Repository Notes

This repository intentionally includes the final public media used by the site, including the narrated demo video. It intentionally excludes:

- `node_modules/`
- `.next/`
- `.vercel/`
- `output/`
- `test-results/`
- local logs
- secrets, private keys, and signing keys

Private firmware signing keys and VM upload keys are not part of this repository.
