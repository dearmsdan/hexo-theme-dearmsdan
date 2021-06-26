/*
 * @Autor: dearmsdan
 * @Date: 2021-06-26 12:07:19
 * @LastEditTime: 2021-06-26 14:13:36
 * @Description: 
 */
$(function(){

	//加载中延迟...................
	//$("#dearmsdan").delay(1000).addClass("wrapShow");
	
	
	

	//全局分布
	/*$(".main").css({ //右侧布的高度，相当于左侧高度
		//height: $("#sidebar-nav").outerHeight()
	});*/
	
 // 取消

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
			$('body').addClass('layout-fullwidth');    // 初始出现

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
		

	// 这里是一边导航栏的滚动条插件slimScroll.min.js
	if ($('.sidebar-scroll').length > 0) {
		$('.sidebar-scroll').slimScroll({
			height: '98%',
			wheelStep: 20,
			touchScrollStep: 50,
			color: "#57abf8cc",
			size: "7px",
		});
	}

	
	
	
 /*  每次刷新 侧边栏悬浮不同效果css   */
 var arr = ['btnEffect','btnEffect2','btnEffect3','btnEffect4','btnEffect5','btnEffect6'];
 var index = Math.floor((Math.random()*arr.length)); //arr[index]
 $('.nav >li > div> ul> li').addClass(arr[index]);
 $('.nav >li > div> ul> li').mousemove(function(){
	 var str = $('.nav >li > div> ul> li > div').hasClass("btnbg-x");
	 //alert(str);
	 if(false === str){
		 $('.nav >li > div> ul> li').prepend('<div class="btnbg-x"></div>');
		}
	 
 });


	
	
	
 /*  挂载输出注释   */
Function.prototype.getMultiLine = function () {
		var lines = new String(this);
		lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
		return lines;
}


});


