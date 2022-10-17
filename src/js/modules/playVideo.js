export class VideoPlayer {
  constructor({ triggers, overlay }) {
    this.buttons = document.querySelectorAll(triggers)
    this.overlay = document.querySelector(overlay)
    this.close = this.overlay.querySelector('.close')
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  bindTriggers() {
    this.buttons.forEach((button, i) => {
      try {
        const blockedElem = button.closest('.module__video-item').nextElementSibling

        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true')
        }
      } catch (e) {}

      button.addEventListener('click', () => {
        if (
          !button.closest('.module__video-item') ||
          button.closest('.module__video-item').getAttribute('data-disabled') !== 'true'
        ) {
          this.activeBtn = button

          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex'
            if (this.path !== button.getAttribute('data-url')) {
              this.path = button.getAttribute('data-url')
              this.player.loadVideoById({ videoId: this.path })
            }
          } else {
            this.path = button.getAttribute('data-url')

            this.createPlayer(this.path)
          }
        }
      })
    })
  }

  handleClosePlayer() {
    this.overlay.style.display = 'none'
    this.player.stopVideo()
  }

  bindCloseButton() {
    this.close.addEventListener('click', () => {
      this.handleClosePlayer()
    })

    this.overlay.addEventListener('click', () => {
      this.handleClosePlayer()
    })

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.handleClosePlayer()
      }
    })
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        onStateChange: this.onPlayerStateChange
      }
    })

    this.overlay.style.display = 'flex'
  }

  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true)

      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed')
          blockedElem.querySelector('svg').remove()
          blockedElem.querySelector('.play__circle').appendChild(playBtn)
          blockedElem.querySelector('.play__text').textContent = 'play video'
          blockedElem.querySelector('.play__text').classList.remove('attention')
          blockedElem.style.opacity = 1
          blockedElem.style.filter = 'none'

          blockedElem.setAttribute('data-disabled', 'false')
        }
      }
    } catch (e) {}
  }

  init() {
    const tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    this.bindTriggers()
    this.bindCloseButton()
  }
}
