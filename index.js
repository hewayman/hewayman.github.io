const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const nav = document.querySelectorAll("li");
const fog = document.querySelector('.fog-img');

const timeline = new TimelineMax();

timeline.fromTo(hero, 1.5, {height: '0%'}, {height: '100%', ease: Power2.easeInOut})
// .fromTo(hero, 1.2, {width: '100%'}, {width: '90%', ease: Power2.easeInOut})
// .fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
.fromTo(nav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0, ease: Power2.easeInOut}, '-=0.5');


// let onload = fog.style.opacity='0';

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


