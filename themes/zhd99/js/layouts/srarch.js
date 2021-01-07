/*
 * 作者:helang
 * 邮箱:helang.love@qq.com
 * CSDN博客:https://blog.csdn.net/u013350495
 * 微信公众号:web-7258
 */

// 搜索按钮 
$('#searchFigure').click(function(){
	$(this).stop();
	$('#search-main').removeAttr("style");
	//$('#nexmoe-header').css("display","none");
	//$('#nexmoe-content').css("display","none");
	//$('#searchFigure').css("display","none");
	// 不可点击
	$('#drawer').css("pointer-events","none");
	$('.nexmoe-primary').css("pointer-events","none");
	$('#searchFigure').css("pointer-events","none");
	$('.content-resizer').css("pointer-events","none");
	
	// 透明
	$('#drawer').css("opacity","0.1");
	$('.nexmoe-primary').css("opacity","0.1");
	$('#searchFigure').css("opacity","0.1");
	$('.content-resizer').css("opacity","0.1");
showMsg('点击搜索框上的logo 返回','center');
	
});
// 移动端和pc 宽度问题的解决方法（获取焦点，代替padding
$('.container .input').click(function(){
	$('#local-search-input').focus();
});

// 隐藏搜索
$('.container .logo').click(function(){
	$('#search-main').css("display","none");
	
	// 不可点击
	$('#drawer').css("pointer-events","auto");
	$('.nexmoe-primary').css("pointer-events","auto");
	$('#searchFigure').css("pointer-events","auto");
	$('.content-resizer').css("pointer-events","auto");
	
	// 透明
	$('#drawer').css("opacity","1");
	$('.nexmoe-primary').css("opacity","1");
	$('#searchFigure').css("opacity","1");
	$('.content-resizer').css("opacity","1");
});
// 搜索颜色设置
$('.picker-list1').click(function(){
	$('.container .input').css("box-shadow","rgba(255, 155, 216, 0.63) 0px 0px 10px 0px inset");
});
$('.picker-list2').click(function(){
	$('.container .input').css("box-shadow","rgba(36, 138, 255, 0.63) 0px 0px 10px 0px inset");
});
$('.picker-list3').click(function(){
	$('.container .input').css("box-shadow","rgba(255, 1, 17, 0.43) 0px 0px 10px 0px inset");
});
$('.picker-list4').click(function(){
	$('.container .input').css("box-shadow","rgba(68, 255, 0, 0.43) 0px 0px 10px 0px inset");
});
$('.picker-list5').click(function(){
	$('.container .input').css("box-shadow","rgba(234, 176, 29, 0.56) 0px 0px 10px 0px inset");
});


/* 搜索 */
var helangSearch={
    /* 元素集 */
    els:{},
    /* 搜索类型序号 */
    searchIndex:0,
    /* 火热的搜索列表 */
    hot:{
        /* 颜色 */
        color:['#ff2c00','#ff5a00','#ff8105','#fd9a15','#dfad1c','#6bc211','#3cc71e','#3cbe85','#51b2ef','#53b0ff'],
        /* 列表 */
        list:[
            '博客',
            'qq:2646405301',
            'zhd99.top',
            'zhd99.cn'
        ]
    },
    /* 初始化 */
    init:function(){
        var _this=this;
        this.els={
            pickerBtn:$(".picker"),
            pickerList:$(".picker-list"),
            logo:$(".logo"),
            hotList:$(".hot-list"),
            input:$("#local-search-input"),
            button:$(".search"),
			zhd99Href: window.location.host,
        };

        /* 设置热门搜索列表 */
        this.els.hotList.html(function () {
            var str='';
            $.each(_this.hot.list,function (index,item) {
				if(item == 'zhd99.top' || item == 'zhd99.cn'){
				   str+='<a href="https://www.baidu.com/baidu?word='+item+'" target="_blank">'
                    +'<div class="number" style="color: '+_this.hot.color[index]+'">'+(index+1)+'</div>'
                    +'<div>'+item+'</div>'
                    +'</a>';
				   }else if(item == 'qq:2646405301'){ 
				str+='<a href="http://wpa.qq.com/msgrd?v=3&uin=2646405301&site=qq&menu=yes" target="_blank">'
                    +'<div class="number" style="color: '+_this.hot.color[index]+'">'+(index+1)+'</div>'
                    +'<div>'+item+'</div>'
                    +'</a>';
					   
				   }else{
                //str+='<a href="'+_this.els.zhd99Href+'/categories/'+item+'" target="_blank">'
                str+='<a href="//'+_this.els.zhd99Href+'/categories/博客/" target="_blank">'
                    +'<div class="number" style="color: '+_this.hot.color[index]+'">'+(index+1)+'</div>'
                    +'<div>'+item+'</div>'
                    +'</a>';
				   }
            });
            return str;
        });

        /* 注册事件 */
        /* 搜索类别选择按钮 */
        this.els.pickerBtn.click(function () {
            if(_this.els.pickerList.is(':hidden')) {
                setTimeout(function () {
                    _this.els.pickerList.show();
                },100);
            }
        });
        /* 搜索类别选择列表 */
        this.els.pickerList.on("click",">li",function () {
            _this.els.logo.css("background-image",('url(/img/search/'+$(this).data("logo")+')'));
            _this.searchIndex=$(this).index();
            _this.els.pickerBtn.html($(this).html())
        });
        /* 搜索 输入框 点击*/
        this.els.input.click(function () {
            if(!$(this).val()){
                setTimeout(function () {
                    _this.els.hotList.show();
                },100);
            }
        });
        /* 搜索 输入框 点击*/
        $(".container .input").not('.container .picker').click(function () {
            if(!$(this).val()){
                setTimeout(function () {
                    _this.els.hotList.show();
                },100);
            }
        });
        /* 搜索 输入框 输入*/
        this.els.input.on("input",function () {
            if($(this).val()){
                _this.els.hotList.hide();
            }
        });
        /* 搜索按钮 */
        this.els.button.click(function () {
            var searchArr=['本站','百度','搜狗','必应','谷歌'];
            //alert(searchArr[_this.searchIndex]+"搜索："+_this.els.input.val());
			if(searchArr[_this.searchIndex] == '本站'){
			   }
			if(searchArr[_this.searchIndex] == '百度'){
				var temp = _this.els.input.val();
				if(temp != ""){
					window.location.href = 'https://www.baidu.com/baidu?word='+_this.els.input.val();
				   }
			   }
			if(searchArr[_this.searchIndex] == '搜狗'){
				var temp = _this.els.input.val();
				if(temp != ""){
					window.location.href = 'https://www.sogou.com/web?query='+_this.els.input.val();
				   }
			   }
			if(searchArr[_this.searchIndex] == '必应'){
				var temp = _this.els.input.val();
				if(temp != ""){
					window.location.href = 'https://cn.bing.com/search?q='+_this.els.input.val();
				   }
			   }
			if(searchArr[_this.searchIndex] == '谷歌'){
				var temp = _this.els.input.val();
				if(temp != ""){
					window.location.href = 'https://www.google.com/search?q='+_this.els.input.val();
				   }
			   }
        });
        /* 文档 */
        $(document).click(function () {
            _this.els.pickerList.hide();
            _this.els.hotList.hide();
        });
        /* 搜索按钮 */
    }
};

