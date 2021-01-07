var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd';
var e = 'e';
var f = 'f';
var g = 'g';
fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('titleremark');
      hitokoto.innerText = '『 '+data.hitokoto+'』'; 
	   var author = !!data.from ? data.from : "无名氏"
	   var type = data.type
	   if(a==type){
		   type='动画';
	   }else if(b==type){
		   type='漫画';
	   }else if(c==type){
		   type='游戏';
	   }else if(d==type){
		   type='小说';
	   }else if(e==type){
		   type='原创';
	   }else if(f==type){
		   type='网络';
	   }else if(g==type){
		   type='其他&#@￥';
	   }else{
		   console(error);
	   }
	   $('#hitokoto_author').text("↑ 来自 - -"+type+" - -「" + author + "」");
	   
    })
    .catch(function (err) {
      console.error(err);
    })