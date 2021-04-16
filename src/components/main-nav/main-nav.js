import MetisMenu from 'metismenujs';
import OnOffCanvas from 'onoffcanvas';

const mainNav = new MetisMenu('.main-nav_full .main-nav__list_level-1');
const mainNavMob = new MetisMenu('.main-nav_mobile .main-nav__list_level-1');

const mobMenuCanvas = document.querySelector('#mob-menu-canvas');
const hamburger = document.querySelector('.hamburger');
const mainNavMobCanvas = new OnOffCanvas(mobMenuCanvas);

mainNavMobCanvas.on('show.onoffcanvas', () => {
  hamburger.classList.add('is-active');
  mobMenuCanvas.classList.add('is-active');
});

mainNavMobCanvas.on('hide.onoffcanvas', () => {
  hamburger.classList.remove('is-active');
});

hamburger.addEventListener('click', () => {
  mobMenuCanvas.classList.add('onoffcanvas_opacity');
}, false);

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    mainNavMobCanvas.hide();
  }
});
