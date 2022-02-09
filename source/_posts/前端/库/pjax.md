---
title: Pjax库
author: dearmsdan
categories:
- 前端库
tags:
- JQuery
- Pjax
data: [{
       name: 'JQueryPjax'
       ,value: 'pjax = pushState + ajax'
       ,href: 'https://github.com/defunkt/jquery-pjax'
       },{
       name: 'JQuery'
       ,value: 'jQuery是一个JavaScript库'
       ,href: 'https://www.w3school.com.cn/jquery/index.asp'
      }]
tips: [  
    '作者','开箱即用的单页面ajax加载方式','库','hi4','hwadwa'
  ]
---
Pjax 介绍及全部用法，以下文档收集来源于网络，若侵权联系立即删除

<!--more-->

## pjax是什么
<span class="article-flag-sup">pjax</span>是一个<span class="article-flag-sup">jQuery</span>插件，它通过ajax和pushState技术提供了极速的（无刷新ajax加载）浏览体验，并且保持了真实的地址、网页标题，浏览器的后退（前进）按钮也可以正常使用。
## 使用方法

通过这种方式可以让页面中所有的链接都实现pjax加载，并指定#pjax-container作为容器元素  
```Javascript
$(document).pjax('a', '#pjax-container');
```
通过这种方式可以让页面中所有在.main的链接都实现pjax加载，并指定.main作为容器元素  
```Javascript
$(document).pjax('a[target!=_blank]', '.main', {fragment: '.main',timeout: 8000});
```
网页发生错误
```Javascript
$(document).on('pjax:error', function() {
    alert("网络慢，等等我吧~");
        history.back();
});
```
网页开始加载
```Javascript
$(document).on('pjax:start', function() {
    //加载延迟中...................
    $(".main-content").removeClass("wrapShow");
});
```
网页加载结束
```Javascript
$(document).on('pjax:end', function() {
    //加载中...................
    $(".main-content").delay(500).addClass("wrapShow");
});
```
网页内容准备就绪
```Javascript
$(document).on('ready pjax:end', function(event) {
linker();
tocs();
copycodes();
postcolor();								 
styleS();
dearmsdanlazyload();
dearmsdanMathjax();

}); /*end ready pjax*/
```



手动调用pjax。主要用于非click事件发起pjax请求的情况。
```Javascript
function applyFilters() {
    var url = urlForFilters()
    $.pjax({url: url, container: '#pjax-container'})
}
```






## 参数说明

下面代码表示：当 selector 被点击时，执行ajax请求，并将返回的HTML字符串填充在 container 标记的位置。 
`$(document).pjax(selector, [container], options)`  
1. selector:string 类型，用于click 事件委托 的选择器。
2. container:string 类型，用于标识唯一pjax容器的选择器。
3. options:object 类型，包含下列选项。

### pjax配置选项(options)



| 选项           | 默认值    | 说明                                              |
| -------------- | --------- | ------------------------------------------------- |
| timeout        | 650       | ajax超时时间（毫秒），超时后强制刷新整个页面      |
| push           | true      | 使用pushState在浏览器中添加历史记录               |
| replace        | false     | 替换URL地址但不添加浏览器历史记录                 |
| maxCacheLength | 20        | 容器元素缓存内容的最大值（次）                    |
| version        |           | string或function，返回当前pjax版本                |
| scrollTo       |           | 浏览器滚动条的垂直滚动位置。设为 false 时禁止滚动 |
| type           | "GET"     | 参考 ajax                                         |
| dataType       | "html"    | 参考 ajax                                         |
| container      |           | 被替换内容元素的CSS选择器                         |
| url            | link.href | string或function，返回ajax请求响应的URL           |
| target         | link      | pjax 取代原来链接方式\_self或\_blank              |
| fragment       |           | css选择器，提取ajax响应内容中指定的内容片段       |

## 事件

除了pjax:click和pjax:clicked，其他所有pjax事件都是在pjax容器元素上触发的。

| 事件                   | 取消 | 参数    | 说明                                     |
| ---------------------- | ---- | ------- | ---------------------------------------- |
| pjax链接事件的生命周期 |      |         |                                          |
| pjax:click             | ✔︎    | options | 链接被激活的时候触发；取消的时候阻止pjax |
| pjax:beforeSend        |      | xhr, options | 可以设置XHR头 |
| pjax:start |      | xhr, options | 加载开始                                      |
| pjax:send |      | xhr, options | 加载结束                                      |
| pjax:clicked |      | options | pjax通过链接点击已经开始之后触发 |
| pjax:beforeReplace |      | contents, options | 从服务器端加载的HTML内容完成之后，替换当前内容之前 |
| pjax:success |  | xhr, options | 从服务器端加载的HTML内容替换当前内容之后 |
| pjax:error | ✔︎ | xhr, textStatus, error, options | ajax请求出错；除非被取消，否则会强制刷新页面 |
| pjax:timeout | ✔︎ | xhr, options | 在 options.timeout 之后触发；除非被取消，否则会强制刷新页面 |
| pjax:complete |      | xhr, options | 从服务器端加载                                       |
| 浏览器前进后退事件的生命周期 |      |         |                                          |
| pjax:popstate |      |         | direction 事件的属性: "back"/"forward" |
| pjax:start | null, options |                                 | 内容替换之前 |
| pjax:beforeReplace | contents, options |  | 在用缓存中的内容替换HTML之前 |
| pjax:end | null, options |  | 替换内容之后 |
| pjax:callback | null, options |  | 页面脚本加载完成后（Admui项目） |

