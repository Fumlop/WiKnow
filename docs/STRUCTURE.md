# WiKnow — Site Structure

## Overview
Public static wiki for Elite Dangerous guides (Winters PowerPlay & BGS). Pure HTML + CSS + one JS file. No build step. Deployed to Cloudflare Pages from GitHub.

## Directory Layout

```
/
  index.html              Homepage with section cards
  pcz-guide.html          PCZ guide (root level, PowerPlay)
  css/wiki.css            Shared stylesheet (dark Winters theme)
  js/nav.js               Shared sidebar navigation (single source of truth)
  bgs/                    Background Simulation guides
    index.html            BGS hub page
    influence.html        How influence works
    economy-boost.html    Trade & commodity delivery guide
    conflicts.html        Wars & elections
    expansion-retreat.html Expansion, retreat, colonization
    states.html           All BGS states reference
    actions.html          Actions cheat sheet
  pp/                     PowerPlay guides
    reinforcement.html    Fortification activities & merits
    acquisition.html      Acquiring new systems
    undermining.html      Undermining enemy systems
  tech/                   Technical help
    pp-cache-fix.html     PowerPlay cache fix
  docs/                   Documentation (not deployed)
    changelog.md          Change history
    STRUCTURE.md          This file
    plan/                 Implementation plans (temporary, delete before push)
```

## Design System

### CSS Variables (css/wiki.css)
- Dark theme with blue accent (Winters faction branding)
- `--bg`, `--bg2`, `--bg3` — background layers
- `--accent`, `--link` — blue highlights (#74c0fc)
- `--success`, `--warn`, `--danger` — semantic colors

### Components
- `.wiki-layout` — CSS grid: sidebar + content
- `.wiki-sidebar` — sticky nav, populated by js/nav.js
- `.breadcrumb` — page location trail
- `.callout` — info/tip/warn boxes (`.callout-info`, `.callout-tip`, `.callout-warn`)
- `.guide-list` — card-style link list for hub pages
- `.section-card` — homepage section boxes
- `.tbl-3`, `.tbl-load` — table column width presets
- `.tag-buy`, `.tag-sell`, `.tag-info` — inline labels

### Navigation (js/nav.js)
- All pages use `<nav class="wiki-sidebar" id="wiki-nav"></nav>` + `<script src="/js/nav.js"></script>`
- Nav data defined in nav.js as a sections array — edit there to add/remove pages
- Active page auto-detected from URL
- Per-page sub-nav: set `window.wikiSubNav` array before loading nav.js

### Adding a New Page
1. Create HTML file in appropriate directory (bgs/, pp/, tech/)
2. Use the standard template: wiki-layout > nav#wiki-nav + main.wiki-content
3. Add breadcrumb nav
4. Add entry to `js/nav.js` sections array
5. Optionally set `window.wikiSubNav` for page-specific anchor links
6. Update homepage `index.html` if it's a major page
7. Update `docs/changelog.md`
