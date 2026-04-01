import type { APIRoute } from 'astro';

const SITE = 'https://birds.family';
const LANGS = ['en', 'de', 'fr'] as const;

// All page paths (without /{lang}/ prefix and without trailing slash)
const PAGES = [
  '',                    // homepage
  'about',
  'souvenirbird',
  'bebebirdie',
  'mamanbird',
  'printables/coloring',
  'privacy',
  'imprint',
];

function url(lang: string, path: string) {
  return path === ''
    ? `${SITE}/${lang}/`
    : `${SITE}/${lang}/${path}/`;
}

export const GET: APIRoute = () => {
  const entries = PAGES.flatMap((path) =>
    LANGS.map((lang) => {
      const loc = url(lang, path);
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, path)}"/>`
      ).join('\n');
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', path)}"/>`;
      return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n${xDefault}\n  </url>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
