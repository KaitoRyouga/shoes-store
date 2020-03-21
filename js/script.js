$(document).ready(function () {
    $(window).scroll(function(event){
        var pos_body = $('html,body').scrollTop();
        if(pos_body>50){
         $('.navbar-expand-lg').addClass('bg--dark').addClass('navbar-dark').removeClass('bg-transparent').removeClass('navbar-light');
            }
        else {
         $('.navbar-expand-lg').addClass('bg-transparent').addClass('navbar-light').removeClass('bd--dark').removeClass('navbar-light');
      }
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
});