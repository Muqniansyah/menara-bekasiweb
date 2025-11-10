<script>
	export let title;
	import aboutImg from '$lib/assets/pallet-kayu.jpg';
	import maskShape from '$lib/assets/coffeBean.svg';
</script>

<section class="feature-section">
	<div class="container">
		<div class="section-header">
			<small>{title}</small>
			<h2>Digitalisasi <span>Kayu Ekspor</span></h2>
		</div>

		<div class="grid">
			<div class="item">
				<h3>
					Digitalisasi kini menjadi tulang punggung transformasi di berbagai sektor, termasuk
					industri kayu ekspor.
				</h3>
				<p>
					Melalui sistem digital, perusahaan dapat mengintegrasikan proses produksi, pengiriman,
					hingga pelacakan ekspor dengan lebih efisien dan transparan.
				</p>
			</div>
			<div class="item">
				<h3>
					Teknologi seperti Internet of Things (IoT), barcode tracking, dan data analytics
					memungkinkan setiap potongan kayu yang diekspor dapat dipantau asal-usul dan legalitasnya
					secara real-time.
				</h3>
				<p>
					Hal ini bukan hanya mempercepat operasional, tapi juga meningkatkan kepercayaan pasar
					internasional terhadap produk kayu Indonesia.
				</p>
			</div>
			<div class="item">
				<h3>Dengan sistem digital yang kuat, proses ekspor kini lebih mudah, aman, dan akurat</h3>
				<p>Membuka jalan untuk teknologi modern berikutnya.</p>
			</div>
		</div>

		<!-- 🔹 Gambar dengan efek masking -->
		<div class="about-img">
			<img
				src={aboutImg}
				alt="Digitalisasi Kayu"
				style="-webkit-mask-image: url({maskShape});
			mask-image: url({maskShape});
			-webkit-mask-size: 80%;
			mask-size: 80%;
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
			-webkit-mask-position: center;
			mask-position: center;"
			/>
		</div>
	</div>
</section>

<style>
	.feature-section {
		background: #f9fafb;
		padding: 80px 20px 100px;
		text-align: left;
		color: #111;
		font-family: 'Elms Sans', sans-serif;
		position: relative;
		overflow: hidden;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.section-header {
		margin-bottom: 50px;
	}

	.section-header small {
		text-transform: uppercase;
		font-size: 13px;
		letter-spacing: 2px;
		color: #888;
		font-weight: 600;
		display: block;
		margin-bottom: 10px;
	}

	.section-header h2 {
		font-size: 2.3rem;
		font-weight: 700;
		line-height: 1.3;
		color: #222;
	}

	.section-header h2 span {
		color: #666;
		font-weight: 400;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 40px;
		margin-bottom: 60px;
	}

	.item h3 {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 10px;
		color: #111;
	}

	.item p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: #555;
	}

	/* 🔹 Gambar dengan efek masking */
	.about-img {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-img img {
		width: 100%;
		max-width: 550px;
		border-radius: 20px;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.about-img img:hover {
		transform: scale(1.05);
	}

	/* 🔹 Responsiveness */
	@media (max-width: 768px) {
		.section-header h2 {
			font-size: 1.8rem;
		}
		.grid {
			gap: 24px;
		}
		.about-img img {
			max-width: 100%;
			-webkit-mask-size: 70%;
			mask-size: 70%;
		}
	}
</style>
