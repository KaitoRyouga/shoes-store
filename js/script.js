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
    $('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
    	$('.sub-title').removeClass('sub-title-go-to-down');
    });
	$('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
		$('.main-title').removeClass('main-title-go-to-left')	
	});
    $('#next').click(function(event) {
    	var slide_sau = $('.active-slide').next();
    	if(slide_sau != 0){
	    	$('.active-slide').removeClass('active-slide');
	    	slide_sau.addClass('active-slide');
	  //   	$('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
   //  			$('.sub-title').removeClass('sub-title-go-to-down');
   //  		});
			// $('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
			// 	$('.main-title').removeClass('main-title-go-to-left')	
			// });

	    }
	    else{
	    	$('.active-slide').removeClass('active-slide');
	    	$('#slide-first').addClass('active-slide');
	  //   	$('.active-slide').removeClass('active-slide');
	  //   	$('.slide-position').addClass('active-slide');
	  //   	$('.sub-title').addClass('sub-title-go-to-down').one('webkitAnimationEnd', function(event) {
   //  			$('.sub-title').removeClass('sub-title-go-to-down');
   //  		});
			// $('.main-title').addClass('main-title-go-to-left').one('webkitAnimationEnd', function(event) {
			// 	$('.main-title').removeClass('main-title-go-to-left')	
			// });
	    }
	});
});