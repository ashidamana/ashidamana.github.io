---
layout: post
title: 测试jekyll功能 
categories: [Jekyll, 测试]
tags: [jekyll, tutorial]
date: 2016-11-11 15:12:18
comments: true
---

这是一个注释[^1]测试。

[^1]: <http://test.baidu.com>

<!--more-->
`灰底黄字测试。`

### 测试代码块//需要需要自己格式化
~~~css
#container {
    float: left;
    margin: 0 -240px 0 0;
    width: 100%;
}
~~~

### 超链接设置
~~~css
[文字1][标签1]，[文字2][标签2]

[标签1]: http://www.baidu.com
[标签2]: http://www.baidu.com
注意两者之间要空一行，常用多个链接，而且便于阅读.md源码。
~~~

### 超链接设置
~~~css
网址之间用<括起来>。
[link](http://www.mademistakes.com) 
~~~

## HTML Elements
二级标题下面有条线

###### Heading 6
六级标题默认大写

### Heading 3
一般用三级标题

**粗体**
~~~
**粗体**
~~~
*斜体*
~~~
*斜体*
~~~

### 块引用

> Lorem ipsum dolor sit amet, test link adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.



### 插入图片

{: .center}
![image]({{ site.url }}/assets/blogImg/wild_china.jpg)


![Smithsonian Image]({{ site.url }}/assets/blogImg/wild_china.jpg)

<img src="{{ site.url }}/assets/blogImg/MacQQ_ScreenShot_high.png" width="409" alt="QQ高清质量截图"/>

### Ordered Lists

1. Item one
1. sub item one
2. sub item two
3. sub item three
2. Item two

### Unordered Lists

* Item one
* Item two
* Item three

以下是注释



## 按钮

Make any link standout more when applying the `.btn` class.

{% highlight html %}
<a href="#" class="btn btn-success">Success Button</a>
{% endhighlight %}

<div markdown="0"><a href="http://www.baidu.com" class="btn btn-info">下载链接</a></div>
<div markdown="0"><a href="#" class="btn">Primary Button</a></div>
<div markdown="0"><a href="#" class="btn btn-success">Success Button</a></div>
<div markdown="0"><a href="#" class="btn btn-warning">Warning Button</a></div>
<div markdown="0"><a href="#" class="btn btn-danger">Danger Button</a></div>
<div markdown="0"><a href="#" class="btn btn-info">Info Button</a></div>

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" src="http://music.163.com/outchain/player?type=2&id=25879188&auto=1&height=32"></iframe>



