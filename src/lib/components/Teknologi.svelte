<script>
	export let title;
	export let content = `
Kemajuan teknologi tidak hanya berdampak pada manajemen ekspor, tapi juga pada proses pengolahan kayu itu sendiri. Mesin CNC (Computer Numerical Control), AI-assisted grading, dan pengeringan otomatis berbasis sensor suhu & kelembaban menjadi contoh nyata penerapan inovasi yang meningkatkan kualitas produk.

Selain itu, teknologi CAD (Computer-Aided Design) mempermudah perancangan produk kayu dengan presisi tinggi — menghasilkan bentuk dan ukuran yang konsisten sesuai standar pasar ekspor.

🔸 Dengan pengolahan yang modern, industri kayu Indonesia mampu bersaing dari sisi kualitas dan kecepatan produksi di pasar global.
  `;
</script>

<section class="section">
	<h2>{title}</h2>
	<p>{@html content.replace(/\n/g, '<br/>')}</p>
</section>

<style>
	.section {
		max-width: 900px;
		margin: 60px auto;
		padding: 0 20px;
		line-height: 1.8;
		background: #f9f9f9;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 28px;
		margin-bottom: 16px;
		font-weight: 700;
		color: #2c3e50;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	p {
		font-size: 16px;
		color: #555;
		line-height: 1.8;
		word-wrap: break-word;
	}

	.section p {
		margin-top: 10px;
		color: #34495e;
	}

	/* Add some styling to the bullet */
	p::before {
		content: '🔸 ';
		font-size: 20px;
		color: #e67e22;
		margin-right: 8px;
	}

	/* RESPONSIVE STYLES */
	@media (max-width: 768px) {
		.section {
			padding: 15px;
			margin: 30px 10px;
		}

		h2 {
			font-size: 24px;
		}

		p {
			font-size: 14px;
		}
	}

	@media (max-width: 480px) {
		.section {
			padding: 10px;
			margin: 20px 5px;
		}

		h2 {
			font-size: 20px;
		}

		p {
			font-size: 13px;
		}
	}
</style>
