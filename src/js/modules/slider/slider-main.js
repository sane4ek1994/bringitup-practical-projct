import { Slider } from "../index";

export class MainSlider extends Slider {
    constructor(page, buttons) {
        super(page, buttons);
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
        
        try {
            this.hanson.style.opacity = '0';
            
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                },3000)
            } else {
                this.hanson.classList.remove('slideInUp');
            }

        } catch(e) {}
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try{
            this.hanson = document.querySelector('.hanson');
            
        } catch(e) {

        }
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