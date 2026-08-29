const checkout = document.querySelector(".checkout");

if (checkout) {
	const items = checkout.querySelectorAll(".checkout__summary-item");
	const totalEl = checkout.querySelector(".checkout__summary-total-value");
	const payBtn = checkout.querySelector(".checkout__pay");

	const formatPrice = (value) => `${value.toLocaleString("ru-RU")} ₽`;

	let total = 0;
	items.forEach((item) => {
		const price = parseInt(item.dataset.price, 10) || 0;
		const qty = parseInt(item.dataset.qty, 10) || 1;
		total += price * qty;
	});

	if (totalEl) totalEl.textContent = formatPrice(total);
	if (payBtn) payBtn.textContent = `Оплатить ${formatPrice(total)}`;
}
