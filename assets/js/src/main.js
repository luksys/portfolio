jQuery( document ).ready(function($) {

	Typed.new('#say-hello-builder', {
		stringsElement: document.getElementById('say-hello'),
		typeSpeed: 10,
		onStringTyped: function() {
			$('#say-hello-builder .dot').addClass('is-active');
		}
	});

	// $('.navicon').on('click', function(e){
	// 	$(this).toggleClass('is-active');
	// });

	$('.hamburger').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('is-active');
		$('.main-nav .menu').toggleClass('is-active');
	});

});


