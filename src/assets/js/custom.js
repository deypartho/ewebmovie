

if ($(window).width() < 767){
    $(document).on('click', '.nav-link', function(){
        $('.collapse').removeClass('show');
        $($('.collapse:not(.show)').css('display')=='none')
    })
    $(document).ready(function(){
        $('.navbar').addClass('fixed-top')
    })
}