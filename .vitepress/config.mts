import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "About Me",
  base: "/",
  srcDir: "docs",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/home.js' }]
  ],
  themeConfig: {
    logo: '/images/coffic/logo4.min.png',
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/',
    }
  }
})

