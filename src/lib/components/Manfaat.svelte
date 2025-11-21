<script>
	export let title;
	export let content = `
Inovasi teknologi bukan hanya tentang efisiensi, tapi juga tentang keberlanjutan (sustainability).
Penerapan sistem digital mampu menekan pemborosan bahan baku dan energi melalui proses otomatisasi yang presisi.

Penggunaan software monitoring energi, sistem recycling wood waste, hingga digital certification membantu menjaga keseimbangan antara profit dan kelestarian lingkungan.
Selain itu, transparansi data digital memudahkan pemerintah dan lembaga internasional melakukan audit sertifikasi legalitas kayu (seperti SVLK).

🔸 Keberlanjutan yang didukung inovasi inilah yang menjadi nilai tambah besar bagi eksportir kayu Indonesia di mata dunia.
  `;
</script>

<section class="manfaat-section">
	<div class="container">
		<h2
			class="section-title"
			style="background: linear-gradient(90deg, #111827, #ea580c);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;"
		>
			{title}
		</h2>
		<p class="section-content">{@html content.replace(/\n/g, '<br/>')}</p>
	</div>
</section>

<style>
	.manfaat-section {
		position: relative;
		padding: 100px 20px;
		background: linear-gradient(135deg, #ffffff, #f5f7fa 60%);
		overflow: hidden;
		font-family: 'Elms Sans', sans-serif;
	}

	/* Pola dekoratif lembut di background */
	.manfaat-section::before {
		content: '';
		position: absolute;
		top: -100px;
		right: 40px;
		width: 400px;
		height: 400px;
		/* background-color: blue; */
		background: radial-gradient(circle, rgba(234, 88, 12, 0.12), transparent 70%);
		filter: blur(60px);
		z-index: 0;
	}
	.manfaat-section::after {
		content: '';
		position: absolute;
		bottom: -120px;
		left: 40px;
		width: 350px;
		height: 350px;
		/* background-color: blue; */
		background: radial-gradient(circle, rgba(107, 114, 128, 0.1), transparent 70%);
		filter: blur(70px);
		z-index: 0;
	}

	.container {
		position: relative;
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
		z-index: 1;
	}

	.section-title {
		font-size: 2.4rem;
		font-weight: 700;
		color: #111827;
		margin-bottom: 1.5rem;
		animation: fadeInDown 1.2s ease forwards;
		opacity: 0;
	}

	.section-content {
		font-family: 'Inter', sans-serif;
		color: #374151;
		font-size: 1.05rem;
		line-height: 1.8;
		max-width: 780px;
		margin: 0 auto;
		text-align: justify;
		animation: fadeInUp 1.3s ease forwards;
		opacity: 0;
	}

	/* Animasi masuk halus */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Responsif */
	@media (max-width: 768px) {
		.manfaat-section {
			padding: 70px 20px;
		}
		.section-title {
			font-size: 1.8rem;
		}
		.section-content {
			font-size: 1rem;
			text-align: left;
		}
	}
</style>
