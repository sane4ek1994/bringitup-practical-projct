import { MainSlider, MiniSlider, VideoPlayer } from './modules/index';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page',
        buttons: '.next'
    });
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        nextBtn: '.showup__next',
        prevBtn: '.showup__prev',
        activeClass: 'card-active',
        animate: true

    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        nextBtn: '.modules__info-btns .slick-next',
        prevBtn: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        nextBtn: '.feed__slider .slick-next',
        prevBtn: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    const player = new VideoPlayer({
        overlay: '.overlay',
        triggers: '.showup .play'
    });
    player.init();
});