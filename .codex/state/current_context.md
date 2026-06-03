# Current context

- Objective: подготовить SynthesisLab к staging-деплою на Amvera после UX/design pass.
- Verified: branch `synthesislab-design-polish-assets`; project root `/Users/ilua/Documents/ilua-system/projects/SynthesisLab`; local AGENTS absent.
- Verified QA: `npm run build` green; `npm run start` serves Node hybrid build; `/` and `/privacy/` return 200.
- Verified API: `/api/lead` valid returns `{"ok":true}`; empty fields return `400 no_fields`; honeypot returns `{"ok":true}`.
- Verified anchors: `formaty`, `diagnostika`, `keysy`, `komanda`, `lead` all present in built HTML.
- Root cause/current hypothesis: no technical blocker; remaining risk is content/material confirmation, not Astro runtime.
- Files touched: `package.json`, `amvera.yml`, `.env.example`, `README.md`, `.gitignore`, `.codex/state/current_context.md`, `docs/60_milestones/2026-06-03-amvera-staging-prep.md`.
- Pending blockers: domain, Telegram bot token/chat_id, фото/био Александры и Анастасии, финальные отзывы, подтверждённые клиентские логотипы.
- Exact next step: push branch and deploy on Amvera with `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `NODE_ENV=production` set when ready.
