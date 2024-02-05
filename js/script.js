'use strict'

gsap.fromTo("body",
{
  autoAlpha: 0,
},
{
  autoAlpha: 1,
  duration: 1,
})

const checkWorks = document.getElementById("works");
if (checkWorks === null) {
  ; //worksがない時にカルーセルを読み込むとエラーが起こるのでここで判別する
} else {
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

}

const elements = document.querySelectorAll('h2,.ruby');

elements.forEach((elem) => {
  const word = elem.textContent;
  elem.innerHTML = '';

  // wordごとにdivで囲む
  word.split(' ').forEach(function (c) {
    elem.innerHTML += '<div class="title-word">' + c + '</div>';
  });

  // textごとにdivで囲む
  let words = elem.querySelectorAll(".title-word");
  words.forEach((word) => {
    const text = word.textContent;
    word.innerHTML = '';

    text.split('').forEach(function (c) {
      word.innerHTML += '<div class="letter">' + c + '</div>';
    });

    const letter = elem.querySelectorAll(".letter");

    gsap.set(letter, {
      y: 20,
      autoAlpha: 0
    });

    gsap.to(letter, {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.03,

      scrollTrigger: {
        trigger: elem,
        start: 'bottom 80%',
        end: 'bottom center',
        toggleActions: 'play none none none',
        // markers: true,
      }
    });
  });
}); //セクションタイトルのアニメーション




const mainVisualText = new SplitType(".welcome-to-text");
gsap.to(mainVisualText.chars, {
  y: 0,
  stagger: 0.05,
  duration: 1,
  ease: Power2.easeInOut,
});


const getHeader = document.querySelector("header");
gsap.to(getHeader, {
  y: 100,
  duration: 1,
})

const navText = new SplitType(".nav-text");
gsap.to(".nav-text.home .char", {
  y: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: Power2.easeInOut,
});
gsap.to(".nav-text.about .char", {
  y: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: Power2.easeInOut,
});
gsap.to(".nav-text.works .char", {
  y: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: Power2.easeInOut,
});
gsap.to(".nav-text.contact .char", {
  y: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: Power2.easeInOut,
});





const mainVisualLogo = document.querySelector(".mainvisual-logo");
const mainVisualName = new SplitType(".mainvisual-name-text,.mainvisual-name-text2,.mainvisual-name-text3");

const timeline = gsap.timeline();
timeline.fromTo(mainVisualLogo, 
  {
    autoAlpha: 0,
    scale: 0.9,
  },
  {
    autoAlpha: 1,
    scale: 1,
    duration: 0.5,
  })
  .fromTo(".background-image",
  {
    x: -800,
  },
  {
    x: 0,
    duration: 2,
  })

  .fromTo(".mainvisual-name-text .char,.mainvisual-name-text2 .char,.mainvisual-name-text3 .char",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    stagger: 0.15,
    duration: 1,
    ease: Power2.easeInOut,
  },
  ">-2.2" 
  );
  
  
  
  
  const getBox = document.querySelectorAll(".list-animetion,.text-block");
  
  getBox.forEach((getBox) => {
    gsap.set(getBox,
      {
        y: 20,
        autoAlpha: 0,
      });
      gsap.to(getBox,
        {
          y: 0,
          autoAlpha: 1, 
          
          scrollTrigger: {
            trigger: getBox, 
            start: "bottom bottom", // アニメーションの開始位置
          }
        });
      }); //下からフワッとフェードイン
      
      const getContainer = document.querySelectorAll(".black-container,.white-container")
      
      getContainer.forEach((getContainer) => {
        gsap.set(getContainer,
          {
            y: 20,
            autoAlpha: 1,
          });
          gsap.to(getContainer,
            {
              y: 0,
              autoAlpha: 1, 
              
              scrollTrigger: {
                trigger: getContainer, 
                start: "top bottom", // アニメーションの開始位置
              }
            });
          }); //下からニュルっとフェードイン
          
          const getSkills1 = document.querySelector(".design-wrapper")
          gsap.fromTo(
            getSkills1, 
            {
              x: -50, 
              autoAlpha: 0,
            },
            {
              x: 0, 
              autoAlpha: 1, 
              scrollTrigger: {
                trigger: getSkills1, 
                start: "top center", 
              },
            }
            ); //左からフェードイン
            
            
            
            const getSkillsImage = document.querySelectorAll(".skills-image,.skills-image2")
            gsap.fromTo(
              getSkillsImage, 
              {
                scale: 0.9,
                autoAlpha: 0,
              },
              {
                scale: 1,
                autoAlpha: 1, 
                scrollTrigger: {
                  trigger: getSkillsImage, 
                  start: "top center", 
                },
              }
              ); //拡大しながらフェードイン
              
              
              const getSkills2 = document.querySelector(".development-wrapper")
              gsap.fromTo(
                getSkills2, 
  {
    x: 50, 
    autoAlpha: 0,
  },
  {
    x: 0, 
    autoAlpha: 1, 
    scrollTrigger: {
      trigger: getSkills2, 
      start: "top center", 
    },
  }
  ); //右からフェードイン
  
  
  gsap.utils.toArray('.js-popUp').forEach(target => {
    gsap.to(target,{scale:1,autoAlpha:1,
      ease:"back.out(1.7)",
      scrollTrigger:{
        trigger:target,
        start:'top bottom'
      }})
    }); //ポップインアニメーション
    
    
    gsap.utils.toArray('.js-popUps').forEach(target => {
      var targets = target.querySelectorAll(':scope > *');//targetの直下に要素を取得
      gsap.fromTo(targets,{scale:.9,autoAlpha:0},{scale:1,autoAlpha:1,
        ease:"back.out(1.7)",
        stagger:{
          each:.3
        },
        scrollTrigger:{
          trigger:target,
          start:'center bottom'
        }
      })
    }); //連続ポップインアニメーション
    
    
    // ハンバーガーメニューアニメーション
    
    const isMenuOpen = document.querySelector(".open");
    const isMenuClose = document.querySelector(".close");
    const isMenuClose2 = document.querySelectorAll(".close2")
    const getNav = document.getElementById("nav");
    const displayOriginal = getNav.style.display;
    const getHamburgerMenuNav = document.getElementById("hamburger-menu-nav");
    const displayOriginal2 = getHamburgerMenuNav.style.display;
    const getBody = document.querySelector("body");
    const overflowOriginal = getBody.style.overflow;
    
    const tl = gsap.timeline({ paused: true });
    
    isMenuClose.addEventListener("click", () => {
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
        }); //ハンバーガーメニュータップで元のナビ消して新しいナビ表示
        
        isMenuClose.addEventListener("click", () => {
          tl.timeScale(3);
          tl.reverse();
          getHamburgerMenuNav.style.display = 'none';
          getNav.style.display = displayOriginal;
          getBody.style.overflow = overflowOriginal;
        }); //ばつ印をタップすると元の画面に戻る

        for(let i = 0; i < isMenuClose2.length; i++) {
          isMenuClose2[i].addEventListener("click",()=>{
          tl.timeScale(3);
          tl.reverse();
          getHamburgerMenuNav.style.display = 'none';
          getNav.style.display = displayOriginal;
          getBody.style.overflow = overflowOriginal;
        }); //ページ内リンクをタップするとハンバーガーメニュが閉じる。
      }

        console.log(isMenuClose2)
        gsap.to(".background-image", {
          duration: 40,
          rotation: 360,
          repeat: -1, ease: Linear.easeNone
        }); //背景の車輪を回転
        
        
        
        
