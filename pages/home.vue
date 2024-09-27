<template>
  <div>
    <section id="section-agent" h-screen bg="black cover" flex text-white items-center font-medium>
      <!-- 页面内容 -->
       <div class="section-wrapper" w-920 m="y-0 auto" flex="~ col" items-center transition="duration-1s delay-0.5s">
        <img w-644 h-full block src="~/assets/img/home-s1-bg.png" />
        <div w-full flex="~ col" items-center justify-center relative z-20>
          <h1 class="section-agent-gradient section-name" font-extrabold text-72 tracking-wider mb-14 leading-tight transition-duration-1s op-0>Agent Power</h1>
          <p class="section-slogan" font-bold text-36 d="0 60px 0" transition="duration-0.5s delay-0.5s" op-0>通过AI驱动的定制解决方案，让您的业务智能化和高效化</p>
        </div>
       </div>
    </section>
  </div>
</template>
  
<script setup lang="ts">
// 页面逻辑
const { $gsap: gsap } = useNuxtApp();

const agentFn = () => {
  const sectionAgent = document.getElementById("section-agent");
  console.log("sectionAgent", sectionAgent)
  gsap.timeline({
    scrollTrigger: {
      trigger: sectionAgent,
      toggleClass: "animated",
    },
  });
};

onMounted(() => {
  agentFn()
})

</script>
  
<style lang="scss" scoped>
#section-agent {
  .section-agent-gradient {
    background-image: linear-gradient(117.99deg, rgba(42, 130, 228, 1) 0%, rgba(52, 120, 247, 1) 0%, rgba(155, 210, 250, 1) 62.87%, rgba(245, 255, 250, 1) 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  
  &.animated {
    .section-wrapper {
      transform: translate3d(0, -30px, 0);
    }
    .section-name {
      opacity: 1;
    }
    .section-slogan {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
}
</style>