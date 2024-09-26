<script lang="ts" setup>
// 样式重置
import '@unocss/reset/tailwind.css'
</script>

<template>
  <div font-AliRegular class="app-container">
    <header class="global-header">
      <TopMenu />
    </header>
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
@font-face {
  font-family: AliRegular;
  src: url('~/assets/font/Alibaba_PuHuiTi_2.0_55_Regular_55_Regular.ttf')
}

html {
  font-family: AliRegular, sans-serif;
}

/* .app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.main-content {
  min-height: 100vh;
} */
</style>