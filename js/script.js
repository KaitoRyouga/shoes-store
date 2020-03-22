$(document).ready(function () {
    new WOW().init();
    $(window).scroll(function(event){
        var pos_body = $('html,body').scrollTop();
        if(pos_body>50){
         $('.navbar-expand-lg').addClass('bg--dark').addClass('navbar-dark').removeClass('bg-transparent').removeClass('navbar-light');
            }
        else {
         $('.navbar-expand-lg').addClass('bg-transparent').addClass('navbar-light').removeClass('bd--dark').removeClass('navbar-light');
      }
        if(pos_body >200){
            $('.return-top').addClass('active-return');
        }else{
            $('.return-top').removeClass('active-return');
        }
    });
    $('.return-top').click(function(event) {
        $('html,body').animate({scrollTop:0}, 1500);
    });
    $('.active-slide').find('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
    	$('.sub-title').removeClass('sub-title-go-to-down');
    });
    $('.active-slide').find('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
    	$('.main-title').removeClass('main-title-go-to-left');
    });
    $('#next').click(function(event) {
    	var slide_sau = $('.active-slide').next();
    	if(slide_sau.length != 0){
    		$('.active-slide').removeClass('active-slide');
    		slide_sau.addClass('active-slide');
    		$('.active-slide').find('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
    			$('.sub-title').removeClass('sub-title-go-to-down');
    		});
    		$('.active-slide').find('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
    			$('.main-title').removeClass('main-title-go-to-left');
    		});
    	}else{
    		$('.active-slide').removeClass('active-slide');
    		$('.slide-position:first').addClass('active-slide');
    		$('.active-slide').find('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
    			$('.sub-title').removeClass('sub-title-go-to-down');
    		});
    		$('.active-slide').find('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
    			$('.main-title').removeClass('main-title-go-to-left');
    		});
    	}
    });
    $('#prev').click(function(event) {
    	var slide_truoc = $('.active-slide').prev();
    	if(slide_truoc.length != 0){
    		$('.active-slide').removeClass('active-slide');
    		slide_truoc.addClass('active-slide');
    		$('.active-slide').find('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
    			$('.sub-title').removeClass('sub-title-go-to-down');
    		});
    		$('.active-slide').find('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
    			$('.main-title').removeClass('main-title-go-to-left');
    		});
    	}
    	else{
    		$('.active-slide').removeClass('active-slide');
    		$('.slide-position:last').addClass('active-slide');
    		$('.active-slide').find('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
    			$('.sub-title').removeClass('sub-title-go-to-down');
    		});
    		$('.active-slide').find('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
    			$('.main-title').removeClass('main-title-go-to-left');
    		});
    	}
    });
    $('.products__detail').hover(function() {
        $(this).find('.selection-hover').addClass('active');
        $(this).find('.btn--showmore').addClass('jackInTheBox');
        $(this).find('.btn--buy').addClass('jackInTheBox');
    }, function() {
        $(this).find('.selection-hover').removeClass('active');
        $(this).find('.btn--showmore').removeClass('jackInTheBox');
        $(this).find('.btn--buy').addClass('jackInTheBox');
    });
});