# AI Agent Guide for rvl-funding

## Project overview
- Next.js 14 app using the App Router.
- TypeScript with `strict: true` and no runtime JavaScript emission.
- Root page content is in `src/app`; shared UI lives in `src/components`.
- Styling is plain CSS imported from `src/app/globals.css`.
- No backend API routes or serverless functions are present in this repository.

## Important files
- `package.json` — dev commands and dependencies.
- `tsconfig.json` — `@/*` path alias points to `src/*`.
- `src/app/layout.tsx` — root layout and metadata.
- `src/app/page.tsx` — home page content.
- `src/components/site-header.tsx` — navigation structure.
- `src/components/site-footer.tsx` — footer layout.

## Common conventions
- Use `next/link` for internal navigation.
- Keep route structure aligned with `src/app/<route>/page.tsx` directories.
- `use client` is only needed in client components.
- Preserve the existing brand tone, accessibility roles, and semantic markup.

## Build/test commands
- `npm run dev` — start local development server.
- `npm run build` — build for production.
- `npm run start` — run production server.
- `npm run lint` — run Next.js lint checks.

## When changing code
- Prefer minimal edits and preserve layout/branding.
- Avoid changing generated files in `.next/` or dependencies in `node_modules/`.
- Keep page content consistent with the existing information architecture: Home, Services, Cases, Resources, About, Contact.

## Notes for agents
- There is no existing `README.md` or additional documentation in this repo.
- When in doubt, inspect the current `src/app` and `src/components` source for conventions.
- This is a static marketing-style site; avoid adding server-side business logic unless explicitly requested.
