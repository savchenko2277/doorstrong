import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";

const gallery = document.querySelector(".product__slider");
const thumbsEl = document.querySelector(".product__thumbs");

let thumbsSwiper = null;

if (thumbsEl) {
	thumbsSwiper = new Swiper(thumbsEl, {
		slidesPerView: 4,
		spaceBetween: 10,
		freeMode: true,
		watchSlidesProgress: true,
	});
}

if (gallery) {
	new Swiper(gallery, {
		modules: [Navigation, Pagination, Thumbs],
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: gallery.querySelector(".product__arrow_next"),
			prevEl: gallery.querySelector(".product__arrow_prev"),
		},
		pagination: {
			el: gallery.querySelector(".product__slider-pagination"),
			clickable: true,
		},
		thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
	});
}

// Лайтбокс (Fancybox) — клик по слайду открывает галерею
Fancybox.bind('[data-fancybox="gallery"]');
