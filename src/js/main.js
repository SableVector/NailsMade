import Swiper, { Navigation, Pagination } from '../../node_modules/swiper/swiper.esm';

window.addEventListener('DOMContentLoaded', () => {

	Swiper.use([Navigation, Pagination]);

	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		autoplay: true,
		autoplay: {
			delay: 2000,
			pauseOnMouseEnter: true,
		},

		pagination: {
			el: '.safeness__slider-pagination',
			bulletClass: 'safeness__slider-bullet',
			bulletActiveClass: 'safeness__slider-bullet--active',
			clickable: true,
		},

	});

});



































// import Slider from './modules/slider';

// window.addEventListener('DOMContentLoaded', () => {

//     const slider = new Slider('.page', '.next');
//     slider.render();

// });