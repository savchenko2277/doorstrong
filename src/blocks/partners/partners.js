import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const slider = document.querySelector(".partners__slider");

if (slider) {
	new Swiper(slider, {
		modules: [Navigation],
		loop: true,
		spaceBetween: 24,
		slidesPerView: 2,
		navigation: {
			nextEl: document.querySelector(".partners__arrow_next"),
			prevEl: document.querySelector(".partners__arrow_prev"),
		},
		breakpoints: {
			640: { slidesPerView: 3 },
			960: { slidesPerView: 4 },
			1100: { slidesPerView: 6 },
		},
	});
}
