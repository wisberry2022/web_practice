$(function () {
  // 섹션마다 sticky를 붙여주는 함수
  var onSticky = function (hideObject, stickyObject, changeBgObject, className, time) {
    $(hideObject).addClass('hide');
    setTimeout(function (e) {
      $(stickyObject).addClass('sticky');
      $(changeBgObject).addClass(className);
    }, time)
  }

  // 섹션마다 sticky를 붙여주는 함수2 - absolute된 이미지에 opacity주기
  var onSticky_img = function (hideObject, stickyObject, aftershowObject, changeBgObject, className, time) {
    $(hideObject).addClass('hide');
    setTimeout(function (e) {
      $(stickyObject).addClass('sticky');
      $(aftershowObject).addClass('after_show');
      $(changeBgObject).addClass(className);
    }, time)
  }

  // js로 붙여준 클래스 한꺼번에 지워주는 함수
  var deleteClass = function (removeObj_array) {
    removeObj_array.forEach(el => {
      el.deleteSet.forEach(elm => {
        $(el.name).removeClass(elm);
      })
    });
    $('main .sims').addClass('origin');
  }


  $('#header .main_slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
  });


  $('.ea_news .news_box').not('.slick-initialized').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 1900,
        settings: "unslick"
      }
    ]
  });

  function ea_news_slick() {
    $('.ea_news .news_box').not('.slick-initialized').slick({
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 1900,
          settings: "unslick"
        }
      ]
    });
  }

  $(window).on('resize', ea_news_slick);


  $('.ea_news .container>i:nth-of-type(1)').on('click', function () {
    $('.ea_news .news_box').slick('slickPrev');
  });

  $('.ea_news .container>i:nth-of-type(2)').on('click', function () {
    $('.ea_news .news_box').slick('slickNext');
  });

  $(window).scroll(function () {
    var viewWidth = $(window).width();
    if (viewWidth > 768) {
      if ($(this).scrollTop() > 450) {
        $('.brand_intro .img_box').addClass('show');
        if ($(this).scrollTop() > 1600) {
          onSticky('main .sims .inner', 'main .btf', 'main .sims', 'changeBackground', 500);
        }
        if ($(this).scrollTop() > 2800) {
          onSticky_img('main .btf .inner', 'main .fifa', 'main .fifa .intro_img_01', 'main .sims', 'doubleChange', 500);
        }
        if ($(this).scrollTop() > 3750) {
          $('main .fifa>.btn').addClass('go');
        }
      }
    } else {
      var removeObj = [
        { name: 'main .sims .inner', deleteSet: ['hide'] },
        { name: 'main .btf', deleteSet: ['sticky'] },
        { name: 'main .sims', deleteSet: ['changeBackground', 'doubleChange', 'origin'] },
        { name: 'main .btf .inner', deleteSet: ['hide'] },
        { name: 'main .fifa', deleteSet: ['sticky'] },
        { name: 'main .fifa .intro_img_01', deleteSet: ['after_show'] },
        { name: 'main .fifa>.btn', deleteSet: ['go'] },
      ]

      deleteClass(removeObj);
    }
  })

  $(window).scroll(function () {
    var viewWidth = $(window).width();
    if (viewWidth > 768) {
      if ($(this).scrollTop() > $('main .brand_intro').offset().top) {
        $('.scroll_up').addClass('opac');
      }
      if ($(this).scrollTop() < $('main .brand_intro').offset().top) {
        $('.scroll_up').removeClass('opac');
      }
    }
  });

  $('.scroll_up').on('click', function () {
    var removeObj = [
      { name: 'main .sims .inner', deleteSet: ['hide'] },
      { name: 'main .btf', deleteSet: ['sticky'] },
      { name: 'main .sims', deleteSet: ['changeBackground', 'doubleChange', 'origin'] },
      { name: 'main .btf .inner', deleteSet: ['hide'] },
      { name: 'main .fifa', deleteSet: ['sticky'] },
      { name: 'main .fifa .intro_img_01', deleteSet: ['after_show'] },
      { name: 'main .fifa>.btn', deleteSet: ['go'] },
    ]

    $('html').animate({ scrollTop: 0 }, 1500);

    var executeFunction = function () { deleteClass(removeObj) };

    setTimeout(executeFunction, 2500);
  })

  $('main .fifa>.btn').on('click', function () {
    $('html').animate({ scrollTop: $('main .ea_games').offset().top }, 1000);
  })

  // 반응형
  $('#header .res_btn').on('click', function () {
    $('#header .gnb').toggleClass('res_show');
  })

});