# SynthesisLab

## Deploy to Amvera

Check the production build locally:

```bash
npm run build
```

Run the same Node server command that Amvera uses:

```bash
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
```

The application keeps Astro in hybrid mode with the Node adapter because
`/api/lead` is a server endpoint.

Telegram lead delivery is configured with environment variables:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NODE_ENV=production
```

If `TELEGRAM_BOT_TOKEN` or `TELEGRAM_CHAT_ID` are empty, `/api/lead` stays in
mock mode and returns a successful response without sending a Telegram message.
This is expected for staging before real credentials are added.

Amvera reads deployment settings from `amvera.yml`. The runtime command is
`npm run start`, and the app listens on container port `4321`.
