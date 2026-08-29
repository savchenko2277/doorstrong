const catalog = document.querySelector(".catalog");
const catalogToggle = document.querySelector(".header__menu-link_catalog");
const catalogWrap = document.querySelector(".header__catalog");
const catalogClosers = document.querySelectorAll("[data-catalog-close]");

const isDesktop = () => window.matchMedia("(min-width: 1100px)").matches;

const lockScroll = () => {
	document.body.style.overflow = "hidden";
	document.body.style.paddingRight = "var(--sw)";
};

const unlockScroll = () => {
	document.body.style.overflow = "";
	document.body.style.paddingRight = "";
};

const openCatalog = () => {
	if (!catalog) return;
	catalog.classList.add("opened");
	catalog.setAttribute("aria-hidden", "false");
	catalogToggle?.setAttribute("aria-expanded", "true");
	lockScroll();
};

const closeCatalog = () => {
	if (!catalog) return;
	catalog.classList.remove("opened");
	catalog.setAttribute("aria-hidden", "true");
	catalogToggle?.setAttribute("aria-expanded", "false");
	unlockScroll();
};

const toggleAccordion = () => {
	const opened = catalogWrap?.classList.toggle("opened");
	catalogToggle?.setAttribute("aria-expanded", String(opened));
};

catalogToggle?.addEventListener("click", (e) => {
	e.preventDefault();
	isDesktop() ? openCatalog() : toggleAccordion();
});

catalogClosers.forEach((btn) => btn.addEventListener("click", closeCatalog));

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeCatalog();
});
