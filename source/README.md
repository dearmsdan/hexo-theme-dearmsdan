> <center><a href="https://www.dearmsdan.com"></a> blog   </center>

# 9:39 2022/2/6

体积: 1.1 MB  
版本: 3.0 Version  
 hexo-theme-dearmsdan 进行结构性的更改 完毕    
使用自主开发SeablueUI框架，有利于开发实现博客内容前后端分离数据渲染，获取数据渲染视图，js置于底部加速页面访问速度,取消之前Pjax单页面显示，有利于SEO优化，使代码易于维护

初始内容:  
		多级菜单   
		搜索功能  
		作者功能  
		评论功能  
		版权脚注功能  
		图片放大展示  
		代码高亮  
		外部框架自适应\(iframe\)  
		公式功能\(katex\)  
		外链拦截  
		图片随机特效  
		附加页面: 404、外链页面、云标签页面、年月日归档页面、分类页面、自适应页面示例\(iframe\)、公式代码\(katex\)页面示例

删除内容:    
		推倒翻新，删除原有bootstrap+jquery结构




13:02 2021/2/9

体积: 774 KB 

修改内容:  
		更改部分config注释  
		侧边栏列表配置可删除性  

新增内容:  
		添加鼠标指针图片配置   
		公式功能

删除内容:    
		删除已失效的阅读功能   
		删除顶部进度条冲突,进度条更新敬请期待....

### 11:19 2020/9/15

体积: 772 KB

修改内容：  
		 自定义音乐播放  
				1、修复坏链接自动下一曲      
				2、添加 默认音量调节    
				3、添加自动播放、循环播放 默认项

​		修复 二级菜单链接相对路径问题    
​		优化404 页面     
​		我删除了滚动条插件 中的一条代码，我忘记是什么了   
​		删除火狐不兼容属性、页面初加载动画      
​		pjax 修复了评论区功能和优化了各项等等   

新增内容：    
		离线访问功能  
		置顶功能  
		添加默认排版的3种效果 ，排版功能添加各项属性	   
		添加 welcome 控制台输出欢迎

删除内容：

​		删除代码偷窥拦截  
​		删除response.ejs 、outlook.html 等等文件



### 16:42 2020/8/24

体积: 764 KB 

明天就是七夕了，主题也该更新了  

修改内容：  
		修改阳历及新增农历判断  
		超链接和悬浮效果为跟随元素背景颜色  
		新增css 一些没有，但类似于变量的样式  
		删除背景颜色css 设置，设置为动态dom 添加，减少页面因为图片加载时间  
		预留 二级菜单过长隐藏css     
		二级菜单平滑样式  
		提高中间部分层次(z-index) 为2   
		目录图标 坐标偏移、层次设置(z-index) 为1  
		文章页面悬浮透明白色背景  
		处理一些字体、颜色、处理导航栏媒体查询显示不正常情况优化！   
		移动端不显示或者不兼容情况设置媒体查询强制隐藏  
		标签内容改大css   
		修改 QQ社交按钮 绿色改灰色   
		代码字体设置为14偏小   
		添加一些没用的注释、个人介绍    
		自定义 返回顶部  爱心状、箭头、三角形     
		阅读功能设置延迟加载  
		音乐播放器延迟加载

新增内容：    
		四季 画布特效 ( 来自腾讯设计团队粒子类动画组件)  
		设置 侧边栏二级菜单悬浮、点击不同效果 一共六种  
		新增背景效果均为动态dom 操作：  
				普通图片效果、动态图片效果、视频背景效果   
		首页排版：  
				无文字排版、 图文主题排版  小、中、大码  
		自定义画布：  
				少女系主题:  悬浮的心、旋转的、错乱的  
		添加 自定义主题颜色设置

删除内容：

​		图片放大功能占用内存大    
​		删除cookie   
​		删除 ip 存储   
​		    




16:42 2020/5/16

修改内容：  
		外部链接拦截功能设置为默认不开启   
		修改时间轴的页面bug，新样式  
		文章内容修改有序列表、无序列表为默认值

11:11 2020/5/11

修改内容：  
		动态设置外部链接拦截提示，写入配置文件  
		时间轴不支持移动端 页面提示信息

##### 22:44 2020/5/10

体积: 617 KB

修改内容：  
		修改邮箱文件关闭时间延迟3秒  
		修改友情链接图片高度  
		修改移动端字体大小为 1.5rem  
		修改移动端h1,.h1 标签 为继承 body 大小  
		修改 hexo永久链接（Permalinks）：  
				永久链接为Permalinks: 留言板、关于  
				永久链接为links: 友情链接  
				永久链接为axis: 时间轴

新增内容：    
		新增页面时间轴

删除内容：

​		删除 统计(post-Statistics)词条 悬浮变大




##### 22:23 2020/5/9

体积: 586 KB

修改内容：   

​	修改主题config 描述信息  
​	把pjax 、音乐播放器模板的脚本修改成ejs模板动态添加数据

删除内容：

​	/js/pjax/app.js  
​	/js/pjax/index.js  
 	/resources/meuplayer/player/player_database.js

新增内容：  

​	新增悬浮文章上变色功能  
​	新增自定义音乐


##### 22:36 2020/5/8

体积：585 KB

修改内容：   
	修改主题config 描述信息   
	评论区更名为留言板   
	修改底部footer text 又拍云 更新为图片    
	pjax 功能 关闭与启用 ，与其他模板功能一致

新增内容：   
	新增基本信息配置  
	新增调试功能  
	新增文章评论 模板  

可能更新内容：

​	自定义主题元素、自定义文章评论模板、等等.......

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

##### 9:57 2019/12/31  

 更新内容：  
	右键功能( 禁用原生右击，实现选取复制、关于，问题较多  
	离开页面标题提示信息( js  
	增强用户体验的淡出功能，减少网页缓存等待的无趣。。  
	

##### 15:44 2019/12/16  

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

