$(document).ready(function(){
    $('.has-child').click(function(){
        $(this).find('ul').slideToggle(600);
        $(this).toggleClass('active-item');
    });
});