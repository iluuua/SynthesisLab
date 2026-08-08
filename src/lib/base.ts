/** Возвращает путь с учётом базового URL (для под-пути на GitHub Pages). */
export function withBase(path: string): string {
  let baseUrl = import.meta.env.BASE_URL;
  if (!baseUrl.endsWith('/')) baseUrl += '/';

  if (!path || path === '/') return baseUrl;

  const clean = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl + clean;
}
