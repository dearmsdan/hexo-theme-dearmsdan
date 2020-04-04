# hexo-theme-dearmsdan
 HEXO 主题 暗色调，高逼格给人一种空灵的感觉 
  view： [dearmsdan](https://dearmsdan.com/)
  语言支持：  

  - [x] 中文


# 安装

dearmsdan 与其他主题一样的安装  
首先 把本主题 拉到自己电脑上的 主题目录

```
git clone https://github.com/ZHD99/hexo-theme-dearmsdan.git dearmsdan
```

 必要插件： (如果没有安装会报错)
```
npm install hexo-wordcount --save  
npm install hexo-toc --save  
npm install hexo-generator-search --save  
npm install hexo-generator-searchdb --save  
```

主题集合了hexo 许多插件，需要添加以上 ↑↑↑目录、搜索、统计插件 才能正常运行  
（ [全部插件](https://github.com/ZHD99/hexo-theme-dearmsdan/blob/master/package.json)

注意:    

```
    highlight:false;  // 如果出现高亮多层 在总体的配置文件config设置false
```
        检查总体的配置文件config 语言是否是 language: zh-CN  //主题只支持中文

```
    在编写 Markdown 文章的时候 首页中展示的 一部分文章内容 概述
    需要在文中添加 <!--more--> 则该标记之前的部分就会成为该文章的概述，显示在首页		里
```



主题在测试中，如果有问题请 [Issues](https://github.com/ZHD99/hexo-theme-dearmsdan/issues) 哦...

