export const GET = async () => {
	const body = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>https://stratus-ventures.org/</loc>
			<lastmod>${new Date().toISOString()}</lastmod>
			<changefreq>monthly</changefreq>
			<priority>1.0</priority>
		</url>
	</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};