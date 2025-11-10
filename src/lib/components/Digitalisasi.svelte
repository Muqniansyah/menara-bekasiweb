<script>
	export let title;
	export let content = `
Digitalisasi kini menjadi tulang punggung transformasi di berbagai sektor, termasuk industri kayu ekspor. Melalui sistem digital, perusahaan dapat mengintegrasikan proses produksi, pengiriman, hingga pelacakan ekspor dengan lebih efisien dan transparan.

Teknologi seperti Internet of Things (IoT), barcode tracking, dan data analytics memungkinkan setiap potongan kayu yang diekspor dapat dipantau asal-usul dan legalitasnya secara real-time. Hal ini bukan hanya mempercepat operasional, tapi juga meningkatkan kepercayaan pasar internasional terhadap produk kayu Indonesia.

🔸 Dengan sistem digital yang kuat, proses ekspor kini lebih mudah, aman, dan akurat — membuka jalan untuk teknologi modern berikutnya.
`;
</script>

<section class="section">
	<h2>🌐 {title}</h2>
	<p>{@html content.replace(/\n/g, '<br/>')}</p>
</section>

<style>
	.section {
		max-width: 800px;
		margin: 60px auto;
		padding: 0 20px;
		line-height: 1.7;
	}

	h2 {
		font-size: 26px;
		margin-bottom: 12px;
		font-weight: 700;
		color: #1b1b1b;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	p {
		font-size: 16px;
		color: #444;
		white-space: pre-line;
	}

	/* RESPONSIVE */
	@media (max-width: 600px) {
		h2 {
			font-size: 22px;
		}
		p {
			font-size: 15px;
		}
	}
</style>
