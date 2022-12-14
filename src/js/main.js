import { MainSlider, MiniSlider, VideoPlayer, Difference, Form, ShowInfo, Download } from './modules/index'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({
    container: '.page',
    nextMainBtns: '.next'
  })
  slider.render()

  const modulePageSlider = new MainSlider({
    container: '.moduleapp',
    nextMainBtns: '.next',
    prevMainBtns: '.prev'
  })
  modulePageSlider.render()

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    nextBtn: '.showup__next',
    prevBtn: '.showup__prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  })
  showUpSlider.init()

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    nextBtn: '.modules__info-btns .slick-next',
    prevBtn: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  })
  modulesSlider.init()

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    nextBtn: '.feed__slider .slick-next',
    prevBtn: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  })
  feedSlider.init()

  const player = new VideoPlayer({
    overlay: '.overlay',
    triggers: '.showup .play'
  })
  player.init()

  const playerModules = new VideoPlayer({
    overlay: '.overlay',
    triggers: '.module__video-item .play'
  })
  playerModules.init()

  const difference = new Difference({
    oldOfficer: '.officerold',
    newOfficer: '.officernew',
    cards: '.officer__card-item'
  })
  difference.init()

  const form = new Form({
    forms: '.form',
    url: 'assets/question.php'
  })
  form.init()

  const infoBlock = new ShowInfo({
    triggersSelector: '.plus'
  })
  infoBlock.init()

  const downloadFile = new Download({
    triggersSelector: '.download'
  })
  downloadFile.init()
})
