<template>
  <div class="keep-px-font keep-px-width" m-a flex="~ col" p="y-100 x-60" bg="#000" text="#fff" border="t-1 gray solid">
    <!-- todo: 替换成logo -->
    <div flex="~ row" justify-between>
      <span>AI Power</span>
      <div>
        <button font-bold><NuxtLink to="/home">首页</NuxtLink></button>
        <button font-bold mx-10><NuxtLink to="/contact">联系我们</NuxtLink></button>
        <button text="#326CF9" font-bold mx-10 @click="scrollToTop">回到顶部</button>
      </div>
    </div>
    <div flex="~ col" text-align-center text="#ccc" mt-60 gap-10>
      <span>© AI Power. All rights reserved</span>
      <span>湘ICP备2022004213号-2</span>
      <span class="hidden lg:flex"
        >When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing
        purposes.</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
@media (max-width: 1023px) {
  .keep-px-font {
    font-size: 1.25vw;
  }
}

@media (min-width: 1024px) {
  .keep-px-font {
    font-size: 14px;
  }
  .keep-px-width {
    max-width: 1236px;
  }
}
</style>
