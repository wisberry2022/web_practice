$(function () {
  var s_cnt = 0;

  $('main .main_slider').on('Init beforeChange', function (e, s, c) {
    color_set = ['#bae2ee', '#f6d1a4', '#c0022e'];
    num_set = [0, 2, 1];
    var cnt = s_cnt;
    console.log('before_slide: ', c);
    if (cnt <= 0) {
      cnt *= -1;
      cnt %= 3;
      console.log(cnt);
      $('.new_product .next_box, .new_product .prev_box').css('background', color_set[num_set[cnt]]);
    } else if (cnt > 0) {
      cnt %= 3;
      $('.new_product .next_box, .new_product .prev_box').css('background', color_set[cnt]);
    }
  });

  $('#header_bg_video').YTPlayer({
    videoURL: 'https://youtu.be/LjRWdVdO50Y',
    containment: '#header',
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
    quality: 'highres',
    ratio: '4/3',
  });

  $('main .new_product .main_slider').slick({
    arrows: false,
    fade: true,
    speed: 500,
  });

  $('.new_product .prev_box').on('click', function () {
    s_cnt -= 1;
    $('.main_slider').slick('slickPrev');
  });

  $('.new_product .next_box').on('click', function () {
    s_cnt += 1;
    $('.main_slider').slick('slickNext');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 2100) {
      $('.ginza_edit .edit_box').eq(0).addClass('scroll');
    }
    if ($(this).scrollTop() > 3100) {
      $('.ginza_edit .edit_box').eq(1).addClass('scroll');
    }
    if ($(this).scrollTop() > 4100) {
      $('.ginza_edit .edit_box').eq(2).addClass('scroll');
    }
  })

});


