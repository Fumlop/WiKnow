# Changelog

## 2026-03-26

### Cloudflare Pages Deployment
- Set up WiKnow as a public static site on Cloudflare Pages (from GitHub, no build step)
- Migrated from EDIntel parent repo worker to standalone Pages project

### BGS Section — 6 Guide Pages
- **Influence** — 4 buckets, diminishing returns, population scaling, daily caps
- **Economy Boost** — enhanced with station economy callout, demand bars, carrier rules, mining caveat
- **Wars & Elections** — CZ strategy, day-win mechanics, election rules, conflict table
- **Expansion & Retreat** — expansion cube, rules, retreat triggers, colonization
- **States Reference** — all states with durations, enter/exit methods
- **Actions Reference** — cheat sheet, ethos table, fleet carrier rules, reputation tips

### PowerPlay Section — 3 Guide Pages
- **Reinforcement** — all fortification activities ranked by merit value
- **Acquisition** — range rules, CP thresholds, contested mechanics, activity table
- **Undermining** — merit tables by system strength, carrier assault guide, power vulnerabilities

### Technical Help
- **PowerPlay Cache** — fix for broken PP data cache

### Site Infrastructure
- Shared sidebar nav via `js/nav.js` (single source of truth for all pages)
- Per-page sub-nav support via `window.wikiSubNav`
