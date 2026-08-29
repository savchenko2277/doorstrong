import Inputmask from "inputmask";

// Маска для российских телефонных номеров
const phoneInputs = document.querySelectorAll('input[type="tel"]');

if (phoneInputs.length) {
	Inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
	}).mask(phoneInputs);
}
