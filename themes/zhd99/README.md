> <center><a href="https://www.zhd99.cn"></a>揪蝉的日常 blog   </center>





# **22:45 2020/2/10**

打造新主题 dearmsdan  由于pjax的问题较多，放弃[hexo-theme-nexmoe](https://github.com/nexmoe/hexo-theme-nexmoe) 主题.
非常感谢nexmoe提供的开源，让我在hexo 的学习下了解更多的知识

结构如下：

```markdown
     ── dearmsdan                     // 自建的主题目录
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





##### 10:25 2020/1/31  

网站发布正式版本： www.zhd99.cn  
 更新内容：  
 	码云：https://gitee.com/zhd99/zhd99  
	GitHub：https://github.com/ZHD99/zhd99.github.io  
	coding：https://zhd99.coding.net/p/zhd99blog/d/zhd99blog/git  
	同时推送 
	精简版 背景固定

​	   

##### 10:25 2020/1/9  

 更新内容：  
 	Git 访问速度过慢，hexo 迁至coding  

##### 10:25 2020/1/3  

 更新内容：  

​	随机 变化的淡入  

 修改内容：  
 	layout.ejs 实现分离  
    分离部分：加载条、加载logo(保留原有)、网页看板娘（live2D）、搜索按钮、搜索提示、	  搜索页面、淡入淡出效果、离开网页提示、代码高亮设置、valine 页面隐藏部分内容、左侧滚动条设置.
 删除内容：  
 	右击功能( 没有实际的作用  

##### 9:57 2020/12/31  

 更新内容：  
	右键功能( 禁用原生右击，实现选取复制、关于，问题较多  
	离开页面标题提示信息( js  
	增强用户体验的淡出功能，减少网页缓存等待的无趣。。  
	

##### 15:44 2020/12/16  

 hexo blog 进一步建设  
 修改：  
	分享链接（图片展示  
	取消懒加载（ 图片展示不多,多应用于cdn加速 及 来源于网络  
	pre code 代码高光 （rgb(255, 243, 234)  ， rgb(100, 127, 1）  
 更新内容：  
	live2D 看板l娘  
	valine 默认值的修改  
	删除原有加载logo , 设置新loading （ books  


### 10:41 2019/11/25

 hexo blog 初步建设完成  使用[hexo-theme-nexmoe](https://github.com/nexmoe/hexo-theme-nexmoe) 主题.  
 应用下功能：  
	回到首页、主页头像、关于博客、分享链接、本站搜索、node(npm) Git 发帖、valine 评论、文章分类、标签 
	文章归档、社交按钮、懒加载
	各功能的完善等等....
 更新内容：  
	每页展示 5 张   
	访问、刷新实现加载进度条......  
	页面加载 loading (圆圈)  

