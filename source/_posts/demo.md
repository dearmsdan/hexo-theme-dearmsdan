---
title: markdown 如何编写文章.md
date: 10:41 2019/11/25
author: 测试小刘~
img: https://img.xjh.me/desktop/bg/nature/65231080_p0.jpg
categories:
- 博客
tags:
- hexo
---
Markdown 的使用和快捷键方法.

<!--more-->

<!-- toc -->


# **markdown**



>Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档</br>Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。</br>Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。</br>Markdown 编写的文档后缀为 **.md**, **.markdown**。



##     **Markdown 应用**

Markdown 能被使用来撰写电子书，如：Gitbook。

当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、简书、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。

------

##     **编辑器**

本教程将使用 Typora 编辑器来讲解 Markdown 的语法，Typora 支持 MacOS 、Windows、Linux 平台，且包含多种主题，编辑后直接渲染出效果。

支持导出HTML、PDF、Word、图片等多种类型文件。

Typora 官网：https://typora.io/

------

##     **首页取文章概述**

在Hexo 文章里使用

<code><！--more--></code> 可以设置首页文章概述标题

<code><！--toc--></code> 可以设置文章中的目录

## **语法**

##### 1.标题

通过标识符 <code>#</code>  与html h1 ~ h6 一致 ，个数越大字体越小，最大六级， 超过则显示为普通文本 

```markdown
 # 一级标题
 ## 二级标题
 ### 三级标题
 #### 四级标题
 ##### 五级标题
 ###### 六级标题
 ####### 七级标题
```

## 1. 基本操作

#### 1.1 内容目录

------

- 语法

```json
<！--toc-->
```

#### 1.2 标题

------

- 语法

```bash
#       一级标题    
##      二级标题    
###     三级标题    
####    四级标题    
#####   五级标题    
######  六级标题    
```

#### 1.3 引用

------

- 语法

```ruby
> 引用内容1
> 引用内容2
>> 引用内容3
```

- 效果

> 引用内容1
>  引用内容2
>
> > 引用内容3

## 2. 代码

#### 2.1 单行代码

------

- 语法

```dart
`String str1 = "hello";`
```

- 效果

```
String str1 = "hello";
```

#### 2.2 多行代码

------

- 语法

~~~go
​~~~
```
​~~~java
```c
~~~

- 效果

```java
int a = 10;
int b = 20;
```

## 3. 列表

#### 3.1 无序列表

------

- 语法

```undefined
* 无序列表1
+ 无序列表2
- 无序列表3
```

- 效果
- 无序列表1

- 无序列表2

- 无序列表3

#### 3.2 多行无序列表

------

- 语法

```undefined
* 多行无序列表1
TAB * 多行无序列表2
TAB TAB * 多行无序列表3
```

- 效果

- 多行无序列表1 
  - 多行无序列表2 
    - 多行无序列表3

#### 3.3 有序列表

------

- 语法

```undefined
1. 有序列表1
2. 有序列表2
3. 有序列表3
```

- 效果

1. 有序列表1
2. 有序列表2
3. 有序列表3

#### 3.4 多行有序列表

------

- 语法

```undefined
1. 多行有序列表1
2. 多行有序列表2
    1. 多行有序列表2-1
    2. 多行有序列表2-2
3. 多行有序列表3
    1. 多行有序列表3-1
    2. 多行有序列表3-2
```

- 效果

1. 多行有序列表1
2. 多行有序列表2
3. 多行有序列表2-1
4. 多行有序列表2-2
5. 多行有序列表3
6. 多行有序列表3-1
7. 多行有序列表3-2

#### 3.5 任务列表

------

- 语法

```css
-[ ] 抽烟
-[x] 喝酒
-[ ] 烫头
```

- 效果

-[ ] 抽烟
 -[x] 喝酒
 -[ ] 烫头

#### 3.6 表格

------

- 语法

```ruby
|姓名|性别|年龄|手机号|
|:---|:--:|:--:|---:|
|张三|男|21|18975346876|
|李四|女|23|17789548964|
|王五|男|25|15876513546|
```

- 效果

| 姓名 | 性别 | 年龄 |      手机号 |
| :--- | :--: | :--: | ----------: |
| 张三 |  男  |  21  | 18975346876 |
| 李四 |  女  |  23  | 17789548964 |
| 王五 |  男  |  25  | 15876513546 |

## 4. 链接

#### 4.1 图片

------

- 语法1（*本地图片*）

```json
[图片上传失败...(image-61fd19-1520850984854)]
```

- 语法2（*网络图片*）

```cpp
![typora.jpg](https://upload-images.jianshu.io/upload_images/1538862-d91e815790b81e4a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```

- 效果2

![img](https://cdn.dearmsdan.com/img/demo/Typora.jpg)

typora.jpg

#### 4.2 超链接

------

- 语法1（*行内式链接*）

```json
[百度][https://www.baidu.com/]
```

- 效果1

[百度][[https://www.baidu.com/\]](https://link.jianshu.com?t=https%3A%2F%2Fwww.baidu.com%2F%5D)

- 语法2（*参考式链接*）

```ruby
[CSDN][CSDN网址]
[CSDN网址]:https://www.csdn.net/
```

- 效果2

[CSDN](https://link.jianshu.com?t=https%3A%2F%2Fwww.csdn.net%2F)

- 语法3（*自动链接*）

```cpp
<https://github.com/>
```

- 效果2

[https://github.com/](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2F)

## 5. 其他

#### 5.1 斜体

------

- 语法

```undefined
*斜体*
_斜体_
```

- 效果

*斜体*
 *斜体*

#### 5.2 加粗

------

- 语法

```undefined
**加粗**
__加粗__
```

- 效果

**加粗**
 **加粗**

#### 5.3 下划线

------

- 语法

```xml
<u>下划线</u>
```

- 效果

<u>下划线</u>

#### 5.4 删除线

------

- 语法

```undefined
~~删除线~~
```

- 效果

~~删除线~~

#### 5.5 分隔线

------

- 语法

```undefined
***
---
___
```

- 效果

------

------

------

#### 5.6 注脚

------

- 语法

```css
Typora[^1]
[^1]A markdown editor
```

- 效果

Typora[[1\]](#fn1)

#### 5.7 上下标

------

- 语法

```ruby
$3^2=9$
$3^{(3-1)}=9$
$H_2SO_4$
$H_{2SO_4}$
```

- 效果

$3^2=9$
 $3^{(3-1)}=9$
 $H_2SO_4$

$H_{2SO_4}$

#### 5.8 符号的输入

------

- 语法

```bash
\\   反斜线
\`   反引号
\*   星号
\_   底线
\{ \}  花括号
\[ \]  方括号
\( \)  括弧
\#   井字号
\+   加号
\-   减号
\.   英文句点
\!   惊叹号
```

- 效果

\   `   *   _  { }  [ ]  ( )  #   +  -  .   !

#### 5.9 特殊字符

------

- 语法

```bash
&copy;      版权      
&reg;       注册商标
&trade;     商标
&nbsp;      空格
&amp;       和号
&quot;      引号
&apos;      撇号
&lt;        小于号
&gt;        大于号
&ne;        不等号
&le;        小于等于
&ge;        大于等于
&cent;      分
&pound;     磅
&euro;      欧元
&yen;       元
&sect;      节
&times;     乘号
&divide;    除号
&plusmn;    正负号
```

- 效果

  ©
   ®
   ™
  
   &
   "
   '
   <
   \>
   ≠
   ≤
   ≥
   ¢
   £
   €
   ¥
   §
   ×
   ÷
   ±

- 附

[HTML特殊字符编码对照表](https://link.jianshu.com?t=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DvUfE2amYdxd0-eyzqayeMFOVKkDRJrtkb1dV1MxyoCEke31DbXM_rb8fy1qDh1o0tqcq9u_fKQG1RRqPKTB_YK%26wd%3D%26eqid%3D8a6c88e90000a679000000035aa6444d)


