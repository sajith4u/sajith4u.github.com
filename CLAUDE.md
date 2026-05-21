# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio/resume website for Sajith Vijesekara, hosted on GitHub Pages at `www.sajithv.com` (configured via the `CNAME` file). There is no build step — changes to HTML/CSS/JS go live immediately after pushing to the `master` branch.

## Deployment

Push to `master` — GitHub Pages serves the site automatically. No CI, no build pipeline.

To preview locally, open `index.html` directly in a browser or use any static file server:

```bash
python3 -m http.server 8000
```

## Architecture

Single-page application built with plain HTML, Bootstrap 4.5, jQuery, and vanilla JS. No framework, no package manager, no bundler.

- **`index.html`** — The entire portfolio in one file. Sections: About, Experience, Education, Skills, Projects (`#interests`), Blog/Articles (`#awards`), Certifications (`#honors`). Sections use anchor IDs for the side-nav scroll-spy.
- **`css/styles.css`** — Bootstrap 4.5 + Start Bootstrap Resume v6.0.2 theme, bundled into one file. Brand primary color is `#BD5D38` (orange), defined in `:root` as `--primary`.
- **`css/card-view.css`** — Custom CSS for the flip-card components used on older project/app pages.
- **`js/scripts.js`** — jQuery smooth-scroll and Bootstrap scrollspy initialization (from Start Bootstrap Resume theme). No other logic.
- **`js/slider.js`** — Device/image slider for project detail pages.
- **`assets/img/`** — Profile photos and category icons (`saas.png`, `api.png`, `md.png`) used as card badges.
- **`projects/`** — Standalone project detail pages (e.g., `movie-tickets.html`).
- Root-level HTML files (`game-for-kids.html`, `mobile-app-ticket-booking.html`, `moile-app-terms.html`, `movie-tickets.html`) — standalone app/project landing pages, linked externally.

## Key Conventions

**Card components in `index.html`:**
- `.cardv2.card-empty` — Project cards in the Projects section. Each card has a title, work label (`Personal` / `Work` / `Community`), description, and tech tags (`.typeLabel`).
- `.cardv1.card-3` / `.cardv1.card-4` — Article cards in the Blog section. Color variants are controlled by the card class number.
- `.expLabel` — Tech badge chips in the Experience section.

**External dependencies (all CDN, no local copies):**
- Bootstrap 4.5 / jQuery 3.5.1 / jQuery Easing 1.4.1
- Font Awesome 5.15.1 (icons) + Font Awesome 4.7 (fallback)
- Google Fonts: Saira Extra Condensed, Muli, Nunito
- DevIcons (CDN) for the tech skill icons in the Skills section

**Google Analytics:** tag `G-7C6YECVJHJ` is inline in `<head>` of `index.html`.

**Navigation:** The side nav links use `js-scroll-trigger` + Bootstrap scrollspy targeting `#sideNav`. Adding a new section requires both a new `<section id="…">` and a matching `<li>` in the nav.
