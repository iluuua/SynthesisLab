# SynthesisLab

Лендинг для **СинтезЛаб** — команды executive- и командных коучей, которые помогают компаниям, командам, лидерам и HR работать с целями, ролями, конфликтами, изменениями и командной эффективностью.

Сайт сделан как демонстрационная витрина работы: чистый визуальный лендинг, страницы услуг и политики, реальные кейсы/клиенты из материалов заказчика, аккуратные заглушки только там, где контент ещё не согласован.

## Текущий статус

- **Production demo:** `https://synthesis-lab-seven.vercel.app`
- **Основная ветка:** `main`
- **Фреймворк:** Astro 4 + Tailwind CSS
- **Режим сборки:** Astro `hybrid` + `@astrojs/node`
- **Vercel demo output:** `dist/client`
- **Форма заявки в демо:** без backend-submit, через прямые ссылки на Telegram/почту

Важно: проект исторически готовился под Amvera с Node runtime и `/api/lead`, но для быстрой бесплатной демонстрации на Vercel сейчас используется статическая клиентская часть из `dist/client`.

## Что внутри сайта

### Страницы

- `/` — главный лендинг: hero, ICP-сегменты, усиление бизнеса, форматы работы, бесплатная диагностика, услуги, процесс, кейсы, клиенты, признание, подход, команда, FAQ, финальный CTA.
- `/services` — сегментированная страница услуг: для компаний, команд, лидеров и HR.
- `/privacy` — краткая политика обработки персональных данных для сайта-визитки.
- `/api/lead` — серверный endpoint для Telegram-заявок, оставлен как опциональный legacy/server runtime путь; текущий демо-CTA его не использует.

### Контентная модель

Основной контент вынесен в `src/data`, чтобы не размазывать тексты по компонентам:

- `src/data/content.ts` — бренд, навигация, контакты, hero, диагностический CTA, метод работы, подход, метрики, клиенты, признание, отзывы-заглушки, FAQ.
- `src/data/services.ts` — 4 основных формата работы: командные сессии, стратегические сессии, корпоративная медиация, индивидуальный коучинг лидеров.
- `src/data/segments.ts` — ICP-сегменты: компании, команды, лидеры, HR. Важно не смешивать сегмент `кому` и формат `что делаем`.
- `src/data/cases.ts` — реальные кейсы из клиентского дека, сокращённые под лендинг.
- `src/data/team.ts` — команда из 4 человек: Татьяна, Екатерина, Александра, Анастасия.

Правило проекта: **не выдумывать отзывы, биографии, клиентские факты и ссылки**. Если данных нет, оставлять TODO/placeholder до согласования с клиентом.

## Стек

- Astro `^4.16`
- Tailwind CSS `^3.4`
- `@astrojs/tailwind`
- `@astrojs/node`
- TypeScript
- self-hosted Mulish fonts

Брендовые материалы визуально ближе к Avenir / Avenir Next, но коммерческие файлы шрифта в репозитории отсутствуют. Поэтому используется Mulish как свободная кириллическая замена. Если клиент даст лицензионные `.woff2` Avenir Next, менять нужно только font-face в `src/styles/global.css`.

## Структура проекта

```text
.
├── amvera.yml              # server/runtime deploy config для Amvera
├── astro.config.mjs        # Astro hybrid + Node adapter
├── package.json            # npm scripts and dependencies
├── static.json             # marker для static root
├── vercel.json             # Vercel отдаёт dist/client
├── public/                 # favicon, fonts, статические assets
└── src/
    ├── assets/             # импортируемые изображения Astro
    ├── components/         # секции лендинга и UI-компоненты
    ├── data/               # основной контент сайта
    ├── layouts/            # Base layout, global scripts/meta
    ├── pages/              # /, /services, /privacy, /api/lead
    └── styles/             # global.css, fonts, базовая анимация
```

## Команды разработки

Установка зависимостей:

```bash
npm install
```

Локальный dev-сервер:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview собранного сайта:

```bash
npm run preview
```

Node runtime, как на Amvera:

```bash
npm run start
```

## Deploy

### Vercel demo

Vercel используется как быстрый бесплатный хостинг для демонстрации.

Критичная настройка:

```json
{
  "version": 2,
  "outputDirectory": "dist/client"
}
```

Почему не `dist`: проект остаётся в Astro `hybrid`-режиме с Node adapter, поэтому клиентская статика лежит в `dist/client`. Если поставить `dist`, Vercel может собрать проект со статусом `Ready`, но отдавать `404: NOT_FOUND`.

Рекомендуемые настройки Vercel:

- Framework Preset: `Astro`
- Build Command: `npm run build`
- Output Directory: `dist/client`
- Build Cache при проблемах: выключить на redeploy

### Amvera / server runtime

Amvera-конфиг находится в `amvera.yml`:

```yaml
build:
  additionalCommands: npm run build

run:
  command: npm run start
  containerPort: 4321
```

Этот режим нужен, если возвращать полноценную серверную форму с `/api/lead`.

## Заявки и контакты

Текущий демо-блок `src/components/LeadForm.astro` не отправляет форму на backend. Он ведёт пользователя напрямую:

- Telegram: `https://t.me/psycoach_katerina`
- Почта: `mailto:e.derevyashkina@mail.ru`

Endpoint `src/pages/api/lead.ts` сохранён для server deploy. Он отправляет заявку в Telegram через Bot API, если заданы переменные окружения:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NODE_ENV=production
```

Если переменные пустые, endpoint работает в mock-режиме и возвращает успешный ответ без отправки сообщения.

## Важные места для правок

- Изменить тексты главной: `src/data/content.ts`
- Изменить услуги/цены: `src/data/services.ts`
- Изменить сегменты `/services`: `src/data/segments.ts`
- Изменить кейсы: `src/data/cases.ts`
- Изменить команду: `src/data/team.ts`
- Изменить контакты: `contacts` в `src/data/content.ts` и финальный CTA в `src/components/LeadForm.astro`
- Изменить цвета/шрифты/анимации: `src/styles/global.css`, `tailwind.config.mjs`
- Изменить SEO/meta wrapper: `src/layouts/Base.astro`

## Контентные TODO

В коде намеренно оставлены TODO, где нет подтверждённых материалов:

- точные URL для некоторых клиентов;
- реальные отзывы вместо placeholder-карточек;
- фото и био Александры Теплицкой;
- фото и био Анастасии Львовой;
- брендовая почта, если клиент её предоставит;
- лицензионный Avenir Next, если клиент даст webfont-файлы.

## Технические замечания

- Не менять `vercel.json` на `dist`, пока проект остаётся hybrid + Node adapter.
- Не удалять `@astrojs/node`, если нужен Amvera/server runtime.
- Не подключать внешнюю аналитику без обновления `/privacy`.
- Не публиковать неподтверждённые отзывы, роли, логотипы и кейсы.
- После изменения якорей CTA проверить плавный скролл и ссылки из `/services`.

## Проверка перед публикацией

```bash
npm run build
npm run preview
```

Минимальный чек-лист:

- главная открывается без 404;
- `/services` открывается и чипы сегментов работают;
- `/privacy` открывается;
- CTA ведёт в Telegram/почту;
- логотипы и фото грузятся;
- мобильное меню открывается/закрывается;
- нет выдуманных отзывов или неподтверждённых клиентских данных.
