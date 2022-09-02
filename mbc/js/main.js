document.addEventListener('DOMContentLoaded', () => {
  // HEADER JS CODE
  const HEADER = document.querySelector('#header');
  const H_CON = document.querySelector('#header .container');
  const LOGO = document.querySelector('#header .container h1 img');
  const DESC = document.querySelectorAll('.program_desc');
  const SLIDEDOTS = document.querySelector('.slide_dots').children;
  const dots_arr = [...SLIDEDOTS];

  let idx = 1;
  let url_set = ['./assets/image/header/header_bg_01.jpg', './assets/image/header/header_bg_02.jpg',
    './assets/image/header/header_bg_03.jpg'];

  // main_visual 슬라이드 코드
  const headerSlider = function () {
    if (idx == 2) {
      H_CON.style.color = '#212121';
      if (window.outerWidth <= 768) {
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo.png");
      } else {
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo-b.png")
      }
    } else {
      H_CON.style.color = '';
      LOGO.setAttribute('src', "./assets/image/logo/mbc-logo.png");
    }
    DESC.forEach((elm, index) => {
      elm.classList.remove('on');
      if (index == idx) {
        dots_arr.forEach(el => {
          el.classList.remove('on');
        })
        dots_arr[index].classList.add('on');
        elm.classList.add('on');
      }
    })
    HEADER.style.background = `linear-gradient(to bottom, rgba(5, 18, 26, 0) 0, rgba(33, 33, 33, 1) 90%), url(${url_set[idx]})`;
    idx < 2 ? idx++ : idx = 0;
  }


  // slide-dots 클릭 시 슬라이드 이동
  dots_arr.forEach((elm, iidx) => {
    elm.addEventListener('click', function () {
      dots_arr.forEach(elem => {
        elem.classList.remove('on');
      })
      DESC.forEach(el => {
        el.classList.remove('on');
      })
      if (iidx != 2) {
        H_CON.style.color = '';
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo.png");
      } else {
        H_CON.style.color = '#212121';
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo-b.png")
      }
      HEADER.style.background = `linear-gradient(to bottom, rgba(5, 18, 26, 0) 0, rgba(33, 33, 33, 1) 90%), url(${url_set[iidx]})`;
      elm.classList.add('on');
      DESC[iidx].classList.add('on');
      // slide-dots 클릭 이후 setInterval을 통해 원래 순서대로 slide가 돌아가게 하기 위한 코드
      idx = iidx;
    })
  })

  if (this.outerWidth > 768) {
    let slide = setInterval(headerSlider, 5000);
    window.addEventListener('resize', function () {
      let cidx = idx ? idx - 1 : 0;
      if (this.outerWidth <= 768) {
        this.clearInterval(slide);
        DESC.forEach(el => el.classList.remove('on'));
        DESC[0].classList.add('on');
      } else {
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo.png");
        DESC.forEach(el => el.classList.remove('on'));
        DESC[cidx].classList.add('on');
        slide = setInterval(headerSlider, 5000);
      }
    })
  }



  const SLIDESTART = document.querySelector('.xi-play-circle-o');
  const SLIDESTOP = document.querySelector('.xi-pause');

  // 슬라이드 재생 이벤트
  SLIDESTART.addEventListener('click', function () {
    slide = setInterval(headerSlider, 5000);
  })

  // 슬라이드 중지 이벤트
  SLIDESTOP.addEventListener('click', function () {
    clearInterval(slide);
  })

  // 반응형 이벤트
  console.log(this.outerWidth);
  if (this.outerWidth <= 768) {
    const GNB = document.querySelector('#header .gnb');
    const MAIN_MENU = [...document.querySelector('.main_menu').children];
    const SUB_MENU = document.querySelectorAll('.sub_menu');

    console.log(MAIN_MENU, SUB_MENU);
    document.querySelector('.side_menu .xi-bars').addEventListener('click', function () {
      GNB.classList.toggle('on');
      SUB_MENU.forEach(el => el.classList.remove('on'));
    });

    // 반응형 GNB 다단메뉴
    MAIN_MENU.forEach((elm, idx) => {
      elm.addEventListener('click', function () {
        SUB_MENU.forEach(elem => elem.classList.remove('on'));
        SUB_MENU[idx].classList.toggle('on');
      })
    })

  }

  // CATEGORY JS CODE
  const BROAD_TAB = document.querySelector('.category_list');
  const CONTENTS_TAB = document.querySelectorAll('.contents_box');


  let BROAD_LIST = [...BROAD_TAB.children];

  BROAD_LIST.forEach((elm, idx) => {
    if (elm.classList.contains('on') && CONTENTS_TAB[idx].classList.contains('on')) {
      elm.classList.add('on');
      CONTENTS_TAB[idx].classList.add('on');
    }
    elm.addEventListener('click', function () {
      CONTENTS_TAB.forEach((elem) => {
        elem.classList.remove('on');
      })
      BROAD_LIST.forEach((el) => {
        el.classList.remove('on');
      })
      CONTENTS_TAB[idx].classList.add('on');
      elm.classList.add('on');
    })
  });

  // NOTICE JS CODE
  const NOTICE_MENU = document.querySelector('#notice .lnb');
  const NOTICE_ML = [...NOTICE_MENU.children];

  const LIFE_CONTENTS = document.querySelectorAll('.tb_menu');

  NOTICE_ML.forEach((elm, idx) => {
    if (elm.classList.contains('on') && LIFE_CONTENTS[idx].classList.contains('on')) {
      elm.classList.add('on');
      LIFE_CONTENTS[idx].classList.add('on');
    }
    elm.addEventListener('click', function () {
      LIFE_CONTENTS.forEach((elem) => {
        elem.classList.remove('on');
      })
      NOTICE_ML.forEach((el) => {
        el.classList.remove('on');
      })
      LIFE_CONTENTS[idx].classList.add('on');
      elm.classList.add('on');
    })
  });
});
