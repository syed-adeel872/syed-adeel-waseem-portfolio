# Syed Adeel Waseem — Portfolio

AI Automation Engineer | Agentic AI Developer

## Overview

Professional portfolio website showcasing selected AI automation and agentic AI work.

**Live Portfolio:** https://adeel-portfolio-livid.vercel.app

**Download Full Portfolio (PDF):** [assets/syed-adeel-waseem-portfolio.pdf](assets/syed-adeel-waseem-portfolio.pdf)

## Technology Stack

- **HTML5** — Single-file static site (no build step)
- **CSS3** — Custom properties, CSS Grid, Flexbox, responsive design
- **Vanilla JavaScript** — Theme toggle with localStorage persistence (`theme.js`), mobile navigation (`nav.js`)
- **Google Fonts** — Space Grotesk (display), DM Sans (body), JetBrains Mono (code)
- **Vercel** — Hosting and deployment
- **No frameworks** — No React, Vue, or build toolchain

## Key Features

- **Responsive Design** — Mobile navigation, compact topbar, accessible controls
- **Light/Dark Theme Toggle** — Persisted preference via localStorage
- **Selected Work** — Seerah QA Bot (hackathon winner) and HVAC Revenue Recovery (case study)
- **Experience** — Lead Generation & Email Marketing (previous employment), Aivon Intelligence (founder-led venture, no longer active), and AI Automation Engineer Intern (remote, 2026)
- **Project Screenshots** — Seerah QA Bot chat and answer-reference screenshots; HVAC Revenue Recovery dashboard screenshot
- **Education & Training** — Panaversity Agentic AI Architecture program (in progress); Matriculation
- **Award Recognition** — Winner — AI-Chatbot, AI Seerathon 2026 (selected as winner among approximately 15–17 participants)
- **Downloadable PDF** — Full portfolio available for offline viewing
- **Security Hardened** — CSP headers, no external scripts, deployment exclusions

## Links

- **Portfolio:** https://adeel-portfolio-livid.vercel.app
- **GitHub:** https://github.com/syed-adeel872
- **LinkedIn:** https://www.linkedin.com/in/syedadeelwaseem/
- **Seerah QA Bot (Live):** https://seerah-qa-bot.vercel.app
- **Seerah QA Bot (Repository):** https://github.com/syed-adeel872/seerah-qa-bot
- **HVAC Revenue Recovery (Repository):** https://github.com/syed-adeel872/hvac-revenue-recovery

## Local Preview

```bash
# No build required — open index.html directly in a browser
# Or serve with any static server:
npx serve .
# or
python -m http.server 8000
```

## PDF Generation

```bash
npm install
npm run generate-pdf
```

Requires Node.js and a Chrome/Chromium installation (Puppeteer resolves one automatically). The script waits for fonts and images, applies print styles, and patches PDF metadata (title and author) via Python/pypdf when available.

## Deployment

Hosted on Vercel. Deployment exclusions are defined in `.vercelignore` (audit report, scripts, GitHub workflows, node_modules, Vercel local files, env files). Internal files remain in the repository.

## Deployment/Security Exclusions

- `AUDIT_REPORT.md`
- `scripts/`
- `.github/`
- `node_modules/`
- `.vercel/`
- `.env*`

---

*Built with semantic HTML, accessible CSS, and minimal local scripts.*
