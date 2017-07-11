$('.toggleMenu').on('click', function(){
  $('.mainNav').slideToggle('fast').toggleClass('show');
  $('.toggleMenu').toggleClass('fa-bars').toggleClass('fa-times');
});
