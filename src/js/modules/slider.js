export class Slider {
    constructor ({ page, buttons }) {
        this.page = document.querySelector(page);
        this.slides = [...this.page.children]; // получаем дочерние страницы
        this.buttons = document.querySelectorAll(buttons);
        this.slideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
       this.buttons.forEach(button => {
        button.addEventListener('click', () => {
            this.plusSlides(1);
        });

        button.parentNode.previousElementSibling.addEventListener('click', (event) => {
            event.preventDefault();
            this.slideIndex = 1;
            this.showSlides(this.slideIndex);
        });
     });

     this.showSlides(this.slideIndex);
    }
};