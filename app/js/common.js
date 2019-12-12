$(function(){
//Скрипты:

	// Включаем Aos.js
	AOS.init();

	AOS.init({
	  // Настройки, которые могут быть переопределены для каждого элемента с помощью атрибутов data-aos- *:
	  delay: 0, // значения от 0 до 3000 с шагом 50 мс
	  duration: 400, // значения от 0 до 3000 с шагом 50 мс
	  easing: 'ease', // ослабление по умолчанию для анимации AOS
	  once: true, // должна ли анимация происходить только один раз - при прокрутке вниз
	  mirror: true, // должны ли элементы анимироваться при прокрутке мимо них
	  anchorPlacement: 'top-bottom', // определяет, какая позиция элемента относительно окна должна вызывать анимацию

	});

// вешаем событие для выпадашки в хедере:
	$('.open-dropdown').click( function($event){
		$event.preventDefault();
			var $dropdown = $('.dropdown-menu');

					$dropdown.toggleClass('is-active');
	});

	// вешаем событие для выпадашки контактов:
	var $btn_open 		= $('.view-phones');
	var $btn_close 		= $('.btn-close-menu');
	var $phone_menu 	= $('.hidden-block');
	
	$btn_open.click(function($event){
		$event.preventDefault();
					
					$phone_menu.toggleClass('is-open');
	});

	$btn_close.click(function($event){
		$('.hidden-block.is-open').removeClass('is-open').addClass('close');

			setTimeout(function($event){
				$phone_menu.removeClass('close');
			}, 1000);
	});

});
