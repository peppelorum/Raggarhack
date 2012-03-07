/**
 * Load Tweet Button Script
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

jQuery(document).ready(function($) {
	
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
	
	/**
	 * Load StumbleUpon button
	 */
	var e = document.createElement('script');
	e.type="text/javascript"; e.async = true;
	e.src =
	'http://www.stumbleupon.com/hostedbadge.php?s=1&a=1&d=stumbleupon-button';
	document.getElementsByTagName('head')[0].appendChild(e);
	
}