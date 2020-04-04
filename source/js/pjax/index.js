$(document).pjax('a[target!=_blank]', '.main', {fragment: '.main',timeout: 8000}); 
    	/* .main为刷新的id */
    $(document).on('pjax:send', function() {
		/* 预加载函数 */
    $(".loading").css("display", "block");
		
});

$(document).on('pjax:complete', function() {
	
	
	
		/* 回调函数解决文章页代码不高亮的问题*/
	   $(".dearmsdan-post pre,.dearmsdan pre").addClass("prettyprint linenums");
       if( $('.dearmsdan-post pre,.dearmsdan pre').length ){ prettyPrint(); }     
		/* 右侧布的高度，相当于左侧高度*/
		$(".main").css({ 
			height: $("#sidebar-nav").outerHeight()
		});
		/* 设置 post 样式*/
		$(".dearmsdan-post").css("animation","1s ease 0s 1 normal forwards running action_translateY");
	
		photo();
		links();
	
		/* 可能是文章自动生成目录及侧边栏目录滚动特效的插件toc-helper */
		/* new TocHelper().reload();*/
		//new TocHelper().reset();

		/* $("img[src$=jpg],img[src$=jpeg],img[src$=png],img[src$=gif]").parent("a[class!=noview]").addClass("swipebox");
		*/
    /* if( $('pre').length ){ prettyPrint(); }     //回调函数解决文章页代码不高亮的问题*/
    $(".loading").css("display", "none");
   /* pjax加载结束的回调函数 解决js无法定位的问题*/
});


		/* 外链保护http://link.zhd99.cn */
function links(){
	
	$("article a").not(".toc a,article h1 a,article h2 a,article h3 a,article h4 a,article h5 a,article h6 a,article .gallerys").attr("href",
																													function(){
		// 不是本站链接检测  article
		var str = this.href;
		var pattern = /http.+zhd99.cn/;
		var falg = pattern.test(str).toString().trim();
		
		var pattern2 = /http.+dearmsdan/;
		var falg2 = pattern2.test(str).toString().trim();
		if('true' != falg && 'true' != falg2){
			return 'http://link.dearmsdan.com/links.html' + '?target=' + str;
		   }
});
	
}

// 图片放大
function photo(){
	$(".dearmsdan-post img").each(function() {
		$('.dearmsdan-post img').attr("data-preview-src","");
	});
	window.PreviewPhoto();
}
$(function(){
	photo();
	links();
});
$(document).on('ready pjax:end', function(event) {
	links();
	
})
