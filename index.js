const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const nav = document.querySelectorAll("li");

const hero = document.getElementById('hero');
const heroLayer = document.getElementById('hero-layer');
const heroText = document.querySelector('.testHeadline');
const translate = document.querySelectorAll('.translate');
const shadow = document.querySelector('.shadow');

// let heroText_height = heroText.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
    // heroText.style.opacity = - scroll / (heroText_height / 2) + 1;
    // shadow.style.height = `${scroll}
})

// const timeline = new TimelineMax();

// Wrap every letter in a span
var textWrapper = document.querySelector('.headerSubtext');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.headerSubtext .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  });
  // .add({
  //   targets: '.ml13 .letter',
  //   translateY: [0,-100],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 5200,
  //   delay: (el, i) => 100 + 30 * i
  // });

// timeline.fromTo(hero, 1.5, {height: '0%'}, {height: '100%', ease: Power2.easeInOut})
// // .fromTo(hero, 1.2, {width: '100%'}, {width: '90%', ease: Power2.easeInOut})
// // .fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
// .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
// .fromTo(nav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
// .fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0, ease: Power2.easeInOut}, '-=0.5');


// let onload = fog.style.opacity='0';

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });


