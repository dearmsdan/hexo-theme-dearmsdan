---
title: 元素测试
author: Seablue
url: /
categories:
- 博客测试
tags:
- blog
data: [{
       name: '小指'
       ,value: '越感到迷惑 越接近真理'
       ,href: 'http://www.qingzz.cn/'
      }]
tips: [  
    '作者','引用对象','hi3','hi4','hwadwa'
  ]
---
测试元素是否正常显示

<!--more-->



# H1 标签元素 <small>Secondary text</small>

## H2 标签元素 <small>Secondary text</small>

### H3 标签元素 <small>Secondary text</small>

#### H4 标签元素 <small>Secondary text</small>

##### H5 标签元素 <small>Secondary text</small>

###### H6 标签元素 <small>Secondary text</small>

## 段落
关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂。

不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。

懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教，大家都藏着掖着生怕别人知道自己懂事，懂了就能收割不懂的，你甚至都不知道自己不懂。只是在有些时候，某些人对某些事情不懂装懂，还以为别人不懂。

## 引用

> 越感到迷惑 越接近真理
>
>  <code> famous in  <cite>小指</cite></code>

其实自己才是不懂的，别人懂的够多了，不仅懂，还懂的超越了这个范围，但是某些不懂的人让这个懂的人完全教不懂，所以这种不懂的人也没必要访出来,不懂的人看见又来问七问八,最后跟他说了他也不一定能懂,就算懂了以后也对他不好,毕竟懂的太多了不是好事，所以大家最好是不懂就不要去了解,懂太多不好

<blockquote class="right"><p>越感到迷惑 越接近真理</p><code> famous in  <cite><span class="article-flag-sup">小指</span></cite></code>
</blockquote>


其实自己才是不懂的，别人懂的够多了，不仅懂，还懂的超越了这个范围，但是某些不懂的人让这个懂的人完全教不懂，所以这种不懂的人也没必要访出来,不懂的人看见又来问七问八

<blockquote class="initial"><p>越感到迷惑 越接近真理</p><code> famous in  <cite>小指</cite></code>
</blockquote>
最后跟他说了他也不一定能懂,就算懂了以后也对他不好,毕竟懂的太多了不是好事，所以大家最好是不懂就不要去了解,懂太多不好

## 文本元素
可以使用的增强阅读体验的元素: 

1. [超链接a标签](/) 

2. <s>无用文本s标签</s> 

3. ~~删除了的文本del标签~~ 

4. <u>上划线的文本u标签</u> 

5. <ins>插入的文本ins标签 </ins> 

6. <mark>mark标签</mark> 

7. <small>小号字体small标签</small>

8. <span><small>`<span><small>小号着重字体</small></span>`</small></span>

9. <b>粗的字体b标签</b>

10. <strong>加强的字体strong标签</strong>

11. <em>斜的字体em标签</em>

12. 上标字体<sup>sup标签</sup>

12. 下标字体<sub>sub标签</sub>

14. `行内代码code标签`

15. <kbd>键盘关键字标识kbd标签</kbd> 例如：<kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

16. <abbr title="这是整个展示的内容，没错，我很长，也很多大">缩写内容abbr标签</abbr>

17. <address>地址address标签</address>

18. <bdo dir="rtl">	dir的 ltr和 rtl 值可以让他变化位置,定义文本方向bdo标签</bdo>

19. hr标签 如下
----


### 中文注音或字符ruby标签

**例子:**

<ruby>
  木头人 <rt>mutouren </rt>
  <rp>不支持</rp>
</ruby>

------

**写法:**

```html
<ruby>
  木头人<rt>mutouren</rt>
  <rp>您浏览器不支持该标签</rp>
</ruby>
```

## 列表元素


### 任务列表

- [x] 某某某计划
- [ ] 某某计划
- [x] 某计划
- [ ] 某
- [x] 计
- [ ] 划

### 有序列表
1. List Item 1
2. List Item 2
3. List Item 3

### 无序列表
- List Item 1
- List Item 2
- List Item 3

### 表格

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Table content  | Table content  | Table content  |
| Table content  | Table content  | Table content  |



### 定义列表 
**例子:** 

<dl>
  <dt>定义标题1</dt>
    <dd>我是内容1，我是内容11111</dd>
  <dt>定义标题2</dt>
    <dd>我是内容2，我是内容22222</dd>
</dl>

**写法:** 

```html
<dl>
  <dt>定义标题1</dt>
    <dd>我是内容1，我是内容11111</dd>
  <dt>定义标题2</dt>
    <dd>我是内容2，我是内容22222</dd>
</dl>
```

### 用于描述文档或文档某个部分的细节details标签

**例子:** 

<details>
  <summary>这是简单一段内容.</summary>
  <p>全部内容都在这了l.</p>
</details>

------

**写法:**

```html
<details>
  <summary>这是简单一段内容.</summary>
  <p>全部内容都在这了l.</p>
</details>
```
