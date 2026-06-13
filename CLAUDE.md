# LA Precision Asphalt — Project Context

Marketing/lead-gen website for **LA Precision Asphalt**, a commercial & industrial
asphalt repair company serving West-to-Central Los Angeles. Goal of the site:
rank locally (SEO) and convert visitors into estimate requests.

## Stack

- **Next.js 15.3** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) — config-less; theme lives in CSS
- `next/font` Poppins, exposed as `--font-poppins`
- No test framework, no DB, no CMS. Content is hardcoded in `src/lib`.
- Dev: `npm run dev` (turbopack) · Build: `npm run build` · Lint: `npm run lint`
- **`next build` runs ESLint and fails on errors** — keep lint clean (no unused
  imports, no `any`, escape apostrophes in JSX as `’` or `&apos;`).

## Design system

All styling uses **CSS custom properties** defined in
[src/app/globals.css](src/app/globals.css) and surfaced to Tailwind via `@theme`.
**Never hardcode hex colors in components** — use the vars:

- `--bg` warm off-white page bg · `--surface` white cards · `--muted-surface` tan section contrast
- `--dark` asphalt charcoal (header/footer) · `--accent` safety amber `#f4b400` (`--accent-hover`, `--accent-text`)
- `--text`, `--text-muted`, `--text-faint` · `--border`
- `--radius-xl` (14px), `--radius-2xl` (18px)

Use them as `bg-[var(--surface)]`, `text-[var(--text-muted)]`, etc.

**Visual conventions** (match these — the home page is the reference):
- Section header = eyebrow (uppercase, tracked, with a short `--accent` line) + h2 + muted desc → use `<SectionTitle>`.
- Sections: `mx-auto max-w-6xl px-6 py-10 lg:py-14`, alternating `--background` / `--muted-surface`, separated by `border-b border-[var(--border)]`.
- Cards: rounded-`--radius-2xl`, `--border`, hover `border-[var(--accent)]`.
- Two CTAs everywhere: phone (`tel:`) + amber "Request Estimate".

## Architecture

- **Content is data-driven.** Service & location pages are objects, not bespoke files:
  - [src/lib/services.ts](src/lib/services.ts) — 6 service pages
  - [src/lib/locations.ts](src/lib/locations.ts) — 7 city pages (built via a factory)
  - [src/lib/landing-types.ts](src/lib/landing-types.ts) — `LandingPage` type + `DEFAULT_PROCESS`
  - [src/lib/landing-pages.ts](src/lib/landing-pages.ts) — merges both, `getLandingPage(slug)`, `getRelated()`
- **One dynamic route** [src/app/[slug]/page.tsx](src/app/[slug]/page.tsx) renders all 13 landing
  pages via `generateStaticParams` + `generateMetadata`, using
  [src/components/LandingPageTemplate.tsx](src/components/LandingPageTemplate.tsx).
  Static folders (`/services`, `/about`, etc.) take priority over `[slug]`.
- **To add a service or city: add an object to the data file.** Route, metadata,
  sitemap entry, and schema all follow automatically. Cross-link via the `related` slug array.
- Shared UI: `SectionTitle`, `PageHero`, `Breadcrumbs`, `CTABand`, `FaqList` in `src/components/`.
- `PageHero`/`CTABand` "Request Estimate" button defaults to `#estimate`; pass
  `estimateHref="/contact#estimate"` on pages without an inline form.
- Business constants (name, phone, `SITE_URL`, `AREA_SERVED`, description) live in
  [src/lib/constants.ts](src/lib/constants.ts) — **single source of truth, import don't retype.**

## SEO

- Per-page `metadata` (title template + canonical + OpenGraph) via App Router exports.
- JSON-LD components in [src/components/schemas/](src/components/schemas/):
  `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`. Add schema to new page types.
- [src/app/sitemap.ts](src/app/sitemap.ts) + [src/app/robots.ts](src/app/robots.ts) auto-generate from the data layer.

## Conventions & constraints

- **Do not edit** `src/app/page.tsx` (home) or `Header.tsx`/`Footer.tsx` — owner likes them
  as-is; use them as design reference.
- **Images:** only existing files in `public/` are used. When adding an image, reuse any
  existing asset and **describe the ideal photo in the `alt` tag**, prefixed `Photo needed:`.
  Search the repo for `Photo needed:` to find all placeholders to swap.
- Apostrophes in copy use the curly `’` (matches existing content).

## Known TODOs / gotchas

- **`/api/lead` is a log-only stub** ([src/app/api/lead/route.ts](src/app/api/lead/route.ts)) —
  it validates + `console.log`s leads but does NOT deliver them. Wire up email (Resend),
  CRM, or SMS before launch.
- `SITE_URL` is assumed `https://centrallaasphalt.com` — confirm the real production domain.
- `EstimateForm` renders its own `<section id="home-estimate">`; landing pages wrap it in a
  `<div id="estimate">` for anchor scrolling.
