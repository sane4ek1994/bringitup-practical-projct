export class VideoPlayer {
    constructor ({ triggers, overlay }) {
        this.buttons = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindTrigers() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = button.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }

    handleClosePlayer() {
        this.overlay.style.display = 'none';
        this.player.stopVideo();
    }



    bindCloseButton() {
        this.close.addEventListener('click', () => {
            this.handleClosePlayer();
        });

        this.overlay.addEventListener('click', () => {
            this.handleClosePlayer();
        })

        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                this.handleClosePlayer();
            }
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
          });

          this.overlay.style.display = 'flex';
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTrigers();
        this.bindCloseButton();
    }
}