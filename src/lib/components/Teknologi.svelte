<script>
	import bg from '$lib/assets/pallet.jpg';

	export let title;
	export let content = `
Kemajuan teknologi tidak hanya berdampak pada manajemen ekspor, tapi juga pada proses pengolahan kayu itu sendiri. Mesin CNC (Computer Numerical Control), AI-assisted grading, dan pengeringan otomatis berbasis sensor suhu & kelembaban menjadi contoh nyata penerapan inovasi yang meningkatkan kualitas produk.

Selain itu, teknologi CAD (Computer-Aided Design) mempermudah perancangan produk kayu dengan presisi tinggi akan menghasilkan bentuk dan ukuran yang konsisten sesuai standar pasar ekspor.

Dengan pengolahan yang modern, industri kayu Indonesia mampu bersaing dari sisi kualitas dan kecepatan produksi di pasar global. `;

	const handleContact = () => {
		window.open('https://wa.me/6285817298071', '_blank', 'noopener noreferrer');
	};
</script>

<section class="parallax-section" style="background-image: url({bg});">
	<div class="overlay"></div>
	<div class="content-wrapper">
		<h2 class="section-title">{title}</h2>
		<p class="section-text">{@html content.replace(/\n/g, '<br/>')}</p>
		<button class="cta-button" on:click={handleContact}>Hubungi Sekarang</button>
	</div>
</section>

<style>
	.parallax-section {
		position: relative;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		color: #f5f5f5;
		padding: 120px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.parallax-section .overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.55);
		backdrop-filter: blur(2px);
		z-index: 0;
	}

	.content-wrapper {
		position: relative;
		max-width: 900px;
		z-index: 1;
	}

	.section-title {
		font-family: 'Elms Sans', sans-serif;
		font-size: 2.6rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: #fff;
		line-height: 1.2;
	}

	.section-text {
		font-family: 'Inter', sans-serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: #d1d5db;
		margin-bottom: 2.5rem;
	}

	/* 🔹 Tombol CTA */
	.cta-button {
		display: inline-block;
		padding: 14px 34px;
		border: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 8px;
		font-family: 'Elms Sans', sans-serif;
		font-size: 1rem;
		color: #fff;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(6px);
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.cta-button:hover {
		border-color: #ea580c;
		background: rgba(234, 88, 12, 0.15);
		box-shadow: 0 0 12px rgba(234, 88, 12, 0.35);
		transform: translateY(-2px);
	}

	.cta-button:active {
		transform: scale(0.97);
	}

	/* Animasi fade-in */
	.content-wrapper {
		animation: fadeInUp 1.3s ease forwards;
		opacity: 0;
		transform: translateY(40px);
	}
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 1.9rem;
		}
		.section-text {
			font-size: 1rem;
		}
		.cta-button {
			padding: 12px 28px;
			font-size: 0.95rem;
		}
		.parallax-section {
			padding: 90px 20px;
			background-attachment: scroll;
		}
	}
</style>
