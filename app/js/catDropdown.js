// multi level menu

$('.catDrop-list a').click(function(event) {
  var $current_li = $(this).parent('.catDrop-item');

  if ( $current_li.children('.catDrop__submenu').length > 0 ) {
    event.stopPropagation();
    event.preventDefault();
    $current_li.toggleClass('active').siblings().removeClass('active');
  }



  $( $(this).parents('.catDrop__submenu').get(0) ).find('li').each(function(){
    if ( this != $current_li.get(0) ) {
      $(this).removeClass('active');
    }
  });

});