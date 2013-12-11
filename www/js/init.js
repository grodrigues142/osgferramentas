// JavaScript Document

function header_root(elemento){
	$('body').live('pageinit', function (event, ui) {
		$(elemento).load('includes/header_root.html').trigger("create");
	});
	/*
$.get("includes/header_root.html", function(data) {
		$(elemento).html(data);
	});
*/
}
function header_back(elemento){
	$('#home_video').live('pageinit', function (event, ui) {
		$(elemento).load('includes/header_with_back.html').trigger("create");
	});
	/*
$.get("includes/header_with_back.html", function(data) {
		$(elemento).html(data);
	});
*/
}
function header_close(elemento){
	$('body').live('pageinit', function (event, ui) {
		$(elemento).load('includes/header_with_close.html').trigger("create");
	});
	/*
$.get("includes/header_with_close.html", function(data) {
		$(elemento).html(data);
	});
*/
}


function footer(elemento){
	$('body').live('pageinit', function (event, ui) {
		$(elemento).load('includes/footer.html').trigger("create");
	});
	/*
$.get("includes/footer.html", function(data) {
		$(elemento).html(data);
	});
*/
}