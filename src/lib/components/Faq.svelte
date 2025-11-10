<script>
	let active = null;

	const toggle = (index) => {
		active = active === index ? null : index;
	};
</script>

<section class="faq-section">
	<h2>FAQ - Pertanyaan Umum</h2>

	<div class="faq-list">
		<div class="faq-item" on:click={() => toggle(0)}>
			<div class="faq-question {active === 0 ? 'active' : ''}">
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
			<div class="faq-question {active === 1 ? 'active' : ''}">
				<span class="faq-icon">❓</span>
				<p>Bagaimana teknologi dapat meningkatkan kualitas kayu ekspor?</p>
			</div>
			{#if active === 1}
				<div class="faq-answer">
					Teknologi seperti mesin CNC, AI-assisted grading, dan sensor otomatis membantu
					meningkatkan presisi dan kualitas kayu, menghasilkan produk yang konsisten sesuai standar
					ekspor.
				</div>
			{/if}
		</div>

		<div class="faq-item" on:click={() => toggle(2)}>
			<div class="faq-question {active === 2 ? 'active' : ''}">
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
			<div class="faq-question {active === 3 ? 'active' : ''}">
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
	</div>
</section>

<style>
	.faq-section {
		background: radial-gradient(circle at top left, #f3f4f6, #e5e7eb);
		padding: 100px 20px;
		text-align: center;
		font-family: 'Elms Sans', sans-serif;
		position: relative;
	}

	/* Efek pola samar */
	.faq-section::before {
		content: '';
		position: absolute;
		top: -100px;
		right: -100px;
		width: 350px;
		height: 350px;
		background: radial-gradient(circle, rgba(234, 88, 12, 0.15), transparent 70%);
		filter: blur(50px);
		z-index: 0;
	}

	h2 {
		font-size: 2.3rem;
		font-weight: 700;
		margin-bottom: 60px;
		color: #111827;
		position: relative;
		z-index: 1;
	}

	.faq-list {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 18px;
		position: relative;
		z-index: 1;
	}

	.faq-item {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
		overflow: hidden;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.faq-item:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
	}

	.faq-question {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 18px 22px;
		color: #1f2937;
		font-size: 1.05rem;
		font-weight: 600;
		text-align: left;
		border-left: 5px solid transparent;
		transition: all 0.3s ease;
	}

	.faq-question.active {
		border-left-color: #ea580c;
		background: linear-gradient(to right, rgba(234, 88, 12, 0.08), transparent);
	}

	.faq-icon {
		font-size: 1.4rem;
		color: #ea580c;
	}

	.faq-answer {
		padding: 0 22px 20px 50px;
		font-size: 0.95rem;
		line-height: 1.7;
		color: #4b5563;
		text-align: left;
		animation: fadeIn 0.4s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Responsif */
	@media (max-width: 768px) {
		h2 {
			font-size: 1.8rem;
			margin-bottom: 40px;
		}
		.faq-question {
			padding: 16px;
			font-size: 1rem;
		}
		.faq-answer {
			padding: 0 16px 16px 40px;
			font-size: 0.9rem;
		}
	}
</style>
