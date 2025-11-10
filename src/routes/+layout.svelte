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

	<!-- 🔹 Import Google Fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
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
