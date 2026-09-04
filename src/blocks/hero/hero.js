import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const heroSliders = document.querySelectorAll(".hero__slider");
const autoplayMedia = window.matchMedia("(max-width: 1280px)");

heroSliders.forEach((slider) => {
	const progressFill = slider.querySelector(".hero__progress-fill");
	const realSlides = slider.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;

	const updateProgress = (swiper) => {
		if (progressFill && realSlides) {
			progressFill.style.width = `${((swiper.realIndex + 1) / realSlides) * 100}%`;
		}
	};

	const swiper = new Swiper(slider, {
		modules: [Autoplay, Navigation, Pagination],
		loop: true,
		speed: 600,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: slider.querySelector(".hero__arrow_next"),
			prevEl: slider.querySelector(".hero__arrow_prev"),
		},
		pagination: {
			el: slider.querySelector(".hero__pagination"),
			clickable: true,
		},
		on: {
			init: updateProgress,
			slideChange: updateProgress,
		},
	});

	const syncAutoplay = () => {
		if (autoplayMedia.matches) {
			swiper.autoplay.start();
		} else {
			swiper.autoplay.stop();
		}
	};

	syncAutoplay();
	autoplayMedia.addEventListener("change", syncAutoplay);
});
