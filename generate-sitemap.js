import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://chaveiroanchietarj24h.com.br';
const BLOG_DIR = path.resolve('src/content/blog');
const PUBLIC_DIR = path.resolve('public');

function generateSitemap() {
  console.log('Gerando sitemap.xml dinamicamente...');
  
  // URLs estáticas básicas
  const urls = [
    { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE_URL}/blog/`, changefreq: 'daily', priority: '0.8' }
  ];

  // Ler posts do blog
  try {
    const files = fs.readdirSync(BLOG_DIR);
    files.forEach(file => {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '');
        urls.push({
          loc: `${SITE_URL}/blog/${slug}/`,
          changefreq: 'monthly',
          priority: '0.6'
        });
      }
    });
  } catch (err) {
    console.error('Erro ao ler diretório de posts:', err);
  }

  // Montar XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(url => {
    xml += `  <url>\n`;
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  // Salvar na pasta public
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`✓ sitemap.xml gerado com sucesso em: ${sitemapPath}`);
}

generateSitemap();
