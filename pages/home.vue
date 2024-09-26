<template>
  <div>
    <section h-screen bg="black cover" flex text-white items-center font-medium>
      <!-- 页面内容 -->
       <div w-885 m="y-0 auto" flex="~ col" items-center>
        <img w-644 h-full block src="~/assets/img/home-s1-bg.png" />
        <div w-full flex="~ col" items-center justify-center relative z-20>
          <h1 class="home-gradient" font-extrabold text-72 tracking-wider mb-40 leading-tight>Agent Power</h1>
          <p font-bold text-36>通过AI驱动的定制解决方案，让您的业务智能化和高效化</p>
        </div>
       </div>
       <div></div>
    </section>
  </div>
</template>
  
<script setup lang="ts">
// 页面逻辑
</script>
  
<style scoped>
.home-gradient {
  background-image: linear-gradient(117.99deg, rgba(42, 130, 228, 1) 0%, rgba(52, 120, 247, 1) 0%, rgba(155, 210, 250, 1) 62.87%, rgba(245, 255, 250, 1) 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>