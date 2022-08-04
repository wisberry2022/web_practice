$(function () {
  // 동영상 재생하는 함수
  var PlayingYTP = function (playObj, src, containElem, ap_tf) {
    $(playObj).YTPlayer({
      videoURL: src,
      containment: containElem,
      autoPlay: ap_tf,
      mute: true,
      playOnlyIfVisible: true,
      ratio: '4/3',
      showControls: false,
      remember_last_time: false,
      loop: true,
    });
  }

  // 현재 슬라이드 이외의 슬라이드를 모두 정지시키는 함수
  var rotatingPause = function (playArr, c) {
    playArr.forEach((elm, index) => {
      if (index != c) {
        $(elm).YTPPause();
      }
    })
  }

  // 웹 접속 시에 처음으로 실행되는 슬라이드 이외의 슬라이드를 모두 정지시키는 함수
  var firstSettingYTP = function (playArr) {
    playArr.forEach(function (elm, idx) {
      if (idx != 0) {
        $(elm).YTPPause();
        $(elm).YTPSeekTo(0);
      }
    })
    $(playArr[0]).YTPPlay();
  }

  var YTPArr = ['#bg_video', '#bg_video_02', '#bg_video_03'];

  PlayingYTP('#bg_video', 'https://youtu.be/nDGv_jtZM0A', '.player01', true);
  PlayingYTP('#bg_video_02', 'https://youtu.be/GLkc8jtZGoU', '.player02', false);
  PlayingYTP('#bg_video_03', 'https://youtu.be/MdkFmOfRmNo', '.player03', false);

  firstSettingYTP(YTPArr);

  $('.main_visual').on('beforeChange', function (e, s, c) {
    var YTPArr = ['#bg_video', '#bg_video_02', '#bg_video_03'];
    rotatingPause(YTPArr, (c + 1 <= 2 ? c + 1 : 0));
    $(YTPArr[c ? (c - 1 >= 0 ? c : 2) : 0]).YTPSeekTo(0);
  })

  $('.main_visual').on('afterChange', function (e, s, c) {
    var YTPArr = ['#bg_video', '#bg_video_02', '#bg_video_03'];
    $(YTPArr[c ? c : 0]).YTPPlay();
  })

  $(window).on('scroll', function () {
    // console.log($(this).scrollTop(), $('.sony_product').offset().top);
    if ($(this).scrollTop() >= $('.sony_product').offset().top) {
      $('.left_menu').removeClass('show_on');
    }
  });

  $('.main_visual').slick({
    arrows: false,
    dots: true,
    // fade: true,
  });

  $('.icon_menu .xi-search').on('click', function () {
    $('.gnb .search_box').toggleClass('on');
  })

  $('.icon_menu li:last-child').on('click', function (e) {
    e.preventDefault();
    $('.left_menu').toggleClass('show_on');
  })

  $('.event .event_slider').slick({
    arrows: false,
    slidesToShow: 3,
  });

  $('.event i:nth-of-type(1)').on('click', function () {
    $('.event .event_slider').slick('slickPrev');
  })

  $('.event i:nth-of-type(2)').on('click', function () {
    $('.event .event_slider').slick('slickNext');
  })

  $('.academy .left .monthly .btn').on('click', function () {
    var idx = $(this).parent().parent().index();
    $('.academy .schedule .right').eq(idx).addClass('tab').siblings().removeClass('tab');
  })
})