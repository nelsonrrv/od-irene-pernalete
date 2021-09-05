$(window).scroll(function(){
    var sticky = $('.fscroll'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 260) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });