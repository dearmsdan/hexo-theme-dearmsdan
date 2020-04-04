"use strict"
$(window).on("load", function () {
	
	
	//加载中...................
	$("#loading").css('zIndex','99999');
	$("#loading").delay(1000).fadeIn();
	$("#dearmsdan").delay(3000).addClass("wrapShow");

	

	
	
	
	
	

	//全局分布
	$(".main").css({ //右侧布的高度，相当于左侧高度
		height: $("#sidebar-nav").outerHeight()
	});
 // 取消
	/*$(".iframe_link").on("click", function () { //左侧a链接直接导入右侧iframe
		var url = $(this).attr("href");
		$(".iframe_mx").attr("src", url);
		return false;
	}); */

	$(".nav >li> a").click(function () { //一级导航点击后添加active
		$(".nav >li >a").removeClass("active");
		$(".nav >li >div").stop().slideUp();
		$(this).addClass("active");
	});
	
	$(".nav-togg").click(function () { //遇二级导航点击开关
		$(this).next().stop().slideToggle();
	});
	
	$(".btn-toggle-mx").click(function () { //logo旁的开关动画
		$(this).toggleClass("transmx");
	});





    //PC和移动端响应以及经过后
	$('.btn-toggle-fullwidth').on('click', function () {
		if (!$('body').hasClass('layout-fullwidth')) {
			$('body').addClass('layout-fullwidth');

		} else {
			$('body').removeClass('layout-fullwidth');
			$('body').removeClass('layout-default'); // also remove default behaviour if set
		}

		if ($(window).innerWidth() < 1025) {
			if (!$('body').hasClass('offcanvas-active')) {
				$('body').addClass('offcanvas-active');
			} else {
				$('body').removeClass('offcanvas-active');
			}
		}
	});
	// 这里是一边导航栏的滚动条slimScroll.min.js
	if ($('.sidebar-scroll').length > 0) {
		$('.sidebar-scroll').slimScroll({
			height: '98%',
			wheelStep: 20,
		});
	}

	addEventListener("load", function () {
		setTimeout(hideURLbar, 0);
	}, false);

	function hideURLbar() {
		window.scrollTo(0, 1);
	}

});

$(function(){
	
		// 乔巴
$(".header-anchor").each(function() {
  //var element = document.createElement("span");
 // $(element).attr("class", "");
 // $(element).html("<img class='qiaobaMove' src='' />");
  $(this).text("___");
});
	
	
});



