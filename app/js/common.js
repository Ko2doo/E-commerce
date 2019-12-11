$(function(){
//Скрипты:

// вешаем событие на ховер:
	$('.submenu').click( function(event){
		event.preventDefault();
			$('.invis-menu').toggleClass('active');
	})


});
