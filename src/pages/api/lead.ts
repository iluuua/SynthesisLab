export const prerender = false;

import type { APIRoute } from 'astro';

const json = (obj: unknown, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (data.website) return json({ ok: true });

    if (!data.name || !data.contact) return json({ ok: false, error: 'no_fields' }, 400);

    const token = import.meta.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
    const chat = import.meta.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

    const text = `Новая заявка на диагностику:\nИмя: ${data.name}\nКомпания: ${data.company || '—'}\nРоль: ${data.role || '—'}\nКонтакт: ${data.contact}\nЗапрос: ${data.message || '—'}`;

    if (token && chat) {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chat, text }),
      });
    } else {
      console.log('[lead mock]', text);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'server' }, 500);
  }
};
