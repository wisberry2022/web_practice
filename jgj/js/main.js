$(function () {
  // 원하는 위치로 스크롤 해주는 함수
  function toScroll(toObj, time) {
    var destination = $(toObj).offset().top;
    $('html, body').animate({ scrollTop: destination }, time);
  }

  // 스크롤 금지 함수
  function disableScroll(obj) {
    $(obj).addClass('hidden');
  }

  // 스크롤 금지 해제 함수
  function enableScroll(obj) {
    $(obj).removeClass('hidden');
  }

  $('header .main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $('.product .slide_box .right_slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  });

  $('header .main_slider').on('afterChange', function (e, s, c) {
    $('.main_visual .desc_list .desc_box').eq(c).toggleClass('on').siblings().removeClass('on');
  });

  $('.product .right_slider').on('afterChange', function (e, s, c) {
    $('.product .left_slider>.prd_desc').eq(c).toggleClass('on').siblings().removeClass('on');
  });

  $(window).on('scroll', function () {
    var screenWidth = $(this).width();
    if (screenWidth <= 768) {
      $('.wb_intro .container .letter').css('display', 'none');
    } else {
      if ((($('.wb_intro').offset().top - $(this).scrollTop()) <= 100) && (($('.wb_intro').offset().top - $(this).scrollTop()) >= -500)) {
        $('.wb_intro .container .letter').fadeIn(1000);
      } else {
        $('.wb_intro .container .letter').fadeOut(1000);
      }
    }

  });

  $('.wb_intro .target').on('click', function () {
    toScroll('.wb', 1000);
  });

  $('.wb_intro .container .letter').on('click', function () {
    toScroll(`.wb>div:nth-child(${$(this).index('.letter') + 1})`, 1000)
  })

  $('.brand_box a').on('click', function () {
    var idx = $(this).index();
    $('.brand_wrap .each_brand').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on');
  })

  $(document).mouseup(function (e) {
    if ($('.brand_wrap .each_brand').has(e.target).length == 0) {
      $('.brand_wrap .each_brand').removeClass('on');
      $('.brand_box a').removeClass('on');
    }
  })

  $('.media_tab li').on('click', function () {
    var idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.media .right').eq(idx).addClass('on').siblings().removeClass('on');
  })

  $('.mbtn').on('click', function () {
    $('header .container .gnb').toggleClass('rpsv');
  });

  $('header .main_menu>li').on('click', function () {
    var idx = $(this).index();
    $('.main_menu>li').eq(idx).toggleClass('rpsv').siblings().removeClass('rpsv');
  });

  $('html, body').on('scroll touchmove mousewheel', function (event) {
    if ($('.gnb').hasClass('rpsv')) {
      $('html, body').css('overflow', 'hidden');
      $('html, body').css('height', '100%');
    } else {
      $('html, body').css('overflow', '');
      $('html, body').css('height', '');
    }
  });

})