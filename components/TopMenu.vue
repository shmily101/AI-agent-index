<template>
  <nav flex justify-between items-center fixed top-0 left-0 p="x-80 y-10" w-screen bg-white z-1000 text="gray" class="keep-px-nav">
    <img w-60 h-60 src="~/assets/svg/logo.svg" />
    <ul flex gap-40 justify-center items-center>
      <li hover:text-primary><NuxtLink to="/">首页</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/service">服务</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/">行业</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/">关于我们</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/">新闻资讯</NuxtLink></li>
    </ul>
    <button>
      <NuxtLink to="/contact" w-121 h-40 py-2 rounded-full bg-primary text-white block flex justify-center items-center>联系我们</NuxtLink>
    </button>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style lang="scss" scoped>
.keep-px-nav {
  height: 65px;
  font-size: 14px;
}
</style>
