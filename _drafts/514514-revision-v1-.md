---
id: 617
date: '2019-01-01T15:52:27-07:00'
author: 'Neil Mayhew'
layout: revision
guid: 'http://www.beracah.ca/514-revision-v1/'
permalink: '/?p=617'
---

/\*jslint browser:true \*/  
/\*eslint-env browser, jquery \*/  
jQuery(document).ready(function ($) {  
 "use strict";  
 $("a\[href\]").each(function () {  
 var a = $(this),  
 href = a.attr("href");  
 if (href.match(/^mailto/i)) {  
 a.attr("href", href.replace("13@37", "@"));  
 }  
 });  
 $("area\[href\]").each(function () {  
 var a = $(this),  
 href = a.attr("href");  
 if (href.match(/^mailto/i)) {  
 a.attr("href", href.replace("13@37", "@"));  
 }  
 });  
 $(".site-description").each(function () {  
 var e = $(this);  
 e.text(e.text().replace("13@37", "@"));  
 });  
});