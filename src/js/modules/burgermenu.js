export default class Burger {
    constructor(burgerBtnSelector, burgerMenuSelector) {
        this.burgerMenu = document.querySelector(burgerMenuSelector);
        this.burgerBtn = document.querySelector(burgerBtnSelector);
    }

    triggerBtn() {
        this.burgerBtn.addEventListener('click', () => {
            this.burgerMenu.classList.toggle('menu__list--active');
        });
    }

    init() {
        this.triggerBtn();
    }
}