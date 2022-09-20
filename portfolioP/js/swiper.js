const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: true,
	// autoplay: false,
	speed: 2000,
	breakpoints: {
		375: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		663: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		956: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1240: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
