# 2026-06-03 Amvera staging prep

## Scope

Prepared the Astro hybrid SynthesisLab site for Amvera staging deployment without changing the UX/design pass, Node adapter, or `/api/lead` behavior.

## Changes

- Added `package.json` start script: `HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs`.
- Added `amvera.yml` with npm build command, `npm run start`, and `containerPort: 4321`.
- Added `.env.example` for Telegram lead-form credentials and runtime env.
- Expanded `README.md` with local production build/run checks, Telegram mock-mode behavior, and Amvera notes.
- Updated `.gitignore` to keep local raw materials and transient test output out of staging commits.

## Verification

- `npm run build`: passed.
- `npm run start`: served production Node build on port `4321`.
- `curl -I /`: `200 OK`.
- `curl -I /privacy/`: `200 OK`.
- `/api/lead` valid payload: `200 {"ok":true}`.
- `/api/lead` empty required fields: `400 {"ok":false,"error":"no_fields"}`.
- `/api/lead` honeypot payload: `200 {"ok":true}`.
- Anchors present in built HTML: `formaty`, `diagnostika`, `keysy`, `komanda`, `lead`.

## Remaining Inputs

- Production domain.
- `TELEGRAM_BOT_TOKEN`.
- `TELEGRAM_CHAT_ID`.
- Photos and bios for Alexandra and Anastasia.
- Final approved testimonials.
- Confirmed client-logo list.
