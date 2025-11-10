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
	<h2>{title}</h2>
	<p>{@html content.replace(/\n/g, '<br/>')}</p>
</section>

<style>
	.manfaat-section {
		max-width: 900px;
		margin: 60px auto;
		padding: 40px;
		background: #eef7f4;
		border-radius: 12px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
		border-left: 8px solid #27ae60; /* Bold left border for emphasis */
		transform: translateY(0);
		transition: transform 0.3s ease-in-out;
	}

	.manfaat-section:hover {
		transform: translateY(-5px); /* Subtle hover effect */
	}

	h2 {
		font-size: 28px;
		margin-bottom: 20px;
		font-weight: bold;
		color: #2d6a4f;
		text-align: center;
		font-family: 'Poppins', sans-serif;
		text-transform: uppercase;
	}

	p {
		font-size: 18px;
		color: #333;
		line-height: 1.6;
		font-family: 'Roboto', sans-serif;
		text-align: justify;
	}

	/* Bullet point style for "🔸" */
	p::before {
		content: '🔸 ';
		font-size: 22px;
		color: #f39c12;
		margin-right: 8px;
	}

	.manfaat-section p:last-child {
		margin-bottom: 0;
	}

	/* FUN ACCENT STYLES */
	p {
		background: linear-gradient(to right, #f9e79f, #f1c40f);
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		color: #555;
		font-style: italic;
		font-size: 17px;
	}

	/* RESPONSIVE STYLES */
	@media (max-width: 768px) {
		.manfaat-section {
			padding: 25px;
		}

		h2 {
			font-size: 24px;
		}

		p {
			font-size: 16px;
		}
	}

	@media (max-width: 480px) {
		.manfaat-section {
			padding: 15px;
		}

		h2 {
			font-size: 20px;
		}

		p {
			font-size: 14px;
		}
	}
</style>
