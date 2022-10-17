export class Slider {
  constructor({
    container = null,
    nextMainBtns = null,
    prevMainBtns = null,
    nextBtn = null,
    prevBtn = null,
    activeClass = '',
    animate = false,
    autoplay = false
  } = {}) {
    this.container = document.querySelector(container)
    try {
      this.slides = this.container.children
    } catch (e) {} // получаем дочерние страницы
    this.nextMainBtns = document.querySelectorAll(nextMainBtns)
    this.prevMainBtns = document.querySelectorAll(prevMainBtns)
    this.nextBtn = document.querySelector(nextBtn)
    this.prevBtn = document.querySelector(prevBtn)
    this.activeClass = activeClass
    this.animate = animate
    this.autoplay = autoplay
    this.slideIndex = 1
  }
}
