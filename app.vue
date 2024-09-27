<script lang="ts" setup>
// 样式重置
import '@unocss/reset/tailwind.css'
</script>

<style>
/* @font-face {
  font-family: AliRegular;
  src: url('~/assets/fonts/AlibabaPuHuiTi-3-55-Regular.woff2')
}

html {
  font-family: AliRegular, sans-serif;
} */
</style>

<template>
  <div>
    <header>
      <TopMenu />
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>