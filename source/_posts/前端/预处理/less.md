---
title: Less 基本介绍
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 预处理器
tags:
- css
- less
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---
Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。Less 可以运行在 Node 或浏览器端。  

<!--more-->

  >Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。Less 可以运行在 Node 或浏览器端。

- ## 安装文档和使用介绍

  - 可以在官方中文网站查阅具体语法
  - http://lesscss.cn/
  - https://www.w3cschool.cn/less/

- ## Less 注释

  - 使用 `/* */`  可注释

!> 注意：无法使用单行注释 //

- ## Less 规范

- less 规范与css 一致，如果出现少分号或者少括号会报错

- ## Less 嵌套

- 这个功能非常实用，和俄罗斯套娃一样，可以往内层一直套样式，每一层可以设置自己的样式

- 很显然的问题，less 比 css 要直观的看出一个样式层，让我们更好管理css

- 内容如下

  ```css
  /*  less */
  
  .container{
  	color: aliceblue;
  	font-size: 20px;
  	h1{
  		font-family: Arial;
  		color: aliceblue;
  		font-size: 20px;
  		.h1{
  			font-family: Arial;
  			color: aliceblue;
  			font-size: 20px;
  		}
  	}
  	.h1{
  		font-family: Arial;
  		color: aliceblue;
  		font-size: 20px;
  	}
  	#h1{
  		font-family: Arial;
  		color: aliceblue;
  		font-size: 20px;
  	}
  }
  /*  css */
  .container {
    color: aliceblue;
    font-size: 20px;
  }
  .container h1 {
    font-family: Arial;
    color: aliceblue;
    font-size: 20px;
  }
  .container h1 .h1 {
    font-family: Arial;
    color: aliceblue;
    font-size: 20px;
  }
  .container .h1 {
    font-family: Arial;
    color: aliceblue;
    font-size: 20px;
  }
  .container #h1 {
    font-family: Arial;
    color: aliceblue;
    font-size: 20px;
  }
  
  ```

- ## Less 操作

- Less 声明变量 通过 `@变量名` 声明变量

- Less 加号(+)，减号( - )，乘法(*)和除法(/)等等，它们可以对任何数字，颜色或变量进行操作。 操作节省了大量的时间

- 例子

  ```css
  /*  less */
  @fontSize:20px;
  
  .container{
  	font-size: @fontSize;
  }
  body{
  	font-size: @fontSize * 2;
  }
  /*  css */
  .container {
    font-size: 20px;
  }
  body {
    font-size: 40px;
  }
  ```

  

## less 转义

 通过 `~""` 添加内容，会被转义成里面的内容     
例如： ~"123" 将转义为 123



## Less 函数

> LESS映射具有值操作的JavaScript代码，并使用预定义的函数来操纵样式表中的HTML元素。 它提供了操作颜色的几个功能，如圆函数，floor函数，ceil函数，百分比函数等。

```css
/* less */ 
@color: #FF8000;
@width:1.0;

.mycolor{
color: @color;
 width: percentage(@width);   /* 百分比 */ 
}
/* css */ 
.mycolor {
  color: #FF8000;
  width: 100%;
}
```



## Less 命名空间和作用域

### 命名空间

将一些变量或者混合模块打包起来, 你可以像下面这样在val(@param)中定义一些属性集之后可以重复使用

```css
/* less */
.class1 {
  .class2 {
    .val(@param) {
      font-size: @param;
      color:green;
    }
  }
}

.myclass {
  .class1 > .class2 > .val(20px);
}
/* css */
.myclass {
  font-size: 20px;
  color: green;
}
```

### 作用域

LESS 中的作用域跟其他编程语言非常类似，首先会从本地查找变量或者混合模块，如果没找到的话会去父级作用域中查找，直到找到为止.

```css
@var: red;
#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
#footer {
  color: @var; // red  
}
```



## less 导入

通过`@import "//www.w3cschool.cn/less/myfile.less";` 导入相应less代码



## Less 插值

使用 `@{}` 来进行插值  

```css
/* less */
@images: "http://www.w3cschool.cn";

.myclass {
  background : url("@{images}/less/images/less_variables/birds.jpg");
}

/* CSS */
.myclass {
  background: url("//www.w3cschool.cn/less/images/less_variables/birds.jpg");
}
```

## Less 扩展

\& 这个符号代表 h2 这个选择器 ，extend\(\)括号内填写选择器在一个选择器中扩展其他选择器样式

```css
/* less */
h2 {
  &:extend(.style,.style1);
  font-style: italic;
}
.style {
  background: green;
}
.style1 {
  background: green;
}
/* css */
h2 {
  font-style: italic;
}
.style,
h2 {
  background: green;
}
.style1,
h2 {
  background: green;
}

```



## Less 混合

混合类似于编程语言中的函数。   
 Mixins是一组CSS属性，允许您将一个类的属性用于另一个类，并且包含类名作为其属性。  
 在LESS中，可以使用类或[id选择器](https://www.w3cschool.cn/eyv2f3/68m11qba.html)以与CSS样式相同的方式声明mixin。   
它可以存储多个值，并且可以在必要时在代码中重复使用。

### LESS 不输出Mixin

可以创建一个mixin，它可以通过简单地放置括号后在输出中消失。

```css
/* less */
.a(){
  padding-left: 100px;
}
.myclass{
  background : #64d9c0;
  .a;
}

/* css */
.myclass {
  background: #64d9c0;
  padding-left: 100px;
}
```

### LESS Mixins中的选择器

mixins不仅可以包含属性，还可以包含选择器。

```css
/* less */
.mixin() {
  &:hover {
    background: #FFC0CB;
  }
}
a {
  .mixin();
}

/* css */
a:hover {
  background: #FFC0CB;
}
```













```
/* less */


/* css */
```

