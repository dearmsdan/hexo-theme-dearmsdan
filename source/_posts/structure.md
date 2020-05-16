---
title: 记录 hexo-theme-dearmsdan 结构，hexo的基本介绍
date: 15:37 2020/2/10
categories:
- 博客
tags:
- hexo
---



>>什么是 Hexo？  
[Hexo](https://hexo.io/) 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

用hexo 过程发现它 是一个插件十齐全的一个博客系统，快速、简洁且高效，在hexo 的主题下，我下载使用了 [hexo-theme-nexmoe](https://github.com/nexmoe/hexo-theme-nexmoe) 主题，非常的花里胡哨且简洁。  
于是不断的在样式和布局上折腾，最后因为pjax的原因放弃了这个主题，于是自己开始打造属于自己的hexo博客 hexo-theme-dearmsdan ........ 

<!--more-->








<style>

    #treeView {
      margin: 20px auto 0;
      border: 1px solid #f2f2f2;
    }
    .treeNode {
      height: 32px;
      border-width: 1px 0;
      cursor: pointer;
      font-size: 0;
    }
    .treeNode:hover {
      background: #f4f9fd;
      border-color: #e5f0fb;
    }
    .treeNode-cur,
    .treeNode-cur:hover {
      background: #e5f0fb;
      border-color: #BBD4EF #fff;
    }
    .icon {
      display: inline-block;
      background: url(/resources/dearmsdan_link/icon.png) no-repeat;
      vertical-align: middle;
    }
    .icon-minus {
      width: 15px;
      height: 15px;
      margin: 0 4px;
      background-position: -30px -22px;
    }
    .icon-add {
      width: 15px;
      height: 15px;
      margin: 0 4px;
      background-position: -30px 0;
    }
    .icon-file {
      width: 22px;
      height: 18px;
      margin-right: 5px;
      background-position: 0 -22px;
    }
    .title {
      position: relative;
      top: 6px;
      font-size: 14px;
    }
    
    .treeNode-empty .icon-minus {
      background-position: -999px -999px;
    }
    .treeNode-empty .icon-add {
      background-position: -999px -999px;
    }
    
    #treeView ul.none {
      display: none;
    }
    #treeView ul,#treeView ol{
      padding:0px;
    }
    #treeView li{
overflow: hidden;
/*
显示省略号
*/
text-overflow: ellipsis;
/*
不换行
*/
white-space: nowrap;
    }
  </style>

<style>

    #treeView1 {
      margin: 20px auto 0;
      border: 1px solid #f2f2f2;
    }
    .treeNode1 {
      height: 32px;
      border-width: 1px 0;
      cursor: pointer;
      font-size: 0;
    }
    .treeNode1:hover {
      background: #f4f9fd;
      border-color: #e5f0fb;
    }
    .treeNode-cur1,
    .treeNode-cur1:hover {
      background: #e5f0fb;
      border-color: #BBD4EF #fff;
    }
    .icon {
      display: inline-block;
      background: url(/resources/dearmsdan_link/icon.png) no-repeat;
      vertical-align: middle;
    }
    .icon-minus {
      width: 15px;
      height: 15px;
      margin: 0 4px;
      background-position: -30px -22px;
    }
    .icon-add {
      width: 15px;
      height: 15px;
      margin: 0 4px;
      background-position: -30px 0;
    }
    .icon-file {
      width: 22px;
      height: 18px;
      margin-right: 5px;
      background-position: 0 -22px;
    }
    .title {
      position: relative;
      top: 6px;
      font-size: 14px;
    }
    
    .treeNode-empty1 .icon-minus {
      background-position: -999px -999px;
    }
    .treeNode-empty1 .icon-add {
      background-position: -999px -999px;
    }
    
    #treeView1 ul.none {
      display: none;
    }
    #treeView1 ul,#treeView1 ol{
      padding:0px;
    }
    #treeView1 li{
overflow: hidden;
/*
显示省略号
*/
text-overflow: ellipsis;
/*
不换行
*/
white-space: nowrap;
    }
  </style>

<style>

    #treeView2 {
      margin: 20px auto 0;
      border: 1px solid #f2f2f2;
    }
    .treeNode2 {
      height: 32px;
      border-width: 1px 0;
      cursor: pointer;
      font-size: 0;
    }
    .treeNode2:hover {
      background: #f4f9fd;
      border-color: #e5f0fb;
    }
    .treeNode-cur2,
    .treeNode-cur1:hover {
      background: #e5f0fb;
      border-color: #BBD4EF #fff;
    }
    .icon {
      display: inline-block;
      background: url(/resources/dearmsdan_link/icon.png) no-repeat;
      vertical-align: middle;
    }
    .icon-minus {
      width: 15px;
      height: 15px;
      margin: 0 4px;
      background-position: -30px -22px;
    }
    .icon-add {
      width: 15px;
      height: 15px;
      margin: 0 4px;
      background-position: -30px 0;
    }
    .icon-file {
      width: 22px;
      height: 18px;
      margin-right: 5px;
      background-position: 0 -22px;
    }
    .title {
      position: relative;
      top: 6px;
      font-size: 14px;
    }
    
    .treeNode-empty2 .icon-minus {
      background-position: -999px -999px;
    }
    .treeNode-empty2 .icon-add {
      background-position: -999px -999px;
    }
    
    #treeView2 ul.none {
      display: none;
    }
    #treeView2 ul,#treeView2 ol{
      padding:0px;
    }
    #treeView2 li{
overflow: hidden;
/*
显示省略号
*/
text-overflow: ellipsis;
/*
不换行
*/
white-space: nowrap;
    }
  </style>
### HEXO 目录结构 介绍

<div id="treeView"></div>
<script>
var data={files:[{id:0,pid:-1,title:'hexo-blog'},
{id:1,pid:0,title:'_config.yml  // 总体的配置文件'},
{id:2,pid:0,title:'node_modules      // NodeJs 所依赖的包，后期也可以自己添加插件 '},
{id:3,pid:0,title:'package-lock.json // 支持 hexo 运行的 NodeJs 包'},
{id:4,pid:0,title:'package.json      // 自定义的 NodeJs 包'},
{id:5,pid:0,title:'scaffolds         // Hexo  加载时的关键字，启动的时候默认加载'},
{id:6,pid:0,title:'source            // md 源文件目录'},
{id:7,pid:0,title:' themes            // 主题文件夹'},
{id:71,pid:7,title:'landscape     // 默认主题'},
]};
</script>  

#### 记录config配置信息.

```
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# 网站Site
title: hi mogul
subtitle: '收藏和分享兼得'
description: '最好的收藏,不过是分享'
keywords: 个人技术的分享圈子，欢迎各圈大佬观摩
author: Hxx
language: zh-CN
timezone: ''

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://www.dearmsdan.com
root: /
permalink: :year/:month/:day/:title/
# permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing index.html from permalinks

# Directory 默认配置就好了
source_dir: source
public_dir: D:\server\apache-tomcat-7.0.52\webapps\WWW
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render: README.md
# 不渲染

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''

# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 5
  order_by: -date

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Metadata elements
## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
meta_generator: true

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
## Use post's date for updated date unless set in front-matter
use_date_for_updated: false

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: dearmsdan #landscape   
## landscape   

# 使用搜索功能
search:
  path: search.xml
  field: post
  format: html
  limit: 10000

# Deployment

## Docs: https://hexo.io/docs/deployment.html

deploy:
  type: git
  repo:
           coding: https://e.coding.net/zhd99/dearmsdan.git
           github: https://github.com/ZHD99/zhd99.github.io.git
           gitee: https://gitee.com/zhd99/zhd99.git
branch: master
```

#### 1.0
22:45 2020/2/10 hexo-theme-dearmsdan 初始主题的目录如下
[1.0 hexo初始纯净主题下载](https://github.com/ZHD99/hexo-theme-dearmsdan/tree/1.0)

<div id="treeView1"></div>
<script>
var data1={files:[{id:0,pid:-1,title:'hexo-blog'},
{id:1,pid:0,title:'_config.yml  // 总体的配置文件'},
{id:2,pid:0,title:'node_modules      // NodeJs 所依赖的包，后期也可以自己添加插件 '},
{id:3,pid:0,title:'package-lock.json // 支持 hexo 运行的 NodeJs 包'},
{id:4,pid:0,title:'package.json      // 自定义的 NodeJs 包'},
{id:5,pid:0,title:'scaffolds         // Hexo  加载时的关键字，启动的时候默认加载'},
{id:6,pid:0,title:'source            // md 源文件目录'},
{id:7,pid:0,title:' themes            // 主题文件夹'},
{id:71,pid:7,title:'landscape     // 默认主题'},
{id:72,pid:7,title:'dearmsdan    // 自建的主题目录'},
{id:721,pid:72,title:'_config.yml               // 主题配置文件'},
{id:722,pid:72,title:'README.md                 // 自述文件'},
{id:723,pid:72,title:'languages                 // 语言配置目录(主要归档、nav配置)'},
{id:7231,pid:723,title:'zh-CN.yml             // 主页模板'},
{id:724,pid:72,title:'layout                    // 主要构造 html 的模板'},
{id:7241,pid:724,title:'_partial              // 将layout 拆分的部分'},
{id:72411,pid:7241,title:'copyright.ejs     // 文章页脚版权声明'},
{id:72412,pid:7241,title:'head.ejs          // head头部信息'},
{id:72413,pid:7241,title:'header.ejs        // 可变化导航栏 '},
{id:72414,pid:7241,title:'nav.ejs           // 首页导航 nav '},
{id:72415,pid:7241,title:'paginator.ejs     // 分页块'},
{id:72416,pid:7241,title:'sidebar.ejs       // 遍历 _side（文件 的全部ejs 文件'},
{id:7242,pid:724,title:'_side                 // 将_partial中的sidebar的部分拆分'},
{id:72421,pid:7242,title:'tagcloud.ejs      // 标签归档'},
{id:72422,pid:7242,title:'recent_posts.ejs  // 最新文章归档 '},
{id:72423,pid:7242,title:'category.ejs      // 文章分类归档 '},
{id:72424,pid:7242,title:'archive.ejs       // 标签归档 '},
{id:7243,pid:724,title:'index.ejs             // 主页模板(center'},
{id:7244,pid:724,title:'layout.ejs            // 布局模板(入口'},
{id:7245,pid:724,title:' links.ejs             // permalink模板(永久链接'},
{id:7246,pid:724,title:'post.ejs              // 文章模板 (md 编译成 html 后的文件模板 '},
{id:725,pid:72,title:'source                    // 静态资源文件目录'},
{id:7251,pid:725,title:'css                   // css 样式目录'},
{id:7252,pid:725,title:'js                    // JavaScript 脚本目录'},
{id:7253,pid:725,title:'resources             // 存放每一个模块开发的静态资源'},
]};
</script>

#### 2.0
14:25 2020/2/21 hexo-theme-dearmsdan 进行样式性的更改 完毕  
[hexo-theme-dearmsdan主题下载](https://github.com/ZHD99/hexo-theme-dearmsdan/)

<div id="treeView2"></div>
<script>
var data2={files:[{id:0,pid:-1,title:'hexo-blog'},
{id:1,pid:0,title:'_config.yml  // 总体的配置文件'},
{id:2,pid:0,title:'node_modules      // NodeJs 所依赖的包，后期也可以自己添加插件 '},
{id:3,pid:0,title:'package-lock.json // 支持 hexo 运行的 NodeJs 包'},
{id:4,pid:0,title:'package.json      // 自定义的 NodeJs 包'},
{id:5,pid:0,title:'scaffolds         // Hexo  加载时的关键字，启动的时候默认加载'},
{id:6,pid:0,title:'source            // md 源文件目录'},
{id:7,pid:0,title:' themes            // 主题文件夹'},
{id:71,pid:7,title:'landscape     // 默认主题'},
{id:72,pid:7,title:'dearmsdan    // 自建的主题目录'},
{id:721,pid:72,title:'_config.yml               // 主题配置文件'},
{id:722,pid:72,title:'README.md                 // 自述文件'},
{id:723,pid:72,title:'layout // 主要构造 ejs 的模板布局'},
{id:7231,pid:723,title:'_partial              // 将layout 拆分的部分'},
{id:72311,pid:7231,title:'_body    //网页中间内容的部分'},
{id:723111,pid:72311,title:'copyright.ejs    // 文章页脚版权声明'},
{id:723112,pid:72311,title:'paginator.ejs     // 分页块'},
{id:72312,pid:7231,title:'_footer    //网页底部内容的部分'},
{id:723121,pid:72312,title:'_comment  // 文章评论模板目录'},
{id:7231211,pid:723121,title:'valine.ejs  // valine评论系统'},
{id:723122,pid:72312,title:'comment.ejs 文章评论模板判断'},
{id:72313,pid:7231,title:'_head   //网页头部内容部分'},
{id:723131,pid:72313,title:'search.ejs  // 第三方插件 搜索'},
{id:723132,pid:72313,title:'sidebar.ejs     //侧边栏'},
{id:72314,pid:7231,title:'footer.ejs    // 底部模板'},
{id:72315,pid:7231,title:'head.ejs    // head头部信息,引入css 或者js'},
{id:72316,pid:7231,title:'header.ejs    // 导航栏'},
{id:72317,pid:7231,title:'toc.ejs    // 在post 被引用的目录模板'},
{id:72318,pid:7231,title:'pjax.ejs   // pjax功能的启用'},
{id:72319,pid:7231,title:'app.ejs    //  // 关闭pjax功能启用'},
{id:72315,pid:7231,title:'axis.ejs    //  // 时间轴模板，布局方式layout: axis '},
{id:72316,pid:7231,title:'links.ejs   //  // 时间轴模板，布局方式layout: links '},
{id:7232,pid:723,title:'_plug            // 插件聚集地,无影响其他模板'},
{id:72321,pid:7232,title:'_diy          // 节日判断文件夹'},
{id:723211,pid:72321,title:'main.ejs        // 节日判断弹窗'},
{id:723212,pid:72321,title:'utils.ejs       // 春节判断类'},
{id:72322,pid:7232,title:'cookie.ejs         // cookie 工具测试类（预计推出主题自定义换肤）'},
{id:72323,pid:7232,title:'debug.ejs         // 理论防窥代码'},
{id:72324,pid:7232,title:'ip.ejs         // 存储测试类'},
{id:72325,pid:7232,title:'judge.ejs        // 版本过低提醒功能'},
{id:72326,pid:7232,title:'meuplayer.ejs        // 音乐播放插件'},
{id:72327,pid:7232,title:'read.ejs        // 文章阅读工具人'},
{id:72327,pid:7232,title:'responsive.ejs        // 自适应问题解决方案'},
{id:72327,pid:7232,title:'top.ejs        // 返回顶部'},
{id:72327,pid:7232,title:'unit.ejs        // 插件模板'},
{id:72327,pid:7232,title:'playerlist.ejs       // // 音乐播放器 list  js'},
{id:7233,pid:723,title:'_side // 将_partial中_head的sidebar的部分拆分'},
{id:72331,pid:7233,title:'tagcloud.ejs      // 标签归档'},
{id:72332,pid:7233,title:'recent_posts.ejs  // 最新文章归档'},
{id:72333,pid:7233,title:'category.ejs      // 文章分类归档'},
{id:72334,pid:7233,title:'archive.ejs       // 标签归档'},
{id:7234,pid:723,title:'_test // 测试模板'},
{id:72341,pid:7234,title:'index.ejs // 测试类'},
{id:7235,pid:723,title:'index.ejs // 主页模板(center'},
{id:7236,pid:723,title:'layout.ejs            // 布局模板(入口'},
{id:7237,pid:723,title:'links.ejs        // permalink模板(永久链接'},
{id:7238,pid:723,title:'post.ejs // 文章模板 (md 编译成 html 后的文件模板'},
{id:724,pid:72,title:'source // 存放静态文件, https:***.com/ 反斜杠是source位置'},
{id:7241,pid:724,title:'css                   // css 样式目录'},
{id:72411,pid:7241,title:'social    // 社交图标css 样式目录'},
{id:724111,pid:72411,title:'social.css    // 社交图标css 样式'},
{id:72412,pid:7241,title:'avatar_user.css // 头像css 样式'},
{id:72413,pid:7241,title:'bootstrap-3.3.4.css    // bootstrap 框架css 样式'},
{id:72414,pid:7241,title:'post_content.css    // Statistics 统计css 样式'},
{id:72415,pid:7241,title:'style.css   // 网页基本样式'},
{id:7242,pid:724,title:'js                  // js 脚本目录'},
{id:72421,pid:7242,title:'copycode        // 代码复制功能目录'},
{id:724211,pid:72421,title:'clipboard.min.js        // 代码复制插件'},
{id:72422,pid:7242,title:'pjax       // pajx 功能目录'},
{id:724223,pid:72422,title:'jquery.pjax.js  // pajx插件'},
{id:72423,pid:7242,title:'top     // 返回顶部目录'},
{id:724231,pid:72423,title:'jquery.toTop.min.js    // 返回顶部插件'},
{id:72424,pid:7242,title:'app.js     // 网页基本脚本'},
{id:72425,pid:7242,title:'bootstrap-3.3.4.js  // bootstrap js 框架脚本'},
{id:72426,pid:7242,title:'debug.js        // 防窥提示类'},
{id:72427,pid:7242,title:'headBand.min.js    //顶部跟随滚轮'},
{id:72428,pid:7242,title:'jquery.slimscroll.min.js    //左侧滚动条js'},
{id:72429,pid:7242,title:'jquery1.10.2.min.js    //jq'},
{id:724210,pid:7242,title:'s.js   //search 生成脚本'},
{id:724210,pid:7242,title:'valine.js   //valine评论系统'},
{id:7243,pid:724,title:'resources  // 存放第三方静态资源，或者其他一切资源'},
{id:72431,pid:7243,title:'qiaoba.png  //  头像替换乔巴图片'},
{id:72432,pid:7243,title:'dearmsdan_link  //  友情链接目录'},
{id:724321,pid:72432,title:'link.css //  友情链接样式'},
{id:724322,pid:72432,title:'icon.png // 目录样式'},
{id:72433,pid:7243,title:'jscex // 同步插件目录'},
{id:72434,pid:7243,title:'loadingBar // 顶部加载条'},
{id:72435,pid:7243,title:'meuplayer // 底部音乐播放器目录'},
{id:724351,pid:72435,title:'css // 音乐播放器目录css'},
{id:724352,pid:72435,title:'player // 音乐播放器 js'},
{id:7243521,pid:724352,title:'index.js  // 音乐播放器 创建 js'},
{id:7243522,pid:724352,title:'player_database.js  // 音乐播放器 内容 js，（可自定义音乐）'},
{id:724353,pid:724352,title:'player.png // 音乐播放器小图片'},
{id:72436,pid:7243,title:'toc // toc'},
{id:724361,pid:72436,title:'jquery.pageslide.js // toc 目录翻开插件'},
{id:724362,pid:72436,title:'toc.css // toc 目录css'},
{id:72437,pid:7243,title:'zoom // 图片放大功能'},
{id:724371,pid:72437,title:'zoom.js  // 图片放大js插件'},
{id:724372,pid:72437,title:'zoom.css  // 图片放大css 样式'},
]};
</script>

<script>
var tools=(function(){var toolsObj={$:function(selector,context){context=context||document;if(selector.indexOf(" ")!==-1){return context.querySelectorAll(selector);}else if(selector.charAt(0)==="#"){return document.getElementById(selector.slice(1))}else if(selector.charAt(0)==="."){return context.getElementsByClassName(selector.slice(1));}else{return context.getElementsByTagName(selector);}},addEvent:function(ele,eventName,eventFn){ele.addEventListener(eventName,eventFn,false);},removeEvent:function(ele,eventName,eventFn){ele.removeEventListener(eventName,eventFn,false);},addClass:function(element,clsNames){if(typeof clsNames==="string"){if(!tools.hasClass(element,clsNames)){element.className+=" "+clsNames;}}},removeClass:function(element,clsNames){var classNameArr=element.className.split(" ");for(var i=0;i<classNameArr.length;i++){if(classNameArr[i]===clsNames){classNameArr.splice(i,1);i--;}}
element.className=classNameArr.join(" ");},hasClass:function(ele,classNames){var classNameArr=ele.className.split(" ");for(var i=0;i<classNameArr.length;i++){if(classNameArr[i]===classNames){return true;}}
return false;},toggleClass:function(ele,classNames){if(tools.hasClass(ele,classNames)){tools.removeClass(ele,classNames);return false;}else{tools.addClass(ele,classNames);return true;}},parents:function(obj,selector){if(selector.charAt(0)==="#"){while(obj.id!==selector.slice(1)){obj=obj.parentNode;}}else if(selector.charAt(0)==="."){while((obj&&obj.nodeType!==9)&&!tools.hasClass(obj,selector.slice(1))){obj=obj.parentNode;}}else{while(obj&&obj.nodeType!==9&&obj.nodeName.toLowerCase()!==selector){obj=obj.parentNode;}}
return obj&&obj.nodeType===9?null:obj;},each:function(obj,callBack){for(var i=0;i<obj.length;i++){callBack(obj[i],i);}},getEleRect:function(obj){return obj.getBoundingClientRect();},collisionRect:function(obj1,obj2){var obj1Rect=tools.getEleRect(obj1);var obj2Rect=tools.getEleRect(obj2);var obj1W=obj1Rect.width;var obj1H=obj1Rect.height;var obj1L=obj1Rect.left;var obj1T=obj1Rect.top;var obj2W=obj2Rect.width;var obj2H=obj2Rect.height;var obj2L=obj2Rect.left;var obj2T=obj2Rect.top;if(obj1W+obj1L>obj2L&&obj1T+obj1H>obj2T&&obj1L<obj2L+obj2W&&obj1T<obj2T+obj2H){return true}else{false;}},store:function(namespace,data){if(data){return localStorage.setItem(namespace,JSON.stringify(data));}
var store=localStorage.getItem(namespace);return(store&&JSON.parse(store))||[];},extend:function(obj){var newArr=obj.constructor===Array?[]:{};for(var attr in obj){if(typeof obj[attr]==="object"){newArr[attr]=tools.extend(obj[attr]);}else{newArr[attr]=obj[attr];}}
return newArr;},hide:function(element){return element.style.display="none";},show:function(element){return element.style.display="block";},getOffset:function(obj){return{width:obj.offsetWidth,height:obj.offsetHeight}},insertBefore:function(newElem,parentNode){if(parentNode.firstElementChild){parentNode.insertBefore(newElem,parentNode.firstElementChild);}else{parentNode.appendChild(newElem);}}}
return toolsObj;}())

</script>

<script>
function getLevelById(data,id){return getParents(data,id).length;}
function hasChilds(data,id){return getChildById(data,id).length!==0;}
function getChildById(arr,pid){var newArr=[];for(var i=0;i<arr.length;i++){if(arr[i].pid==pid){newArr.push(arr[i]);}};return newArr;}
function getParents(data,currentId){var arr=[];for(var i=0;i<data.length;i++){if(data[i].id==currentId){arr.push(data[i]);arr=arr.concat(getParents(data,data[i].pid))
break;}}
return arr;}
</script>


<script>
;(function(window,undefined){var treeView=tools.$('#treeView');var fileData=data.files;treeView.innerHTML=treeHtml(fileData,-1);var fileItem=tools.$('.treeNode');var root_icon=tools.$('.icon-control',fileItem[0])[0];root_icon.className='icon icon-control icon-minus';tools.each(fileItem,function(item){filesHandle(item);});function treeHtml(fileData,fileId){var _html='';var children=getChildById(fileData,fileId);var hideChild=fileId>0?'none':'';_html+='<ul class="'+hideChild+'">';children.forEach(function(item,index){var level=getLevelById(fileData,item.id);var distance=(level-1)*20+'px';var hasChild=hasChilds(fileData,item.id);var className=hasChild?'':'treeNode-empty';var treeRoot_cls=fileId===-1?'treeNode-cur':'';_html+=`
        <li>
          <div class="treeNode ${className} ${treeRoot_cls}" style="padding-left: ${distance}" data-file-id="${item.id}">
            <i class="icon icon-control icon-add"></i>
            <i class="icon icon-file"></i>
            <span class="title">${item.title}</span>
          </div>
          ${treeHtml(fileData,item.id)}
        </li>`;});_html+='</ul>';return _html;};function filesHandle(item){tools.addEvent(item,'click',function(){var treeNode_cur=tools.$('.treeNode-cur')[0];var fileId=item.dataset.fileId;var curElem=document.querySelector('.treeNode[data-file-id="'+fileId+'"]');var hasChild=hasChilds(fileData,fileId);var icon_control=tools.$('.icon-control',item)[0];var openStatus=true;tools.removeClass(treeNode_cur,'treeNode-cur');tools.addClass(curElem,'treeNode-cur');if(hasChild){openStatus=tools.toggleClass(item.nextElementSibling,'none');if(openStatus){icon_control.className='icon icon-control icon-add';}else{icon_control.className='icon icon-control icon-minus';}}});};})(window);
</script>




<script>/*  2  */ 
;(function(window,undefined){var treeView1=tools.$('#treeView1');var fileData=data1.files;treeView1.innerHTML=treeHtml(fileData,-1);var fileItem=tools.$('.treeNode1');var root_icon=tools.$('.icon-control',fileItem[0])[0];root_icon.className='icon icon-control icon-minus';tools.each(fileItem,function(item){filesHandle(item);});function treeHtml(fileData,fileId){var _html='';var children=getChildById(fileData,fileId);var hideChild=fileId>0?'none':'';_html+='<ul class="'+hideChild+'">';children.forEach(function(item,index){var level=getLevelById(fileData,item.id);var distance=(level-1)*20+'px';var hasChild=hasChilds(fileData,item.id);var className=hasChild?'':'treeNode-empty1';var treeRoot_cls=fileId===-1?'treeNode-cur1':'';_html+=`
        <li>
          <div class="treeNode1 ${className} ${treeRoot_cls}" style="padding-left: ${distance}" data-file-id="${item.id}">
            <i class="icon icon-control icon-add"></i>
            <i class="icon icon-file"></i>
            <span class="title">${item.title}</span>
          </div>
          ${treeHtml(fileData,item.id)}
        </li>`;});_html+='</ul>';return _html;};function filesHandle(item){tools.addEvent(item,'click',function(){var treeNode_cur1=tools.$('.treeNode-cur1')[0];var fileId=item.dataset.fileId;var curElem=document.querySelector('.treeNode1[data-file-id="'+fileId+'"]');var hasChild=hasChilds(fileData,fileId);var icon_control=tools.$('.icon-control',item)[0];var openStatus=true;tools.removeClass(treeNode_cur1,'treeNode-cur1');tools.addClass(curElem,'treeNode-cur1');if(hasChild){openStatus=tools.toggleClass(item.nextElementSibling,'none');if(openStatus){icon_control.className='icon icon-control icon-add';}else{icon_control.className='icon icon-control icon-minus';}}});};})(window);
</script>



<script>/*  2  */ 
var tools=(function(){var toolsObj={$:function(selector,context){context=context||document;if(selector.indexOf(" ")!==-1){return context.querySelectorAll(selector);}else if(selector.charAt(0)==="#"){return document.getElementById(selector.slice(1))}else if(selector.charAt(0)==="."){return context.getElementsByClassName(selector.slice(1));}else{return context.getElementsByTagName(selector);}},addEvent:function(ele,eventName,eventFn){ele.addEventListener(eventName,eventFn,false);},removeEvent:function(ele,eventName,eventFn){ele.removeEventListener(eventName,eventFn,false);},addClass:function(element,clsNames){if(typeof clsNames==="string"){if(!tools.hasClass(element,clsNames)){element.className+=" "+clsNames;}}},removeClass:function(element,clsNames){var classNameArr=element.className.split(" ");for(var i=0;i<classNameArr.length;i++){if(classNameArr[i]===clsNames){classNameArr.splice(i,1);i--;}}
element.className=classNameArr.join(" ");},hasClass:function(ele,classNames){var classNameArr=ele.className.split(" ");for(var i=0;i<classNameArr.length;i++){if(classNameArr[i]===classNames){return true;}}
return false;},toggleClass:function(ele,classNames){if(tools.hasClass(ele,classNames)){tools.removeClass(ele,classNames);return false;}else{tools.addClass(ele,classNames);return true;}},parents:function(obj,selector){if(selector.charAt(0)==="#"){while(obj.id!==selector.slice(1)){obj=obj.parentNode;}}else if(selector.charAt(0)==="."){while((obj&&obj.nodeType!==9)&&!tools.hasClass(obj,selector.slice(1))){obj=obj.parentNode;}}else{while(obj&&obj.nodeType!==9&&obj.nodeName.toLowerCase()!==selector){obj=obj.parentNode;}}
return obj&&obj.nodeType===9?null:obj;},each:function(obj,callBack){for(var i=0;i<obj.length;i++){callBack(obj[i],i);}},getEleRect:function(obj){return obj.getBoundingClientRect();},collisionRect:function(obj1,obj2){var obj1Rect=tools.getEleRect(obj1);var obj2Rect=tools.getEleRect(obj2);var obj1W=obj1Rect.width;var obj1H=obj1Rect.height;var obj1L=obj1Rect.left;var obj1T=obj1Rect.top;var obj2W=obj2Rect.width;var obj2H=obj2Rect.height;var obj2L=obj2Rect.left;var obj2T=obj2Rect.top;if(obj1W+obj1L>obj2L&&obj1T+obj1H>obj2T&&obj1L<obj2L+obj2W&&obj1T<obj2T+obj2H){return true}else{false;}},store:function(namespace,data){if(data){return localStorage.setItem(namespace,JSON.stringify(data));}
var store=localStorage.getItem(namespace);return(store&&JSON.parse(store))||[];},extend:function(obj){var newArr=obj.constructor===Array?[]:{};for(var attr in obj){if(typeof obj[attr]==="object"){newArr[attr]=tools.extend(obj[attr]);}else{newArr[attr]=obj[attr];}}
return newArr;},hide:function(element){return element.style.display="none";},show:function(element){return element.style.display="block";},getOffset:function(obj){return{width:obj.offsetWidth,height:obj.offsetHeight}},insertBefore:function(newElem,parentNode){if(parentNode.firstElementChild){parentNode.insertBefore(newElem,parentNode.firstElementChild);}else{parentNode.appendChild(newElem);}}}
return toolsObj;}())

</script>

<script>/*  2  */ 
function getLevelById(data,id){return getParents(data,id).length;}
function hasChilds(data,id){return getChildById(data,id).length!==0;}
function getChildById(arr,pid){var newArr=[];for(var i=0;i<arr.length;i++){if(arr[i].pid==pid){newArr.push(arr[i]);}};return newArr;}
function getParents(data,currentId){var arr=[];for(var i=0;i<data.length;i++){if(data[i].id==currentId){arr.push(data[i]);arr=arr.concat(getParents(data,data[i].pid))
break;}}
return arr;}
</script>


<script>/*  3  */ 
;(function(window,undefined){var treeView2=tools.$('#treeView2');var fileData=data2.files;treeView2.innerHTML=treeHtml(fileData,-1);var fileItem=tools.$('.treeNode2');var root_icon=tools.$('.icon-control',fileItem[0])[0];root_icon.className='icon icon-control icon-minus';tools.each(fileItem,function(item){filesHandle(item);});function treeHtml(fileData,fileId){var _html='';var children=getChildById(fileData,fileId);var hideChild=fileId>0?'none':'';_html+='<ul class="'+hideChild+'">';children.forEach(function(item,index){var level=getLevelById(fileData,item.id);var distance=(level-1)*20+'px';var hasChild=hasChilds(fileData,item.id);var className=hasChild?'':'treeNode-empty2';var treeRoot_cls=fileId===-1?'treeNode-cur2':'';_html+=`
        <li>
          <div class="treeNode2 ${className} ${treeRoot_cls}" style="padding-left: ${distance}" data-file-id="${item.id}">
            <i class="icon icon-control icon-add"></i>
            <i class="icon icon-file"></i>
            <span class="title">${item.title}</span>
          </div>
          ${treeHtml(fileData,item.id)}
        </li>`;});_html+='</ul>';return _html;};function filesHandle(item){tools.addEvent(item,'click',function(){var treeNode_cur2=tools.$('.treeNode-cur2')[0];var fileId=item.dataset.fileId;var curElem=document.querySelector('.treeNode2[data-file-id="'+fileId+'"]');var hasChild=hasChilds(fileData,fileId);var icon_control=tools.$('.icon-control',item)[0];var openStatus=true;tools.removeClass(treeNode_cur2,'treeNode-cur2');tools.addClass(curElem,'treeNode-cur2');if(hasChild){openStatus=tools.toggleClass(item.nextElementSibling,'none');if(openStatus){icon_control.className='icon icon-control icon-add';}else{icon_control.className='icon icon-control icon-minus';}}});};})(window);
</script>



<script>/*  3 */ 
var tools=(function(){var toolsObj={$:function(selector,context){context=context||document;if(selector.indexOf(" ")!==-1){return context.querySelectorAll(selector);}else if(selector.charAt(0)==="#"){return document.getElementById(selector.slice(1))}else if(selector.charAt(0)==="."){return context.getElementsByClassName(selector.slice(1));}else{return context.getElementsByTagName(selector);}},addEvent:function(ele,eventName,eventFn){ele.addEventListener(eventName,eventFn,false);},removeEvent:function(ele,eventName,eventFn){ele.removeEventListener(eventName,eventFn,false);},addClass:function(element,clsNames){if(typeof clsNames==="string"){if(!tools.hasClass(element,clsNames)){element.className+=" "+clsNames;}}},removeClass:function(element,clsNames){var classNameArr=element.className.split(" ");for(var i=0;i<classNameArr.length;i++){if(classNameArr[i]===clsNames){classNameArr.splice(i,1);i--;}}
element.className=classNameArr.join(" ");},hasClass:function(ele,classNames){var classNameArr=ele.className.split(" ");for(var i=0;i<classNameArr.length;i++){if(classNameArr[i]===classNames){return true;}}
return false;},toggleClass:function(ele,classNames){if(tools.hasClass(ele,classNames)){tools.removeClass(ele,classNames);return false;}else{tools.addClass(ele,classNames);return true;}},parents:function(obj,selector){if(selector.charAt(0)==="#"){while(obj.id!==selector.slice(1)){obj=obj.parentNode;}}else if(selector.charAt(0)==="."){while((obj&&obj.nodeType!==9)&&!tools.hasClass(obj,selector.slice(1))){obj=obj.parentNode;}}else{while(obj&&obj.nodeType!==9&&obj.nodeName.toLowerCase()!==selector){obj=obj.parentNode;}}
return obj&&obj.nodeType===9?null:obj;},each:function(obj,callBack){for(var i=0;i<obj.length;i++){callBack(obj[i],i);}},getEleRect:function(obj){return obj.getBoundingClientRect();},collisionRect:function(obj1,obj2){var obj1Rect=tools.getEleRect(obj1);var obj2Rect=tools.getEleRect(obj2);var obj1W=obj1Rect.width;var obj1H=obj1Rect.height;var obj1L=obj1Rect.left;var obj1T=obj1Rect.top;var obj2W=obj2Rect.width;var obj2H=obj2Rect.height;var obj2L=obj2Rect.left;var obj2T=obj2Rect.top;if(obj1W+obj1L>obj2L&&obj1T+obj1H>obj2T&&obj1L<obj2L+obj2W&&obj1T<obj2T+obj2H){return true}else{false;}},store:function(namespace,data){if(data){return localStorage.setItem(namespace,JSON.stringify(data));}
var store=localStorage.getItem(namespace);return(store&&JSON.parse(store))||[];},extend:function(obj){var newArr=obj.constructor===Array?[]:{};for(var attr in obj){if(typeof obj[attr]==="object"){newArr[attr]=tools.extend(obj[attr]);}else{newArr[attr]=obj[attr];}}
return newArr;},hide:function(element){return element.style.display="none";},show:function(element){return element.style.display="block";},getOffset:function(obj){return{width:obj.offsetWidth,height:obj.offsetHeight}},insertBefore:function(newElem,parentNode){if(parentNode.firstElementChild){parentNode.insertBefore(newElem,parentNode.firstElementChild);}else{parentNode.appendChild(newElem);}}}
return toolsObj;}())

</script>

<script>/*  3 */ 
function getLevelById(data,id){return getParents(data,id).length;}
function hasChilds(data,id){return getChildById(data,id).length!==0;}
function getChildById(arr,pid){var newArr=[];for(var i=0;i<arr.length;i++){if(arr[i].pid==pid){newArr.push(arr[i]);}};return newArr;}
function getParents(data,currentId){var arr=[];for(var i=0;i<data.length;i++){if(data[i].id==currentId){arr.push(data[i]);arr=arr.concat(getParents(data,data[i].pid))
break;}}
return arr;}
</script>

#### 3.0







<!-- 1.0

├── _config.yml                 
├── node_modules                
├── package-lock.json        
├── package.json                
├── scaffolds                        
├── source                            
└── themes                            
    ├── landscape                     // hexo 自带主题
    └── dearmsdan                     // 自建的主题目录
        ├── _config.yml               // 主题配置文件
        ├── README.md                 // 自述文件
        ├── languages                 // 语言配置目录(主要归档、nav配置)
        │   └── zh-CN.yml             // 主页模板
        ├── layout                    // 主要构造 html 的模板
        │   ├── _partial              // 将layout 拆分的部分
        │   │   ├── copyright.ejs     // 文章页脚版权声明 
        │   │   ├── head.ejs          // head头部信息
        │   │   ├── header.ejs        // 可变化导航栏 
        │   │   ├── nav.ejs           // 首页导航 nav 
        │   │   ├── paginator.ejs     // 分页块
        │   │   └── sidebar.ejs       // 遍历 _side（文件 的全部ejs 文件
        │   ├── _side                 // 将_partial中的sidebar的部分拆分
        │   │   ├── tagcloud.ejs      // 标签归档
        │   │   ├── recent_posts.ejs  // 最新文章归档 
        │   │   ├── category.ejs      // 文章分类归档
        │   │   └── archive.ejs       // 标签归档
        │   ├── archive.ejs           // 归档模板
        │   ├── index.ejs             // 主页模板(center
        │   ├── layout.ejs            // 布局模板(入口
        │   ├── links.ejs             // permalink模板(永久链接
        │   └── post.ejs              // 文章模板 (md 编译成 html 后的文件模板
        └── source                    // 静态资源文件目录
            ├── css                   // css 样式目录
            └── js                    // JavaScript 脚本目录
            └── resources             // 存放每一个模块开发的静态资源

-->

<!-- 2.0

├── _config.yml                 
├── node_modules                
├── package-lock.json        
├── package.json                
├── scaffolds                        
├── source                            
└── themes                            
    ├── landscape                     // hexo 自带主题
    └── dearmsdan                     // 自建的主题目录
        ├── _config.yml               // 主题配置文件 (有详细介绍)
        ├── README.md                 // 自述文件
        ├── languages                 // 语言配置目录
        │   └── zh-CN.yml             // 主页模板
        ├── layout                    // 主要构造 html 的模板
        │   ├── _partial              // 将layout 拆分的部分
        │   │   ├── copyright.ejs     // 文章页脚版权声明 
        │   │   ├── head.ejs          // head头部信息
        │   │   ├── header.ejs        // 导航栏 
        │   │   ├── search.ejs        // 全文搜索(需要安装2个相应的插件)
        │   │   ├── paginator.ejs     // 分页块
        │   │   ├── sidebar.ejs       // 遍历 _side（文件 的全部ejs 文件
        │   │   └── footer.ejs        // 脚部模板
        │   ├── _side                 // 将_partial中的sidebar的部分拆分
        │   │   ├── tagcloud.ejs      // 标签归档
        │   │   ├── recent_posts.ejs  // 最新文章归档 
        │   │   ├── category.ejs      // 文章分类归档
        │   │   └── archive.ejs       // 标签归档
        │   ├── _plug                 // 添加与其他模板无影响插件
        │   │   ├─ debug.ejs          // 偷窥代码提示
        │   │   ├─ judge.ejs          // 低版本无法访问友情提示
        │   │   ├─ meuplayer.ejs      // 音乐插件audio player 
        │   │   └── unit.ejs          // 插件公共聚集地
        │   ├── archive.ejs           // 归档模板
        │   ├── index.ejs             // 主页模板(center
        │   ├── layout.ejs            // 布局模板(入口
        │   ├── links.ejs             // permalink模板(永久链接
        │   └── post.ejs              // 文章模板 (md 编译成 html 后的文件模板
        └── source                    // 静态资源文件目录
        │   ├── 404.html              // 页面错误访问
        │   ├── favicon.ico           // 网站访问小图标
        │   ├── favicon.png           // 网站访问小图片
        │   ├── loading-bg.png        // 加载背景
        │   ├── logo.png              // logo图片
        │   ├── Pexels.mp4            // 视频头像
        │   ├── a.png                 // 正常访问鼠标
        │   ├── link.png              // 正常访问鼠标
        │   ├── css                   // css 样式目录
        │   │   ├─ style.css          // 全局样式
        │   │   ├─ avatar_user.css    // 自定义抖动css
        │   │   ├─ bootstrap-3.3.4.css// bootstrap UI
        │   │   ├─ post_content.css   // 文章统计样式
        │   │   └─ social             // 社交按钮css
        │   └── js                    // JavaScript 脚本目录
        │   │   ├─ pjax               // 使用pjax 实现全站无刷新技术
        │   │   ├─ top                // 回到顶部
        │   │   ├─ app.js             // 全局js
        │   │   ├─ bootstrap-3.3.4.js // bootstrap 框架库
        │   │   ├─ debug.js           // 非法调试 检测
        │   │   ├─ jquery.slimscroll.min.js // 滚动条
        │   │   ├─ jquery1.10.2.min.js // jq库
        │   │   ├─ s.js               // 搜索功能
        │   │   └─ valine.js          // 使用的评论系统js
        │   └── resources             // 存放每一个模块开发的静态资源
        |   │   ├─ qiaoba.png         // 乔巴.png
        |   │   ├─ jscex              // jscex相关库
        |   │   ├─ loadingBar         // 加载功能
        |   │   ├─ meuplayer          // 音乐插件
        |   │   ├─ prettyPrint        // 代码高亮
        |   │   ├─ preview-photo      // 放大图片
        |   │   ├─ tochelper          // hexo目录插件（需要安装插件）
        |   │   └─ dearmsdan_link     // 存放永久链接的静态资源
        └── _test                     // 用于测试的一个模板(随意删除)
            
-->