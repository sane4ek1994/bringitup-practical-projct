export class Slider {
    constructor ({ page = '', buttons= '', nextBtn= '', prevBtn= '' } = {}) {
        this.page = document.querySelector(page);
        this.slides = [...this.page.children]; // получаем дочерние страницы
        this.buttons = document.querySelectorAll(buttons);
        this.slideIndex = 1;
    }
};