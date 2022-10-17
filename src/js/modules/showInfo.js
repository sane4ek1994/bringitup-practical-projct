export class ShowInfo {
  constructor({ triggersSelector }) {
    this.buttons = document.querySelectorAll(triggersSelector)
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        const sibling = button.closest('.module__info-show').nextElementSibling

        sibling.classList.toggle('msg')
        sibling.style.marginTop = '20px'
      })
    })
  }
}
