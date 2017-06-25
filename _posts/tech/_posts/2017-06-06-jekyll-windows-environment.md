---
layout: post
title: Windows下Jekyll环境搭建
category: 技术笔记
tags: [Jekyll,Windows]
description: Windows下Jekyll环境搭建遇到的各种问题
---

## 官方对于Jekyll在Windows上安装的说明

直接贴链接了，[https://jekyllrb.com/docs/windows/](https://jekyllrb.com/docs/windows/)
它说了，Windows10 可以用 Bash on Ubuntu on Windows,很简单的，可惜我的电脑是Windows8.1
它说用Chocolatey来安装Ruby,然后再安装Devkit，最后通过Ruby的Gem来安装Jekyll及相关组件。
不过我依然失败了很多次，最后想了一下，调整了Ruby和Devkit以及Jekyll的版本，才搞定,注意Ruby和Devkit的版本一定要适配。  
    
    $ ruby -v
    ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]  
  
    $ jekyll -v
    jekyll 2.5.3

## 很有帮助的文章
- [官方对于Jekyll在Windows上安装的说明](https://jekyllrb.com/docs/windows/)  
- [一个比较全面的Jekyll在Windows上安装的说明](http://jekyll-windows.juthilo.com)  
- [使用Chocolatey安装Ruby](https://chocolatey.org/packages/ruby/2.3.3)  
- [Rubygems的下载与安装](https://rubygems.org/pages/download/)  
- [Jekyll博客搭建遇到的问题及解决方案](http://blog.csdn.net/moonclearner/article/details/52238033)  
- [tzinfo相关错误解决](https://github.com/tzinfo/tzinfo/wiki/Resolving-TZInfo::DataSourceNotFound-Errors)
- [ruby编译scss出现invalid GBK错误](https://segmentfault.com/a/1190000002932352)  

## 总结
总之遇到什么问题，就去解决就好了。
  






