<script lang="ts" setup>
// 样式重置
import '@unocss/reset/tailwind.css'
</script>

<style>
@font-face {
  font-family: AliRegular;
  src: url('~/assets/fonts/AlibabaPuHuiTi-3-55-Regular.woff2');
}

html {
  font-family: AliRegular, sans-serif;
}

input:focus,
textarea:focus {
  outline: none;
}

.fade-trigger {
  transition:
    opacity 0.5s,
    transform 0.5s;
  transform: translateY(50px);
  opacity: 0;
  &.active {
    transform: translateY(0px);
    opacity: 1;
  }
}

@media (max-width: 1023px) {
  .keep-px-nav {
    height: 30px;
    font-size: 14px;
  }
  .keep-px-height {
    min-height: calc(100vh - 30px);
  }
}

@media (min-width: 1024px) {
  .keep-px-nav {
    height: 65px;
    font-size: 14px;
  }
  .keep-px-height {
    min-height: calc(100vh - 65px);
  }
}
</style>

<template>
  <div flex="~ col">
    <header class="keep-px-nav">
      <TopMenu />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer bg="#000">
      <FootBar />
    </footer>
  </div>
</template>
