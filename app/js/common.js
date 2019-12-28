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


	// Универсальный dropdown-menu:
	/*
	*Use To html -->>
	    <div class="dropdown-menu">
	      <button class="btn-open">
	        <i class="fa fa-bars" aria-hidden="true"></i>
	      </button>
	      <button class="btn-close">
	        <i class="fa fa-times" aria-hidden="true"></i>
	      </button>

	      <ul class="your classname">
					your content
	      </ul>
	    </div>
	*/
	var $btn_open 			= $('.btn-open');
	var $btn_close 			= $('.btn-close');
	var $dropdowm_menu 	= $('.dropdown-menu > ul');
	
	$btn_open.click(function(event){
		 event.stopPropagation();
		 event.preventDefault();

		 $(this).parents('.dropdown-menu').find('ul').toggleClass('is-open');		 
	});

	$btn_close.click(function(event){
			event.stopPropagation();
			event.preventDefault();
			$dropdowm_menu.removeClass('is-open').addClass('close');

			setTimeout(function(event){
				$dropdowm_menu.removeClass('close');
			}, 1000);
	});

	// инициализируем слайдер и настраиваем его:
	$('.slider-block').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

});
