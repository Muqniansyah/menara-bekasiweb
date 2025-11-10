<script>
	let active = null; // Track which question is open

	// Toggle between showing/hiding answer
	const toggle = (index) => {
		active = active === index ? null : index;
	};
</script>

<section class="faq-section">
	<h2>FAQ - Pertanyaan Umum</h2>

	<div class="faq-item" on:click={() => toggle(0)}>
		<div class="faq-question">
			<span class="faq-icon">❓</span>
			<p>Apa itu digitalisasi dalam industri kayu ekspor?</p>
		</div>
		{#if active === 0}
			<div class="faq-answer">
				Digitalisasi dalam industri kayu ekspor mencakup penggunaan teknologi untuk mempermudah
				proses produksi, pengiriman, dan pelacakan kayu secara lebih efisien dan transparan.
			</div>
		{/if}
	</div>

	<div class="faq-item" on:click={() => toggle(1)}>
		<div class="faq-question">
			<span class="faq-icon">❓</span>
			<p>Bagaimana teknologi dapat meningkatkan kualitas kayu ekspor?</p>
		</div>
		{#if active === 1}
			<div class="faq-answer">
				Teknologi seperti mesin CNC, AI-assisted grading, dan sensor otomatis membantu meningkatkan
				presisi dan kualitas kayu, menghasilkan produk yang konsisten sesuai dengan standar ekspor.
			</div>
		{/if}
	</div>

	<div class="faq-item" on:click={() => toggle(2)}>
		<div class="faq-question">
			<span class="faq-icon">❓</span>
			<p>Apa manfaat teknologi untuk keberlanjutan ekspor kayu?</p>
		</div>
		{#if active === 2}
			<div class="faq-answer">
				Teknologi membantu mengurangi pemborosan bahan baku, mengoptimalkan penggunaan energi, dan
				memungkinkan transparansi dalam sertifikasi legalitas kayu yang mendukung keberlanjutan
				lingkungan.
			</div>
		{/if}
	</div>

	<div class="faq-item" on:click={() => toggle(3)}>
		<div class="faq-question">
			<span class="faq-icon">❓</span>
			<p>Apa tantangan utama dalam transformasi digital di industri kayu?</p>
		</div>
		{#if active === 3}
			<div class="faq-answer">
				Tantangan utama mencakup keterbatasan sumber daya manusia digital, biaya teknologi yang
				tinggi, dan kesulitan dalam mengadopsi sistem digital di lapangan.
			</div>
		{/if}
	</div>
</section>

<style>
	.faq-section {
		max-width: 900px;
		margin: 60px auto;
		padding: 40px;
		background: #f7f7f7;
		border-radius: 12px;
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
		border-left: 8px solid #3498db; /* Accent color */
	}

	h2 {
		font-size: 32px;
		color: #2c3e50;
		margin-bottom: 20px;
		text-align: center;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
	}

	.faq-item {
		background: #fff;
		margin-bottom: 15px;
		padding: 15px;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.faq-item:hover {
		background: #ecf0f1;
	}

	.faq-question {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.faq-icon {
		font-size: 22px;
		color: #3498db;
	}

	.faq-question p {
		font-size: 18px;
		color: #333;
		font-weight: bold;
		margin: 0;
	}

	.faq-answer {
		margin-top: 10px;
		font-size: 16px;
		color: #555;
		line-height: 1.6;
		padding: 10px;
		background: #ecf0f1;
		border-radius: 6px;
	}

	/* RESPONSIVE STYLES */
	@media (max-width: 768px) {
		.faq-section {
			padding: 20px;
		}

		h2 {
			font-size: 26px;
		}

		.faq-item {
			padding: 12px;
		}

		.faq-question p {
			font-size: 16px;
		}
	}

	@media (max-width: 480px) {
		.faq-section {
			padding: 15px;
		}

		h2 {
			font-size: 22px;
		}

		.faq-question p {
			font-size: 14px;
		}

		.faq-answer {
			font-size: 14px;
		}
	}
</style>
