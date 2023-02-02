$(function() {
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
    var cleave = new Cleave('.input-phone', {
    	phone: true,
    	phoneRegionCode: 'ru'
    });
    const diplomaCarousel = new Carousel(document.querySelector(".carousel__diploma"), {
    	'slidesPerPage' : 2,
    	// 'friction' : 0.8,
    	'infinite' : false, 
    	// 'center': true, 
    	// 'fill' : false,
      // 'Autoplay': {
      //   timeout: 1000,
      // },
    	'Dots': false,
    	// Navigation: false,
    });
    
    const sertCarousel = new Carousel(document.querySelector(".carousel__sert"), {
    	'slidesPerPage' : 2,
    	// 'friction' : 0.8,
    	'infinite' : false, 
    	// 'center': true, 
    	// 'fill' : false,
      // 'Autoplay': {
      //   timeout: 1000,
      // },
    	'Dots': false,
    	// Navigation: false,
    });
    
    const feedbackCarousel = new Carousel(document.querySelector(".carousel__feedback"), {
    	'slidesPerPage' : 1,
    	// 'friction' : 0.8,
    	'infinite' : false, 
    	// 'center': true, 
    	// 'fill' : false,
      // 'Autoplay': {
      //   timeout: 1000,
      // },
    	// 'Dots': false,
    	// Navigation: false,
    });
    setTimeout(function(){ 
    	const fancybox = new Fancybox([
    			{src: "#back-popup"}
    	]);
    }, 15000);
});