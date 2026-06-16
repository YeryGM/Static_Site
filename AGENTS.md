# Static_Site

Static landing page for TRANSFRIBOL S.R.L. (Bolivian freight transport).

## Stack
- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v3
- No API routes, no dynamic data, no SSR — fully static single-page site
- All nav links are anchor-based (`#hero`, `#empresa`, `#servicios`, etc.)

## Commands
- `npm run dev` — dev server
- `npm run build` — typecheck + lint + production build (this is the only verification command)

## Architecture
- **`app/`** — App Router entry: `layout.tsx` (minimal, fonts in CSS), `page.tsx` (assembles all sections)
- **`components/`** — 21 section components, all default-export functions
- **`components/data.ts`** — nav items, services, fleet, values, clients, certifications, process steps, WhatsApp number
- **`components/Icons.tsx`** — inline SVG icon by name (18 icons, no external icon lib)
- **`app/globals.css`** — 2286 lines of custom CSS (NOT Tailwind utilities); brand tokens as CSS vars
- Path alias: `@/*` → project root

## Style conventions
- Components use CSS class names from `globals.css`, NOT Tailwind utility classes
- Brand colors: `brandBlue` `#174773`, `brandDark` `#203C59`, `brandRed` `#D32F2F`, `brandLightRed` `#EF5350`
- Fonts: Inter (body, `font-sans`), Outfit (headings, `font-heading`) — loaded via `@import` in CSS
- Animations: scroll-reveal via `.reveal`/`.reveal-{up,down,left,scale}` classes with `.delay-{1..4}`
- "use client" only in 3 components: Navbar, AnimatedCounter, RevealProvider

## Key constants
- WhatsApp: `59168946666` — used in `WHATSAPP_LINK = https://wa.me/59168946666`
- navItems: Inicio, Empresa, Servicios, Flota, Cobertura
- Services: Carga especial, Maquinaria, Cargas pesadas, Productos basicos, Almacenes generales
- Fleet: 30 SIDER + 80 LONA + 10 LOWBOY (fleet size numbers hardcoded in JSX, not in data.ts)

## Important notes
- No test framework, no lint/format config, no CI — `next build` is the sole verification
- No `opencode.json` or `.opencode/` in this repo
- Preloader fades out after ~1.1s (hardcoded in RevealProvider)
- `next.config.mjs` only sets `reactStrictMode: true`
- Package manager: npm (lockfile: `package-lock.json`)
