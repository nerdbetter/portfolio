$( '.fa-bars' ).click(function() {
  $( '.mainNav' ).slideToggle( 'slow', function() {
    $( '.fa-bars' ).hide();
    $( '.fa-times' ).show();
  });
});

$( '.fa-times' ).click(function() {
  $( '.mainNav' ).slideToggle( 'slow', function() {
    $( '.fa-times' ).hide();
    $( '.fa-bars' ).show();
  });
});
