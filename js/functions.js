/* placeholder */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/* placeholder end */

/* Slick Slider Init */
function slickSliderInit(){
	$('.slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7500
	});
}
/* Slick Slider Init end */

/*Drop Navigation*/
function dropNavigation() {
	$('.js-fn-btn').on('click', function () {
		var btn = $(this);
		btn
			.closest('.js-fn-wrapper')
			.toggleClass('expanded-nav')
			.find('.js-fn-nav')
			.stop()
			.slideToggle();
	})
}
function clearDrop(){
	$('.js-fn-nav').attr('style','');
	$('.js-fn-wrapper').removeClass('expanded-nav');
}
/*Drop Navigation end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	slickSliderInit();
	dropNavigation();
});
$(window).resize(function(){
	clearDrop();
});