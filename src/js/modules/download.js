export class Download {
  constructor({ triggersSelector }) {
    this.buttons = document.querySelectorAll(triggersSelector)
    this.path = 'assets/img/showup.jpg'
  }

  downloadItem(path) {
    const link = document.createElement('a')

    link.setAttribute('href', path)
    link.setAttribute('download', 'link')

    link.style.display = 'none'
    document.body.append(link)

    link.click()
    document.body.removeChild(link)
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', event => {
        event.stopPropagation()
        this.downloadItem(this.path)
      })
    })
  }
}
