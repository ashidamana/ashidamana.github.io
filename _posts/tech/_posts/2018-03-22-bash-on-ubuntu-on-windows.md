---
layout: post
title: Bash On Ubuntu On Windows
category: 技术笔记
tags: [Ubuntu,Windows]
keywords: Bash On Ubuntu On Windows
---

## 1.打开Windows Power Shell(管理员)（A）【在开始按钮右击可以看到】
执行命令
```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
之后系统会自动重启

## 2.去Windows商店下载安装Ubuntu
Ubuntu商店地址：
[https://www.microsoft.com/store/p/ubuntu/9nblggh4msv6](https://www.microsoft.com/store/p/ubuntu/9nblggh4msv6)
点击获取（大约195.7MB）

## 3.打开Ubuntu的bash,首次使用会提示创建用户
按照提示输入用户名和密码即可

## 4.一些说明
Bash 环境文件和 Windows 文件通常是分开的，但还是有办法在 Windows 中访问 Bash 环境文件，或者在 Bash 环境访问 Windows 文件。
当 Bash 将 Ubuntu 系统文件下载到磁盘中时，它会自动为 Linux 兼容环境创建一个目录，这些文件夹默认是隐藏状态，但我们也可以在 Windows 用户账户的 AppData 文件夹中找到他们。
```
说明  路径
Ubuntu 系统文件 C:\Users\USERNAME\AppData\Local\Lxss\rootfs
Ubuntu 用户主目录  C:\Users\USERNAME\AppData\Local\Lxss\home\USERNAME
root 账户主目录  C:\Users\USERNAME\AppData\Local\Lxss\root
其实 Ubuntu Bash Shell 也完全可以访问存储于 Windows 系统分区中的文件，但 Bash 环境并不支持 c:\ 这样的分区写法，因此我们只能以 /mnt/c 这样的方式代表 C 盘，以此类推，/mnt/d 当然就代表 D 盘了。
```
当然对文件或文件夹的常规操作也与普通的 Linux 终端命令类似，例如：
```
cd /mnt/c
```

## 5.问题及解决
当我安装Jekyll的jekyll-paginate插件时，提示如下
```
mana@LAPTOP-8DHBJQBV:/mnt/e/WWW/my_blog$ gem install jekyll-paginate
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /var/lib/gems/2.3.0 directory.
```
解决办法：
```
cd /var/lib
sudo chmod -R a+w gems/
```

然后就安装成了，看到如下提示
```
gem install jekyll-paginate
mana@LAPTOP-8DHBJQBV:/var/lib$ gem install jekyll-paginate
Fetching: jekyll-paginate-1.1.0.gem (100%)
Successfully installed jekyll-paginate-1.1.0
Parsing documentation for jekyll-paginate-1.1.0
Installing ri documentation for jekyll-paginate-1.1.0
Done installing documentation for jekyll-paginate after 0 seconds
1 gem installed
```

## 6.相关网站
- [Install the Windows Subsystem for Linux](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)
- [Bash On Ubuntu On Windows折腾记](https://python.freelycode.com/contribution/detail/368)
- [使用Bash On Ubuntu On Windows是一种什么样的体验？](https://www.jianshu.com/p/239579aba61f)
- [Win10系统Bash on Ubuntu on Windows怎么用？（安装和用法）](http://www.xitonghe.com/jiaocheng/Windows10-9302.html)
- [Ubuntu Windows商店地址](https://www.microsoft.com/store/p/ubuntu/9nblggh4msv6)
- [Bash on Ubuntu on Windows——home目录挂载解决方案](https://blog.csdn.net/ShawnYue_SHU/article/details/60880257)
