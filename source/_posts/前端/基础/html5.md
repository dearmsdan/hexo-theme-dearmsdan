---
title: html5
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 前端基础
tags:
- html
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---
HTML5是HTML最新的修订版版，2014年10月由W3C完成标准制定。它的设计的目的是为了在移动设备上支持多媒体。并且HTML5简单易学。
HTML5是下一代标准。HTML4.01的上个版本诞生于1999年,HTML5目前为止仍然处于完善之中。然而，大部分现代浏览器已经具备了某些HTML5支持
- 用于媒介回放的video和audio元素
- 新的内容元素：   
`article`,`footer`,`header`,`nav`,`section`
- 新的表单控件：  
`calendar`、`date`、`time`、`email`、`url`、`search`
- 2D/3D绘图&效果
- 支持对本地离线存储


<!--more-->

## HTML5简介

HTML5是HTML最新的修订版版，2014年10月由W3C完成标准制定。它的设计的目的是为了在移动设备上支持多媒体。并且HTML5简单易学。

#### 什么是HTML5

HTML5是下一代标准。HTML4.01的上个版本诞生于1999年,HTML5目前为止仍然处于完善之中。然而，大部分现代浏览器已经具备了某些HTML5支持

#### HTML5有趣的新特性

- 用于媒介回放的video和audio元素
- 新的特殊内容元素：  
`article`,`footer`,`header`,`nav`,`section`
- 新的表单控件：  
`calendar`、`date`、`time`、`email`、`url`、`search`
- 2D/3D绘图&效果
- 支持对本地离线存储

#### HTML5的文档声明

<!doctype> 声明必须位于 HTML5 文档中的第一行,使用非常简单:

```
<!DOCTYPE html>
```

#### HTML5浏览器支持

最新版本的五个主流浏览器都支持某些HTML5特性，IE9以上浏览器支持HTML5新特性。但是IE8以下的浏览器不支持

IE8以下(包含IE8)以下版本浏览器兼容HTML5的方法，我们必须使用htmlshiv垫片包，让其支持HTML5新特性

```
<!--[if lt IE 9]>
<script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
<![endif]-->
```

### HTML5新标签

#### 8个新语义元素和新属性

`header`,`section`,`footer`,`aside`,`nav`,`main`,`article`,`figure`所有的这些元素都是**块级**元素

##### 所有的标签都支持HTML5新属性

| 属性            | 描述                                                         | 浏览器支持性                    |
| --------------- | ------------------------------------------------------------ | ------------------------------- |
| contenteditable | 规定是否可编辑元素的内容                                     | All                             |
| contextmenu     | 指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单   | 只有Firefox浏览器支持           |
| data-*          | 嵌入自定义数据                                               | All                             |
| draggable       | 规定元素是否可拖动。链接和图像默认是可拖动的。经常用它实现拖放操作 | ie8以下浏览器都支持，其它不支持 |
| hidden          | 规定对元素进行隐藏。如果使用该属性，则会隐藏元素，隐藏的元素不会被显示，可以通过js来设置hidden属性为true,使得元素变得可见 | All                             |

## 语义化标签
- 在HTML 5出来之前，我们用div来表示页面头部，章节，页脚等。但是这些div都没有实际意义。
- 各大浏览器厂商分析了上百万的页面，从中发现了DIV名称的通用id名称大量重复。例如，很多开发人员喜欢使用
- div id="footer"来标记页脚内容，所以Html5元素引入了语义化标签（一组新的片段类元素）

`https://dev.opera.com/blog/presentation-html5-and-accessibility-sitting-in-a-tree-4/idlist-url.htm`
	`https://dev.opera.com/blog/presentation-html5-and-accessibility-sitting-in-a-tree-4/classlist-url.htm`
```
	<hgroup></hgroup>
	<header></header>
	<nav></nav>
	<section></section>
	<footer></footer>
	<article></article>
	<aside></aside>
```

语义化的好处   
- HTML5可以让很多更语义化结构化的代码标签代替大量的无意义的div标签  
	
- 这种语义化的特性提升了网页的质量和语义  
	
- 对搜索引擎更加的友好 
	
- 他们这些标签功能就是代替 功能中的一部分，他们没有任何的默认样式，除了会让文本另起一行外；

### hgroup
	hgroup元素代表 网页 或 section 的标题，当元素有多个层级时，该元素可以将h1到h6元素放在其内，譬如文章的主标题和副标题的组合
	
	```
	<hgroup>
	    <h1>HTML 5</h1>
	    <h2>这是一篇介绍HTML 5语义化标签和更简洁的结构</h2>
	</hgroup>
	
	```

- hgroup使用注意：  
	– 如果只需要一个h1-h6标签就不用hgroup  
	– 如果有连续多个h1-h6标签就用hgroup   
	– 如果有连续多个标题和其他文章数据，h1-h6标签就用hgroup包住，和其他文章元数据一起放入header标签
	
	
### header
- header 元素代表 网页 或 section 的页眉。    
	– 通常包含h1-h6元素或hgroup
```
<header>
	<hgroup>
		<h1>网站标题</h1>
		<h2>网站副标题</h2>
	</hgroup>
</header>
```
- header使用注意：   
	– 可以是“网页”或任意“section”的头部部分    
	– 没有个数限制。  
	
### nav
- nav元素代表页面的导航链接区域。用于定义页面的主要导航部分。

```
		<nav>
		    <ul>
		        <li>HTML 5</li>
		        <li>CSS3</li>
		        <li>JavaScript</li>
		    </ul>
		</nav>
```

- nav使用注意:  
	– 用在整个页面主要导航部分上，不合适就不要用nav元素;
	
### section
- section元素代表文档中的 节 或 段，段可以是指一篇文章里按照主题的分段；节可以是指一个页面里的分组。

```
		<section>
		    <h1>section是啥？</h1>
		    <article>
		        <h2>关于section</h1>
		        <p>section的介绍</p>
		        <section>
		            <h3>关于其他</h3>
		            <p>关于其他section的介绍</p>
		        </section>
		    </article>
		</section>
```
- section使用注意：  
	– section不是一般意义上的容器元素，如果想作为样式展示和脚本的便利，可以用div。
	– article、nav、aside可以理解为特殊的section，
	– 所以如果可以用article、nav、aside就不要用section，没实际意义的就用div	
	
### article
- article元素最容易跟section和div容易混淆，其实article代表一个在文档，页面或者网站中自成一体的内容

```
		<article>
		    <h1>一篇文章</h1>
		    <p>文章内容..</p>
		    <footer>
		        <p><small>版权：html5</small></p>
		    </footer>
		</article>
```

- article使用注意：
	– 独立文章：用article  
	– 单独的模块：用section  
	– 没有语义的：用div  
	
### aside
- aside元素被包含在article元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名次解释等
- 在article元素之外使用作为页面或站点全局的附属信息部分。最典型的是侧边栏，其中的内容可以是日志串连，其他组的导航，甚至广告，这些内容相关的页面。

```
			<article>
                <p>内容</p>
                <aside>
                    <h1>作者简介</h1>
                    <p>前端一枚</p>
                </aside>
			</article>
```


- **aside**使用总结：  
    – aside在article内表示主要内容的附属信息，  
	– 在article之外则可做侧边栏  
	– 如果是广告，其他日志链接或者其他分类导航也可以用  
	
### footer
- footer元素代表 网页 或 section 的页脚，通常含有该节的一些基本信息，譬如：作者，相关文档链接，版权资料。
```
   <footer>
		COPYRIGHT@damu
	</footer>
```

- footer使用注意：   
    – 可以是 网页 或任意 section 的底部部分；   
    – 没有个数限制，除了包裹的内容不一样，其他跟header类似。  

## 其它的新语义化标签

##### mark

高亮文本标签

```
<p><mark> 元素用于 <mark>高亮</mark> 文本</p>
```

##### progress

用来显示一项任务的完成进度。

属性：

- max 最大值
- value 当前进度

```
<progress value="70" max="100">70 %</progress>
```

##### address

个人或者某个组织的联系信息等等

```
<address>  <a href="#">xxx.com</a><br>  <a href="#">个人信息</a></address>
```

以上标签都是我们在网页中常见到的。还有很少可以在网页中见到的HTML5新标签。在这里我就不一一赘述了。大家可以参考这个链接去查阅相关资料：[新标签](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)

## 新的表单特性

HTML5新增了新的表单元素

- datalist
- keygen
- output

##### datalist

该元素规定输入域的选项列表。规定了form或input应该拥有自动完成功能，都能够用户在自动完成域中开始输入是，浏览器应该在该域中显示填写的选项：

```
<form action="">   
	<input type="text" list="class">   
    <datalist id="class">      
        <option value="hello world"></option>   
        <option value="hello web"></option>  
        <option value="hello Go"></option>    
        <option value="hello python"></option> 
    </datalist>    
    <input type='submit'/>
</form>
```

> 注意：input中的list跟datalist中的id必须关联。

##### kegen(了解)

是提供一种验证用户的可靠方法，当提交表达时，会生成两个键，一个是私钥，一个是公钥。

私钥存储于客户端，公钥则被发送给服务器。公钥可用于之后验证用户的客户端证书

```
<form action="hello.asp" method="get">
    用户名: <input type="text" name="usr_name">加密: <keygen name="security">
    <input type="submit">
</form>
```

##### output

用于不同类型的输出，比如计算或脚本输出

```
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
0
<input type="range" id="a" value="50">
100 +
<input type="number" id="b" value="50">
=
<output name="x" for="a b"></output>
</form>
```

## HTML5新的表单属性

##### form新属性

**autocomplete属性**

此属性规定form或input应该拥有自动完成功能

当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项

```
<form action="" autocomplete="on">  
    用户名: <input type="text" name="usr_name" >  
    <input type="submit">
</form>
```

当刷新网页，再次输入内容，查看效果

**novalidate属性**

是一个布尔值，当为true时，表示规定在提交表单时，不应该验证form或input域

如果给input的type改成email。则我们在输入邮箱时通常自动验证.

如果将form设置此属性，则可以直接提交。

```
<form action="" autocomplete="on" novalidate=""> 
    用户名: <input type="text" name="usr_name" >    
    email: <input type="email">    
    <input type="submit">
</form>
```

##### input新属性

**autofocus属性**

在页面加载时，是否自动获得焦点

```
用户名: <input type="text" name="usr_name" autofocus>
```



**formaction属性**

该属性用于描述表单提交的URL地址。会覆盖form元素中的action属性。该属性用于`type='submit'`。

```
<form action="" autocomplete="on" novalidate=""> 
    用户名: <input type="text" name="usr_name" autofocus>  
    email: <input type="email">   
    <input type="submit" value='提交到当前服务器'>    
    <input type="submit" formaction="http://www.baidu.com" value='提交到百度服务器'>
</form>
```

**formenctype属性**

该属性描述了表单提交到服务器的数据编码(只对form表单中 method=’post‘表单)

第一个提交按钮已默认编码发送表单数据，第二个提交按钮以 “multipart/form-data” 编码格式发送表单数据:

```
<form action="" autocomplete="on" novalidate="" method='post'>   
    用户名: <input type="text" name="usr_name" autofocus>  
    email: <input type="email">    
    <input type="submit" value='提交到当前服务器'>    
    <input type="submit" formenctype="multipart/form-data" value="以 Multipart/form-data 提交">
</form>
```

**formmethod属性**

formmethod 属性定义了表单提交的方式。

formmethod 属性覆盖了 `<form>`元素的 method 属性。

**注意:** 该属性可以与 type=”submit” 和 type=”image” 配合使用。

```
<form action="" autocomplete="on" novalidate="" method='get'>
    用户名:<input type="text" name="usr_name" autofocus>   
    email: <input type="email">    
    <input type="submit" value='get提交'>    
    <input type="submit" method= 'post' formenctype="multipart/form-data" value="post提交"></form>
```

**formnovalidate属性**

novalidate 属性是一个 boolean 属性.

novalidate属性描述了 `<input>` 元素在表单提交时无需被验证。

formnovalidate 属性会覆盖 `<form>` 元素的novalidate属性.

**注意:** formnovalidate 属性与type=”submit一起使用

```
<form action="">   
    E-mail: <input type="email" name="userid">   
    <input type="submit" value="提交">   
    <input type="submit" formnovalidate value="不验证提交">
</form>
```

**formtarget属性**

formtarget属性指定一个名称或一个关键字来指明表单提交数据接收后的展示。

```
<form action=""> 
    用户名: <input type="text">    
    密码: <input type="password">  
    <input type="submit" formtarget="_blank" value="提交到一个新的页面上"> 
</form>
```

**height和width属性**

定义一个图像提交按钮，使用width和height属性

```
<input type="image" src="img_submit.gif" width="30" height="30">
```

**list属性**

规定输入域的datalist。datalist是输入域的选项列表。前面有介绍

**multiple属性**

规定`input`元素可以选择多个值。适用于像input标签：file

```
上传多个文件:选择图片:<input type='file' name= 'img' multiple>
```

**pattern属性**

描述了一个正则表达式用于验证`input`元素的值

注意：适用于以下类型`input`标签:text,search,url,tel,email,passworld

```
<form action="">
请输入正确的账号:
<input type="text" style="width: 200px;" placeholder="由字母,数字,下划线 组成,以字母开头 4-16位" pattern="^[a-zA-Z]\w{3,15}$" title="输入的账号不合法"> 
<input type="submit" value="提交" />
</form>
```



**required属性**

规定必须在提交之前输入框不能为空。

```
用户名: <input type="text" name="usrname" required>
```

##### 新的input类型

HTML5拥有多个表单的输入类型。这些新特性提供了更好的输入控制和验证

新的输入类型

```
color : 取色
date : 日期选择器
datetime ：选择UTC时间
datetime-local: 选择一个日期和时间(无时区)
email：提交表单时。自动验证
email的值是否有效
month：选择月份
number:输入数值
range：包含一定范围内数字值的输入域
search:搜索域
tel:输入电话号码字段
time:选择一个时间
url:输入包含
URL地址
week:选择周和年
```

#### 新的操作方法

##### 1.获取元素的方法

获取单个元素,参数可以是我们任意的选择器。

```
document.querySelect('选择器');
```

获取多个元素，参数是任意的选择器

```
document.querySelectAll('选择器');
```

##### 2.类的操作

**添加类**

```
oDiv.classList.add('类名');
```

**移除类**

```
oDiv.classList.remove('类名');
```

**检测类**

```
oDiv.classList.contains('类名');
```

**切换类**

```
oDiv.classList.toggle('类名');//有则删除，无则添加
```

##### 3.自定义属性

我们可以通过`data-自定义属性名`来给元素添加自定义的属性名。一旦添加完成之后。通过JS可以获取以及设置自定义属性。

比如定义一个`data-test`属性名

**获取自定义的属性名**

```
oDiv.dataset.test
```

**设置自定义属性**

```
oDiv.dataset.自定义属性名 = 值
```

#### 文件读取

读取文件，首先先得将文件上传，可以通过input的type为file的表单控件实现

```
<input type='file' name=''>
```

其次，通过FileReader读取文件。读取完文件之后，会将结果存储在result属性中，而不是直接返回

##### FileReader常用方法

```
1.readAsBinaryString: 将文件读取为二进制编码
2.readAsDataURL: 将文件读取为DataURL
3.readAsText:将文件读取为文本
```

##### FileReader提供的事件

```
1.onabort读取文件中断时触发
2.onerror读取文件出错时触发
3.onload读取文件完成时触发，只在读取成功后触发
4.onloadend读取文件完成时触发，无论读取成功或失败都会触发
5.onloadstart读取文件开始时触发
6.onprogress正在读取文件
```

##### 读取文件实例

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>read file</title>
</head>
<body>
    <input type="file" name="">
    <script type="text/javascript">
    var input = document.querySelector("input");
    input.onchange = function() {
        // 获取到文件
        var file = this.files[0];
        // 创建读取器
        var reader = new FileReader();
        // 开始读取
        reader.readAsText(file);
        // 文件读取完成后，获取读取的结果
        reader.onload = function() {
            console.log(reader.result);
        }
    }
    </script>
</body>
</html>
```


## JSON 
- JSON是一种取代XML的数据结构，和xml相比，它更小巧但描述能力却不差,由于它的小巧所以网络传输数据将减少更多流量从而加快速度。
- JSON 格式特点： 
	– 1、书写简单,一目了然
	– 2、符合JS 语法
	– 3、json 由 key value 组成
- JSON 是各大网站交换数据的标准格式
- 每个JSON 对象就是一个值，可能是数组或者对象

json 格式规定：
- 1、复杂类型的值只能是数组或对象,不能是函数 正则 日期
- 2、2,基本数据类型的值只有4种:字符串 数值 布尔值 null 不能使用 NaN Infinity undefined
- 3、字符串必须使用双引号表示,不能使用单引号 json 的 key 必须使用双引号
- 4、数组或对象最后一个成员的后面,不能加逗号


```
JSON对象和JSON字符串的转换
在数据传输过程中，JSON是以字符串的形式传递的，而JS操作的是JSON对象，所以，JSON对象和JSON字符串之间的相互转换是关键。例如：
JSON字符串：

var jsonStr ='{"name":"Liza", "password":"123"}' ;
JSON对象：

var jsonObj = {"name":"Liza", "password":"123"};

1、JSON字符串转化JSON对象
var jsonObject= JSON.parse(jsonstr);

2、JSON对象转化JSON字符串
var jsonstr =JSON.stringify(jsonObject );
```

## 本地存储

HTML5 web存储，一个比cookie更好的本地存储方式。

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变得越来越复杂。为了满足各种各样的需求，会经常在本地存储大量的数据，传统方式我们会以document.cookie来进行存储，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便，HTML5规范提出解决方案，使用sessionStorage和localStorage存储数据

##### localStorage

特点：

1. 永久存储
2. 多窗口共享
3. 容量大约为20M

###### 常用方法

```
window.localStorage.setItem(key,value); //设置存储的内容
window.localStorage.getItem(key); //获取内容
window.localStorage.removeItem(key);//删除内容
window.localStorage.clear(); //清空内容
```

##### sessionStorage

1. 生命周期为关闭当前浏览器窗口
2. 可以在同一个窗口下访问
3. 数据大小为5M左右

```
window.sessionStorage.setItem(key,value); //设置存储的内容 
window.sessionStorage.getItem(key); //获取内容  
window.sessionStorage.removeItem(key);//删除内容
```

## 音频audio

HTML5提供了播放音频文件的标准。直到现在，仍然不存在在网页上播放音频的标准。今天，大多数音频都是通过插件(比如Flash)来播放的。然而，并非所有浏览器都拥有同样的插件。

##### 音频audio

##### 基本使用

```
<audio controls="controls">    
    <source src="my.mp3"  type="audio/mp3">
    您的刘看齐不支持audio元素
</audio>
```

- controls属性添加音频的控件，播放、暂停和音量控件
- autoplay:使音频自动播放
- loop:使音频自动重复播放

在`<audio>`与`</audio>`之间插入浏览器不支持的提示文本。`audio`元素允许使用多个`source`标签，`source`标签可以链接不同的音频文件，浏览器将使用第一个支持的音频文件。

##### 浏览器支持

目前，此标签支持三种音视频格式文件：MP3/Wav和Ogg;

| 浏览器               | MP3  | Wav  | Ogg  |
| -------------------- | ---- | ---- | ---- |
| Internet Explorer 9+ | YES  | NO   | NO   |
| Chrome 6+            | YES  | YES  | YES  |
| Firefox 3.6+         | YES  | YES  | YES  |
| Safari 5+            | YES  | YES  | NO   |
| Opera 10+            | YES  | YES  | YES  |

同样，audio可以配合JS来实现自己的音乐播放器

大家可以参考MDN`video`和`audio`标签的相关事件：[媒体对象相关事件](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events),[DOM相关事件](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)

## 视频video

##### 基本使用

```
<video width="800" height="" controls="">  
    <source src="Hero.mp4" type="video/mp4">
    </source>
    <source src="Hero.ogv" type="video/ogg">
    </source>
    <source src="Hero.webm" type="video/webm">
    </source>
    当前浏览器不支持 video直接播放
</video>
```

`<video>` 元素提供了 播放、暂停和音量控件来控制视频。

同时 `<video>` 元素也提供了 width 和 height 属性控制视频的尺寸.如果设置的高度和宽度，所需的视频空间会在页面加载时保留。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。

`<video>` 与 `</video>` 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。

`<video>` 元素支持多个 `<source>` 元素. `<source>` 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式。

##### 浏览器支持

| 浏览器            | MP4                  | WebM | Ogg  |
| ----------------- | -------------------- | ---- | ---- |
| Internet Explorer | YES                  | NO   | NO   |
| Chrome            | YES                  | YES  | YES  |
| Firefox           | YES                  | YES  | YES  |
| Safari            | YES                  | NO   | NO   |
| Opera             | YES (从 Opera 25 起) | YES  | YES  |

#### HTML5实现调用摄像头

要想实现调用摄像头，使用了html5的`getUserMedia()`API

代码如下：

```
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title></title>
    </head>
    <body>
        <video id="video" autoplay style="width: 480px;height: 320px;"></video>
        <div>
            <button id="capture">拍照</button>
        </div>
        <!-- 展示拍摄的照片 -->
        <canvas id="canvas" width="480" height="320"></canvas>
        <script type="text/javascript">
            window.onload = function() {
                // 1.获取标签
                var video = document.getElementById('video');
                var capture = document.getElementById('capture');
                var ctx = document.getElementById('canvas').getContext('2d');
                // 调用媒体对象
                // 参数为constraints 一个约束对象  是video还是audio
                navigator.mediaDevices.getUserMedia({
                    video: {
                        width: 480,
                        height: 320
                    }
                }).then(function(stream) {
                    // 获取到window.URL对象
                    var URL = window.URL || window.webkitURL;
                    // 创建一个video的url字符串
                    try {
                        video.src = URL.createObjectURL(stream);
                    } catch (e) {
                        video.srcObject = stream;
                    }
                    // 视频播放
                    video.play();
                }).catch(function(err) {
                    console.log(err);
                })
                // 点击拍照按钮事件
                capture.onclick = function() {
                    ctx.drawImage(video,0,0,480,320);
                }
            }
        </script>
    </body>
</html>
```

