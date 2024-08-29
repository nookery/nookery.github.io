---
layout: home

hero:
  name: 'About Me'
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

## Basic Information <Badge type="tip">985 Bachelor</Badge><Badge type="tip">10 Years Experience</Badge><Badge type="tip">Technology and Management</Badge>

WeChat: noookooon

I enjoy learning new technologies for a specific goal.  
I look forward to working with a small team to be responsible for the growth of a product.

## Researching

Here's what I'm currently working on (in 2024). Discussions are welcome.

- Rich text editor, see more here: <https://cofficlab.github.io/en/juiceEditor>
- SwiftUI, see more here: <https://cofficlab.github.io/en/cisum/>

## Work Abilities

### Development <Badge type="tip">80%</Badge>

Able to quickly learn other technologies, enjoy implementing ideas with code.

- WEB Development: PHP, GoLang, Laravel, Vue.js, TailwindCSS
- APP Development: SwiftUI, Flutter, Electron.js
- Continuous Integration: Proficient in using GitLab CI and GitHub Actions
- Docker: Heavily used in development environments
- Language Skills: Excellent in all except for less frequent use of spoken English

### Management <Badge type="tip">20%</Badge>

- Team Management: Including small teams of product, front-end and back-end development, design, testing, etc.
- Technical Construction: Establishing project standards, process standards, building common services, leading the team to learn new technologies, etc.
- IPO Related: Assisting with audits, explaining business logic, organizing business documents, organizing prospectuses, etc.

## Education and Work Experience <Badge type="tip">985 University</Badge><Badge type="tip">C9 University</Badge><Badge type="tip">Listed Company</Badge>

- 2008-2012: Ocean University of China, Food Science and Engineering
- 2012-2014: University of Science and Technology of China, Software Engineering (Single Certificate)
- 2014-Present: [Juhe Data](https://juhe.cn), responsible for technology, management, projects, etc., participated in the entire process from product inception to company listing

## Major Project Experience

### Juhe Data <Badge type="tip">2014-Present</Badge>

![juhe](/images/juhe/product.png)

Learn more: <https://juhe.cn>

### IPO Preparation <Badge type="tip">2018-2024</Badge>

Involved in

- Project application
- Construction of technical specifications
- Sorting out business processes

## Personal Blog and Works

<Products />

Personal works are only for personal use and have not been marketed. More can be seen here: <https://cofficlab.github.io/en/>

## Some Patent Achievements

The links will open in Google Patents.

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
    title: 'For building websites, APIs',
  },
  {
    avatar: '/images/friends/flutter.png',
    name: 'Flutter',
    title: 'For developing cross-platform apps',
  },
  {
    avatar: '/images/friends/swift.svg',
    name: 'SwiftUI',
    title: 'Note-taking software developed with this',
  },
  {
    avatar: '/images/friends/vuejs.png',
    name: 'Vue.js',
    title: 'For building simple or complex user interfaces',
  },
  {
    avatar: '/images/friends/go.png',
    name: 'Go',
    title: 'For developing high-performance APIs, command-line applications',
  },
  {
    avatar: '/images/friends/tailwindcss.png',
    name: 'Tailwind CSS',
    title: 'CSS has never been so simple',
  },
  {
    avatar: '/images/friends/linux.min.png',
    name: 'Linux',
    title: 'A work of genius',
  },
]
</script>
