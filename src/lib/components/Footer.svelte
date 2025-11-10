<script>
	// Bisa ditambahkan jika perlu state atau data dinamis di footer
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-section">
			<h3>PT Menara Bekasi</h3>
			<p>
				Inovasi teknologi dalam industri kayu ekspor untuk efisiensi, kualitas, dan keberlanjutan
				produksi.
			</p>
		</div>

		<div class="footer-section">
			<h3>Kontak</h3>
			<ul>
				<li><a href="mailto:info@menarabekasi.com">info@menarabekasi.com</a></li>
				<li><a href="tel:+628123456789">+62 812 3456 789</a></li>
				<li><a href="https://wa.me/628123456789" target="_blank">WhatsApp</a></li>
			</ul>
		</div>

		<div class="footer-section">
			<h3>Ikuti Kami</h3>
			<div class="social-icons">
				<a href="https://facebook.com/menarabekasi" target="_blank" class="social-icon">🔵</a>
				<a href="https://twitter.com/menarabekasi" target="_blank" class="social-icon">🐦</a>
				<a href="https://linkedin.com/company/menarabekasi" target="_blank" class="social-icon"
					>🔗</a
				>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<p>© 2025 PT Menara Bekasi. Semua hak cipta dilindungi.</p>
	</div>
</footer>

<style>
	.footer {
		background-color: #2c3e50;
		color: white;
		padding: 40px 20px;
		font-family: 'Roboto', sans-serif;
	}

	.footer-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		max-width: 1200px;
		margin: auto;
	}

	.footer-section {
		flex: 1;
		min-width: 200px;
		margin-bottom: 20px;
	}

	.footer-section h3 {
		font-size: 20px;
		margin-bottom: 10px;
		color: #ecf0f1;
	}

	.footer-section p {
		font-size: 14px;
		color: #bdc3c7;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
	}

	.footer-section li {
		margin-bottom: 8px;
	}

	.footer-section a {
		text-decoration: none;
		color: #ecf0f1;
		font-size: 14px;
	}

	.footer-section a:hover {
		color: #f39c12;
	}

	.social-icons {
		display: flex;
		gap: 10px;
	}

	.social-icon {
		font-size: 20px;
		color: #ecf0f1;
		transition: color 0.3s;
	}

	.social-icon:hover {
		color: #f39c12;
	}

	.footer-bottom {
		text-align: center;
		margin-top: 40px;
		font-size: 14px;
		color: #bdc3c7;
	}

	/* RESPONSIVE STYLES */
	@media (max-width: 768px) {
		.footer-container {
			flex-direction: column;
			align-items: center;
		}

		.footer-section {
			margin-bottom: 20px;
		}

		.social-icons {
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.footer-section h3 {
			font-size: 18px;
		}

		.footer-section p,
		.footer-section a {
			font-size: 12px;
		}
	}
</style>
