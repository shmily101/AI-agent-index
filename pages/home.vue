<template>
  <div>
    <section id="section-agent" min-h-100vh h-auto bg="black cover" flex text-white items-center font-medium>
       <div class="section-wrapper" w-920 m="y-0 auto" flex="~ col" items-center transition="duration-1s delay-0.5s">
        <img w-644 h-full block src="~/assets/img/home-s1-bg.png" />
        <div w-full flex="~ col" items-center justify-center relative z-20>
          <h1 class="section-agent-gradient section-name" font-extrabold text-72 tracking-wider mb-14 leading-tight transition-duration-1s op-0>Agent Power</h1>
          <p class="section-slogan" font-bold text-36 d="0 60px 0" transition="duration-0.5s delay-0.5s" op-0>通过AI驱动的定制解决方案，让您的业务智能化和高效化</p>
        </div>
       </div>
       <p absolute bottom-40 left-50% transform -translate-x-50% text-16 >↓ 下滑查看</p>
    </section>

    <section id="section-card" relative max-h-100vh h-auto bg="#FAFAFC cover" text-gray>
      <div m="y-0 auto" transition="duration-1s delay-0.5s">
        <img w-screen h-screen block object-cover src="~/assets/img/home-s2-bg.png" />

        <div w-screen h-max flex="~ col" items-center absolute left-0 top-50% transform -translate-y-50%>
          <h1 text-60 mb-14>定制化Agent服务</h1>
          <p text="24 #808080" d="0 60px 0">我们的定制化Agent服务，利用人工智能，赋能各行各业</p>

          <div id="section-scroll-card" w-screen overflow-hidden mt-60>
            <div translate-x-100%>
              <div w-3675 translate-x--100%>
                <div id="section-scroll-card-top" flex class="section-picture">
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                </div>
              </div>
            </div>
            <div mt-24>
              <div w-3675>
                <div id="section-scroll-card-bottom" flex class="section-picture">
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                  <img class="lazyload" src="~/assets/img/home-s2-card-01.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-us-one" bg="#FAFAFC cover" flex="~ col" text-gray items-center>
        <h1 mt-160 text-40 font-300>为什么选择我们？</h1>
        <div class="fade-trigger fade-copy" flex items-center w-1090 mx-auto mt-80>
          <h2 text-50 font-medium>技术领先</h2>
          <p ml-104 lh-normal text="18 #808080">依托最前沿的自然语言处理与大型语言模型技术，我们确保每个项目<br />的技术先进性。</p>
        </div>
        <img class="fade-trigger fade-copy" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-01-poster.jpg" />
    </section>

    <section id="section-us-two" bg="#FAFAFC cover" flex="~ col" text-gray items-center pt-200>
        <div class="fade-trigger fade-copy" flex items-center w-1090 mx-auto>
          <h2 text-50 font-medium>深度定制</h2>
          <p ml-104 lh-normal text="18 #808080">我们根据客户的具体需求量身定制解决方案，确保与业务目标紧密<br />契合。</p>
        </div>
        <img class="fade-trigger fade-copy" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-01-poster.jpg" />
    </section>

    <section id="section-us-three" bg="#FAFAFC cover" flex="~ col" text-gray items-center pt-200>
        <div class="fade-trigger fade-copy" flex items-center w-1090 mx-auto>
          <h2 text-50 font-medium>全流程支持</h2>
          <p ml-104 lh-normal text="18 #808080">从概念设计、开发、到后续的维护与优化，我们提供全流程的支持<br />服务，确保您的AI系统长期稳定高效运行。</p>
        </div>
        <img class="fade-trigger fade-copy" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-01-poster.jpg" />
    </section>

    <section id="section-us-four" bg="#FAFAFC cover" flex="~ col" text-gray items-center py-200>
        <div class="fade-trigger fade-copy" flex items-center w-1090 mx-auto>
          <h2 text-50 font-medium>业务增长驱动</h2>
          <p ml-104 lh-normal text="18 #808080">通过智能化解决方案，帮助您提升业务效率、降低成本，并<br />增强市场竞争力。</p>
        </div>
        <img class="fade-trigger fade-copy" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-01-poster.jpg" />
    </section>

    <section id="section-FAQ" min-h-100vh h-auto bg="black cover" text-white items-center font-medium relative>
      <img w-screen h-screen block src="~/assets/img/home-s7-bg.png" />
      
      <div absolute left-0 top-50% transform -translate-y-50% m="y-0 auto" flex items-center px-170 transition="duration-1s delay-0.5s">
        <div class="fade-trigger fade-copy" text-24 flex="~ col" items-center>
          <h1 text-72>您可能想知道</h1>
          <p text="#E5E5E5" mt-24>这里没有想要了解的问题？您可以现在就<span text-primary font-bold mx-8>联系我们</span>！</p>
          <p text="#E5E5E5" mt-8>我们将为您提供免费的咨询服务。</p>
        </div>
        <div class="fade-trigger fade-copy" flex="~ col" text-18 ml-200>
          <div
            v-for="(card, index) in cards"
            :key="index"
            w-700 bg="#212121 cover" shadow="[0px_3px_49px_9px_rgba(0,0,0,0.06)]" backdrop-blur-20px text-white m-15 border-rd-10 cursor-pointer overflow-hidden max-h-90px
            :class="['card', { expanded: card.expanded }]"
            @click="toggleCard(index)"
          >
            <div flex justify-between items-center m="x-25 y-15">
              <span>卡片 {{ index + 1 }}</span>
              <span>
                <img v-show="card.expanded" w-20 src="~/assets/svg/chevron-down.svg" />
                <img v-show="!card.expanded" w-20 src="~/assets/svg/chevron-up.svg" />
              </span>
            </div>
            <div v-if="card.expanded" m="x-25 y-15" transition="opacity duration-0.3s">
              这是卡片 {{ index + 1 }} 的内容。
            </div>
          </div>
        </div>

        
      </div>
    </section>
  </div>
</template>
  
<script setup lang="ts">

const cards = ref([
      { expanded: true, },
      { expanded: false },
      { expanded: false },
      { expanded: false },
    ]);

    const toggleCard = (index) => {
      cards.value = cards.value.map((card, i) => ({
        ...card,
        expanded: i === index ? !card.expanded : false,
      }));
    };

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

const initScrollAnimation = () => {
  const card = document.getElementById("section-scroll-card"),
    endHeight = window.innerHeight + card.clientHeight;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 100%",
        end: "+=" + endHeight,
        scrub: 1, // 调整scrub时间
      },
    })
    .to("#section-scroll-card-top", {
      ease: "none",
      xPercent: 50,
    })
    .to(
      "#section-scroll-card-bottom",
      {
        ease: "none",
        xPercent: -50,
      },
      "<"
    );
};

const triggerFn = () => {
  const triggerList = document.querySelectorAll(".fade-trigger");
  triggerList.forEach((item) => {
    const hook = item.getAttribute("data-hook") || "70%";
    console.log(hook, "hook");
    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top " + hook,
        toggleClass: "active",
        markers: false,
      },
    });
  });
  console.log(triggerList)
};

onMounted(() => {
  agentFn()
  initScrollAnimation();
  triggerFn();
})

</script>
  
<style lang="scss" scoped>
.fade-copy {
  transition: opacity 0.5s, transform 0.5s;
  transform: translateY(50px);
  opacity: 0;
  &.active {
    transform: translateY(0px);
    opacity: 1;
  }
}

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

#section-card {
  .section-picture {
    img {
      display: block;
      flex-shrink: 0;
      width: 387px;
    }

    img + img {
      margin-left: 24px;
    }
  }
}

#section-FAQ {
  .expanded {
    background-color: blue;
    max-height: 300px;
  }
}
</style>