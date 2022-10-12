export class Slider {
    constructor ({ 
        container = null,
        buttons = null, 
        nextBtn = null, 
        prevBtn = null,
        activeClass = '',
        animate = false,
        autoplay = false} = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;// получаем дочерние страницы
        this.buttons = document.querySelectorAll(buttons);
        this.nextBtn = document.querySelector(nextBtn);
        this.prevBtn = document.querySelector(prevBtn);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
};