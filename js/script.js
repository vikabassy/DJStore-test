$(document).ready(function(){

	// Подчеркивание под активным пунком меню
	$('.menu__navLink').click(function(){
		$('.menu__navLink').removeClass('active');
		$(this).addClass('active');
	});

	// Позволяет прятать header при скролле вниз и показывать при скролле вверх
	let header = $('.header'),
	scrollPrev = 0;

	$(window).scroll(function() {
		let scrolled = $(window).scrollTop();
		if ( scrolled > 0 && scrolled > scrollPrev ) {
			header.addClass('out');
		} else {
			header.removeClass('out');
		}
		scrollPrev = scrolled;
	});

	// Вызов POPUP окна при нажатии на ссылку "Обратный звонок", иконку телефона и кнопку
	$('#callName, #callLogo, #callButton').click(function(){
		$('.popUpHideShow').show();
		$('.overlay_popUp').show();
	});

	// Вызов POPUP окна при нажатии на кнопку в мобильной версии
	$('#callMobile').click(function(){
		$('.popUpBoxMobile').show();
		$('.callPopUpMobile_overlay').show();
	});

	// Скрытие POPUP окна при нажатии на область вокруг в мобильной версии и 
	// удаление всех данных из полей ввода
	$('.callPopUpMobile_overlay, #okButtonMobile').click(function(){
		$('.popUpBoxMobile, .callPopUpMobile_overlay, .successHideShowMobile').hide();
		$('.userDataMobile').css('border-color', '#aaa');
		$('#emptyInputMobile').hide();
		$('.userDataMobile').val('');
		$('#agreeCheckboxMobile').prop('checked', false);
	});

	// Проверка заполненности всех полей ввода в мобильной версии и принятия соглашения
	$('#sendButtonMobile').click(function(){
		if (($('#agreeCheckboxMobile').is(':checked')) && ($('#userNameMobile').val().length >= 1) && 
		($('#userNumberMobile').val().length >= 1)) {
			$('.popUpBoxMobile').hide();
			$('.successHideShowMobile').show();
		} else if (($('#userNumberMobile').val().length < 1) && ($('#userNameMobile').val().length < 1)) {
			$('#emptyInputMobile').show();
			$('#emptyInputMobile').css('margin-top', -25);
			$('#userNumberMobile').css('border-color', 'red');
			$('#userNameMobile').css('border-color', 'red');
		} else if ($('#userNameMobile').val().length < 1) {
			$('#emptyInputMobile').show();
			$('#emptyInputMobile').css('margin-top', -25);
			$('#userNameMobile').css('border-color', 'red');
		} else if ($('#userNumberMobile').val().length < 1) {
			$('#emptyInputMobile').show();
			$('#emptyInputMobile').css('margin-top', -25);
			$('#userNumberMobile').css('border-color', 'red');
		}
	});




	// Вызов меню по нажатию кнопки в мобильной версии
	$('.menuMobile').click(function(){
		$('.openMenuMobile').show();
		//$('.content').css('height', parseInt($('.openMenuMobile').css('height')));
	});

	// Скрытие меню по нажатию крестика в мобильной версии
	$('#closeMobileMenu').click(function(){
		$('.openMenuMobile').hide();
		/*$('.content').css('height', parseInt($('.headerMobile').css('height'))  
		+ parseInt($('.mainContentMobile').css('height')) 
		+ parseInt($('#prod2ImgMobile').css('height')));*/
	});

	// Выделение активной строки в меню мобильной версии
	$('.menuListMobile__line').click(function(){
		$('.menuListMobile__link').removeClass('menuListMobile__link--blue');
		$(this).children('.menuListMobile__link').addClass('menuListMobile__link--blue');
	});

	$('.link1').click(function(){
		$('.menuListMobile__image--black1').css('background', 'url(images/header/menu1Blue.svg)');
		$('.menuListMobile__image--black2').css('background', 'url(images/header/menu2Black.svg)');
		$('.menuListMobile__image--black3').css('background', 'url(images/header/menu3Black.svg)');
		$('.menuListMobile__image--black4').css('background', 'url(images/header/menu4Black.svg)');
		$('.menuListMobile__image--black5').css('background', 'url(images/header/menu5Black.svg)');
		$('.menuListMobile__image--black6').css('background', 'url(images/header/menu6Black.svg)');
	});
	$('.link2').click(function(){
		$('.menuListMobile__image--black1').css('background', 'url(images/header/menu1Black.svg)');
		$('.menuListMobile__image--black2').css('background', 'url(images/header/menu2Blue.svg)');
		$('.menuListMobile__image--black3').css('background', 'url(images/header/menu3Black.svg)');
		$('.menuListMobile__image--black4').css('background', 'url(images/header/menu4Black.svg)');
		$('.menuListMobile__image--black5').css('background', 'url(images/header/menu5Black.svg)');
		$('.menuListMobile__image--black6').css('background', 'url(images/header/menu6Black.svg)');
	});
	$('.link3').click(function(){
		$('.menuListMobile__image--black1').css('background', 'url(images/header/menu1Black.svg)');
		$('.menuListMobile__image--black2').css('background', 'url(images/header/menu2Black.svg)');
		$('.menuListMobile__image--black3').css('background', 'url(images/header/menu3Blue.svg)');
		$('.menuListMobile__image--black4').css('background', 'url(images/header/menu4Black.svg)');
		$('.menuListMobile__image--black5').css('background', 'url(images/header/menu5Black.svg)');
		$('.menuListMobile__image--black6').css('background', 'url(images/header/menu6Black.svg)');
	});
	$('.link4').click(function(){
		$('.menuListMobile__image--black1').css('background', 'url(images/header/menu1Black.svg)');
		$('.menuListMobile__image--black2').css('background', 'url(images/header/menu2Black.svg)');
		$('.menuListMobile__image--black3').css('background', 'url(images/header/menu3Black.svg)');
		$('.menuListMobile__image--black4').css('background', 'url(images/header/menu4Blue.svg)');
		$('.menuListMobile__image--black5').css('background', 'url(images/header/menu5Black.svg)');
		$('.menuListMobile__image--black6').css('background', 'url(images/header/menu6Black.svg)');
	});
	$('.link5').click(function(){
		$('.menuListMobile__image--black1').css('background', 'url(images/header/menu1Black.svg)');
		$('.menuListMobile__image--black2').css('background', 'url(images/header/menu2Black.svg)');
		$('.menuListMobile__image--black3').css('background', 'url(images/header/menu3Black.svg)');
		$('.menuListMobile__image--black4').css('background', 'url(images/header/menu4Black.svg)');
		$('.menuListMobile__image--black5').css('background', 'url(images/header/menu5Blue.svg)');
		$('.menuListMobile__image--black6').css('background', 'url(images/header/menu6Black.svg)');
	});
	$('.link6').click(function(){
		$('.menuListMobile__image--black1').css('background', 'url(images/header/menu1Black.svg)');
		$('.menuListMobile__image--black2').css('background', 'url(images/header/menu2Black.svg)');
		$('.menuListMobile__image--black3').css('background', 'url(images/header/menu3Black.svg)');
		$('.menuListMobile__image--black4').css('background', 'url(images/header/menu4Black.svg)');
		$('.menuListMobile__image--black5').css('background', 'url(images/header/menu5Black.svg)');
		$('.menuListMobile__image--black6').css('background', 'url(images/header/menu6Blue.svg)');
	});



	// Скрытие POPUP окна при нажатии на крестик и пространство вокруг и удаление всех данных из полей ввода
	$('.overlay_popUp, #okButton').click(function(){
		$('.overlay_popUp, .popUpHideShow, .successHideShow').hide();
		$('.userData').css('border-color', '#aaa');
		$('#emptyInput').hide();
		$('.userData').val('');
		$('#agreeCheckbox').prop('checked', false);
	});

	// Проверка заполненности всех полей ввода и принятия соглашения
	$('#sendButton').click(function(){
		if (($('#agreeCheckbox').is(':checked')) && ($('#userName').val().length >= 1) && 
		($('#userNumber').val().length >= 1)) {
			$('.popUpHideShow').hide();
			$('.successHideShow').show();
		} else if (($('#userNumber').val().length < 1) && ($('#userName').val().length < 1)) {
			$('#emptyInput').show();
			$('#emptyInput').css('margin-top', -25);
			$('#userNumber').css('border-color', 'red');
			$('#userName').css('border-color', 'red');
		} else if ($('#userName').val().length < 1) {
			$('#emptyInput').show();
			$('#emptyInput').css('margin-top', -25);
			$('#userName').css('border-color', 'red');
		} else if ($('#userNumber').val().length < 1) {
			$('#emptyInput').show();
			$('#emptyInput').css('margin-top', -25);
			$('#userNumber').css('border-color', 'red');
		}
	});

	// Создание слайдера
	let wrap = $('.slidewrapper');
	let width = parseInt($('.sliderItem').width() + 34);
	let margin = parseInt($('.slidewrapper').css('marginLeft'));
	let opacityItem = 0;
	let marginItem = parseInt($('.sliderItem').width() + 34);
	let sliderAmount = 0;
	$('.sliderItem:last').clone().prependTo('.slidewrapper');     // Копия последнего слайда помещается в начало.
 	$('.sliderItem').eq(1).clone().appendTo('.slidewrapper');     // Копия первого слайда помещается в конец.  
	$('.slidewrapper').css('margin-left', -width);				  // Начало слейдера сдвигается на ширину одного блока вправо

	// Нажатие на стрелку всправо листает под одному окну бесконечно
	// Делает левую кнопку синей, если активен не первый блок
	$('#rightButton').click(function(){
		sliderAmount = $('.slidewrapper').children().length;
		margin = parseInt($('.slidewrapper').css('marginLeft'));
		if (margin != (-width * (sliderAmount - 2))) {
			margin = margin - width;
			$('.slidewrapper').animate({marginLeft:margin},300); 
			$('#leftButton').css('background-image', 'url(images/slider/left_blue.png)');
		} else {
			$('.slidewrapper').css('margin-left', 0);
			margin = -width;
			$('.slidewrapper').animate({marginLeft:margin},300);
			$('#leftButton').css('background', 'url(images/slider/left.png)');
		}

		// Создает полупрозрачный фон для всех блоков кроме основного
		opacityItem = (-parseInt($('.slidewrapper').css('marginLeft'))/marginItem) + 1;
		console.log('p= ' + marginItem);
		console.log('opacityItem= ' + opacityItem);
		$('.numberSlider').removeClass('sliderItem__opacity');
		$('.textSlider').removeClass('sliderItem__opacity');
		$('.numberSlider').eq(opacityItem).addClass('sliderItem__opacity');
		$('.textSlider').eq(opacityItem).addClass('sliderItem__opacity');
		
	});

	// Нажатие левой кнопки пролистывает в самое начало
	// Возвращает левой кнопке серый цвет
	$('#leftButton').click(function(){
		margin = parseInt($('.slidewrapper').css('marginLeft'));
		console.log(margin);
		console.log(width);
		if (margin != -width) {
			margin = margin + width;
			$('.slidewrapper').animate({marginLeft:-width},300);
		} 
		$('.numberSlider').removeClass('sliderItem__opacity');
		$('.textSlider').removeClass('sliderItem__opacity');
		$('.numberSlider').eq(1).addClass('sliderItem__opacity');
		$('.textSlider').eq(1).addClass('sliderItem__opacity');
		$('#leftButton').css('background', 'url(images/slider/left.png)');
	});

	// POPUP окно при нажатии на синий +
	$('#circleProd1').click(function(){
		$('.aboutProduct').show();
		$('.aboutProductOverlay').show();
	});

	// Скрывание окна при нажатии на крестик или пространство рядом
	$('#closeIcon, .aboutProductOverlay').click(function(){
		$('.aboutProduct, .aboutProductOverlay').hide();
	});

	// POPUP окно при нажатии на синий + для мобильной версии
	$('#circleProd1Mobile').click(function(){
		$('.aboutProductMobile').show();
		$('.aboutProductOverlayMobile, #polygonProdMobile').show();
	});

	// Скрывание окна при нажатии на крестик или пространство рядом для мобильной версии
	$('#closeIconMobile, .aboutProductOverlayMobile').click(function(){
		$('.aboutProductMobile, .aboutProductOverlayMobile, #polygonProdMobile').hide();
	});

	// Настройка блока продукта по высоте равной размеру картинки
	$('.productImg').css('height', $('.prodImg').css('height'));
	$('#prod1ImgMobile').css('height', $('#prod2ImgMobile').css('height'));

	if ($(window).width() < 799){ 
		$('.content').css('height', parseInt($('.headerMobile').css('height'))  
		+ parseInt($('.mainContentMobile').css('height')) 
		+ parseInt($('#prod2ImgMobile').css('height')));
	} else {
		$('.content').css('height', 'auto');
	}
});

// Задается отступ сверху для блока с картинками
$('.productBox').css('margin-top', parseInt($('.prodImg').css('height'))*0.2);

$(window).resize(function(){
	$('.productBox').css('margin-top', parseInt($('.prodImg').css('height'))*0.2);
	if ($(window).width() < 799){ 
		$('.content').css('height', parseInt($('.headerMobile').css('height'))  
		+ parseInt($('.mainContentMobile').css('height')) 
		+ parseInt($('#prod2ImgMobile').css('height')));
	} else {
		$('.content').css('height', 'auto');
	}
});

// Настройка блока продукта по высоте равной размеру картинки
$(window).resize(function(){
	$('#prod1ImgMobile').css('height', $('#prod2ImgMobile').css('height'));
	$('.productImg').css('height', $('.prodImg').css('height'));
});


