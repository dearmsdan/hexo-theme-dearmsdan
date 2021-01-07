const getRealPath = (pathname, desc = false) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }
  let names = pathname.split("/");
  if (desc === false) {
    for (let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  } else {
    for (let i = 0; i < names.length; ++i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  }
  return "/";
};
let links = document.querySelectorAll(".nexmoe-list-item");
let rootRealPath = getRealPath(window.location.pathname, true);
for (let link of links) {
  let linkPath = link.getAttribute("href");
  if (linkPath && getRealPath(linkPath, true) === rootRealPath) {
    link.className = "active nexmoe-list-item mdui-list-item mdui-ripple";
  }
}
$("table")
  .has("img")
  .addClass("nexmoe-album");


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



/* py.md */
Vue.component("photo-card", {
  template: `<a class="card"
                :href="link"
                target="_blank"
                ref="card"
                @mousemove="move"
                @mouseleave="leave"
                @mouseover="over">
                  <div class="reflection" ref="refl"></div>
                  <img :src="img"/>
            </a>`,
  props: ["img", "link"],
  mounted() {},
  data: () => ({
    debounce: null }),
  methods: {
    over() {
      const refl = this.$refs.refl;
      refl.style.opacity = 1;
    },
    leave() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
    },

    move() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
    
      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;
    
      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
    },
    scale: (val, inMin, inMax, outMin, outMax) =>
    outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin) } });



const app = new Vue({
  el: "#grid" });

/*py.md end*/


/*懒加载*/
/*$("#nexmoe-content img").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});
*/
/*懒加载end*/


/* 图片放大 */
$("article:not(.nexmoe-py) img").each(function() {
  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  /*图片样式*/
  $(element).attr("class", "gallerys");
  $(element).attr("href", $(this).attr("src"));
  $(this).wrap(element);
	
  /* iframe */
  var element2 = document.createElement("iframe");
  $(element2).attr("src", $(this).attr("src"));
  $(element2).attr("align", "middle");
  $(element2).attr("frameborder", "0");
  $(element2).attr("scrolling", "no");
  $(element2).attr("width", "800px");
  $(element2).attr("height", "300px");
  $(this).wrap(element2);
	
	
});
$("article:not(.nexmoe-py) iframe").each(function() {
/*  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  图片样式
  $(element).attr("class", "gallerys");
  $(element).attr("href", $(this).attr("src"));
  $(this).wrap(element);*/

	
	 $("article iframe").mouseover(function(){
		 var flag = $('.articlefull').val();
		 if(flag == null){
			$("article iframe").before("<span style='position: absolute;top: 20px;left: 40%; font-weight: bold;' class='articlefull'>点击放大</span>");
			}
		 
	 });
	 $("article iframe").mouseout(function(){
		 $(".articlefull").fadeOut(5000, function(){
		 		$(this).remove();
		 });
	 });
	
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();

!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);


