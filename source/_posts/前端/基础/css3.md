---
title: css3 新特性
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 前端基础
tags:
- css
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---
css3 新特性
 - 样式 
 - 选择器
 - 渐变
 - 2D
 - 3D
 - 过渡
 - 动画
 - 布局

<!--more-->

## css3
- 新特性
- `样式` 、`选择器`、`渐变`、`2D`、`3D`、`过渡`、`动画`、`布局`

## 样式-background

- 背景原特性
```
body{
	width: 100%;
	height: 100%;
	background-image: url(images/hello.png);
	background-repeat: no-repeat;
	background-position: center top;
}
```
- 背景新特性
```
body{
	width: 100%;
	height: 100%;
	/* 可以设置多个背景图用逗号隔开，第一个设置的永远在上面 */
	background-image: url(images/hello.png),url(images/hello2.png);
	background-repeat: no-repeat,repeat;
	background-position: center top,center center;
}
```

### background-size

- 常用属性 ：  
  – cover 实现响应式的图片，占满整个屏幕   
  – contain 根据css设置的宽度高度显示   
- **cover**  将背景图片按照原来的缩放比，将整个容器铺满  
- **contain**  将背景图片按照原来的缩放比，完整的显示到容器中  

### background-origin 
- 常用属性 ： **border-box** I **content-box** | **padding-box**  
  – **border-box**  设置背景图片显示位置为 从边框 到内边距在到内容的位置  
  – **content-box**  设置背景图片显示位置为 除去边框、内边距的位置  
  – **padding-box**  默认设置背景图片显示位置 为 除去边框 占用内边距的位置  

### background-clip 
- 常用属性 ： **border-box** I **content-box** | **padding-box**  
  – **border-box**  设置背景图片显示位置为 从边框 到内边距在到内容的位置  
  – **content-box**  设置背景图片显示位置为 除去边框、内边距的位置  
  – **padding-box**  默认设置背景图片显示位置 为 除去边框 占用内边距的位置  
  
 ### background-origin background-clip  区别
  – **background-origin** 设置背景图区域  
  –  **background-clip** 设置绘图区域  

## 样式-边框文本效果

 ### box-shadow
 - box-shadow:  0px 0px 0px 0px #000;
 - box-shadow:  0 (水平) 0(垂直) 0(模糊的程度) 0(阴影大小) #eee (颜色)

 ### box-radius
 - box-radius: 50%;  设置单个值是 指元素4个角圆形弧度大小
 - box-radius: 10px 20px 10px 20px;  设置上右下左的圆形弧度

### border-image 边框图片

```
border-image-source:url('');//用于指定要勇于绘制边框的图像的位置
border-image-slice:10; //图像边界向内偏移
border-image-repeat: repeat(重复)|round(铺满)
/* 边框图片设置 */
border-image-source: url(images/border-img.jpeg);
/* 图像边界向内偏移 */
border-image-slice: 20;
/* 铺满 */
border-image-repeat: round;
/* 重复 */
border-image-repeat: repeat;
```

### text-shadow
 - text-shadow: 2px 2px 3px  #000;
    – text-shadow:  2px (水平) 2px(垂直) 3px(模糊的程度) #000 (颜色)

### text-overflow
语法：
- text-overflow:clip(修剪文本)|ellipsis(超出显示省略符号)
- 需要配合不换行、块标签隐藏属性`overflow: hidden; white-space: nowrap;`
```
    <style>
        p{
            width: 100px;
            height: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
        }
    </style>
    <p>
        这是一个P标签，他有是一个段落也可以是句话，省略内容很心动awd大武当
    </p>
```

## 选择器

#### 属性选择器

选中所有带有class属性的元素设置样式

```
[class]{ 
	color: red;
}
```

选中`class=“active“`的所有元素设置样式

```
[class=active]{
    border: 1px solid #000;
}
```

尤其是input，我们可以很方便的通过属性选择器选中

```
input[type='submit']{
}
input[type='file']{
}
....
```

#### 伪类和伪元素选择器

```
1.a标签的爱恨准则
a:link{} 没有被访问过
a:visited{} 访问过后
a:hover{} 鼠标悬停
a:active{} 鼠标摁住
2.伪元素选择器
::after{
    content:'hello world'
}
::before{
    content:"hello"
}
```

#### 其它选择器

```
:first-child{} 第一个元素
:last-child{} 最后一个元素
:nth-child(n){} 当前指定的元素
:nth-child(2n){} 偶数
:nth-child(2n-1){} 奇数
:nth-child(xn+1){} 隔x-1行选中元素
```

## 引擎前缀

为了使ccs中样式兼容各大浏览器需要对属性添加**引擎前缀**
- -ms- 兼容IE
- -webkit- 兼容Safari和谷歌
- -moz- 火狐
- -o-  Opera

## 渐变

#### liner-gradient
- 线性渐变  
    – background: liner-gradient(red,blue);  
- 对角渐变  
    – background: liner-gradient(to bottom right,red,blue);  
- 径向渐变
	- 语法： `background:radial-gradient(center,形状 大小,开始的颜色,....,最后的颜色);`   
    – background: radial-gradient(red, green, blue); 

## transform2D

### 平移 缩放 转动 拉长 拉伸
平移  
transform: translate(30px, 30px);  
旋转  
transform: rotate(-3odeg);  
大小缩放  
transform: scale(1,2);  
倾斜  
transform: skew(30deg,20deg); 

## transform3D

css3允许使用3D转换对元素进行格式化。

#### 转换属性

##### perspective

在设置3D效果之前，要给父元素设置`perspective`属性，此值通常在600到1000之间。才能看出3D效果。通常该属性与perspective-origin属性一同使用，这样就能改变3D元素的地底部位置。

```
perspective:1000px;
```

##### perspective-origin

定义3D元素所基于的x轴和y轴。该属性允许改变3D元素的底部位置。

```
perspective-origin:50% 50%;
```

##### transform-style

指定嵌套元素是怎么样在三维空间中呈现。

> 注意：使用该属性必须先使用transform属性

```
transform-style: flat|preserve-3d
```

- flat: 表示所有子元素在2D平面呈现
- preserve-3d: 表示所有子元素在3D空间中呈现

#### 3D转换方法

| translateX(*x*)               | 定义 3D 转化，仅使用用于 X 轴的值。       |
| :---------------------------- | ----------------------------------------- |
| translateY(*y*)               | 定义 3D 转化，仅使用用于 Y 轴的值。       |
| translateZ(*z*)               | 定义 3D 转化，仅使用用于 Z 轴的值。       |
| scale3d(*x*,*y*,*z*)          | 定义 3D 缩放转换。                        |
| scaleX(*x*)                   | 定义 3D 缩放转换，通过给定一个 X 轴的值。 |
| scaleY(*y*)                   | 定义 3D 缩放转换，通过给定一个 Y 轴的值。 |
| scaleZ(*z*)                   | 定义 3D 缩放转换，通过给定一个 Z 轴的值。 |
| rotate3d(*x*,*y*,*z*,*angle*) | 定义 3D 旋转。                            |
| rotateX(*angle*)              | 定义沿 X 轴的 3D 旋转。                   |
| rotateY(*angle*)              | 定义沿 Y 轴的 3D 旋转。                   |
| rotateZ(*angle*)              | 定义沿 Z 轴的 3D 旋转                     |



## 过渡

transition 4个属性位置顺序是固定的不能乱
- **transition-property** 发生过渡效果的属性名。  
    – all:所有属性都将获得过渡效果。    
    – none: 没有属性都获得过渡效果。   
    – property: 自定义应用过渡效果的属性,可以设置一个或多个属性名,多个属性名以逗号分隔。   
- **transition-duration** 完成过渡效果需要的时间,单位是秒或者毫秒。  
- **transition-timing-function** 过渡效果的转速曲线。   
    – linear:过渡从头到尾的速度是相同的。     
    – ease:默认。过渡以低速开始,然后加快,在结束前变慢。    
    – ease-in:过渡以低速开始。    
    – ease-out:过渡以低速结束。   
    – ease-in-out:过渡以低速开始和结束。    
    – cubic-bezier(n,n,n,n):立方贝塞尔曲线函数,可以在cubic-bezier函数中自己设置值。可能的值是从0到1的数值。    
- **transition-delay** 设置过渡效果延迟多长时间开始,单位是秒或者毫秒。



## 动画

**animation** 动画  
过渡属性只能模拟动画效果  
animation属性可以制作类似Flash动画  
通过关键帧控制动画的每一步  
使元素从一种样式逐渐变化为另一种样式  
实现复杂的动画效果  

**@keyframes**
作用:用于声明动画,指定关键帧
帧,用于分解动画动作
每个帧代表某个时间点
定义每个帧上的动作

- @keyframes 语法：
```
@keyframes name{
	from | 0%{
		css 样式
	}
	percent{
		css 样式
	}
	to | 100%{
		css 样式
	}
}
```

**animation** 属性
animation 属性用于控制动画
调用由@keyframes定义的动画
设置动画属性,如时间、次数等
animation属性是一个简写属性
语法为: ` animation:name duration timing-function delay count direction;`

**animation** 子属性
- animation-name: ; 调用动画,规定需要和keyframes的名字一致
- animation-duration: s|ms; 动画完成一个周期所需要的时间
- animation-timing-function: ; 规定动画的速度变化类型
- animation-delay:s |ms; 播放之前的延迟时间
- animation-iteration-count:数值 infinite; 播放次数
    – infinite表示无限次播放
- animation-direction: normal alternate;
动画播放方向
    – normal为默认值,表示正常播放
    – alternate表示轮流播放,即动画会在奇数次正常播放,而在偶数次向后播放
- animation-fill-mode: forwards;动画停在最后一帧
    – 默认值为none
- animation-play-state:paused running;属性规定动画正在运行还是暂停
    – 默认值为running


## transition与animation 区别

|                        transition                        |         animation          |
| :------------------------------------------------------: | :------------------------: |
|                     只能做简单的动画                     |    可以做比较复杂的动画    |
| 不能自动执行,需要:hover伪类   <br />或者js事件来触发执行 |        可以自动执行        |
|     触发后只执行一次,不能重复<br/>发生,除非再次触发      | 可以执行多次，甚至无限循环 |
|         只有两帧,只能设置动画初始<br/>值和结束值         |        可以设置多帧        |



## 布局

[布局](http://localhost:3000/#/work/页面布局/PageLayout)

### 多列布局  
css可将文本内容涉及成像报纸一样的多列布局 。  

多列属性   
column-count 指定元素应该被分割的列数  
column-gap 指定列和列之间的间隙  
column-rule-style 列边框的样式  
column-rule-width列边框的宽度  
column-rule-color 列边框的颜色  
column-rule 列边框的简写  
column-span 跨域多少列  
column-width 指定列的宽度  
演示  
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
            .box {
                /* 指定需要分割的列数 */
                column-count: 3;
                /* 列与列之间的间隙 */
                column-gap: 50px;
                /* 列边框样式 */
                column-rule: 1px solid #bbb;
                /* 指定div跨越多少列 */
                column-span: all;
                /* 指定列的宽度 */
                column-width: 100px;
            }
        </style>
    </head>
    <body>
        <div class="box">
            学完此课程，你编写的代码就可以移动设备上完美兼容啦。HTML5是移动端开发最常用的技术，熟悉HTML5新标签和Api以及CSS3的新的Api，可以使你的网页更加的绚丽多彩，并且开发出你意想不到的网页效果。
            学完此课程，你编写的代码就可以移动设备上完美兼容啦。HTML5是移动端开发最常用的技术，熟悉HTML5新标签和Api以及CSS3的新的Api，可以使你的网页更加的绚丽多彩，并且开发出你意想不到的网页效果。
            学完此课程，你编写的代码就可以移动设备上完美兼容啦。HTML5是移动端开发最常用的技术，熟悉HTML5新标签和Api以及CSS3的新的Api，可以使你的网页更加的绚丽多彩，并且开发出你意想不到的网页效果。
        </div>
    </body>
</html>
```