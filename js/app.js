$(function() {

	// Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPosition = $(window).scrollTop();
	let nav = $("#nav");

	checkScroll(scrollPosition, introH);

	$(window).on("scroll resize", function() {

		let introH = intro.innerHeight();

		scrollPosition = $(this).scrollTop();

		checkScroll(scrollPosition, introH);
	});

	function checkScroll(scrollPosition, introH) {
		if (scrollPosition > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll

	$("[data-scroll]").on("click", function() {
		event.preventDefault();

		let blockId = $(this).data('scroll'); // scroll -То что в html прописано в атрибуте дата
		let blockOffset =$(blockId).offset().top;

		nav.removeClass("active");

		$("html, body").animate({
			scrollTop: blockOffset - 50
		}, 700);
	});

	// Nav Toogle

	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("active");
	});
	
 	// Slider https://kenwheeler.github.io/slick/

 	let slider = $("#reviewsSlider");


	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
		


});