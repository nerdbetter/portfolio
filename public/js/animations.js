('use strict');

$('.toggleMenu').on('click', function(){
  $('.mainNav').toggleClass('show');
  $('.toggleMenu').toggleClass('fa-bars').toggleClass('fa-times');
});

$('.navList li').on('click',function(){
  event.preventDefault();
  var activeTab = $(this).data('content');
  console.log(activeTab);
  $('.tab-content').hide();
  var makeIDforTab = '#' + activeTab;
  $(makeIDforTab).show();
  //$(this).toggleClass('hideActive');

});
$(document).ready(function(){
  $('.tab-content').hide();
  //$('#home').show();
});
