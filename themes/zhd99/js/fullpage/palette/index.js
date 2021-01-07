var _$paletteElement = $('.palette_color');
function _colorizePaletteItems() {
    $.each(_$paletteElement, function(i) {
        $(this).css('background-color', $(this).data('color'));
    })
}
function _togglePalette() {
    /* '.palette_color__main' */
    $('#live2d').mouseover('click', function() {
		$('.palette-wrapper').removeAttr("style");
    })
    $('#live2d').on('click', function() {
        $('.palette').toggleClass('palette__opened');
    })
    $('.palette_color').on('click', function() {
		// $('.palette_item_wrapper').removeAttr("style");
        // $('.palette').toggleClass('palette__opened');
		  $(".palette_item_wrapper div font").css('color','#000');
    })
}
function _initSetColor() {
    $('.palette_color').on('click', function() {
        var color = $(this).data('color');
		var id = $(this).data('id');
        _setColor(id,color);
    })
}
function _setColor(id,color) {
	setwwColor(id,color);
	var expires=new Date();
    expires.setTime(expires.getTime()+24*60*60*365*1000);
    var flag="color_Cookie="+color;
    document.cookie=flag+";expires="+expires.toGMTString();
	
	var flags="id_Cookie="+id;
    document.cookie=flags+";path=/;expires="+expires.toGMTString();
	
	 $('.palette').toggleClass('palette__opened');
}
_colorizePaletteItems();
_togglePalette();
_initSetColor();

/*链接 和 颜色cookie缓存*/

$(function(){
	
	
	// 网页diy 存入
	var color_id = Cookies.get('id_Cookie');
	var color = Cookies.get('color_Cookie');
	setwwColor(color_id,color);
	
	/* 外链保护http://link.zhd99.cn */
	$("article a").not(".toc a,article h1 a,article h2 a,article h3 a,article h4 a,article h5 a,article h6 a,article .gallerys").attr("href",
																													function(){
		// 不是本站链接检测  article
		var str = this.href;
		var pattern = /http.+zhd99.cn/;
		var falg = pattern.test(str).toString().trim();
		if('true' != falg){
			return 'http://link.zhd99.cn/link.html' + '?target=' + str;
		   }
});
	
	// token 防盗链
	function dearmsdanToken(url,p){
		time = new Date();
		etime = parseInt(time.getTime() / 1000) + 600; // 授权10分钟后过期
		key = 'dearmsdan';   // token防盗链密钥
		path = p;  // 文件相对路径
		str = md5(key + '&' + etime + '&' + path);
		sign = str.substr(12, 8) + etime;
		return url + '?_upt=' + sign;
		
	}
	$("article img,article iframe").attr("src",
function(){
		var dearsrc = this.src;
		var url = window.location.origin.length-1;
		var pach = this.src.substring(url);
		
		return dearmsdanToken(dearsrc,pach);
		
});
	$("article .gallerys").attr("href",
function(){
		var dearhref = this.href;
		var url = window.location.origin.length-1;
		var pach = this.href.substring(url);
		
		return dearmsdanToken(dearhref,pach);
		
});

	
	
	// 统一 图片资源 http 或者 https 
    	$("article img,article iframe").attr("src",
function(){
			var str = this.src;
			var tls = str.substring(0,5).toLowerCase().trim();
			
			
			var imgobj = new Image(); /* 判断是否存在 */
			imgobj.src = str;
			/* 没有该图片返回-1 */
			if(imgobj.fileSize > 0 || (imgobj.width > 0 && imgobj.height > 0) ){
				/*alert("无错误");*/
			}else{
				if('https' == tls){
				   return 'http' + str.substring(5);
				}else{
					return 'https' + str.substring(4);
				}
			}
		});	
		
		$("article .gallerys").attr("href",
function(){
			var str = this.href;
			var tls = str.substring(0,5).toString().toLowerCase().trim();
			var imgobj = new Image(); /* 判断是否存在 */
			imgobj.src = str;
			if(imgobj.fileSize > 0 || (imgobj.width > 0 && imgobj.height > 0) ){
				
			}else{
				if('https' == tls){
				   return 'http' + str.substring(5);
				}else{
					//$("article .gallerys").attr("href",'https' + str.substring(4));
					return 'https' + str.substring(4);
				}
			}
		});
	/* 设置iframe */




	
	
	
	
});




/*链接 和 颜色cookie缓存  END */



function setwwColor(id,color) {
	function color2(){
		
/***
引导页
***/
		 /* $(".section option1 fp-section active fp-table").removeAttr("style");*/
		 $(".fp-section.fp-table, .fp-slide.fp-table").css('background-color','#4e4e4eab');
/***
nexmoe-header
***/
		  /* 设置 左侧背景和填充 */
		 $("#nexmoe-header .mdui-drawer").css('box-shadow','inset 9px -20px 1rem 0px rgba(0, 0, 0, 0.91)');
		 $("#nexmoe-header .mdui-drawer").css('background-color','rgba(78, 78, 78, 0.87)');
		  
		   /* 设置 文章总数 span样式 */
		  $("#nexmoe-header .nexmoe-count div span").css('color','#ffffff');
		  $("#nexmoe-header .nexmoe-count div").css('color','#b6b6b6');
		  
		   /* mdui list 样式 */
		  $("#nexmoe-header .nexmoe-list .nexmoe-list-item").css('color','rgb(220, 220, 220)');
		  
		   /* 分类 list 样式 */
		  $("#nexmoe-header .nexmoe-widget-wrap").css('box-shadow','0 0 12px rgb(161, 177, 204)');
		  $("#nexmoe-header .nexmoe-widget-wrap").css('background-color','#1b1c1c00');
		  $("#nexmoe-header .nexmoe-widget-wrap .nexmoe-widget-title").css('border-bottom','1px solid #b77676');
		  $("#nexmoe-header .nexmoe-widget-wrap .nexmoe-widget-title").css('color','#FFF');
		  $("#nexmoe-header .nexmoe-widget-wrap .nexmoe-widget ul li a").css('color','#cccccc');
/***
nexmoe-content
***/ 
		  /* primary 搜索 */
		  $("#searchHover span").css('border','6px solid #656565');
		  
		  /* primary 背景 */
		  $("#nexmoe-content .nexmoe-primary").css('background-color','rgba(78, 78, 78, 0.8)');
		  $(".nexmoe-post-zhd99page").css('color','aliceblue');
		  $("#nexmoe-content .nexmoe-posts .nexmoe-post article").css('color','#c7c7c7');
		  boxshadows();
		  
		  /* primary 内容 */
		  $("article").css('color','aliceblue');
		  $("article h1, article h2, article h3, article h4, article h5, article h6").css('color','#ffffff');
		  
		  $("#nexmoe-background .nexmoe-bg").css('opacity','0.8');
		  
		  $('.upyun').css('color','aliceblue');
		  $('.upyun').css('background','rgba(0, 0, 0, 0.41)');
	}
	function none(){
		  //$(".fp-section.fp-table, .fp-slide.fp-table").removeAttr("style");
		  $(".nav-auto-hide-header").removeAttr("style");
		  $(".nav-auto-hide-header nav a").removeAttr("style");
		  $("#nexmoe-header .nexmoe-widget-wrap").removeAttr("style");
		  $("#nexmoe-content .nexmoe-primary").removeAttr("style");
		  $("#searchHover span").removeAttr("style");
		  $("#nexmoe-content .nexmoe-primary .nexmoe-page-nav").removeAttr("style");
		  $("#nexmoe-content .nexmoe-post .nexmoe-post-cover img").removeAttr("style");
		  $("#nexmoe-header .nexmoe-avatar, #nexmoe-header .nexmoe-avatar img").removeAttr("style");
		 $("#nexmoe-header .mdui-drawer").removeAttr("style");
		 $("#nexmoe-header .mdui-drawer").removeAttr("style");
		  $("#nexmoe-header .nexmoe-count div span").removeAttr("style");
		  $("#nexmoe-header .nexmoe-count div").removeAttr("style");
		  $("#nexmoe-header .nexmoe-list .nexmoe-list-item").removeAttr("style");
		  $("#nexmoe-header .nexmoe-widget-wrap").removeAttr("style");
		  $("#nexmoe-header .nexmoe-widget-wrap").removeAttr("style");
		  $("#nexmoe-header .nexmoe-widget-wrap .nexmoe-widget-title").removeAttr("style");
		  $("#nexmoe-header .nexmoe-widget-wrap .nexmoe-widget ul li a").removeAttr("style");
		  $("#searchHover span").removeAttr("style");
		  $("#nexmoe-content .nexmoe-primary").removeAttr("style");
		  $(".nexmoe-post-zhd99page").removeAttr("style");
		  $("#nexmoe-content .nexmoe-posts .nexmoe-post article").removeAttr("style");
		  $("article").removeAttr("style");
		  $("article h1, article h2, article h3, article h4, article h5, article h6").removeAttr("style");
		  $('.upyun').removeAttr("style");
		  
	}
	
	function boxshadows(){
		
//鼠标进 post
		$(".nexmoe-post").mouseover(function(){
		  //$(".nexmoe-post").css('box-shadow','0px 1px 24px 3px rgba(255, 255, 255, 0.35)');
		});
		$(".nexmoe-post").mouseout(function(){
		  $(".nexmoe-post").removeAttr('style');
		});
			
	}
		  
	if(0 == id){
		$(".fp-section.fp-table, .fp-slide.fp-table").removeAttr("style");
		  none();
    	// 默认8
	  }else if(1 == id){
		  none();
		  $(".nav-auto-hide-header").css('background-color','#ffffffad');
		  $(".nav-auto-hide-header nav a").css('color','#525252');
		  $("#nexmoe-header .nexmoe-widget-wrap").css('background-color','#ffffff59');
		  $("#nexmoe-content .nexmoe-primary").css('background-color','#ffffff85');
		  $("#searchHover span").css('border','6px solid #ffffff85');
		  $("#nexmoe-content .nexmoe-primary .nexmoe-page-nav").css('background-color','#f5f6f585');
		  $("#nexmoe-content .nexmoe-post .nexmoe-post-cover img").css('opacity','0.6');
		  $("#nexmoe-header .nexmoe-avatar, #nexmoe-header .nexmoe-avatar img").css('opacity','0.6');
		  $(".fp-section.fp-table, .fp-slide.fp-table").css('background-color','#ffffff85');
		  
		  $("#nexmoe-background .nexmoe-bg").css('opacity','0.2');
		  
	  }else if(2 == id){
		  //none();
		  
	  }else if(3 == id){
	  	//alert("3");
	  }else if(4 == id){
	  	//alert("4");
	  }else if(5 == id){
	  	//alert("5");
	  }else if(6 == id){
	  	//alert("6");
	  }else if(7 == id){
	  	//alert("7");
	  }else if(8 == id){
	  	//alert("8");
	  }else if(9 == id){
	  	//alert("9");
	  }
}
	


// 关闭
    $('.palette_item_wrapper div').on('click', function() {
		
    });