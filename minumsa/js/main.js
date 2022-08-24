window.addEventListener('DOMContentLoaded', function () {
  // HEADER JS CODE
  const newBookSwiper = new Swiper(".bookSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 60,
        loop: true,
      },
    },
  })

  const btmSwiper = new Swiper(".bottom_swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  const topSwiper = new Swiper(".top_swiper", {
    loop: true,
    slidesPerview: 1,
    spaceBetween: 20,
    thumbs: {
      swiper: btmSwiper,
    }
  });

  const media_swiper = new Swiper(".media_slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: -40,
      }
    }
  })

  const image_arr = ['./assets/image/header/header_book_01.jpg', './assets/image/header/header_book_02.jpg', './assets/image/header/header_book_03.jpg', './assets/image/header/header_book_04.jpg'];

  const FIG = document.querySelector('.book_img_set').children;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const BOOK_IMG_LI = document.querySelector('.book_img_set');
  const BOOK_DESC_LI = document.querySelector('.book_desc');

  // HEADER 탭 메뉴 구현 코드
  BOOK_IMG_LI.addEventListener('click', function (e) {
    const FV = document.querySelector('.firstVisual');
    if (e.target != e.currentTarget) {
      let afterIndex = 0;
      // 클릭한 사진의 인덱스를 구하는 코드
      this.children.forEach((elm, idx) => {
        if (e.target == elm.children[0]) {
          afterIndex = idx;
        }
      })
      // BOOK_DESC 변경 이벤트
      BOOK_DESC_LI.children.forEach((elm, idx) => {
        elm.classList.remove('on');
        if (afterIndex == idx) {
          elm.classList.add('on');
        }
      });

      FV.style.backgroundImage = `url(${image_arr[afterIndex]})`;
    }
  })

  // LITTOR SECTION JS CODE
  const LITTOR_MENU = document.querySelector('.littor_menu');
  const LITTOR_LIST = document.querySelector('.littor_list').children;

  // LITTOR SECTION 탭 메뉴
  LITTOR_MENU.addEventListener('click', function (e) {
    this.children.forEach((elm, idx) => {
      elm.classList.remove('on');
      if (e.target == elm) {
        elm.classList.add('on');
        LITTOR_LIST.forEach((el) => {
          el.classList.remove('on');
        });
        LITTOR_LIST[idx].classList.add('on');
      }
    })
  })

  // 반응형 메뉴 버튼 클릭 이벤트
  const MAIN_UL = document.querySelector('.main_menu');
  const MBTN = document.querySelector('.mbtn');

  MBTN.addEventListener('click', function (e) {
    MAIN_UL.classList.toggle('on');
  })

  // 반응형 메뉴 다단메뉴 이벤트
  MAIN_UL.addEventListener('click', function (e) {
    const CURRENT = e.target.parentNode.children[1];
    // toggle 진행 시 두 번째 클릭 때에도 forEach메소드를 진행하고 난뒤라도 HTML 요소에 .on 이 붙어있어야 한다
    MAIN_UL.children.forEach((elm) => {
      if (elm.children[1] != CURRENT) {
        elm.children[1].classList.remove('on');
      }
    });
    CURRENT.classList.toggle('on');

  })
});