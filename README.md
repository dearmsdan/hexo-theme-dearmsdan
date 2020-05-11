<div align="right">
  Language:
  中文
</div>

<p align="center">
   <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E= v12.13.1-green?style=flat-square"></a>
  <a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-%3E=4.0.0-blue?style=flat-square&logo=hexo"></a>
  <a href="https://github.com/theme-next/hexo-theme-next/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/license-%20MIT -orange?style=flat-square&logo=gnu"></a>
 


HEXO 主题 宝钻蓝色，给你一种空灵的感觉
view： [dearmsdan](https://www.dearmsdan.com)
</p>
<br/>


## 安装

#### 安装方法一：

dearmsdan 主题使用`ejs`模板引擎开发

1. 拷贝主题到`themes`目录

```
cd themes
git clone https://github.com/ZHD99/hexo-theme-dearmsdan.git dearmsdan
```

2. 修改主程序的`_config.yml`文件

```
theme: dearmsdan
```

就可以运行了，`hexo s`

#### 安装方法二：

如果不会第一种可以选择此方法

<details>
<summary>展开查看</summary>
<pre><code>
哦 上帝，gif只能显示一部分，可以点链接看安装方法
<a href="http://link.dearmsdan.com/anz.gif">[安装方法gif]</a>

![anz](http://link.dearmsdan.com/anz.gif)
</code></pre>
</details>

## 更新

```
cd themes/dearmsdan
git pull
```




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

