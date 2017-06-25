---
layout: post
title: SMMS图床伴侣2
category: 实用工具
tags: [图床伴侣,sm.ms]
description: 简单好用的SMMS图床伴侣,sm.ms站点伴侣，支持选择/拖拽/粘贴上传图片,并生成图片地址,HTML,UBB和Markdown等格式,支持浏览和删除历史记录
---

最近博客改用Jekyll了，然后站点也启用了https,这样图床是个大问题。原来是使用七牛云的，免费的只支持http，而
收费的要有ICP备案的才能用上https,显然我的域名是不能备案的。  
于是寻找其他的，找到一个[图床001](https://www.tuchuang001.com/)，用起来也还算可以，但是在手机上打开（QQ/UC浏览器）就会弹出证书不信任。  
于是寻找其他的，找到一个新浪微博图床，它还有一个扩展，[WeiboPicBed](https://github.com/Suxiaogang/WeiboPicBed),试了下，似乎不能用了，估计是被新浪和谐了。  
后来看到[https://sm.ms](https://sm.ms),这个倒是挺好用的，搜索了一下，有好几年了，稳定，速度快，而且有API。  
于是我就在WeiboPicBed的基础上写了个SMMS图床伴侣（SMMSPicBed），应该还挺好用的。  

2017-06-21
今天看了一下，SMMS图床伴侣扩展终于在360应用市场审核通过。
直达链接，[快戳我](https://ext.se.360.cn/webstore/detail/gpfmdejmklijnfobjnjaeglkggocnlnn)  

下面对这款扩展做下具体介绍：  

## 📑 一些声明
本扩展是为了对[https://sm.ms/](https://sm.ms/)的功能做封装而开发的,主体代码基于[WeiboPicBed](https://github.com/Suxiaogang/WeiboPicBed)。  
使用时请遵守[https://sm.ms/](https://sm.ms/)的相关规则。

## 📑 Donate
Weixin  
![Donate](https://ooo.0o0.ooo/2017/06/16/59435b632d79e.png)

## 📑 Features
- 支持点选/拖拽2种方式上传图片至https://sm.ms/
- 可生成图片链接,HTML,UBB和Markdown四种格式
- 支持返回https安全协议的图片地址
- 支持自定义Chrome菜单栏图标
- 上传历史浏览和删除（注：历史记录是依托于浏览器的）

## 📑 Screenshots
![上传页面](https://ooo.0o0.ooo/2017/06/16/59439b6e7e782.png)

![上传后的页面，可复制链接](https://ooo.0o0.ooo/2017/06/16/59439ba9503cd.png)

![历史记录页面](https://ooo.0o0.ooo/2017/06/16/59439bbe66f41.png)  

![删除页面](https://ooo.0o0.ooo/2017/06/16/59439bd541d6c.png)  

![图片详情](https://ooo.0o0.ooo/2017/06/16/59439beacedff.png)  

![服务器维护提示](https://ooo.0o0.ooo/2017/06/16/59439c1eefb78.png)

## Contributors
[Flyer](https://github.com/ashidamana/) 

## 📑 最常被问到的问题

## 📑 参考
[WeiboPicBed](https://github.com/Suxiaogang/WeiboPicBed)

## 📑 更新日志
```
2017-06-21 v1.0.0  
SMMS图床伴侣扩展终于在360应用市场审核通过。  
直达链接，[快戳我](https://ext.se.360.cn/webstore/detail/gpfmdejmklijnfobjnjaeglkggocnlnn)  

2017-06-16 v1.0.0  
打包发布到360应用市场

2017-06-16 v0.0.2
支持点选/拖拽2种方式上传图片至https://sm.ms/
可生成图片链接,HTML,UBB和Markdown四种格式  
支持返回https安全协议的图片地址  
支持自定义Chrome菜单栏图标  
上传历史浏览和删除  

2017-06-15 v0.0.1  
初始化项目
```

## 💎 Licence

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)
