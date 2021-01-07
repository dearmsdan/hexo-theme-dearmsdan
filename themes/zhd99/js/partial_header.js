

$(document).pjax('a[target!=_blank]', '.nexmoe-primary', {fragment: '.nexmoe-primary',timeout: 8000}); //#nexmoe-content为刷新的id
    $(document).on('pjax:send', function() {
    $(".loading").css("display", "block");
    //预加载函数可写在这里
	
	
});


$(document).on('pjax:complete', function() {
    //回调函数
    //if( $('pre').length ){ prettyPrint(); }        //回调函数解决文章页代码不高亮的问题
    $(".loading").css("display", "none");
    //pjax加载结束的回调函数 解决js无法定位的问题
    //重新定位容器内容的函数写在这里
	
	// 网页diy 取出
	var color_idaa = Cookies.get('id_Cookie');

	if(color_idaa == 2){
		
	}
	
	
});



