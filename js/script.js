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
});