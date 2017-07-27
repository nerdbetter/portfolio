('use strict');

$('.toggleMenu').on('click', function(){
  $('.mainNav').toggleClass('show');
  $('.toggleMenu').toggleClass('fa-bars').toggleClass('fa-times');
});

$(document).ready(function(){
  $('.tab-content').hide();
  $('#home').show();
});
