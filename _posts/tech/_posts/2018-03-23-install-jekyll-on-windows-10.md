---
layout: post
title: Windows 10 安装和使用Jekyll
category: 技术笔记
tags: [Ubuntu,Windows,Jekyll]
keywords: install Jekyll on Windows 10
---

如果你使用的操作系统是Windows 10， 你可以通过Bash on Ubuntu on Windows来安装Jekyll。
步骤如下：

## 1.确保Bash on Ubuntu on Windows已安装并启用
(Bash on Ubuntu on Windows的安装和使用参考文章[Bash On Ubuntu On Windows](https://blog.mana.love/articles/2018/03/22/bash-on-ubuntu-on-windows.html))

## 2.安装Jekyll
### 2.1 更新repo lists and packages
```
sudo apt-get update -y && sudo apt-get upgrade -y
```

### 2.2 安装Ruby
```
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.3 ruby2.3-dev build-essential dh-autoreconf
```

### 2.3 更新Ruby gems
```
sudo gem update
```

### 2.4 安装Jekyll
```
sudo gem install jekyll bundler
```

### 2.5 检查是否安装成功
```
jekyll -v
```

## 3.使用
### 3.1 新建项目
```
jekyll new my-awesome-site
```

### 3.2 进入项目
```
cd my-awesome-site
```

### 3.3 启动服务
```
jekyll serve
#=> Now browse to http://localhost:4000
```

### 3.4 访问页面
```
http://localhost:4000
```

如果需要部署到虚拟主机，可以用[HBuilder](http://www.dcloud.io/)。
在HBuilder里，点击工具->插件安装，找到FTP Sync，安装并重启HBuilder，然后在HBuilder里打开项目，找到_site文件夹，右击，
部署->运行Web部署向导，按照提示一步步下去，最后填写FTP相关参数即可。

另外要说明的是，Jekyll 3.0.0及以上支持增量式build，使用`jekyll serve --incremental --watch`， 这是再好不过了，这个命令可以本地写作的时候根据你的文章变化自动增量式生成静态文件。

## 4.相关网站
- [Jekyll中文官网](https://www.jekyll.com.cn/)
- [Jekyll英文官网](https://jekyllrb.com/)
- [HBuilder官网](http://www.dcloud.io/)