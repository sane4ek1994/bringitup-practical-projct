import { Slider } from "./slider";

export class MiniSlider extends Slider {
    constructor(container, nextBtn, prevBtn, activeClass, animate, autoplay) {
        super(container, nextBtn, prevBtn, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.nextBtn.addEventListener('click', () => {
            this.container.append(this.slides[0]);
            this.decorizeSlides();
        });

        this.prevBtn.addEventListener('click', () => {
            const active = this.slides[this.slides.length - 1];
            this.container.insertBefore(active, this.slides[0]); //помещяем слайд перед active 
            this.decorizeSlides();
        });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();
    }
}