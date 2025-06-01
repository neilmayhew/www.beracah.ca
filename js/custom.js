/*jslint browser:true */
/*eslint-env browser, jquery */
jQuery(document).ready(function ($) {
	"use strict";
	$("a[href]").each(function () {
		var a = $(this),
			href = a.attr("href");
		if (href.match(/^mailto/i)) {
			a.attr("href", href.replace("13@37", "@"));
		}
	});
});
