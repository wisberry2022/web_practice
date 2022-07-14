$(function () {
  $('main .main_visual .container .main_slider').on('init reInit afterChange', function (e, s, c) {
    if (typeof (c) == 'undefined') {
      $('main .main_visual .container .slide_info>.brand_desc').eq(0).addClass('show').siblings().removeClass('show');
    } else {
      $('main .main_visual .container .slide_info>.brand_desc').eq(c).addClass('show').siblings().removeClass('show');
    }
  });

  $('#header .lang_switch span').on('click', function () {
    $(this).addClass('lang_toggle');
    $(this).siblings().removeClass('lang_toggle');
  });

  $('main .main_visual .container .main_slider').slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '170px',
    dots: true,
  });

  $('main .slide_info .arrow_set .left i').on('click', function () {
    $('main .main_visual .container .main_slider').slick('slickPrev');
  });

  $('main .slide_info .arrow_set .right i').on('click', function () {
    $('main .main_visual .container .main_slider').slick('slickNext');
  });

  $('main .intro_list span').on('click', function () {
    var idx = $(this).parent().parent().index();
    $('main .intro_list li').eq(idx).addClass('click_on').siblings().removeClass('click_on');
    $('.business_intro .intro_desc_box li').eq(idx).addClass('image_show').siblings().removeClass('image_show');
    $('.business_intro .business_desc li').eq(idx).addClass('desc_show').siblings().removeClass('desc_show');
  });

  $('.product .pd_menu li').on('click', function () {
    var idx = $(this).index();
    $(this).addClass('menu_click').siblings().removeClass('menu_click');
    $('.product .pd_list').eq(idx).addClass('pd_show').siblings().removeClass('pd_show');
  });

  $('#family_site').on('change', function () {
    var link = $(this).val();
    if (link) {
      window.open(link);
    }
  });
})