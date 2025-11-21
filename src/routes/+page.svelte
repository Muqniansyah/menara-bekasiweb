<script>
	import bg from '$lib/assets/header.jpg';
	import logo from '$lib/assets/logo.png';

	const siteTitle = 'PT. Menara Bekasi';
	const tagline = '#INOVASIKAYUEKSPOR';
	const description =
		'Inovasi teknologi dalam industri kayu ekspor untuk efisiensi, kualitas, dan keberlanjutan produksi.';
	const currentUrl = 'https://menara-bekasiweb.vercel.app/';

	// import file components
	import Digitalisasi from '$lib/components/Digitalisasi.svelte';
	import Teknologi from '$lib/components/Teknologi.svelte';
	import Manfaat from '$lib/components/Manfaat.svelte';
	import Tantangan from '$lib/components/Tantangan.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Swiper from '$lib/components/Swiper.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<nav>
	<div class="container nav-inner">
		<!-- 🔹 Logo dan nama perusahaan -->
		<div class="brand">
			<img src={logo} alt="Logo PT Menara Bekasi" class="logo" />
			<h1>{siteTitle}</h1>
		</div>

		<!-- 🔹 Share bar -->
		<div class="share-bar">
			<a
				href={'https://wa.me/?text=' + encodeURIComponent(currentUrl)}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Share via WhatsApp"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M16.72 13.06c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.11 2.83.13.18 1.92 2.93 4.66 4.1.65.28 1.15.44 1.54.56.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM12.04 2C6.52 2 2.02 6.5 2.02 12.02c0 1.97.52 3.83 1.52 5.48L2 22l4.64-1.52c1.6.88 3.4 1.36 5.4 1.36 5.52 0 10.02-4.5 10.02-10.02S17.56 2 12.04 2z"
					></path>
				</svg>
			</a>

			<a
				href={'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Share via Facebook"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54v-2.356c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
					/>
				</svg>
			</a>

			<a
				href={'https://www.linkedin.com/sharing/share-offsite/?url=' + currentUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Share via LinkedIn"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.339 19.338H5.665V9.035h2.674v10.303zM7.002 7.702a1.552 1.552 0 110-3.104 1.552 1.552 0 010 3.104zM19.338 19.338h-2.674v-5.217c0-1.243-.025-2.843-1.732-2.843-1.735 0-2.002 1.356-2.002 2.757v5.303h-2.674V9.035h2.566v1.404h.035c.358-.678 1.232-1.392 2.537-1.392 2.713 0 3.21 1.786 3.21 4.108v6.183z"
					/>
				</svg>
			</a>
		</div>
	</div>
</nav>

<header class="hero-section">
	<div class="hero-bg">
		<img src={bg} alt="Header background" />
	</div>

	<div class="overlay"></div>

	<div class="container hero">
		<h2>Digitalisasi & Inovasi Teknologi Kayu Ekspor</h2>
		<p>{description}</p>
		<span class="tagline">{tagline}</span>
	</div>

	<!-- Wave Shape -->
	<svg
		class="wave"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		preserveAspectRatio="none"
	>
		<path
			fill="#f9fafb"
			d="M0,224L60,208C120,192,240,160,360,138.7C480,117,600,107,720,112C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192V320H0Z"
		></path>
	</svg>
</header>

<!-- mengimpor komponen dan mengirim props -->
<Digitalisasi title="Peran Digitalisasi dalam Industri Kayu Ekspor" />
<Teknologi title="Teknologi Modern dalam Pengolahan Kayu Ekspor" />
<Manfaat title="Manfaat Inovasi Teknologi bagi Keberlanjutan Ekspor Kayu" />
<Tantangan title="Tantangan dan Peluang Transformasi Digital di Industri Kayu" />
<Faq />
<Swiper />
<Footer />

<style>
	/* ---------------- NAV ---------------- */
	nav {
		font-family: 'Elms Sans', sans-serif;
		background: #ffffff;
		border-bottom: 1px solid #eee;
		padding: 14px 0;
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.nav-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* 🔹 Brand Section */
	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.logo {
		width: 36px;
		height: 36px;
		object-fit: contain;
	}
	h1 {
		font-size: 20px;
		margin: 0;
		font-weight: 700;
		color: #333;
	}

	/* 🔹 Share Bar */
	.share-bar {
		display: flex;
		gap: 10px;
	}
	.share-bar a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #f3f3f3;
		color: #333;
		transition: 0.3s;
	}
	.share-bar a:hover {
		background: #2762ff;
		color: #fff;
	}

	/* ---------------- HERO SECTION ---------------- */
	.hero-section {
		position: relative;
		overflow: hidden;
		text-align: center;
		color: white;
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-bg img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		z-index: -2;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.7));
		z-index: -1;
	}

	/* ---------------- WAVE SHAPE ---------------- */
	.wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120px;
		display: block;
		z-index: 0;
	}

	/* ---------------- HERO TEXT ---------------- */
	.hero {
		position: relative;
		z-index: 1;
		max-width: 800px;
		margin: auto;
		padding: 0 20px;
	}
	header h2 {
		font-size: 2.4rem;
		margin-bottom: 10px;
		font-weight: 700;
	}
	header p {
		font-size: 1.1rem;
		margin-bottom: 10px;
		line-height: 1.6;
	}
	.tagline {
		display: inline-block;
		margin-top: 14px;
		padding: 8px 18px;
		font-size: 14px;
		font-weight: 600;
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid rgba(255, 255, 255, 0.35);
		border-radius: 8px;
		backdrop-filter: blur(3px);
	}

	/* ---------------- CONTAINER ---------------- */
	.container {
		max-width: 1000px;
		margin: auto;
		padding: 0 20px;
	}

	/* ---------------- RESPONSIVE ---------------- */
	@media (max-width: 768px) {
		header h2 {
			font-size: 1.8rem;
		}
		header p {
			font-size: 1rem;
		}
		.hero-section {
			min-height: 70vh;
		}
		.logo {
			width: 30px;
			height: 30px;
		}
	}
</style>
