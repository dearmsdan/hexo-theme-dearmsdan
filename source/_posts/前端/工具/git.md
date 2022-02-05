---
title: Git 分布式版本控制
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 前端工具
tags:
- git
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---
Git是目前世界上最先进的分布式版本控制系统，我们应该尽早接触使用，方便每次代码编写能够高效保存迭代

<!--more-->

## Git是什么？

Git是目前世界上最先进的分布式版本控制系统



## Git 安装

在Windows/Mac OS 安装git 软件   
https://git-scm.com/downloads  安装过程直接下一步，安装完成即可



### 初始化Git

```
git init
```

### 查看Git文件状态

```
git status
```

3种状态变化

- 红色： 新增文件/修改了原文件 => git add 文件名/.
- 绿色：git已经管理起来  =>  git commit -m '描述信息'
- 生成版本 

## 通过Git管理文件

可通过命令行输入

- ` git add 文件名字`   管理单个文件
- `git add .` 管理全部文件

### 个人信息配置： 用户名、邮箱[一次配置即可]

```
git config --global user.email ""
git config --global user.name ""
```

### 生成一个版本

```
git commit -m 'v1'
```

v1 指版本描述

### 查看版本记录

```
git log
```

### 记录版本图形展示

```
git log --graph --pretty=format:"%h %s"
```

### 版本回滚 

回滚之前的版本

```
git log
git reset --hard 843c9abf93588217ed1235b2a1028a6d2eb69f42(版本号)
```

回滚之之后版本

```
git reflog
git reset --hard 版本号
```

## 分支

### 查看当前分支

```
git branch
```

### 创建新分支

```
git branch dev(分支名字)      // 创建单分支
git branch dev bug abc ace  // 创建多个分支用空格
```

### 切换分支

```
git checkout dev(分支名字)
```

### 合并分支

```
git merge bug(某分支)
```

- 把某分支给合并到当前分支

### 删除分支

```
git branch -d bug(需要删除的分支)
```



## GitHub

###  项目地址起别名 并推送

```
git remote add origin https:.../dbhot.git
```

### 推送代码

```
git push -u origin master
```

### 拉取代码

```
git pull origin master
等价于
git fetch origin master
git merge origin/master
```

### 下载代码

```
git clone https:....hot.git hot 
克隆远程仓库代码      ↑ 地址    ↑ 别名
```

- 拉下的代码本地无法查看分支，但是可以切换仓库有的分支

- 克隆指定的分支：
  - **`git clone -b `** 分支名  仓库地址
    - 克隆某分支到本地目录，然后在该目录下**push**时，对应的就是 **push** 到远端的对应分支。

### 保持代码提交整洁(变基)

```
git rebase dev(分支)
```

## Git 标签管理

### 什么是标签

- 通常，发布一个版本时，会在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

- 简单理解：标签是某个版本的别名，因为Git的版本号都是用一串字母数字组成，为了便于管理，Git 可以给版本取个别名（也就是打上标签，比如标签的名字叫做 v1.0.0）。

### 创建标签

```
git tag <tagname>
```

- 默认为HEAD 最新提交 打上标签

- 可以通过`git tag` 查看标签

- 查看历史提交的commit id 并打标签

  - `git log --pretty=oneline --abbrev-commit` 
  - 例如：这次提交打标签，它对应的commit id是6a691d8，
    - 输入创建标签命令：`git tag v0.5.0 6a691d8`

- -a指定标签名，-m指定说明文字

  - 例如： `git tag -a <tagname> -m "this is memeo"  `可以指定标签信息

### 删除标签

```
git tag -d <tagname>
```

- 如果创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除

## 推送标签至远程

```
 git push origin <tagname>
```

- 一次性推送全部尚未推送到远程的本地标签
```
git push origin --tags
```

### 删除远程标签

- 先删除本地标签再删除远程标签

  ```
  git tag -d v1.0.0
  git push origin :refs/tags/v1.0.0
  ```

  

## Git配置

- 项目配置文件：项目/.git/config

  ```
  git config --local user.name '123'
  git config --1ocal user.email '123@xx.com'
  ```
- 全局配置文件: -/.gitconfig
  ```
  git config --global user.name '123'
  git config --global user.name '123@xx.com'
  ```
- 系统配置文件: /etc/.gitconfig
  ```
  git config --system user.name '123'
  git config --system user.name '123@xx.com'
  ```
   - windows 在安装目录下的/Git/etc/.gitconfig 或/Git/mingw64/etc/.gitconfig 
   - 注意：linux / mac需要有root权限



### 免密码登陆

- HTTPS 中体现

```
原来的地址: https://github.com/wuPeiqi/dbhot.git
修改的地址: https://用户名:密码@github.com/wuPeiqi/dbhot.git
git remote add origin https://用户名:密码@github.com/wuPeiqi/dbhot.git
git push origin master

```

- SSH 实现

```
1、生成公钥私钥（默认存放 ~/.ssh/id_rsa.pub公钥、idrsa私钥）
	ssh-keygen -r rsa
2、拷贝公钥的内容 设置到GitHub中
3、在git本地中配置ssh地址
	git remote add origin git@github.com:123/123.git
4、git push origin master

```

- git 自动管理凭证



## gitignore 忽略文件

- 让Git不再管理当前目录某些文件

  ```
  *.h   // 通配符不再管理.h 后缀文件
  !a.h   // 通配符不再管理.h 后缀文件除了a.h
  files/     // 忽略files目录里全部的文件
  *.py[c|a|d]   
  ```

  更多参考：https://github.com/github/gitignore




## 常见问题！

### git push 提示 Everything up-to-date

- 通常情况下 如果没有` git add .` |` git commit`  操作会 报错



#### 如何解决git上传文件出错[rejected] master -> master (fetch first) error: failed to push some refs to '



错误如下：  

```
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:peTzxz/Property-management-system'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

问题解析：

出现这个问题是因为github中的某些文件不在本地代码目录中，可以通过如下命令进行代码合并

```
git pull --rebase origin master
再进行提交代码
git push origin master
```

