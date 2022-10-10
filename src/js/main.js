import { Slider } from './modules/index';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider({
        page: '.page',
        buttons: '.next'
    });
    slider.render();
});