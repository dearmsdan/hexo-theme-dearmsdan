>>什么是 Hexo？  
[Hexo](https://hexo.io/) 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

用hexo 过程发现它 是一个插件十齐全的一个博客系统，快速、简洁且高效，在hexo 的主题下，我下载使用了 [hexo-theme-nexmoe](https://github.com/nexmoe/hexo-theme-nexmoe) 主题，非常的花里胡哨且简洁。  
于是不断的在样式和布局上折腾，最后因为pjax的原因放弃了这个主题，于是自己开始打造属于自己的hexo博客 hexo-theme-dearmsdan ........ 





## 1.0 hexo 纯净版 主题：

### 安装

dearmsdan 与其他主题一样的安装  
本主题 拉到自己电脑上的 主题目录 下 

```
git clone https://github.com/ZHD99/hexo-theme-dearmsdan.git --branch 1.0
```

## 测试

运行命令  

```
$ hexo g
```





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
