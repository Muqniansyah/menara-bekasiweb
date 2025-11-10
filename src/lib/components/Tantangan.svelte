<script>
	export let title;
	export let content = `
Meski peluang digitalisasi begitu besar, tantangan tetap ada — mulai dari keterbatasan sumber daya manusia digital, biaya implementasi teknologi, hingga adaptasi sistem di lapangan.
Namun, di balik tantangan ini tersimpan peluang besar: transformasi digital bisa menjadi faktor pembeda utama antara perusahaan yang tumbuh dan yang tertinggal.

Untuk menjawab tantangan tersebut, diperlukan mitra yang berpengalaman dalam menghadirkan solusi digital dan efisiensi produksi di sektor kayu ekspor.

🌟 PT Menara Bekasi hadir sebagai salah satu pelaku industri yang berkomitmen menggabungkan teknologi modern, efisiensi produksi, dan keberlanjutan lingkungan dalam setiap prosesnya.
Dengan pengalaman dan keunggulan sistem digital yang terintegrasi, PT Menara Bekasi siap menjadi mitra terpercaya dalam mendukung ekspor kayu berkualitas dari Indonesia ke dunia.

💬 Transformasi digital bukan lagi masa depan — ia sudah dimulai hari ini, bersama PT Menara Bekasi.
  `;
</script>

<section class="tantangan-section">
	<h2>{title}</h2>
	<p>{@html content.replace(/\n/g, '<br/>')}</p>
</section>

<style>
	.tantangan-section {
		max-width: 900px;
		margin: 60px auto;
		padding: 40px;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
		border-left: 8px solid #e67e22; /* Accent color for emphasis */
		transform: translateY(0);
		transition: transform 0.3s ease-in-out;
	}

	.tantangan-section:hover {
		transform: translateY(-5px); /* Hover effect */
	}

	h2 {
		font-size: 30px;
		margin-bottom: 16px;
		font-weight: bold;
		color: #2c3e50;
		text-align: center;
		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
	}

	p {
		font-size: 18px;
		color: #555;
		line-height: 1.8;
		font-family: 'Roboto', sans-serif;
		text-align: justify;
	}

	/* Special highlight for PT Menara Bekasi part */
	p span.pt-menara {
		color: #27ae60;
		font-weight: bold;
		font-size: 20px;
		background-color: #e8f9e8;
		padding: 6px 12px;
		border-radius: 4px;
	}

	/* FUN ACCENT STYLES */
	p {
		background: linear-gradient(to right, #f1c40f, #f39c12);
		padding: 10px;
		border-radius: 5px;
		color: #333;
		font-style: italic;
		font-size: 16px;
	}

	/* RESPONSIVE STYLES */
	@media (max-width: 768px) {
		.tantangan-section {
			padding: 25px;
		}

		h2 {
			font-size: 26px;
		}

		p {
			font-size: 16px;
		}
	}

	@media (max-width: 480px) {
		.tantangan-section {
			padding: 15px;
		}

		h2 {
			font-size: 22px;
		}

		p {
			font-size: 14px;
		}
	}
</style>
