---
layout: home

hero:
  name: "About Me"
  # image: 
  #   src: /images/coffic/logo4.png
  actions:
    - theme: alt
      text: English
      link: /en/
    - theme: alt
      text: 简体中文
      link: /zh/
---

## 基本信息 <Badge type="tip">985本科</Badge><Badge type="tip">10年经验</Badge><Badge type="tip">技术与管理</Badge>

微信：noookooon  

我喜欢为了某个目标去学习新的技术。  
我期望和某个小团队一起负责某个产品的成长。

## 工作能力

### 研发<Badge type="tip">占80%</Badge>

能快速学习其他技术，喜欢用代码实现想法。

- WEB 开发：PHP、GoLang、Laravel、Vue.js、TailwindCSS
- APP 开发：SwiftUI、Flutter、Electron.js
- 持续集成：熟练使用 GitLab CI 和 GitHub Actions
- Docker: 在开发环境重度使用
- 语言能力：除英语口语较少使用，其他皆优秀

### 管理<Badge type="tip">占20%</Badge>

- 团队管理：包括产品、前后端开发、设计、测试等岗位的小型团队
- 技术建设：制定项目规范、流程规范、搭建通用服务、带领团队学习新技术等
- 上市相关：配合审计，解释业务逻辑、整理业务文档、整理招股书等

## 教育与工作经历<Badge type="tip">985高校</Badge><Badge type="tip">C9高校</Badge><Badge type="tip">上市公司</Badge>

- 2008-2012：中国海洋大学，食品科学与工程
- 2012-2014：中国科学技术大学，软件工程（单证，学信网查不到）
- 2014-今天：[聚合数据](https://juhe.cn)，负责技术、管理、项目等，参与了产品从0开始到公司上市的全过程

## 主要项目经验

### 聚合数据<Badge type="tip">2014-今天</Badge>

![juhe](/images/juhe/product.png)

了解更多：<https://juhe.cn>

### 上市准备<Badge type="tip">2018-2024</Badge>

涉及到

- 项目的申报
- 技术规范的建设
- 业务流程的梳理

## 个人博客与作品

<Products />

其中个人作品仅为满足个人使用需求，未做市场推广。可在这里查看更多：<https://cofficlab.github.io/en/>

## 部分专利成果

其中的链接会在Google专利中打开。

- [一种密码替换方法及装置](https://patents.google.com/patent/CN113282913A/zh)
- [一种确定资源消耗的方法和装置](https://patents.google.com/patent/CN114881546B/zh)
- [Shared file configuration method and device](https://patents.google.com/patent/CN113268288B/en)
- [Script data configuration method and device](https://patents.google.com/patent/CN114020305A/en)
- [Project information synchronization method and device](https://patents.google.com/patent/CN114020315A/en)
- [Timed task execution method and device, storage medium and equipment](https://patents.google.com/patent/CN113590300B/en)


<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Products from '../components/Products.vue'

const friends = [
  {
    avatar: '/images/friends/laravel.png',
    name: 'Laravel',
    title: '用于搭建网站、API',
  },
  {
    avatar: '/images/friends/flutter.png',
    name: 'Flutter',
    title: '用于开发跨平台 APP',
  },
  {
    avatar: '/images/friends/swift.svg',
    name: 'SwiftUI',
    title: '笔记软件基于此开发',
  },
  {
    avatar: '/images/friends/vuejs.png',
    name: 'Vue.js',
    title: '构建简单或复杂的用户界面',
  },
  {
    avatar: '/images/friends/go.png',
    name: 'Go',
    title: '用于开发高性能 API，命令行应用',
  },
  {
    avatar: '/images/friends/tailwindcss.png',
    name: 'Tailwind CSS',
    title: 'CSS 从未如此简单',
  },
  {
    avatar: '/images/friends/linux.min.png',
    name: 'Linux',
    title: '天才的作品',
  },
]
</script>
