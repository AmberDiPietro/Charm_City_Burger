$(".burgerLinks").click(function() {
    $('html,body').animate({
        scrollTop: $(".trythis").offset().top},
        'slow');
});