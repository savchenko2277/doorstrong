import { tweakerRangeDouble } from "../../js/libs/tweakerRangeDouble";

const page = document.querySelector(".catalog-page");

if (page) {
	const filtersEl = page.querySelector(".catalog-page__filters");
	const toggleBtn = page.querySelector(".catalog-page__filters-toggle");
	const closeBtn = page.querySelector(".catalog-page__filters-close");
	const priceEl = page.querySelector(".catalog-page__price");

	// Слайдер цены (только UI — фильтрация выполняется на бэкенде)
	if (priceEl) {
		tweakerRangeDouble(priceEl, {
			rangeMax: 100000,
			rangeStartMin: 0,
			rangeStartMax: 100000,
			rangeStep: 1000,
			rangeGap: 1000,
			input: true,
		});

		// Имена полей для отправки на бэкенд
		const priceInputs = priceEl.querySelectorAll('input[type="number"]');
		if (priceInputs[0]) priceInputs[0].name = "price_min";
		if (priceInputs[1]) priceInputs[1].name = "price_max";
	}

	// Открытие/закрытие фильтров на мобильных
	toggleBtn?.addEventListener("click", () => filtersEl?.classList.toggle("opened"));
	closeBtn?.addEventListener("click", () => filtersEl?.classList.remove("opened"));
}

