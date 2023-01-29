$(function() {
    console.log(1)
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
    // Fancybox.bind('[data-fancybox="gallery"]', {
    //   Carousel: {
    //     on: {
    //       change: (that) => {
    //         // Sync Carousel slide
    //         mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
    //           friction: 0,
    //         });
    //       },
    //     },
    //   },
    // });
});