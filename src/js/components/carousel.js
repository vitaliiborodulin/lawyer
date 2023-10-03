const cd = document.querySelector(".carousel__diploma");

if(cd){

	const diplomaCarousel = new Carousel(cd, {
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

}

const sc = document.querySelector(".carousel__sert");

if(sc){

	const sertCarousel = new Carousel(sc, {
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

}

// const feedbackCarousel = new Carousel(document.querySelector(".carousel__feedback"), {
// 	'slidesPerPage' : 1,
// 	'infinite' : false, 
// });