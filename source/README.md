> <center><a href="https://www.dearmsdan.com"></a>hi mogul  blog   </center>
### 10:54 2020/5/6   

体积: 584 KB

修改内容：   
	修改主题config   
			1.配置大纲描述信息  
			2.修改网站小图标  /favicon.png 跟改为 /logo.png   
			3.更新阿里图标库链接    
			4.压缩头像体积, 主题大小约为 584 KB
	修改目录模块  
			1.为目录添加翻页插件pageslide.js  
			2.添加css 样式  
			3.使用hexo自带 toc目录 函数  
			4.目录模板位置为layout\_partial/toc.ejs   
	修改社交按钮中 邮箱点击错误问题    
	更改 整体页面UI颜色、滚动条颜色等等...   
	修改搜索模板  
			1.搜索功能更改为第三方插件，默认为关闭状态，需要下载插件开启  
			2.修改搜索模板位置.  
	修改让原来的固定页脚显示信息，为动态显示作者信息   
	修改模板位置  
			1.copyright.ejs  2.paginator.ejs 3. search.ejs 4.sidebar.ejs   
	统一 字体大小，修复移动端大小不一  
	重新定义 bootstrap h1~h6 标签样式  
	修改 pre code 等标签的样式   

删除内容：

​	删除所有需要安装插件  
​	删除 prettyPrint 代码高亮  
​	删除 preview 图片放大功能  
​	删除插件 toc  
​	删除多语言，统一为中文,暂不考虑多语言  
​	删除提示文件 ，删除多余注释    
​	删除全局加载动画，减少等待时间  
​	删除多余归档页  
​	删除文章记数统计功能  
​	删除 /favicon.ico和/favicon.png  

新增内容：  
	顶部加载条 跟随滚动条进度功能  
    新增 ../pajx/app.js  不开启 pjax  与pjax 开启 ../pajx/index.js 功能一致   
	新增 悬浮hover 放大图片功能   zoom  
	新增使用hexo自带 toc目录 函数  
	新增代码复制功能 clipboard.min.js  
	新增目录(/layout/_partial/*)_ body, _footer,_head  
	新增文章阅读功能，选择一小段文字可阅读  
	新增 avatar遮罩头像 css   
	












###### 16:58 2020/4/29

修改内容：
		取消视频头像，头像设置为gif，或者其他图片格式
		处理部分样式问题，样式逐渐完善修改中。。。。

新增内容： 
		添加备用头像，防止头像不显示的情况



###### 19:02 2020/4/4

新增内容：
		访问存储 ip 机制，新增 节日提示、网页diy 的初始构建
		 添加 cookie 测试及应用存储

修改内容：
		整理 _plug 文件结构 ，添加 _diy 文件（设置节日 或 季节 及重要日子 diy ）
		优化 toc-helper 目录生成插件


# **14:25 2020/2/21.**
14:25 2020/2/21  hexo-theme-dearmsdan 进行样式性的更改 完毕   

新主题: hexo-theme-dearmsdan  
新网站: www.dearmsdan.com  
新名字: hi mogul  

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

