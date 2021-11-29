$(function () {
  $('.start__btn').click(function () {
    $('.modal').addClass('modal__active');
  });
 
  $('.exit__btn').click(function () {
    $('.modal').removeClass('modal__active');
  });
});