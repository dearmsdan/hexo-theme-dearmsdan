---
title: mongodb数据库
author: dearmsdan
categories:
- 数据库
tags:
- mongodb
data: [{
       name: 'mongoose'
       ,value: 'node.js的优雅mongodb对象建模'
       ,href: 'https://mongoosejs.com/'
      }]
tips: [  
    '作者','开箱即用的对象模型','hi3','hi4','hwadwa'
  ]
---
mongodb 常见问题收集，待跟新...

<!--more-->


问题！！！！

通过<span class="article-flag-sup">mongoose</span>创建集合一定要加S   例如`replye` 加S `replyes`  
const ReplyModel = mongoose.model('replyes', ReplySchema);  

为什么呢？  
因为默认会给你添加S，如果你操作管道/聚合 与集合信息相关操作，如果不是表名字会出现不可预知的空数组问题，最好创建model保持和集合名字相同，避免没必要的寻找bug时间



## 安装 MongoDB

1. 下载安装 MongoDB
2. 配置mongodb bin目录为计算机全局目录
3. 配置数据库存放位置
   1. `mongod --dbpath c:\data\db`  
      1. 这里的`c:\data\db` 代表需要存放的位置
      2. 成功输出`indows Server 2008 R2` 字样
4. 连接MongoDB
   1. 命令行输入`mongo`
      1. 如果没有上一步的配置无法连接数据库
      2. 如果没有配置全局路径无法直接输入，需要在mongodb目录输入
5. MongoDB 写入配置为
   1. 默认配置的位置`mongodb\mongod.cfg`
   2. 创建服务
      1. 
         ```命令行
         mongod --config "D:\Back\DataBase\mongodb\install\bin\mongod.cfg" --install
         ```
   3. 开启服务
      1. net start MongoDB

