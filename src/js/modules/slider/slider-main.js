import { Slider } from '../index'

export class MainSlider extends Slider {
  constructor(nextMainBtns, prevMainBtns) {
    super(nextMainBtns, prevMainBtns)
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1
    }

    if (n < 1) {
      this.slideIndex = this.slides.length
    }

    try {
      this.hanson.style.opacity = '0'

      if (n === 3) {
        this.hanson.classList.add('animated')
        setTimeout(() => {
          this.hanson.style.opacity = '1'
          this.hanson.classList.add('slideInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    } catch (e) {}

    ;[...this.slides].forEach(slide => {
      slide.style.display = 'none'
    })

    this.slides[this.slideIndex - 1].style.display = 'block'
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n))
  }

  bindTriggers() {
    this.nextMainBtns.forEach(button => {
      button.addEventListener('click', () => {
        this.plusSlides(1)
      })

      button.parentNode.previousElementSibling.addEventListener('click', event => {
        event.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })

    this.prevMainBtns.forEach(btn => {
      btn.addEventListener('click', event => {
        event.stopPropagation() // отмена всплытия событий
        this.plusSlides(-1)
      })
    })
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson')
      } catch (e) {}

      this.showSlides(this.slideIndex)
      this.bindTriggers()
    }
  }
}
