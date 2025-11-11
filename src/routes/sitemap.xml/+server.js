export async function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	  <url><loc>https://menara-bekasiweb.vercel.app/</loc></url>
	</urlset>`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
