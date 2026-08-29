import { driveMenu } from "../../js/libs/driveMenu";
import { driveAdaptive } from "../../js/libs/driveAdaptive";

const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const burger = document.querySelectorAll(".header__burger");

if (menu && burger.length) {
	driveMenu(menu, burger, {
		class: false,
		globalClose: true,
		open: () => {
			header?.classList.add("opened");
			burger.forEach((btn) => btn.setAttribute("aria-expanded", "true"));
		},
		close: () => {
			header?.classList.remove("opened");
			burger.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
		},
	});
}

// Перенос контента верхней панели в мобильное меню
new driveAdaptive({
	type: "max",
	aliases: { lg: 1099.98 },
});

// Компенсация высоты фиксированного хедера
if (header) {
	const setHeaderHeight = () => {
		document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
	};
	setHeaderHeight();
	window.addEventListener("resize", setHeaderHeight);
	document.fonts?.ready?.then(setHeaderHeight);
}

