---
title: html 基础
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
html 基础

<!--more-->

## HTML

- HTML（Hypertext Markup Language）
  超文本标记语言。
-  它负责网页的三个要素之中的结构。
- HTML使用标签的的形式来标识网页中的不
  同组成部分。

- 所谓超文本指的是超链接，使用超链接可
  以让我们从一个页面跳转到另一个页面

## 一个最基本的HTML页面：

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>网页标题</title>
</head>
<body>
<h1>网页正文</h1>
</body>
</html>
```

## 标签

• HTML中的标记指的就是标签。
• HTML使用标记标签来描述网页。
• 结构：
<标签名>标签内容
<标签名 />

## 元素
- 我们还将一个完整的标签称为元素。  
- 这里我们可以将元素和标签认为是一个同
义词。
`<h1>一级标题</h1>  ` 
上边的h1我们就称为元素  
`<p>我是一个<em>段落</em></p>  ` 
p也是一个元素，em是p的子元素，p是  em的父元素。  
```
<body>
<p><em>内容</em></p>
</body>
```
- body也是一个元素
- body是p和em的祖先元素
- p和em是body的后代元素

## 属性

- 可以为HTML标签设置属性。
- 通过属性为HTML元素提供附加信息。
- 属性需要设置在开始标签或自结束标签中。
- 属性总是以名称/值对的形式出现。
- 比如：name=“value”
-  有些属性可以是任意值，有些则必须是指定值。

`<h1 title="我是一个标题">标题</h1>`  
`<img src="" alt="" />` 

## 常见属性

-  id
  – id属性作为标签的唯一标识，在同一个网页中不能
  出现相同的id属性值。
-  class
  – class属性用来为标签分组，拥有相同class属性的
  标签我们认为就是一组，可以出现相同的class属
  性，可以为一个元素指定多个class。
- title
  – title属性用来指定标签的标题，指定title以后，鼠
  标移入到元素上方时，会出现提示文字。



## 注释
- HTML注释中的内容不会在网页中显示。
- 格式:
`<!-- 注释内容 -->`
- 合理的使用注释可以帮助开发人员理解网
页的代码。
- 注释不能嵌套！



HTML从哪来，又会到哪去

## HTML的发展


- 1993年6月：HTML第一个版本发布。
- 1995年11月：HTML2.0
- 1997年1月：HTML3.2（W3C推荐）
- 1999年12月：HTML4.01（W3C推荐）
- 2000年底：XHTML1.0（W3C推荐）
- 2014年10月：HTML5（W3C推荐）

## DOCTYPE 声明

- HTML总共有那么多的版本，而且这其中至
少有三个版本在广泛使用，那么浏览器怎
么知道我们在使用哪个版本呢？
- 为了让浏览器知道我们使用的HTML版本我
们还需要在网页的最上边添加一个doctype
声明，来告诉浏览器网页的版本。

### html4 版本声明

- 过渡版
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```
- 严格版
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
```
- 框架集
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
"http://www.w3.org/TR/html4/frameset.dtd">
```

### xhtml1.0 声明
- 过渡版
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "
http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
- 严格版
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
- 框架集
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```



### html5 声明

- 我们会发现html4.01和xhtml的文档声明十
分的麻烦。不过不用担心，以上的内容都
不是我们使用的，我们使用的是html5的文
档声明，而且非常简单：

`<!DOCTYPE html>`

### 怪异模式
- 为了兼容一些旧的页面，浏览器中设置了
两种解析模式：
– 标准模式（Standards Mode）
– 怪异模式（Quirks Mode）
- 怪异模式解析网页时会产生一些不可预期
的行为，所以我们应该避免怪异模式的出
现。
- 避免的最好方式就是在页面中编写正确的
DOCTPYE。

## 编码问题
- 在计算机的内部，文件都是以二进制编码
保存的。
- 所谓的二进制编码就是指1和0，也就是我
们的所有内容都需要转换为1和0。
- 中国两个字在计算机的底层保存的可能要
转换为10100101这种二进制码，这一过程
称为编码。
- 计算机在读取文件时需要将10100101在转
换为中国给我们显示这一过程称为解码。

### 字符集
- 这就带来一个问题，中国到底是10100101
还是01011010到底由谁说了算。
- 所以我们还需要一个东西称为字符集，字
符集规定了如何将文本转换为二进制编码。
- 常见的字符集：ASKII、ISO8859-1、GBK、
GB2312、UTF-8。
### 乱码
- 如果我们保存文件时使用的是utf-8进行编
码，而浏览器读取页面时使用gb2312，这
样就会导致页面中的内容不能正常显示，
也就是我们所说的乱码。
- 所以我们只需要统一两者使用的字符集就
可以解决乱码问题。
- 这里为了页面有更好的使用性，我们一般
使用utf-8。

### 解决
- 保存文件的编码我们直接通过编辑器即可
指定，接下来就是要告诉浏览器使用什么
字符集去解析文件。
- 在html5中只需要使用meta标签即可完成
这个任务：
<meta charset="utf-8" />
## \<meta\>
作用：
- \<meta\> 标签可提供有关页面的元信息，比如
针对搜索引擎和更新频度的描述和关键词。  
- \<meta\> 标签位于文档的头部，不包含任何内
容。\<meta\> 标签的属性定义了与文档相关联
的名称/值对。
### meta的用法
- 设置页面的字符集  
– `<meta charset="utf-8">`
- 设置网页的描述  
– `<meta name="description" content="">`
- 设置网页的关键字  
– `<meta name="keywords" content="">`
- 请求的重定向  
– `<meta http-equiv="refresh" content="5;url=地址"/>`

## 常用标签
###### \<html\>

- 作用：  
– \<html\>标签用于告诉浏览器这个文档中包含
的信息是用HTML编写的。
- 用法：  
– 所有的网页的内容都需要编写到html标签中，
一个页面中html标签只能有一个。  
– html标签中有两个子标签head和body 。

###### \<head\>
- 作用：  
– \<head\>标签用来表示网页的元数据，head中
包含了浏览器和搜索引擎使用的其他不可见信
息。  
- 用法：  
– head标签作为html标签的子元素的出现，一
个网页中只能有一个head。

###### \<title\>
- 作用：  
– \<title\>标签表示网页的标题，一般会在网页的标
题栏上显示。  
– title标签中的文字，是页面优化的最重要因素。在
搜索引擎的搜索时最先看到的、最醒目的内容。  
- 用法：  
– 建议将title标签紧贴着head标签编写，这样搜索
引擎可以快速检索到标题标签。  
– 网站中的多个页面的title也不应该重复，这样不利
于搜索隐藏检索。

###### \<body\>
- 作用：  
– \<body\>标签用来设置网页的主体，所有在页
面中能看到的内容都应该编写到body标签中。  
- 用法：  
– body标签作为html的子标签使用。

###### \<h1\>~\<h6\>
- 作用：  
– h1\~h6都是网页中的标题标签，用来表示网页
中的一个标题，不同的是，从h1~h6重要性越
来越低。  
– 标题标签相当于正文的标题，通常认为重要性
仅次于页面的title。    
– 一般标题标签我们只会使用到h3，h3以后的标
题标签对于搜索引擎就没有什么意义了。  
– 一个页面中只会使用一个h1标签。

###### \<p\>
- 作用：  
– \<p\>标签表示网页中的一个段落。  
– 一般浏览器会在段落的前和后各加上一个换行，
也就是段落会在页面中自成一行。

###### \<br /\>
- 作用  
– \<br /\>标签表示一个换行标签，使用br标签可
以使br标签后的内容另起一行。  

###### \<hr /\>
- 作用：  
– \<hr /\>标签是水平线标签，使用hr标签可以在
页面中打印一条水平线，水平线可以将页面分
成上下两个部分。

###### \<img \>
- 作用：  
– \< img /\>标签是图片标签，可以用来向页面中
引入一张外部的图片。
 - 属性：  
  - src  
   - 指向一个外部的图片的路径。
  - alt  
   - 图片的描述  

###### \<a\>
- 作用：  
– \<a\>标签是超链接标签，通过a标签，可以快
速跳转到其他页面。
- 属性：  
– href   
- 指向一个链接地址
– target  
- 设置打开目标页面的位置，可选值：_blank新窗口、  
_self当前窗口。 

## 实体（转义字符）
实体
- 在HTML中预留了一些字符。
- 这些预留字符是不能在网页中直接使用的。
- 比如<和>,我们不能直接在页面中使用<和
\>号，因为浏览器会将它解析为html标签。
- 为了可以使用这些预留字符，我们必须在
html中使用字符实体。
- 语法: &实体名;

### 字符实体
- 小于号\<    
– \&lt;   
- 大于号\>  
– \&gt;  
- 空格  
– \&nbsp;  
- 和符号&  
– \&amp;  
- 版权©  
– \&copy;  
- 引号”  
– \&quot;  
- 注册商标®  
– \&reg;  
- 商标™  
– \&trade;  

## 开发工具
- 文本编辑器
- 在windows中我们只需要使用最简单的记
事本就可以完成所有的网页的开发。
- 但是一般我们会使用一些具有提示功能的
纯文本编辑器：
– Notepad++(免费)
– Sublime(收费)
- 当然还有很多其他的工具。

IDE
- IDE（集成开发工具）
- IDE拥有比纯文本编辑器更加强大的提示功
能，也是我们开发中用的比较多的工具。  
– DreamWeaver（收费）    
– WebStorm（收费）  
– Hbuilder（免费）  
- 当然也有其他的IDE。

工具的选择
- 上边说了那么多工具我们要使用哪个呢？
- 其实使用哪个工具都不重要，我们也不用
费劲心机去讨论工具的好坏，找一个自己
喜欢用的即可。
- 而且我们也要做到不依赖于某一个工具，
我们要做到，即使只使用最简单的记事本，
我们也可以照常开发。



# 文本标签及文本样式



## 文本标签

### \<em\>和\<strong\>
- em标签用于表示一段内容中的着重点。  
- strong标签用于表示一个内容的重要性。
- 这两个标签可以单独使用，也可以一起使用。
 ```
 <p>
<strong>警告：任何情况下不要接近僵尸。</strong>
他们只是 <em>看起来</em> 很友好，实际上他们是为了吃你的胳膊！
</p>
 ```
- 通常em显示为斜体，而strong显示为粗体

### \<i\>和\<b\>
- i标签会使文字变成斜体。
- b标签会使文字变成粗体。
- 这两个标签和em和strong类似，但是这两
个标签没有语义。
- 所以根据html5标准，当我们只想设置文本
特殊显示，而不需要强调内容时就可以使
用i和b标签。

### \<small\>
- small标签表示细则一类的旁注，通常包括
免责声明、注意事项、法律限制、版权信
息等。
- 浏览器在显示small标签时会显示一个比父
元素小的字号。
`<p><small>&copy; 保留所有权利.</small></p>`<small>&copy; 保留所有权利.</small>

### \<cite\>
- 使用cite标签可以指明对某内容的引用或参
考。例如，戏剧、文章或图书的标题，歌
曲、电影、照片或雕塑的名称等。
```
<p>
<cite>《七龙珠》</cite>讲的是召唤神龙的故事。
</p>
```
<cite>《七龙珠》</cite>

### \<blockquote\>和\<q\>
- blockquote和q表示标记引用的文本。
- blockquote用于长引用，q用于短引用。
- 在两个标签中还可以使用cite属性来表示引
用的地址。
```
	孟子曾经说过：
	<blockquote>天将降大任于是人也...</blockquote>
	他说的真对啊！
```
<blockquote>他说的真对啊！</blockquote>
<q>他说的真对啊！</q>

### \<sup\>和\<sub\>
- sup和sub用于定义上标和下标。
- 上标主要用于表示类似于10<sup>3</sup> 中的3。
- 下标则用于表示类似余H<sub>2</sub>O中的2。


### \<ins\>和\<del\>
- ins表示插入的内容，显示时通常会加上下
划线。
- del表示删除的内容，显示时通常会加上删
除线。

### \<code\>和\<pre\>
- 如果你的内容包含代码示例或文件名，就
可以使用code元素。
- pre元素表示的是预格式化文本，可以使用
pre包住code来表示一段代码。
```
<pre>
<code>
function fun(){
alert("hello");
}
</code>
</pre>
```
## 有序列表

- 使用**ol**和li来创建一个有序列表。

```
<ol>
<li>列表项1</li>
<li>列表项2</li>
<li>列表项3</li>
</ol>
```
<ol>
<li>列表项1</li>
<li>列表项2</li>
<li>列表项3</li>
</ol>


## 无序列表
- 使用**ul**和**li**来创建一个无序列表。
```
<ul>
<li>列表项1</li>
<li>列表项2</li>
<li>列表项3</li>
</ul>
```
<ul>
<li>列表项1</li>
<li>列表项2</li>
<li>列表项3</li>
</ul>

## 定义列表
- 使用**dl、dd、dt**来创建一个定义列表。
```
<dl>
<dt>定义项1</dt>
<dd>定义描述1</dd>
<dt>定义项2</dt>
<dd>定义描述2</dd>
<dt>定义项3</dt>
<dd>定义描述3</dd>
</dl>
```
<dl>
<dt>定义项1</dt>
<dd>定义描述1</dd>
<dt>定义项2</dt>
<dd>定义描述2</dd>
<dt>定义项3</dt>
<dd>定义描述3</dd>
</dl>

## 文本格式化  

### 单位
- **px**   
– 如果我们将一个图片放大的话，我们会发现一个图片
是有一个一个的小色块构成的，这一个小色块就是一
个像素，也就是1px，对于不同的显示器来说一个像素
的大小是不同的。      
- **%**(百分比)   
– 也可以使用一个百分数来表示一个大小，百分比是相
对于父元素来说的，如果父元素使用的大小是16px，
则100%就是16px，200%就是32px。  
- **em**   
– em和百分比类似，也是相对于父元素说的，1em就相
当于100%，2em相当于200%，1.5em相当于150%。

### 颜色
- 在CSS中可以直接使用颜色的关键字来代表
一种颜色。
- 17中颜色  
– aqua、black、blue、fuchsia、gray、green、
lime、maroon、navy、olive、orange、
purple、red、silver、teal、white、yellow。
- 还有147种svg颜色，这里就不一一列举了，
但是明显即使这些颜色变成double，也不
足以描绘我们世界中所有的颜色

### 十六进制颜色
- 用的最多的颜色是十六进制符号。一个颜色值，
比如：#6600FF实际上包含了三组十六进制的
数字。
- 上边的例子中66代表红色的浓度，00代表绿
色的浓度，FF代表了蓝色的浓度。最后的颜色
是由这些指定浓度的红绿蓝混合而成的。
- 如果每一组数中的两个数字都相同，就可以把
十六进制的数字缩短为只有3个字符，如将
#6600FF缩短为#60F。

### RGB值
- 也可以使用计算机中常用的RGB值来表示
颜色。可以使用0\~255的数值，也可以使
用0%~100%的百分比数。  
– `RGB(100%,0%,0%)`  
– `RGB(0,255,0)`  
- 第一个数表示红色的浓度，第二个数表示
绿色浓度，第三个数表示蓝色的浓度。

### RGBA
- RGBA表示一个颜色和RGB类似，只不过比
RGB多了一个A（alpha）来表示透明度，
透明度需要一个0-1的值。0表示完全透明，
1表示完全不透明。  
– RGBA(255,100,5,0.5)

### 文字处理
- **font-size**用来指定文字的大小
- 通过font-family可以指定标签中文字使用
的字体。
- 例如：`p{font-family:Arial}`-上边这行代码指定了p标签中使用名为arial作
为字体
- 一般来说只有用户计算机中安装了我们指
定的字体时，它才会显示，否则这行代码
是没有意义的。
- 通过font-family可以同时指定多个字体。
- 例如：`p{font-family:Arial , Helvetica , sans-serif}` 
- 如上我实际上指定了三种字体，那么到底
使用的是哪个呢？浏览器会优先使用第一
个，如果没有找到则使用第二个，以此类
推。
- 这里面sans-serif并不是指的具体某一个字
体。而是一类字体

### 字体分类
- serif（衬线字体）
- sans-serif（非衬线字体）
- monospace （等宽字体）
- cursive （草书字体）
- fantasy （虚幻字体）
- 以上这些分类都是一些大的分类，并没有
涉及具体的类型，如果将字体指定为这些
格式，浏览器会自己选择指定类型的字体

### 斜体和粗体
- font-style用来指定文本的斜体。  
– 指定斜体：font-style:italic  
– 指定非斜体：font-style:normal  
- font-weight用来指定文本的粗体。  
– 指定粗体：font-weight:bold  
– 指定非粗体：font-weight:normal  

### 小型大写字母
- **font-variant**属性可以将字母类型设置为小
型大写。在该样式中，字母看起来像是稍
微缩小了尺寸的大写字母。  
– font-variant:small-caps

### 字体属性的简写
- font可以一次性同时设置多个字体的样式。
- 语法：
– **font:加粗 斜体 小型大写 大小/行高 字体** 
- 这里前边几个加粗、斜体和小型大写的顺
序无所谓，也可以不写，但是大小和字体
必须写且必须写到后两个

### 行间距
- **line-height**用于设置行高，行高越大则行
间距越大。
- **行间距 = line-height – font-size**

### 大写化
- text-transform样式用于将元素中的字母全
都变成大小。  
– 大写：**text-transform:uppercase**  
– 小写：**text-tansform:lowercase**  
– 首字母大写：**text-transform:capitalize**  
– 正常：**text-transform:none**  


### 文本的修饰
- **text-decoration**属性，用来给文本添加各
种修饰。通过它可以为文本的上方、下方
或者中间添加线条。  
- 可选值：  
– underline  
– overline    
– line-through  
– none  

### 字母间距和单词间距
- **letter-spacing**用来设置字符之间的间距。
- **word-spacing**用来设置单词之间的间距。
- 这两个属性都可以直接指定一个长度或百
分数作为值。正数代表的是增加距离，而
负数代表减少距离。

### 首行缩进
- **text-indent**用来设置首行缩进。
- 该样式需要指定一个长度，并且只对第一
行生效。

## 对齐文本
- **text-align**用于设置文本的对齐方式。
- 可选值：  
– left：左对齐  
– right：右对齐    
– justify：两边对齐  
– center：居中对齐  

# 表格
- 在Web的历史中，HTML的表格发挥了极大的作用。最
初创建表格就是为了以表格的形式显示数据，后来表格
变成了一个极受欢迎的布局工具。
- 但是有了CSS以后，CSS在布局网页方面实际上会更出
色，所以现在我们使用表格的作用只有一个，就是用来
表示格式化的数据。
- HTML中的表格可以很复杂，但是通常情况下我们不需
要创建过于复杂的表格。

### table、tr、th、td
- 使用table标签创建一个表格。
- tr表示表格中的一行。
- tr中可以编写一个或多个th或td。
- th表示表头。
- td表示表格中的一个单元格。

### caption、thead、tbody、tfoot
- caption表示表格的标题。
- thead表示表格的头部。
- tbody表示表格的主体。
- tfoot表示表格的底部。

### 合并单元格
合并单元格指将两个或两个以上的单元格  
合并为一个单元格。  
- 合并单元格可以通过在th或td中设置属性
来完成。  
- 横向合并    
– colspan     
- 纵向合并     
– rowspan   

### 表格的样式
之前学习的很多属性都可以用来设置表格的样式，比如color可以用
来设置文本的颜色。padding可以设置内容和表格边框的距离。
- text-align：设置文本的水平对齐。
- vertical-align：设置文本的垂直对齐。  
– 可选值：top、baseline、middle、bottom  
- border-spacing：边框间距
- border-collapse：合并边框 
– collapse：合并边框  
– separate：不合并边框  

# 表单

- 现实生活中的表单是用来提交信息的，比
如：办理银行卡填写的申请表、找工作填
写的简历、入学时填写的个人信息表。这
些都是表单的一种
- 网页中的表单是用来向服务器提交信息的，
我们最常用到的表单就是baidu的搜索框
在搜索框填入关键字后，点击搜索按钮，关键字会提交到baidu的服务器，
服务器根据用户输入的关键字进行检索，返回相应信息

- 表单可以将用户填写的信息提交的服务器
- 例子：
```
<form action="1.html" method="get">
<input type="text" name="name"><br />
<input type="password" name="pwd"><br />
<input type="submit" value="提交">
</form>
```
使用\<form\>标签来创建一个表单
表单中必须要有两个属性**action**和**method**
action表示提交表单到服务器中的地址
method表示提交表单的方法

### 表单项

```
文本框
<input type="text" name="name">
密码框
<input type="password" name="pwd">
多选框
<input type="checkbox" name="sports">
单选框
<input type="radio" name="gender">
提交按钮
<input type="submit" value="提交">
下拉列表
<select>
<option>北京</option>
</select>
```
文本框
<input type="text" name="name">
密码框
<input type="password" name="pwd">
多选框
<input type="checkbox" name="sports">
单选框
<input type="radio" name="gender">
提交按钮
<input type="submit" value="提交">
下拉列表
<select>
<option>北京</option>
</select>

### input
- input是我们使用的最多的表单项，它可以
根据不同的type属性呈现不同的状态。  
- type属性可选值：  
– text：文本框  
– password：密码框  
– submit：提交按钮  
– radio：单选按钮  
– checkbox：多选框  
– reset ：重置按钮  

### select、option
- select用于创建一个下拉列表。
- option表示下拉列表中的列表项。
- optgroup用于为列表项分组

### textarea
- textarea用来创建一个文本域，实际效果和
文本框类似，只是可以输入多行数据  
- 可用属性：  
– cols：文本域的列数  
– rows：文本域的行数  

### fieldset、legend、label
- **fieldset** 用来为表单项进行分组。
- **legend** 用于指定每组的名字。
- **label** 标签用来为表单项定义描述文字

