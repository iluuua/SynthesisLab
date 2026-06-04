# Current context

- Objective: fix SynthesisLab diagnostic CTA first-click scroll and add client-side lead-form validation.
- Verified: project root `/Users/ilua/Documents/ilua-system/projects/SynthesisLab`; branch `fix/diagnostic-cta-validation`; local AGENTS absent.
- Verified: `npm run build` green; `npm run lint/check/test || true` only report missing scripts; Playwright checked desktop CTA first/repeat click and mobile 360/375/390/430.
- Verified API/payload: UI sends `name/company/role/contact/message/website`; direct `/api/lead` valid POST returns `200 {"ok":true}` in local mock mode; no duplicate IDs.
- Root cause found: `#lead` + `scrollIntoView` landed early when lazy `content-visibility` sections/reveal/image layout settled, so the first smooth scroll could stop around FAQ.
- Files touched: CTA components, `Base.astro`, `LeadForm.astro`, `Button.astro`, `global.css`, `.codex/state/current_context.md`, milestone artifact.
- Pending blockers: MiMo executor route reset connection twice; branch is not `main` because AGENTS forbids direct `main/master` edits; pre-existing unrelated dirty files remain outside task scope.
- Exact next step: commit selected task files and push the feature branch for review/merge.
