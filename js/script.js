/*global $*/

// Add fixed-top class to main navbar while scroll
$(window).scroll(function () {
    'use strict';
    var mainNav = $('.navbar-main'),
        height = 70;
	if ($(window).scrollTop() >= height) {
		mainNav.addClass('navbar-fixed-top');
	} else {
		mainNav.removeClass('navbar-fixed-top');
	}
});

// hover effect using mouse
$(function () {
    'use strict';
    $(' #da-thumbs > li ').each(function () {
        $(this).hoverdir();
    });
});