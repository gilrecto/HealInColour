let galleryThumbsSwiper = new Swiper("#gallery--thumbs-swiper", {
	direction: "horizontal",
	slidesPerView: 5,
	spaceBetween: 10,
	loop: true,
	breakpoints: {
		992: {
			direction: "vertical",
		}
	}
});

let gallerySwiper = new Swiper("#gallery--swiper", {
	spaceBetween: 30,
	effect: "fade",
	loop: true,
	thumbs: {
		swiper: galleryThumbsSwiper
	}
});