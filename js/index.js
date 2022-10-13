$(document).ready(function(){
    $("#slider").owlCarousel({
        items: 4,
        margin: 40,
        loop: true,
        stagePadding: 80,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            1040: {
              items: 4
            },
            992: {
              items: 4
            },
            767: {
              items: 2
            },
            375: {
              items: 1
            }
        }
    });
});

// Услуги скролл

let flag = false;

$('#btn1').click(function () {
    if(!flag){
     $('#block2').slideDown();
    }else{
     $('#block2').slideUp();
    }
    flag = !flag;
});

// Отзывы скролл

$('#btn2').click(function(){
  $('#review2').slideDown();
  $('#btn2').hide()
});

// Бургер меню

$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});