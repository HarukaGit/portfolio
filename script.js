'use strict'

const isMenuOpen = document.querySelector(".open");
const isMenuClose = document.querySelector(".close");
const getNav = document.getElementById("nav");
const displayOriginal = getNav.style.display;
const getHamburgerMenuNav = document.getElementById("hamburger-menu-nav");
const displayOriginal2 = getHamburgerMenuNav.style.display;
const getBody = document.querySelector("body");
const overflowOriginal = getBody.style.overflow;

const tl = gsap.timeline({ paused: true });

isMenuClose.addEventListener("click", () => {
    console.log("Openボタンをクリックしました！")
  });

  tl.fromTo(
   //メニューを上から下へ表示
    ".hamburger-menu",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
      top: 0,
      ease: Power2.easeInOut,
    }
  ).fromTo(
   //テキストリンクを表示
    ".nav-link",
    {
      autoAlpha: 0,
      y: 30,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.3, //同じ要素一つずつに0.3s遅延をかけてアニメーションを行う
    }
  );

  isMenuOpen.addEventListener("click", () => {
    tl.play().timeScale(1);
    getNav.style.display = 'none';
    getBody.style.overflow = 'hidden'
    getHamburgerMenuNav.style.display = displayOriginal2;
  });
  
  isMenuClose.addEventListener("click", () => {
    tl.timeScale(3);
    tl.reverse();
    getHamburgerMenuNav.style.display = 'none';
    getNav.style.display = displayOriginal;
    getBody.style.overflow = overflowOriginal;
  });

const getBackgroundImage = document.querySelector(".background-image");
gsap.to(".background-image", {
    duration:40,
    rotation:360,
    repeat:-1,ease: Linear.easeNone
});




const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
const listEl = document.querySelector('.side-scroll-list');

gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll',
    start: '-20% top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

console.log(gsap)