const burger = $('.header__burger');
const menu = $('.navigation__menu');

burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('header__burger--close');
    menu.toggleClass('open');
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('open');
        burger.removeClass('header__burger--close');
    }
});

$('body').on('click', '.navigation__menu a[href*="#"]', function(e) {
	var fixed_offset = 70;

	$('html,body').stop().animate({
			scrollTop: $(this.hash).offset().top - fixed_offset
	}, 500);

	e.preventDefault();
	menu.removeClass('open');
	burger.removeClass('header__burger--close');
});