$(document).ready(function() {
	
	/**
	 * Lettering
	 */
	$(".site-title").lettering();
		
	/**
	 * How do you do?
	 */
			$( '#howdy' ).howdyDo({
				action		: 'push',
				effect		: 'slide',
				easing		: 'easeInOutExpo',
				duration	: 500,
				openAnchor	: '<span class="iconic arrow_down"></span>',
				closeAnchor	: '<span class="iconic arrow_up"></span>'
			});	
	/**
	 * Sticky social buttons
	 */
	moveScroller();

	/**
	 * Load Tweet Button Script
	 */
	var e = document.createElement('script');
	e.type="text/javascript"; e.async = true;
	e.src = 'http://platform.twitter.com/widgets.js';
	document.getElementsByTagName('head')[0].appendChild(e);
	
	/*
	 * Load LinkedIn button
	 */
	var e = document.createElement('script');
	e.type="text/javascript"; e.async = true;
	e.src = 'http://platform.linkedin.com/in.js';
	document.getElementsByTagName('head')[0].appendChild(e);
	
	/**
	 * Load Plus One Button
	 */
	var e = document.createElement('script');
	e.type="text/javascript"; e.async = true;
	e.src = 'https://apis.google.com/js/plusone.js';
	document.getElementsByTagName('head')[0].appendChild(e);
	
});


/**
 * Sticky social buttons
 */
function moveScroller() {
	var a = function() {
		var b = $(window).scrollTop();
		var d = $("#scroller-anchor").offset().top;
		var c=$("#scroller");
		if (b>d) {
		c.css({position:"fixed",top:"20px"})
		} else {
			if (b<=d) {
				c.css({position:"relative",top:""})
			}
		}
	};
	$(window).scroll(a);a()
}


/**
 * Load Facebook Button Script
 */
window.fbAsyncInit = function() {
	FB.init({appId: '<APPID>', status: true, cookie: true, xfbml: true});
};
(function() {
	var e = document.createElement('script');
	e.type = 'text/javascript';
	e.src = document.location.protocol +
		'//connect.facebook.net/en_US/all.js';;
	e.async = true;
	document.getElementById('fb-root').appendChild(e);
}());