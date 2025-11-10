<footer class="footer">
	<!-- 🔹 Bagian Hero Footer -->
	<div class="footer-cta">
		<h2>
			Mari gunakan <span>inovasi</span> untuk membuat <br />
			industri kayu ekspor lebih <span>kuat dan berkelanjutan</span>
		</h2>
	</div>

	<!-- 🔹 Konten Footer -->
	<div class="footer-content">
		<div class="footer-section brand">
			<h3>PT MENARA BEKASI.</h3>
			<p>© 2025 PT Menara Bekasi. Semua hak cipta dilindungi.</p>
		</div>

		<div class="footer-section">
			<h4>Hubungi Kami</h4>
			<ul>
				<li><a href="mailto:sales@menarabekasilestari.com">sales@menarabekasilestari.com</a></li>
				<li>
					<a href="https://wa.me/6285817298071" target="_blank" rel="noopener noreferrer"
						>WhatsApp</a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	.footer {
		font-family: 'Elms Sans', sans-serif;
		color: #f2f2f2;
	}

	/* 🔹 Bagian Hero CTA */
	.footer-cta {
		background: #111317;
		text-align: center;
		padding: 100px 20px 80px;
		color: #fff;
	}

	.footer-cta h2 {
		font-size: 2.6rem;
		font-weight: 700;
		line-height: 1.3;
		max-width: 900px;
		margin: 0 auto;
		color: #fff;
	}

	.footer-cta h2 span {
		color: #9ca3af; /* abu halus seperti pada teks "and invincible" */
		font-weight: 400;
	}

	/* 🔹 Bagian isi footer */
	.footer-content {
		background: #f6f7f8;
		color: #111;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 40px;
		padding: 60px 10%;
		text-align: left;
	}

	.footer-section h3 {
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.footer-section p {
		font-size: 0.9rem;
		color: #555;
		margin: 0;
	}

	.footer-section h4 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 12px;
		color: #333;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-section li {
		margin-bottom: 6px;
	}

	.footer-section a {
		text-decoration: none;
		color: #555;
		font-size: 0.9rem;
		transition: color 0.2s ease;
	}

	.footer-section a:hover {
		color: #000;
	}

	.brand h3 {
		letter-spacing: 1px;
	}

	/* 🔹 Responsif */
	@media (max-width: 768px) {
		.footer-cta h2 {
			font-size: 1.8rem;
		}
		.footer-content {
			padding: 40px 5%;
			text-align: center;
		}
	}
</style>
