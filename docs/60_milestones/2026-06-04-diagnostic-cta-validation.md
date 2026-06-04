# 2026-06-04 Diagnostic CTA scroll and form validation

## Scope

Fixed the diagnostic CTA anchor behavior and added client-side validation for the lead form without changing the `/api/lead` payload contract.

## Root Cause

Diagnostic CTA links pointed at `#lead`, and the delegated anchor handler used `scrollIntoView`. On the first click, lower lazy sections using `content-visibility:auto`, reveal behavior, and image/layout settlement could change page height after the smooth scroll started, leaving the viewport near FAQ instead of the form.

## Changes

- Moved all "Получить диагностику" CTA links to `#diagnostic-form` or `/#diagnostic-form`.
- Put `id="diagnostic-form"` on the actual form element.
- Replaced diagnostic CTA scrolling with coordinate-based `window.scrollTo`, sticky-header offset, reduced-motion support, dev warning for a missing target, and final settle corrections after lazy layout shifts.
- Added custom form validation for name, role, combined phone/Telegram contact, and request message.
- Added per-field errors, `aria-invalid`, `aria-describedby`, first-invalid focus/scroll, post-submit live validation, and submit disabling with "Отправляем…" while sending.
- Preserved payload keys: `name`, `company`, `role`, `contact`, `message`, `website`.

## Verification

- `npm run build`: passed.
- `npm run lint || true`: script missing.
- `npm run check || true`: script missing.
- `npm run test || true`: script missing.
- Playwright desktop: hero CTA first click and repeat click both landed on visible `#diagnostic-form`, not FAQ.
- Playwright mobile: 360px, 375px, 390px, 430px CTA landing and invalid-form focus checked; no horizontal overflow.
- Validation cases checked: empty form, `123`, `username`, `@`, `@абв`, short request, valid `@username`, valid `+7 999 123-45-67`, valid `8 (999) 123-45-67`.
- Direct local `/api/lead` valid POST returned `200 {"ok":true}` in existing mock mode.
- Duplicate IDs: none detected in rendered page.

## Remaining Notes

- `.codex/test-command` is absent, so `npm run build` plus UI/API checks were used as the validator.
- Local Telegram env was not configured; backend stayed in the existing mock-success mode.
