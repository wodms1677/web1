(function($){

  // 네비게이션

  // 부드럽게 내려가기 slideDown()
  // 부드럽게 올라가기 slideUp()
  // $('.main-btn').mouseenter(function(){
  //   $('.sub').stop().slideUp(0);
  //   $(this).next().stop().slideDown(300);
  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
  // });
   
  // $('#nav').mouseleave(function(){
  //   $('.sub').stop().slideUp(300);
  //   $('.main-btn').removeClass('on');
  // });

  // 부드럽게 보이기 fadeIn()
  // 부드럽게 사라지기 fadeOut()

  // $('.main-btn').mouseenter(function(){
  //   $('.sub').stop().fadeOut(0);
  //   $(this).next().stop().fadeIn(300);
  // 
  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
  // });

  // $('.main-btn').on('mouseenter', function(){
  //   $('.sub').stop().fadeOut(0);
  //   $(this).next().stop().fadeIn(300);
  // 
  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
  // });

  // 객체(Object)
  $('.main-btn').on({
    mouseenter: function(){
      $('.sub').stop().fadeOut(0);
      $(this).next().stop().fadeIn(300);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    },
    focusin: function(){
      $('.sub').stop().fadeOut(0);
      $(this).next().stop().fadeIn(300);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    }
  });

  $('#nav').on({
    mouseleave:function(){
      $('.sub').stop().fadeOut(300);
      $('.main-btn').removeClass('on');
    }
  });

  // 메인 슬라이드
  let cnt=0;
  const slideWrap = $('.slide-wrap');
  const n=3; // 전체 슬라이드 갯수

  // 1. 메인슬라이드함수
  function mainSlide(){
    slideWrap.stop().animate({left:`${-100*cnt}%`}, 600, function(){
      cnt>n-1?cnt=0:cnt;
      slideWrap.stop().animate({left:`${-100*cnt}%`}, 0);
    });
  }
  // 2. 다음카운트함수
  function nextCount(){
    cnt++;
    mainSlide();
  }
  // 3. 자동타이머함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();

  // 공지사항&갤러리 탭메뉴 클릭 이벤트
  // 갤러리버튼
  $('.gallery-btn').on({
    click:function(){ // 마우스 클릭그리고 키보드는
    $('.notice-btn').addClass('on'); 
    $('.gallery-btn').addClass('on');
    $('.notice-box').addClass('on');
    $('.gallery-box').addClass('on');
    }
  });

  $('.notice-btn').on({
    click:function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
      $('.notice-box').removeClass('on');
      $('.gallery-box').removeClass('on');      
    }
  });

  // 레이어 팝업창
  $('.link-btn').on({
   click:function(){
      $('#modal').stop().fadeIn(300);
   } 
  });

  $('.close-btn').on({
    click:function(){
      $('#modal').stop().fadeOut(300);
    }
  });

})(jQuery);