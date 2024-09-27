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

## Basic Information <Badge type="tip">985 University</Badge><Badge type="tip">10 Years Experience</Badge><Badge type="tip">Tech & Management</Badge>

WeChat: noookooon  

I enjoy:

- Learning new technologies for specific goals
- Using automation tools and AI to reduce human labor costs
- Growing a product with a small team

## Current Research

Here's what I'm currently (2024) researching. Feel free to discuss:

- Rich text editor integrated into Web and APP, more details here: <https://cofficlab.github.io/en/juiceEditor>
- SwiftUI, more details here: <https://cofficlab.github.io/en/cisum/>

## Work Capabilities

### Development<Badge type="tip">90%</Badge>

Quick learner of new technologies, enjoy implementing ideas with code.

- WEB Development: PHP, GoLang, Laravel, Vue.js, TailwindCSS
- APP Development: SwiftUI, Flutter, Electron.js
- Continuous Integration: Proficient with GitLab CI and GitHub Actions
- Docker: Heavy use in development environments

### Management<Badge type="tip">10%</Badge>

- Team Management: Small teams including product, front-end/back-end development, design, and testing roles
- Technical Construction: Establishing project standards, process norms, building common services, leading team in learning new technologies
- IPO Related: Assisting with audits, explaining business logic, organizing business documents, preparing prospectus, etc.

## Education & Work Experience<Badge type="tip">985 University</Badge><Badge type="tip">C9 University</Badge><Badge type="tip">Listed Company</Badge>

- 2008-2012: Ocean University of China, Food Science and Engineering
- 2012-2014: University of Science and Technology of China, Software Engineering (Single degree, not verifiable on CHSI)
- 2014-Present: [Juhe Data](https://juhe.cn), responsible for technology, management, projects, etc. Participated in the entire process from product inception to company IPO

## Major Project Experience

### Juhe Data<Badge type="tip">2014-Present</Badge>

A comprehensive service platform providing API services for developers.

Involved in:

- Building technical architecture
- Establishing technical standards
- Managing multiple projects

![juhe](/images/juhe/product.png)

Learn more: <https://juhe.cn>

## Personal Blog & Works

<VPTeamMembers size="small" :members="products" />

Personal works are primarily to meet personal needs. View more here: <https://cofficlab.github.io/en/>

## Some Patent Achievements

The links will open in Google Patents.

- [Password replacement method and device](https://patents.google.com/patent/CN113282913A/en)
- [Method and apparatus for determining resource consumption](https://patents.google.com/patent/CN114881546B/en)
- [Shared file configuration method and device](https://patents.google.com/patent/CN113268288B/en)
- [Script data configuration method and device](https://patents.google.com/patent/CN114020305A/en)
- [Project information synchronization method and device](https://patents.google.com/patent/CN114020315A/en)
- [Timed task execution method and device, storage medium and equipment](https://patents.google.com/patent/CN113590300B/en)

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Products from '../components/Products.vue'

const products = [
  {
    avatar: '/images/kuaiyizhi/logo.png',
    name: 'Kuaiyizhi',
    title: 'My Blog',
    links: [
      { icon: 'github', link: 'https://www.kuaiyizhi.cn/ideas' },
    ]
  },
  {
    avatar: '/images/team/nookery.jpeg',
    name: 'GitHub',
    title: 'My GitHub',
    links: [
      { icon: 'github', link: 'https://github.com/nookery' },
    ]
  },
  {
    avatar: '/images/cisum/logo.min.png',
    name: 'Cisum',
    title: 'Audio Player APP',
    links: [
      { icon: 'github', link: 'https://cofficlab.github.io/en/cisum/' },
    ]
  },
  {
    avatar: '/images/juiceNote/logo.min.png',
    name: 'JuiceNote',
    title: 'Note-taking APP',
    links: [
      { icon: 'github', link: 'https://cofficlab.github.io/en/juiceNote/' },
    ]
  },
  {
    avatar: '/images/travelmode/logo.min.png',
    name: 'TravelMode',
    title: 'Network Control APP',
    links: [
      { icon: 'github', link: 'https://cofficlab.github.io/en/travelmode/' },
    ]
  },
  {
    avatar: '/images/juiceEditor/logo.min.png',
    name: 'JuiceEditor',
    title: 'Rich Text Editor',
    links: [
      { icon: 'github', link: 'https://cofficlab.github.io/en/juiceEditor/' },
    ]
  },
  {
    avatar: '/images/gitok/logo-512x512.png',
    name: 'GitOk',
    title: 'Project Management APP',
    links: [
      { icon: 'github', link: 'https://cofficlab.github.io/en/gitok/' },
    ]
  },
]
</script>
