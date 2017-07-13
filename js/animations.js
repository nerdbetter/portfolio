('use strict');

$('.toggleMenu').on('click', function(){
  $('.mainNav').slideToggle('fast').toggleClass('show');
  $('.toggleMenu').toggleClass('fa-bars').toggleClass('fa-times');
});

$('.navList li a').on('click',function(){
  event.preventDefault();
  var activeTab = $(this).data('content');
  console.log(activeTab);
  $('.tab-content').fadeOut();
  var makeIDforTab = '#' + activeTab;
  $(makeIDforTab).fadeIn();
});
$(document).ready(function(){
  $('.tab-content').hide();
  $('#home').show();
});
