<template>
  <div>
    <section id="section-agent" min-h-100vh h-auto bg="black cover" flex text-white items-center font-medium>
      <div class="section-wrapper" w-920 m="y-0 auto" flex="~ col" items-center transition="duration-1s delay-0.5s">
        <img w-644 h-full block src="~/assets/img/home-s1-bg.png" />
        <div w-full flex="~ col" items-center justify-center relative z-20>
          <h1 class="section-agent-gradient section-name" font-extrabold text-72 tracking-wider mb-14 leading-tight transition-duration-1s op-0>Agent Power</h1>
          <p class="section-slogan" text-36 d="0 60px 0" transition="duration-0.5s delay-0.5s" op-0>通过AI驱动的定制解决方案，让您的业务智能化和高效化</p>
        </div>
      </div>
      <p absolute bottom-40 left="50%" transform="translate-x--50%" text-16>↓ 下滑查看</p>
    </section>

    <section id="section-card" py-200 class="bg-[url('~/assets/img/home-s2-bg.png')] bg-cover" text-gray>
      <div m="y-0 auto" transition="duration-1s delay-0.5s">
        <div w-screen h-max flex="~ col" items-center>
          <h1 text-60 mb-14>定制化Agent服务</h1>
          <p text="24 #808080" font="300 sans" d="0 60px 0">我们的定制化Agent服务，利用人工智能，赋能各行各业</p>

          <div id="section-scroll-card" w-screen overflow-hidden mt-60>
            <div transform="translate-x-100%">
              <div w-3675 transform="translate-x--100%">
                <div id="section-scroll-card-top" flex class="section-picture">
                  <img class="lazyload" v-for="index in 9" :src="`_nuxt/assets/img/home-s2-card-0${index}.png`" alt="" />
                </div>
              </div>
            </div>
            <div mt-24>
              <div w-3675>
                <div id="section-scroll-card-bottom" flex class="section-picture">
                  <img class="lazyload" v-for="index in 9" :src="`_nuxt/assets/img/home-s2-card-0${index}.png`" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-us-one" bg="#FAFAFC cover" flex="~ col" text-gray items-center>
      <h1 mt-160 text-40 font="300 sans">为什么选择我们？</h1>
      <div class="fade-trigger" flex items-center w-1090 mx-auto mt-80>
        <h2 text-50 font-medium>技术领先</h2>
        <p ml-104 lh-normal text="18 #808080">依托最前沿的自然语言处理与大型语言模型技术，我们确保每个项目<br />的技术先进性。</p>
      </div>
      <img class="fade-trigger" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-01-poster.png" />
    </section>

    <section id="section-us-two" bg="#FAFAFC cover" flex="~ col" text-gray items-center pt-200>
      <div class="fade-trigger" flex items-center w-1090 mx-auto>
        <h2 text-50 font-medium>深度定制</h2>
        <p ml-104 lh-normal text="18 #808080">我们根据客户的具体需求量身定制解决方案，确保与业务目标紧密<br />契合。</p>
      </div>
      <img class="fade-trigger" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-02-poster.png" />
    </section>

    <section id="section-us-three" bg="#FAFAFC cover" flex="~ col" text-gray items-center pt-200>
      <div class="fade-trigger" flex items-center w-1090 mx-auto>
        <h2 text-50 font-medium>全流程支持</h2>
        <p ml-104 lh-normal text="18 #808080">从概念设计、开发、到后续的维护与优化，我们提供全流程的支持<br />服务，确保您的AI系统长期稳定高效运行。</p>
      </div>
      <img class="fade-trigger" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-03-poster.png" />
    </section>

    <section id="section-us-four" bg="#FAFAFC cover" flex="~ col" text-gray items-center py-200>
      <div class="fade-trigger" flex items-center w-1090 mx-auto>
        <h2 text-50 font-medium>业务增长驱动</h2>
        <p ml-104 lh-normal text="18 #808080">通过智能化解决方案，帮助您提升业务效率、降低成本，并<br />增强市场竞争力。</p>
      </div>
      <img class="fade-trigger" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-04-poster.png" />
    </section>

    <section id="section-FAQ" bg="#000 cover" p="t-300 b-200" text-white items-center font-medium>
      <div class="fade-trigger" m="y-0 auto" flex items-center px-170 min-h-500 transition="duration-1s delay-0.5s">
        <div text-24 flex="~ col" items-center>
          <h1 text-72>您可能想知道</h1>
          <p text="#E5E5E5" mt-24>
            这里没有想要了解的问题？您可以现在就<span text="#326CF9" font-bold mx-10><NuxtLink to="/contact">联系我们</NuxtLink></span
            >！
          </p>
          <p text="#E5E5E5" mt-8>我们将为您提供免费的咨询服务。</p>
        </div>
        <div flex="~ col" text-18 ml-200>
          <div
            v-for="(card, index) in cards"
            :key="index"
            w-700
            bg="#212121 cover"
            shadow="[0px_3px_49px_9px_rgba(0,0,0,0.06)]"
            backdrop-blur-20px
            text-white
            m-15
            border-rd-10
            cursor-pointer
            overflow-hidden
            max-h-90px
            :class="['card', { expanded: card.expanded }]"
            @click="toggleCard(index)"
          >
            <div flex justify-between items-center m="x-25 y-15">
              <span>卡片 {{ index + 1 }}</span>
              <span>
                <img v-show="card.expanded" w-20 src="~/assets/svg/chevron-up.svg" />
                <img v-show="!card.expanded" w-20 src="~/assets/svg/chevron-down.svg" />
              </span>
            </div>
            <div v-if="card.expanded" m="x-25 y-15" transition="opacity duration-0.3s">这是卡片 {{ index + 1 }} 的内容。</div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-user" w-screen relative bg="black cover" py-200>
      <img w-screen block src="~/assets/img/home-s8-bg.png" />

      <div flex="~ col" w-screen tracking-wide items-center absolute left="50%" top="50%" transform="translate-y--50% translate-x--50%" text="white 62">
        <p id="text-one"></p>
        <p mt-15 id="text-two"></p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger, $triggerFn: triggerFn } = useNuxtApp()
// 第一屏-首页动画
const agentFn = () => {
  const sectionAgent = document.getElementById('section-agent')
  gsap.timeline({
    scrollTrigger: {
      trigger: sectionAgent,
      toggleClass: 'animated',
    },
  })
}
// 第二屏-滚动行业卡片
const initScrollAnimation = () => {
  const card = document.getElementById('section-scroll-card'),
    endHeight = window.innerHeight + card?.clientHeight!

  gsap
    .timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 100%',
        end: '+=' + endHeight,
        scrub: 1, // 调整scrub时间
      },
    })
    .to('#section-scroll-card-top', {
      ease: 'none',
      xPercent: 50,
    })
    .to(
      '#section-scroll-card-bottom',
      {
        ease: 'none',
        xPercent: -50,
      },
      '<'
    )
}
// 第四屏-问答卡片
const cards = ref([{ expanded: true }, { expanded: false }, { expanded: false }, { expanded: false }])
const toggleCard = (index: number) => {
  cards.value = cards.value.map((card, i) => ({
    ...card,
    expanded: i === index ? !card.expanded : false,
  }))
}
// 第五屏-已使用用户
const userFn = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#text-one',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
    })
    .to('#text-one', {
      text: { value: '已有多家企业选择使用Agent power赋能业务' },
      duration: 3,
      ease: 'none',
    })
    .to(
      '#text-two',
      {
        text: { value: '感谢大家的支持与认可' },
        duration: 1,
        ease: 'none',
      },
      '+=0.5'
    ) // 延迟0.5秒开始第二段文字
}

onMounted(() => {
  agentFn()
  initScrollAnimation()
  triggerFn()
  userFn()
  // 更新ScrollTrigger，解决方案：https://gsap.com/community/forums/topic/33486-nuxt-3-gsap-scrolltrigger-startend-position-problem-after-route-navigation/
  // true: 延迟200ms再进行更新，参考：https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()
  ScrollTrigger.refresh(true)
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
