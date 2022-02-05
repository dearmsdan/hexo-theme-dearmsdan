---
title: npm 包管理器
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 前端工具
tags:
- npm
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---
npm基本使用

<!--more-->



## npm 命令

- npm -V

  -查看版本

- npm  
  -帮助说明

- npm search 包名  
  -搜索模块包

- npm install 包名  
  -在当前目录安装包

- npm install  包名 -S  
  -包名会被注册在package.json的dependencies里面，在生产环境下，这个包的依赖依然存在
  
- npm install  包名 -D  
  -包名会被注册在package.json的devDependencies里面，仅在开发环境下存在
  
- npm install 包名 -g  
  -全局模式安装包

- npm remove 包名  
  -删除一个模块
- npm install 文件路径  
  -从本地安装
- npm install 包名-registry = 地址  
  -从镜像源安装
- npm config set registry 地址  
  -设置镜像源

