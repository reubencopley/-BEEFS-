// JavaScript Document

$('.linkdetails').hide();

$('.link').click(function() {
    $('.linkdetails').hide();
    $('.linkdetails[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);




});