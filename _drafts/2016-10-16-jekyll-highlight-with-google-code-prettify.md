---
layout: post
title: Jekyll使用Google Code Prettify实现代码高亮
categories: [博客]
tags: [Jekyll]
date: 2016-10-16 23:57:11
comments: true
---



1.下载代码
下载代码[google-code-prettify](https://github.com/google/code-prettify)，然后将它们放到项目下。

2.包含css和js
可以在`_layouts/post.html`下添加以下代码。
这句在{{ page.title }}之后。
<link rel="stylesheet" href="/public/js/prettify/prettify.css">

这句在{{ content }}之后。
<script src="/public/js/prettify/prettify.js"></script>
<script type="text/javascript">
$(function(){
$("pre").addClass("prettyprint linenums");
prettyPrint();
});
</script>

这里导入了css和js后，就可以直接用markdown的tab的方式来导入代码段了

3.更换主题

默认主题不是很好看，只要更换prettify.css即可更换样式，可以到这里下载自己喜欢的主题css即可


### 参考文章
[1.] [Jekyll 中用 Google Code Prettify](http://alfred-sun.github.io/blog/2014/12/15/Use-google-code-prettify-for-jekyll/)  
[2.] [Jekyll的中的代码高亮](http://yansu.org/2013/04/22/highlight-of-jekyll.html)

