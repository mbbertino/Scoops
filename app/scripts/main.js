$(document).ready(function(){

	$('.header').on('click','.js-shop', function(){
		console.log('click')
		$('.landing-center').toggleClass('hidden')
		$('.product-gallery').toggleClass('hidden')
	})

	$('.product-gallery').on('click','.js-prod-unit', function(){
		console.log('click')
		$('.product-gallery').toggleClass('hidden')
		$('.product-page').toggleClass('hidden')
	})

})