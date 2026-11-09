# Mohsin Qureshi: portfolio

Forward-deployed AI engineer site. Enquiry-led (no public pricing). React 18, TypeScript, Vite 6, Tailwind, framer-motion.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, build to docs/, prerender routes
```

## Layout
- `src/v3/`: home and services page (copy and data in `content.ts`, styles in `v3.css`)
- `src/pages`, `src/components`: inner pages (case studies, blog, remote roles, legal)
- `index.html`, `public/llms.txt`: SEO/GEO data. FAQ is mirrored in `content.ts`, `index.html` (JSON-LD and static HTML) and `llms.txt`; update all three together.

## Deploy (GitHub Pages, branch `main`, folder `/docs`)
`./deploy.sh` clones the repo, syncs this folder, builds, commits `docs/` and pushes.
