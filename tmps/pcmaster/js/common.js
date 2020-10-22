//masck
jQuery(function($){
   $(".phone-form").mask("+7(999) 999-9999");
});

//scroll-light
$(document).ready(function(){

  $(".menu a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
    return false;
  });

//=========================================
  $('.link-paper').click(function(){
		var hBlock = $('.paper').css('height');
		var hColapse = $('.colapse-block').css('height');
		if(hColapse == "0px"){
			$('.colapse-block').animate({height: hBlock},500);
		}else{
			$('.colapse-block').animate({height: '0px'},500);
		}
		return false;
	});

});

//меню
$(document).ready(function(){
	//Анимированная нопка
	$(".anim-btn").click(function(){
		$('.anim-btn').toggleClass('active');
		$('.main-nav').toggleClass('hidden');
	});
	$(".menu a[href^='#']").click(function(){
    $('.main-nav').toggleClass('hidden');
    $('.anim-btn').toggleClass('active');
  });
	//всплывающее меню

});