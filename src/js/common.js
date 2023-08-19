
//fixed header
const fixedHeader = () => {
	let header = D.querySelector('.js-header');
	let scrollBarPosition = W.pageYOffset | D.body.scrollTop;

	if( scrollBarPosition  > 200) {
		header.classList.add("is-fixed")
	} else {
		header.classList.remove("is-fixed")
	}
}


//tabs
const tabsInit = () => {

	const tabs = D.querySelectorAll(".js-tab");

	if (!tabs) return;

	tabs.forEach((el) => {

		const tabButtons = el.querySelectorAll(".js-tab__item"),
			  contents   = el.querySelectorAll(".js-tab__block");

		if (!tabButtons) return;
		if (!contents)   return;

		tabButtons.forEach((tab) => {
			tab.addEventListener('click', (e) => {

				const id = e.target.dataset.id;

				if (id) {
					tabButtons.forEach(btn => {
						btn.classList.remove("is-active");
					});
					e.target.classList.add("is-active");
		
					contents.forEach(content => {
						content.classList.remove("is-active");
					});
					const element = D.getElementById(id);
					element.classList.add("is-active");

					// Additional logic for product card buy also slider
					let matches = id.match(/buy-also-(\d+)/);
					if (matches) {
						D.querySelectorAll('.products-horizontal__slider-navigation').forEach((nav) => {
							nav.classList.remove('is-active');
						})
						if (D.getElementById('slider-nav-buy-also-'+matches[1])) {
							D.getElementById('slider-nav-buy-also-'+matches[1]).classList.add('is-active');
						}
					}

				}
			})
		})
	})
}


D.addEventListener("DOMContentLoaded", function() {

	fixedHeader();
	W.addEventListener("scroll", fixedHeader);
	tabsInit()

//mobile menu
	const nav = D.querySelector('.js-mobile-menu'),
				openMenu = D.querySelector('.js-open-mobile-menu'),
				closeMenu = D.querySelector('.js-close-mobile-menu');

	const mobileMenu = () => {
		nav.classList.toggle('is-active');
		openMenu.classList.toggle('is-active');
	}

	openMenu.addEventListener('click', mobileMenu);
	closeMenu.addEventListener('click', mobileMenu);

	if (D.getElementById('product-card__description-btn')) {
		D.getElementById('product-card__description-btn').addEventListener('click', function() {
			D.querySelectorAll('#product-card__description .is-hidden').forEach(el => {
				el.classList.remove('is-hidden');
			})
			this.remove();
		})
	}

})