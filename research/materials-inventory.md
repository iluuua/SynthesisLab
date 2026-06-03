# Materials inventory — SynthesisLab

Дата: 2026-06-03. Источники не изменялись: `materials_raw/` read-only; извлечённые превью и медиа сохранены в `research/materials-extracted/`.

| файл | тип | что внутри | качество | можно использовать? | куда подходит | что сделать |
|---|---|---|---|---|---|---|
| `materials_raw/СИНТЕЗ ЛАБ ГОРИЗОНТ.png` | PNG, 4000x1026, 112 KB | горизонтальный логотип СинтезЛаб | резкий, но слишком крупный для прямой вставки | да | header, footer, OG/fav preview | подготовить меньшую web-версию; не растягивать; проверить подпись |
| `materials_raw/СИНТЕЗ ЛАБ ВЕРТИКАЛЬ.png` | PNG, 3570x2000, 140 KB | вертикальная версия логотипа | резкая | да, точечно | footer, пустые/брендовые состояния, favicon source | использовать только если композиционно нужно |
| `materials_raw/СИНТЕЗЛАБ.pdf` | PDF, 1 стр. | векторный/печатный логотип | полезен как reference; `pdfimages` не нашёл растровых вложений | да как источник | логотип, бренд | при необходимости вручную экспортировать SVG/PNG; текущий PNG уже достаточный |
| `materials_raw/Татьяна.jpg` | JPEG, 4480x6720, 2.4 MB | портрет Татьяны | отличное фото, high-res | да | команда | держать web-версию в `src/assets/photos`; кадрировать 4:5/3:4 |
| `materials_raw/Екатерина.jpg` | JPEG, 4480x6720, 2.3 MB | портрет Екатерины | отличное фото, high-res | да | команда | держать web-версию в `src/assets/photos`; кадрировать 4:5/3:4 |
| `materials_raw/Татьяна_и_Екатерина.jpg` | JPEG, 4480x6720, 2.2 MB | совместное фото основательниц | сильный реальный hero asset | да | hero, команда, диагностика | использовать как главный визуал; через Astro Image/webp; не делать мыльный crop |
| `materials_raw/ЛОГО + КЕЙСЫ.pptx` | PPTX, 8 слайдов, 6.9 MB | hero-фраза, клиентские логотипы, 5 кейсов, контакты | очень полезный контент; часть картинок логотипов разного качества | да, выборочно | "Нам доверяют", кейсы, hero copy | извлечены медиа в `research/materials-extracted/logo-cases/`; использовать логотипы и факты кейсов, не тащить слайды как скриншоты |
| `materials_raw/Шаблон презентаций (1).pptx` | PPTX, 31 слайд, 72 MB | бренд-шаблон, палитра, иконки подхода, примеры КП, часть логотипов, старые/шаблонные фото | mixed: есть полезные иконки/палитра, много шаблонного мусора | только выборочно | "Наш подход", Telegram/social icon reference, отдельные клиентские логотипы | не использовать иллюстрации/шаблонные слайды; взять только смысл/иконки как reference |
| `research/materials-extracted/logo-cases/image3.png` | PNG, 2500x1401 | логотип СинтезЛаб на светлом фоне | хороший reference | нет для прод напрямую | header/footer reference | лучше использовать исходный logo PNG/SVG |
| `research/materials-extracted/logo-cases/image4.png` | PNG, 2501x982 | Т-Банк | хороший | да | "Нам доверяют", кейс Т-Банк | подготовить web/asset версию, alt "Т-Банк" |
| `research/materials-extracted/logo-cases/image5.png` | PNG, 705x164 | Росбанк | хороший | да, после подтверждения | "Нам доверяют" | подготовить логотип; отметить как требует подтверждения клиента |
| `research/materials-extracted/logo-cases/image6.png` | PNG, 1025x273 | Твой склад | хороший | да, после подтверждения | "Нам доверяют" | подготовить логотип; alt |
| `research/materials-extracted/logo-cases/image7.png` | PNG, 1057x602 | DS Consulting | среднее; много вертикального поля | можно | "Нам доверяют" | обрезать/pad в одинаковую ячейку |
| `research/materials-extracted/logo-cases/image8.png` | PNG, 1603x511 | ati.su | хороший | да, после подтверждения | "Нам доверяют" | подготовить логотип |
| `research/materials-extracted/logo-cases/image9.png` | PNG, 1229x331 | Faberlic | хороший | да, после подтверждения | "Нам доверяют" | подготовить логотип |
| `research/materials-extracted/logo-cases/image10.jpeg` | JPEG, 640x480 | NL International | средний raster, оранжевый фон | можно, но хуже SVG/PNG | "Нам доверяют" | использовать только при нехватке ряда |
| `research/materials-extracted/logo-cases/image11.jpg` | JPG, 1235x822 | Альфа-Банк | хороший, raster | да, после подтверждения | "Нам доверяют" | подготовить web/crop |
| `research/materials-extracted/logo-cases/image12.png` | PNG, 480x136 | GNS Logistic | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/logo-cases/image13.jpeg` | JPEG, 2047x2048 | ВШЭ | хороший, круглый знак | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/logo-cases/image14.png` | PNG, 1200x630 | Простые решения | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/logo-cases/image15.png` | PNG, 1200x946 | ВЭБ РФ | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/logo-cases/image16.png` | PNG, 476x324 | Saint-Gobain | средний, есть поле | можно | "Нам доверяют" | выровнять |
| `research/materials-extracted/logo-cases/image17.png` | PNG, 1804x616 | headliner | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/logo-cases/image18.jpg` | JPG, 6000x1801 | АльфаСтрахование | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/logo-cases/image19.png`, `image2.png` | PNG | шаблонные иллюстрации людей | AI/stock-like | нет | не использовать | исключить |
| `research/materials-extracted/logo-cases/image20.png`, `image21.png` | PNG, 54x58 | телефон/почта | маленькие иконки | можно как reference | footer/contact | лучше сделать inline SVG/текст |
| `research/materials-extracted/template/image10-17.png` | PNG, 709x709 | line-иконки: ромб, фигуры, руки/сердце, шестерня | хорошие брендовые reference | скорее не как raster | "Наш подход" | пересобрать inline SVG/HTML, не вставлять 709px PNG |
| `research/materials-extracted/template/image37.png` | PNG, 196x78 | Telegram/VK/WhatsApp icons на оранжевых кругах | хороший reference | да как reference | header/footer Telegram | лучше inline SVG в стиле старого сайта |
| `research/materials-extracted/template/image38.jpeg` | JPEG, 626x417 | групповое фото старой/широкой команды | не соответствует текущему составу | нет | не использовать | исключить, чтобы не путать команду |
| `research/materials-extracted/template/image39.png` | PNG | Невада групп | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/template/image40.png` | PNG | Яндекс | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/template/image41.png` | PNG | Т-Банк | хороший | да | "Нам доверяют" | можно использовать вместо pptx image4, если нужен компактный |
| `research/materials-extracted/template/image42.png` | PNG | Росбанк | хороший | да, после подтверждения | "Нам доверяют" | подготовить |
| `research/materials-extracted/template/image18-33.png`, `image43-48.png`, `image5.png`, `image8-9.png` | PNG/JPEG | шаблонные иллюстрации, паттерны, листы, таблицы шрифтов | не усиливает сайт | нет | не использовать | оставить только в research |
