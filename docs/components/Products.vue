<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row gap-4">
      <Product
        :product="{
          avatar: '/images/kuaiyizhi/logo.png',
          name: '快易知',
          description: '我的博客',
          homepage: 'https://www.kuaiyizhi.cn/ideas',
        }" />
      <Product
        :product="{
          avatar: '/images/team/nookery.jpeg',
          name: 'GitHub',
          description: '我的 GitHub',
          homepage: 'https://github.com/nookery',
        }" />
      <Product
        :product="{
          avatar: '/images/cisum/logo.min.png',
          name: 'Cisum',
          description: '音频播放 APP',
          homepage: 'https://cofficlab.github.io/en/cisum/',
        }" />
      <Product
        :product="{
          avatar: '/images/juiceNote/logo.min.png',
          name: 'JuiceNote',
          description: '笔记 APP',
          homepage: 'https://cofficlab.github.io/en/kuaiyizhi/',
        }" />
    </div>
    <div class="flex flex-row gap-4">
      <Product
        :product="{
          avatar: '/images/travelmode/logo.min.png',
          name: 'TravelMode',
          description: '连网控制 APP',
          homepage: 'https://cofficlab.github.io/en/travelmode/',
        }" />
      <Product
        :product="{
          avatar: '/images/juiceEditor/logo.min.png',
          name: 'JuiceEditor',
          description: '富文本编辑器',
          homepage: 'https://cofficlab.github.io/en/juiceEditor/',
        }" />
      <Product
        :product="{
          avatar: '/images/gitok/logo-512x512.png',
          name: 'GitOk',
          description: '项目管理 APP',
          homepage: 'https://cofficlab.github.io/en/gitok/',
        }" />
    </div>
  </div>
</template>

<script setup>
  import Product from './Product.vue';
</script>
