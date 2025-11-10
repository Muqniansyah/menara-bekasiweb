<script>
	export let title;
	export let contentLeft = `
Meski peluang digitalisasi begitu besar, tantangan tetap ada. Mulai dari keterbatasan sumber daya manusia digital, biaya implementasi teknologi, hingga adaptasi sistem di lapangan.
Namun, di balik tantangan ini tersimpan peluang besar. transformasi digital bisa menjadi faktor pembeda utama antara perusahaan yang tumbuh dan yang tertinggal.

Untuk menjawab tantangan tersebut, diperlukan mitra yang berpengalaman dalam menghadirkan solusi digital dan efisiensi produksi di sektor kayu ekspor.
`;

	export let contentRight = `
🌟 PT Menara Bekasi hadir sebagai salah satu pelaku industri yang berkomitmen menggabungkan teknologi modern, efisiensi produksi, dan keberlanjutan lingkungan dalam setiap prosesnya.
Dengan pengalaman dan keunggulan sistem digital yang terintegrasi, PT Menara Bekasi siap menjadi mitra terpercaya dalam mendukung ekspor kayu berkualitas dari Indonesia ke dunia.

💬 Transformasi digital bukan lagi masa depan. Ia sudah dimulai hari ini, bersama PT Menara Bekasi.
`;
</script>

<section class="promo-section">
	<h2 class="promo-title">{title}</h2>

	<div class="promo-cards">
		<div class="card card-left">
			<p>{contentLeft}</p>
			<a href="https://menarabekasilestari.site/" target="_blank" rel="noopener noreferrer">
				<button class="btn-outline">Pelajari Lebih Lanjut</button>
			</a>
		</div>

		<div class="card card-right">
			<div class="overlay">
				<h3>{contentRight}</h3>
			</div>
		</div>
	</div>
</section>

<style>
	/* ====== Layout dasar ====== */
	.promo-section {
		background-color: #eef5f8;
		padding: 80px 10%;
		text-align: center;
		font-family: 'Elms Sans', sans-serif;
	}

	.promo-title {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a1a;
		margin-bottom: 60px;
		line-height: 1.3;
	}

	.promo-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}

	/* ====== Card dasar ====== */
	.card {
		border-radius: 12px;
		padding: 30px;
		flex: 1 1 350px;
		box-sizing: border-box;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	/* ====== Card kiri ====== */
	.card-left {
		background: #fff;
		text-align: left;
	}

	.card-left p {
		font-size: 1rem;
		color: #333;
		margin-bottom: 20px;
		line-height: 1.6;
	}

	.btn-outline {
		padding: 10px 24px;
		border: 1.5px solid #333;
		background: transparent;
		border-radius: 25px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: all 0.3s ease;
	}

	.btn-outline:hover {
		background: #333;
		color: #fff;
	}

	/* ====== Card kanan ====== */
	.card-right {
		background: url('/src/lib/assets/tantangan.jpg') center/cover no-repeat;
		position: relative;
		color: #fff;
		min-height: 220px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: left;
	}

	.overlay {
		background: rgba(0, 0, 0, 0.55);
		padding: 30px;
		border-radius: 12px;
		width: 100%;
	}

	.overlay h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 20px;
	}

	/* ====== Responsif ====== */
	@media (max-width: 768px) {
		.promo-section {
			padding: 60px 5%;
		}

		.promo-title {
			font-size: 1.6rem;
		}

		.card {
			flex: 1 1 100%;
		}
	}
</style>
