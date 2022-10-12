import { Slider } from "./slider";

export class MiniSlider extends Slider {
    constructor(container, nextBtn, prevBtn, activeClass, animate, autoplay) {
        super(container, nextBtn, prevBtn, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        [...this.slides].forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlides() {
        for (let i = 1; i < this.slides.length; i++) {
            if (this.slides[i].tagName !== 'BUTTON') {
                this.container.append(this.slides[0]);
                this.decorizeSlides();
                break;
            } else {
                this.container.append(this.slides[i]);
                i--;
            }
        }
    }

    autoplayInit() {
        const autoplaySlide = setInterval(() => this.nextSlides(), 5000);
        [...this.slides].forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                clearInterval(autoplaySlide);
            });
        });
    }

    bindTriggers() {
        this.nextBtn.addEventListener('click', () => this.nextSlides());
        this.prevBtn.addEventListener('click', () => {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== 'BUTTON') {
                    const active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]); //помещяем слайд перед active 
                    this.decorizeSlides();
                    break;
                }
            }
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

        if (this.autoplay) {
            this.autoplayInit();

            [...this.slides].forEach(slide => {
                slide.addEventListener('mouseleave', () => {
                    this.autoplayInit();
                });
            });
        }
    }
}