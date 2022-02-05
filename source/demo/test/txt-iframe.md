---
title: 测试iframe
permalink: demo/txt-iframe.html
layout: md/iframe
---

<style type="text/css">
*{
margin: 0px;
padding: 0px;
}
.container{
text-align: center;
}
header{
background-color: #d8c2ff;
height: 77px;
}
main{
background-color: #b2a3cc;
height: 770px;
}
aside:nth-child(1){
background-color: #b2a3cc;
float: left;
width: 20%;
height: 770px;
}
aside:nth-child(2){
float: left;
width: 60%;
height: 770px;
background-color: #c2ade6;
}
aside:nth-child(3){
float: right;
width: 20%;
height: 770px;
background-color: #b192e8;
}
footer{
clear: both;
width: 100%;
height: 77px;
background-color:#dfccff;
}
</style>
<div class="container">
<header>top</header>
<main>
<aside>left</aside>
<aside>middle</aside>
<aside>right</aside>
</main>
<footer>footer</footer>
</div>