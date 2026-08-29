import { throttle } from "./libs/utils";
import "./polyfills.js";
import "./blocks.js";
import "./libs/phoneMask.js";

// Функции

// Ширина скроллбара
const setScrollbarWidth = () => {
	document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);
}

setScrollbarWidth();