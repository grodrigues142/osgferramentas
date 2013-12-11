//$(document).bind("mobileinit", function() {
$(document).ready(function(){
	/*
	$("#video_menu").bind("ended", function() {
	   //TO DO: Your code goes here...
	   ///alert('acabou');
	});
	*/
	
	alert('asdfa');
	
	$("#video_menu").on("timeupdate", function(event){
		onTrackedVideoFrame(this.currentTime, this.duration);
		
	});
	
	
	
	
	/// LINKS
	///// CABECOTES
	$('#bt_cabecote_1').click(function(){
		$.mobile.changePage('automotivo_cabecote_1.html', {transition: "slide", reverse: false} );
	});
	$('#bt_cabecote_2').click(function(){
		$.mobile.changePage('automotivo_cabecote_2.html', {transition: "slide", reverse: false} );
	});
	$('#bt_cabecote_3').click(function(){
		$.mobile.changePage('automotivo_cabecote_3.html', {transition: "slide", reverse: false} );
	});
	
});
function onTrackedVideoFrame(currentTime, duration){
    $("#tempovideo").text(currentTime);
    
    if(currentTime >= 2) {
    	$('#content_menu').show();
    	$('#content_video').hide();
    }
}