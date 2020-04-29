# hexo-theme-dearmsdan
HEXO 主题 暗色调，高逼格给人一种空灵的感觉 
view： [dearmsdan](https://dearmsdan.com/)

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



========================

# hexo 防止忘记 copy hexo 官方文档  小手册



## generate （生成静态文件 在public 下

```
$ hexo generate
```

生成静态文件。

| 选项                  | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| `-d`, `--deploy`      | 文件生成后立即部署网站                                       |
| `-w`, `--watch`       | 监视文件变动                                                 |
| `-b`, `--bail`        | 生成过程中如果发生任何未处理的异常则抛出异常                 |
| `-f`, `--force`       | 强制重新生成文件 Hexo 引入了差分机制，如果 `public` 目录存在，那么 `hexo g` 只会重新生成改动的文件。 使用该参数的效果接近 `hexo clean && hexo generate` |
| `-c`, `--concurrency` | 最大同时生成文件的数量，默认无限制                           |

该命令可以简写为

```
$ hexo g
```

## server （ 启动 hexo 页面 ， 可以 localhost:4000 查看

```
$ hexo server
```

启动服务器。默认情况下，访问网址为： `http://localhost:4000/`。

| 选项             | 描述                           |
| :--------------- | :----------------------------- |
| `-p`, `--port`   | 重设端口                       |
| `-s`, `--static` | 只使用静态文件                 |
| `-l`, `--log`    | 启动日记记录，使用覆盖记录格式 |



## deploy（ 部署 在远程服务器上，或者部署在其他平台

```
$ hexo deploy
```

部署网站。

| 参数               | 描述                     |
| :----------------- | :----------------------- |
| `-g`, `--generate` | 部署之前预先生成静态文件 |

该命令可以简写为：

```
$ hexo d
```



## clean （ 清理 public 文件下的静态文件，注意！每次server前清理，极力提醒自己，防止错误寻找很久的问题

```
$ hexo clean
```

清除缓存文件 (`db.json`) 和已生成的静态文件 (`public`)。

在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。



## version

```
$ hexo version
```

显示 Hexo 版本。





## 部分插件用法

 

## gulp 的使用 （一）


### gulp 压缩
```
hexo g
gulp  // 执行压缩，两条命令可以合并：hexo g && gulp
```

只需要每次在执行 generate 命令后执行 gulp 就可以实现对静态资源的压缩

### 执行部署命令

```
hexo d
```



## gulp 的使用 （二）
```
gulp build
```

