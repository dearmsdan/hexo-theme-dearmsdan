$(document).ready(function(){
	// IE 浏览器 tips
	//$(".browsehappy").delay(5200).animate({display:"none"});
	$(".browsehappy div:nth-child(1)").fadeOut(3000);
	setTimeout(function () {
        $(".browsehappy").hide();

    }, 4000);
});