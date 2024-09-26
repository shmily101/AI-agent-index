<template>
  <nav font-normal flex justify-between fixed top-20 left-30 right-30 p="y-10 x-30" bg-white border="[4px_solid_rgba(242,243,245,1)] rd-20" z-1000 text-gray>
    <img src="~/assets/svg/logo.svg" />
    <ul flex justify-center items-center ml-10>
      <li mr-40 hover:text-primary><NuxtLink to="/">首页</NuxtLink></li>
      <li mr-40 hover:text-primary><NuxtLink to="https://gallery.xieyufei.com/case/honor">服务</NuxtLink></li>
      <li mr-40 hover:text-primary><NuxtLink to="/">行业</NuxtLink></li>
      <li mr-40 hover:text-primary><NuxtLink to="/">关于我们</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/">新闻资讯</NuxtLink></li>
    </ul>
    <button w-121 h-39 py-2 rounded-full bg-primary text-white>联系我们</button>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
</script>