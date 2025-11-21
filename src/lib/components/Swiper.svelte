<script>
	import bg from '$lib/assets/slider/kemas.png';
	import bg2 from '$lib/assets/slider/menarabekasi.png';
	import bg3 from '$lib/assets/slider/web-1.jpg';
	import bg4 from '$lib/assets/slider/web-11.jpg';
	import bg5 from '$lib/assets/slider/web-4.jpg';
	import bg6 from '$lib/assets/slider/web-8.jpeg';

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	let swiperInstance;

	const slides = [
		{
			image: bg,
			title: 'Website Resmi PT.Kemas Kayu Indonesia',
			desc: '“Kami selalu memastikan kualitas kayu sesuai standar internasional.”',
			link: 'https://menarabekasilestari.site/'
		},
		{
			image: bg2,
			title: 'Pastikan Pallet Anda Siap Kirim Tanpa Risiko!',
			desc: '“Kerjasama hanya dengan vendor terpercaya & berpengalaman.”',
			link: 'https://kemaskayuindonesia.my.id/menarabekasi/'
		},
		{
			image: bg3,
			title: 'Mengapa Penanganan Kayu Pallet Jadi Kunci Sukses Ekspor Barang',
			desc: '“Pastikan pengiriman ekspor Anda aman dengan penanganan kayu pallet yang sesuai standar ISPM 15.”',
			link: 'https://menarabekasi.netlify.app/'
		},
		{
			image: bg4,
			title: 'Mengenal Kayu Ramah Lingkungan dan Sertifikasi Hijau',
			desc: '“Ketahui cara mendukung ekspor hijau melalui penggunaan kayu ramah lingkungan.”',
			link: 'https://web-menarabks.vercel.app/'
		},
		{
			image: bg5,
			title: 'Perbedaan Kayu ISPM 15 dan Non ISPM 15 untuk Ekspor',
			desc: '“Pahami perbedaan penting antara kayu bersertifikat dan non-sertifikat sebelum ekspor.”',
			link: 'https://blogmenara.pages.dev/'
		},
		{
			image: bg6,
			title: 'Legalitas Ekspor Kayu: Panduan Lengkap Dokumen, Perizinan, dan Sertifikasi SVLK',
			desc: '“Panduan lengkap tentang izin, sertifikat, dan dokumen ekspor kayu yang sah dan aman.”',
			link: 'https://menaraweb.vercel.app/'
		}
	];

	onMount(() => {
		swiperInstance = new Swiper('.swiper-container', {
			modules: [Navigation, Pagination, Autoplay],
			loop: true,
			centeredSlides: true,
			slidesPerView: 1,
			spaceBetween: 0,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			}
		});
	});
</script>

<!-- Struktur Swiper -->
<div class="swiper-container">
	<div class="swiper-wrapper">
		{#each slides as slide}
			<div class="swiper-slide">
				<a href={slide.link} target="_blank" rel="noopener noreferrer">
					<img src={slide.image} alt={slide.title} />
					<div class="overlay"></div>
					<div class="slide-content">
						<h2>{slide.title}</h2>
						<p>{slide.desc}</p>
						<button class="cta-button">Kunjungi Sekarang</button>
					</div>
				</a>
			</div>
		{/each}
	</div>

	<div class="swiper-pagination"></div>
	<div class="swiper-button-next"></div>
	<div class="swiper-button-prev"></div>
</div>

<style>
	.swiper-container {
		width: 100%;
		height: 80vh;
		/* max-width: 100vw; */
		position: relative;
	}

	.swiper-slide {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: transform 0.3s ease;
	}

	.swiper-slide:hover {
		transform: scale(1.01);
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
		z-index: 1;
	}

	.slide-content {
		position: absolute;
		bottom: 15%;
		left: 10%;
		color: #fff;
		z-index: 2;
		max-width: 600px;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	.slide-content h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.slide-content p {
		font-size: 1.1rem;
		line-height: 1.5;
		margin-bottom: 20px;
		opacity: 0.9;
	}

	.cta-button {
		background: linear-gradient(135deg, #ff7a00, #ff3c00);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		cursor: pointer;
		transition:
			background 0.3s ease,
			transform 0.2s ease;
	}

	.cta-button:hover {
		background: linear-gradient(135deg, #ff9d42, #ff5c2a);
		transform: translateY(-3px);
	}

	.swiper-button-next,
	.swiper-button-prev {
		color: white;
		transition: color 0.3s ease;
	}

	.swiper-button-next:hover,
	.swiper-button-prev:hover {
		color: #00bfff;
	}

	@media (max-width: 768px) {
		.slide-content {
			left: 5%;
			bottom: 10%;
			max-width: 90%;
		}

		.slide-content h2 {
			font-size: 1.5rem;
		}

		.slide-content p {
			font-size: 1rem;
		}
	}
</style>
