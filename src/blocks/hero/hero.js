import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const heroSliders = document.querySelectorAll(".hero__slider");

heroSliders.forEach((slider) => {
	const progressFill = slider.querySelector(".hero__progress-fill");
	const realSlides = slider.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;

	const updateProgress = (swiper) => {
		if (progressFill && realSlides) {
			progressFill.style.width = `${((swiper.realIndex + 1) / realSlides) * 100}%`;
		}
	};

	new Swiper(slider, {
		modules: [Navigation, Pagination],
		loop: true,
		speed: 600,
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
});
