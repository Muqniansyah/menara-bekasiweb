<script>
	import favicon from '$lib/assets/logo.png';

	let { children } = $props();

	const siteTitle = 'Menara Bekasi | Digitalisasi & Inovasi Teknologi Kayu Ekspor';
	const siteDescription =
		'Pelajari bagaimana digitalisasi dan inovasi teknologi membantu industri kayu ekspor meningkatkan efisiensi, kualitas produk, dan keberlanjutan. Temukan solusi modern untuk menghadapi tantangan ekspor kayu global.';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />

	<!-- Google Site Verification -->
	<meta name="google-site-verification" content="vmcHQ8G9ervQgGmZyGjt12V4MyZwzSjyipkAnykNCIM" />

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-5JW2L7BG3G"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-5JW2L7BG3G');
	</script>

	<!-- 🔹 Import Google Fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>

	<!-- JSON-LD Website Keywords -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Menara Bekasi",
			"url": "https://menara-bekasiweb.vercel.app/",
			"description": "Digitalisasi & Inovasi Teknologi Kayu Ekspor",
			"keywords": [
				"digitalisasi industri kayu",
				"teknologi kayu ekspor",
				"industri kayu berkelanjutan",
				"transformasi digital pabrik kayu",
				"solusi teknologi produksi kayu"
			]
		}
	</script>

	<!-- JSON-LD FAQ -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "Apa itu digitalisasi dalam industri kayu ekspor?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Digitalisasi dalam industri kayu ekspor mencakup penggunaan teknologi untuk mempermudah proses produksi, pengiriman, dan pelacakan kayu secara lebih efisien dan transparan."
					}
				},
				{
					"@type": "Question",
					"name": "Bagaimana teknologi dapat meningkatkan kualitas kayu ekspor?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Teknologi seperti mesin CNC, AI-assisted grading, dan sensor otomatis membantu meningkatkan presisi dan kualitas kayu, menghasilkan produk yang konsisten sesuai standar ekspor."
					}
				},
				{
					"@type": "Question",
					"name": "Apa manfaat teknologi untuk keberlanjutan ekspor kayu?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Teknologi membantu mengurangi pemborosan bahan baku, mengoptimalkan penggunaan energi, dan memungkinkan transparansi dalam sertifikasi legalitas kayu."
					}
				},
				{
					"@type": "Question",
					"name": "Apa tantangan utama dalam transformasi digital di industri kayu?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Tantangan utama mencakup keterbatasan SDM digital, biaya teknologi tinggi, serta kesulitan adaptasi sistem digital di lapangan."
					}
				}
			]
		}
	</script>
</svelte:head>

{@render children()}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow-x: hidden;
		background: #f9fafb;
	}
</style>
