export default class Burger {
    constructor({openMenuBtn, closeMenuBtn, burgerMenuSelector, activeClass}) {
        this.burgerMenu = document.querySelector(burgerMenuSelector);
        this.openMenuBtn = document.querySelector(openMenuBtn);
        this.closeMenuBtn = document.querySelector(closeMenuBtn);
        this.body = document.querySelector('body');
        this.activeClass = activeClass;
    }

    // calcScroll() {
    //     let div = document.createElement('div');
    //     div.style.width = '50px';
    //     div.style.height = '50px';
    //     div.style.overflowY = 'scroll';
    //     div.style.visibility = 'hidden';
    //     document.body.appendChild(div);

    //     let scrollWidth = div.offsetWidth - div.clientWidth;
    //     div.remove();

    //     return scrollWidth;
    
    // }

    triggerBtn() {
        const a = this.activeClass.slice(1, this.activeClass.lenght);
            // scrollWidth = this.calcScroll();

        this.openMenuBtn.addEventListener('click', () => {
            this.burgerMenu.classList.add(a);
            this.body.style.position = 'fixed';
            this.openMenuBtn.style.opacity = '0';
            // this.body.style.paddingRight = `${scrollWidth}px`;
        });

        this.closeMenuBtn.addEventListener('click', () => {
            this.burgerMenu.classList.remove(a);
            this.body.style.position = '';
            this.openMenuBtn.style.opacity = '';
            // this.body.style.paddingRight = `${scrollWidth}px`;
        });
    }

    init() {
        this.triggerBtn();
    }
}