import { Slider, VideoPlayer } from './modules/index';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider({
        page: '.page',
        buttons: '.next'
    });
    slider.render();

    const player = new VideoPlayer({
        overlay: '.overlay',
        triggers: '.showup .play'
    });
    player.init();
});