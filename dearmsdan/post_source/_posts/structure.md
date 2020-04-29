---
title: 记录 hexo-theme-dearmsdan 结构，hexo的基本介绍
date: 21:29 2020/2/10
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

<!-- toc -->



## **Blog结构**

```
├── _config.yml       // 总体的配置文件
├── node_modules      // NodeJs 所依赖的包，后期也可以自己添加插件
├── package-lock.json // 支持 hexo 运行的 NodeJs 包
├── package.json      // 自定义的 NodeJs 包
├── scaffolds         // Hexo Markdown 加载时的关键字，如data,title等,它会在启动的时候默认加载
├── source            // md 源文件目录
└── themes            // 主题文件夹
	└── landscape     // 默认主题        
```

这是hexo 主目录  创建时的结构

### ***config配置信息.***

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

# Directory
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

# 目录
toc:
  maxdepth: 3
  class: toc
  slugify: transliteration
  decodeEntities: false
  anchor:
    position: after
    symbol: '#'
    style: header-anchor

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

 在『_config.yml』 以上95行 可以修改主题 默认主题为 theme：landscape 



## **1.0**

22:45 2020/2/10  hexo-theme-dearmsdan 初始主题的目录如下

```
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
            
```



## **2.0.**
14:25 2020/2/21  hexo-theme-dearmsdan 进行样式性的更改 完毕

```
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
            
```


## **3.0 Hexo Back 开发中.**

