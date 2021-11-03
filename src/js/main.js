// import Swiper, { Navigation, Pagination } from '../../node_modules/swiper/swiper.esm';
import Burger from './modules/burgerMenu';
import Timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {

	// Swiper.use([Navigation, Pagination]);

	// const swiper = new Swiper('.swiper', {
	// 	direction: 'horizontal',
	// 	loop: true,
	// 	autoplay: true,
	// 	autoplay: {
	// 		delay: 2000,
	// 		pauseOnMouseEnter: true,
	// 	},

	// 	pagination: {
	// 		el: '.safeness__slider-pagination',
	// 		bulletClass: 'safeness__slider-bullet',
	// 		bulletActiveClass: 'safeness__slider-bullet--active',
	// 		clickable: true,
	// 	},

	// });

	const burger = new Burger({
		openMenuBtn: '.burger',
		closeMenuBtn: '.btn__menu-close',
		burgerMenuSelector: '.menu',
		activeClass: '.menu--active'
	}).init();

	const timer = new Timer({
		deadLine: '2021-12-31',
		timerWrapper: '.special-offer__counter',
		daysSelector: '#days',
		hoursSelector: '#hours',
		minutesSelector: '#minutes',
		secondsSelector: '#seconds'
	}).init();
});



































// import Slider from './modules/slider';

// window.addEventListener('DOMContentLoaded', () => {

//     const slider = new Slider('.page', '.next');
//     slider.render();

// });