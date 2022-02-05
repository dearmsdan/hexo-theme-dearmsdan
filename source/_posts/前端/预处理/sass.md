---
title: Sass 介绍
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 预处理器
tags:
- css
- sass
- scss
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---
Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 、嵌套 、混合  、导入  等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass  的样式库（如[Compass](http://compass-style.org/)）有助于更好地组织管理样式文件，以及更高效地开发项目。

<!--more-->


- ## Sass 介绍

2、sass

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 、嵌套 、混合  、导入  等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass  的样式库（如[Compass](http://compass-style.org/)）有助于更好地组织管理样式文件，以及更高效地开发项目。

## 二、less和sass的相同之处

Less和Sass在语法上有些共性，比如下面这些：

1、混入(Mixins)——class中的class；

2、参数混入——可以传递参数的class，就像函数一样；

3、嵌套规则——Class中嵌套class，从而减少重复的代码；

4、运算——CSS中用上数学；

5、颜色功能——可以编辑颜色；

6、名字空间(namespace)——分组样式，从而可以被调用；

7、作用域——局部修改样式；

8、JavaScript 赋值——在CSS中使用JavaScript表达式赋值。

## 三、less和sass的区别

Less是基于JavaScript，是在客户端处理的。

Sass是基于Ruby的，是在服务器端处理的。

关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$。

输出设置，Less没有输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded。

Sass支持条件语句，可以使用if{}else{},for{}循环等等，而Less不支持。



