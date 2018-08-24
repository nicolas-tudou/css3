var timer = setTimeout(function() {
    $('.bg').addClass('img_show');
    clearTimeout(timer);
}, 0.5);

$('li').on('click', function() {
    $(this).addClass('active');
    $('.box_wrapper').addClass('active_wrapper');

})

$('.close_btn').on('click', function(e) {
    e.stopPropagation();
    $('li').removeClass('active');
    $('.box_wrapper').removeClass('active_wrapper');
})