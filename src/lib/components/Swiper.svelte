<script>
	import Swiper from 'swiper';
	import 'swiper/swiper-bundle.min.css'; // Mengimpor file CSS Swiper

	import { onMount } from 'svelte';

	let swiperInstance;

	// Inisialisasi Swiper di dalam onMount untuk memastikan DOM sudah siap
	onMount(() => {
		swiperInstance = new Swiper('.swiper-container', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			autoplay: {
				delay: 3000
			}
		});
	});
</script>

<!-- Struktur Swiper -->
<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<img src="https://via.placeholder.com/600x300?text=Image+1" alt="Slide 1" />
		</div>
		<div class="swiper-slide">
			<img src="https://via.placeholder.com/600x300?text=Image+2" alt="Slide 2" />
		</div>
		<div class="swiper-slide">
			<img src="https://via.placeholder.com/600x300?text=Image+3" alt="Slide 3" />
		</div>
	</div>

	<!-- Pagination -->
	<div class="swiper-pagination"></div>

	<!-- Navigation -->
	<div class="swiper-button-next"></div>
	<div class="swiper-button-prev"></div>
</div>

<style>
	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide img {
		width: 100%;
		height: auto;
		border-radius: 10px;
	}

	.swiper-button-next,
	.swiper-button-prev {
		color: #fff;
	}

	.swiper-pagination-bullet {
		background-color: #3498db;
	}
</style>
