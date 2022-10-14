export class Difference {
  constructor({ oldOfficer, newOfficer, cards }) {
    this.oldOfficer = document.querySelector(oldOfficer)
    this.newOfficer = document.querySelector(newOfficer)
    this.oldCards = this.oldOfficer.querySelectorAll(cards)
    this.newCards = this.newOfficer.querySelectorAll(cards)
    this.oldCounter = 0
    this.newCounter = 0
  }

  bindTriggers(container, cards, counter) {
    container.querySelector('.plus').addEventListener('click', () => {
      cards[counter].classList.add('fadeIn')
      if (counter !== cards.length - 2) {
        cards[counter].style.display = 'flex'
        counter++
      } else {
        cards[counter].style.display = 'flex'
        cards[cards.length - 1].remove()
      }
    })
  }

  hideCadrs(cardsArray) {
    cardsArray.forEach((card, index, array) => {
      if (index === array.length - 1) {
        return
      }
      card.style.display = 'none'
      card.classList.add('animated')
    })
  }

  init() {
    this.hideCadrs(this.oldCards)
    this.hideCadrs(this.newCards)
    this.bindTriggers(this.oldOfficer, this.oldCards, this.oldCounter)
    this.bindTriggers(this.newOfficer, this.newCards, this.newCounter)
  }
}
