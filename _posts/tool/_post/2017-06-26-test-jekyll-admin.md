---
title: 测试jekyll-admin插件
layout: post
category: 实用工具
tags: [jekyll-admin]
description: jekyll-admin图形化界面
---

今天去Jekyll的官方github主页查看之前提交的issue，然后发现了这个插件。  
官方说它的功能是A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites.
所以我就来试试，这篇文章就是用jekyll-admin图形化界面来写的，不知道效果如何呢？一会就是见证奇迹的时刻。
1. 图片测试
![测试的图片](https://ooo.0o0.ooo/2017/06/21/5949d9128947f.png)

2. 粗体字测试
**这是粗体字**
3. 斜体字测试
   *这是斜体字*
4. 标题测试
# 		这是标题
5. 代码测试
```
source "https://rubygems.org"
gem "tzinfo"
gem "tzinfo-data"
gem "jekyll-paginate"
gem 'jekyll-admin', group: :jekyll_plugins
gem "wdm", "~> 0.1.0" if Gem.win_platform?
```
6. 引用测试
> 这是引用
7. 链接测试
[这是链接](https://www.baidu.com/)

## 总结
说实话，还有待优化，生成的文章没有layout,category,tags,description,可以手动添加，比较麻烦，已经提交issue给官方。
于是弃用，还是觉得用Netbeans来写作更顺手。


顺便说一个问题，关于我Jekyll从2.x升级到3.x的问题。  
怎么搞都不行，最终还是重新去下载了别人最新的模板，于是可以了。
后来折腾这个jekyll-admin，用到Gemfile,然后弄上去，也确实可以了，但是用了jekyll-admin，导致写文章必须通过jekyll-admin，否则不生成文件，
这个不好，于是卸载掉jekyll-admin，然后原先的问题暴露出来，怎么也搞不定，就是bundle install之后，然后jekyll serve 怎么都报错，小白也不知道咋么搞。  
然后我一气之下把Gemfile和Gemfile.lock删除了，然后运行bundle install。接着运行jekyll serve，  
居然可以了，真神奇，要说明的是Jekyll 3.5.0支持增量式build，使用`jekyll serve --incremental --watch`，
这是再好不过了，这个命令可以本地写作的时候根据你的文章变化自动增量式生成静态文件。  
另外我也找到了比较好的、通过ftp方式增量式更新Jekyll文章到虚拟主机的方法，非常好用，有时间
我会专门写一篇关于Jekyll本地部署及通过ftp增量式更新文章到虚拟主机的方法，敬请期待。
