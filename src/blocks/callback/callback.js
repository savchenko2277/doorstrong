const callback = document.querySelector(".callback");
const openers = document.querySelectorAll("[data-callback-open]");
const closers = document.querySelectorAll("[data-callback-close]");

const lockScroll = () => {
	document.body.style.overflow = "hidden";
	document.body.style.paddingRight = "var(--sw)";
};

const unlockScroll = () => {
	document.body.style.overflow = "";
	document.body.style.paddingRight = "";
};

const openCallback = () => {
	if (!callback) return;
	callback.classList.add("opened");
	callback.setAttribute("aria-hidden", "false");
	lockScroll();
};

const closeCallback = () => {
	if (!callback) return;
	callback.classList.remove("opened");
	callback.setAttribute("aria-hidden", "true");
	unlockScroll();
};

openers.forEach((el) =>
	el.addEventListener("click", (e) => {
		e.preventDefault();
		openCallback();
	})
);

closers.forEach((el) => el.addEventListener("click", closeCallback));

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeCallback();
});
