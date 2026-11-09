# Mohsin Qureshi · Forward-deployed AI engineer

Source for **[mohsinqureshi.io](https://mohsinqureshi.io/)**: an enquiry-led portfolio for remote, USD-paid AI engineering, forward-deployed engineering (FDE) and consulting work, plus the business toolkit behind it.

**Stack:** React 18 · TypeScript · Vite 6 · Tailwind CSS · framer-motion · static prerendered routes · GitHub Pages

## What's in this repo

| Path | Purpose |
|---|---|
| `src/v3/` | Home and services pages. Copy and data live in `content.ts`, styles in `v3.css` |
| `src/pages`, `src/components` | Case studies, blog, remote-roles page, legal pages, calendar and resume modals |
| `index.html`, `public/llms.txt` | SEO and GEO metadata. The FAQ is mirrored in `content.ts`, `index.html` (JSON-LD and static HTML) and `llms.txt`; update all three together |
| `scripts/generate-static-routes.js` | Prerenders each route to its own `index.html` for Pages |
| `docs/` | Build output served by GitHub Pages (generated, do not edit by hand) |
| `business/` | Go-to-market and client-delivery assets (below) |
| `deploy.sh` | One-command build and publish |

## Business toolkit (`business/`)

- **`GTM_STRATEGY.md`**: positioning, ICP, offers, channels and pipeline plan for AI consulting, FDE and contract roles.
- **`LINKEDIN_PLAYBOOK.md`**: profile, content and outreach playbook aligned with the site copy.
- **`client-pack/`**: 12 editable Word templates covering the whole engagement lifecycle:

  | # | Document |
  |---|---|
  | 00 | Client Pack Index |
  | 01 | Proposal and Statement of Work |
  | 02 | Consulting Services Agreement |
  | 03 | Mutual Non-Disclosure Agreement |
  | 04 | Onboarding and Kickoff Pack |
  | 05 | Discovery Questionnaire |
  | 06 | Architecture Document (HLD and LLD) |
  | 07 | Weekly Status Report |
  | 08 | Change Request |
  | 09 | Acceptance and Handover Certificate |
  | 10 | Invoice |
  | 11 | Close-out Review and Feedback |

> The agreement and NDA are templates, not legal advice. Have counsel review them before use.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, build to docs/, prerender routes
npm run preview    # serve the production build
```

## Deploy (GitHub Pages: branch `main`, folder `/docs`)

```bash
./deploy.sh
```

The script clones the repo, replaces its contents with this folder, builds, commits (including `docs/`) and pushes to `main`. Pages refreshes in about a minute. Requires Git credentials for `mohsingitdev/mohsingitdev.io` and Node 18+.

**One-time Pages setting:** Settings → Pages → Source: *Deploy from a branch* → `main` / `/docs`.

## License

All rights reserved unless a license file says otherwise. Contact via the site for reuse.
