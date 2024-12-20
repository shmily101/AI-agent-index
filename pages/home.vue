<template>
  <div>
    <section id="section-agent" class="keep-px-height" h-auto bg="black cover" flex text-white items-center font-medium py-100 relative>
      <div class="section-wrapper" w-920 m="y-0 auto" flex="~ col" items-center transition="duration-1s delay-0.5s">
        <img w-644 h-full max-w-50vh block src="~/assets/img/home-s1-bg.png" />
        <div w-full flex="~ col" items-center justify-center relative z-20>
          <h1 class="section-agent-gradient section-name" font-extrabold text-72 tracking-wider mb-14 leading-tight transition-duration-1s op-0>Agent Power</h1>
          <p class="section-slogan" text-36 d="0 60px 0" transition="duration-0.5s delay-0.5s" op-0>通过AI驱动的定制解决方案，让您的业务智能化和高效化</p>
        </div>
      </div>
      <p absolute bottom-40 left="50%" transform="translate-x--50%" text-16>↓ 下滑查看</p>
    </section>

    <section id="section-card" py-200 text-gray bg="#FAFAFC cover" relative>
      <img src="@/assets/img/home-s2-bg.png" absolute top-0 left-0 />
      <div m="y-0 auto" transition="duration-1s delay-0.5s" relative z-1>
        <div w-screen h-max flex="~ col" items-center>
          <h1 text-60 mb-14>定制化Agent服务</h1>
          <p text="24 #808080" font="300 sans" d="0 60px 0">我们的定制化Agent服务，利用人工智能，赋能各行各业</p>

          <div id="section-scroll-card" w-screen overflow-hidden mt-60>
            <div transform="translate-x-100%">
              <div w-3675 transform="translate-x--100%">
                <div id="section-scroll-card-top" flex class="section-picture">
                  <img v-for="index in topImages" :key="index" class="lazyload" :src="`_nuxt/assets/img/home-s2-card-0${index}.png`" alt="" />
                </div>
              </div>
            </div>
            <div mt-24>
              <div w-3675>
                <div id="section-scroll-card-bottom" flex class="section-picture">
                  <img v-for="index in bottomImages" :key="index" class="lazyload" :src="`_nuxt/assets/img/home-s2-card-0${index}.png`" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-us-one" bg="#FAFAFC cover" flex="~ col" text-gray items-center>
      <h1 mt-100 text-40 font="300 sans">为什么选择我们？</h1>
      <div class="fade-trigger" data-hook="95%" flex items-center w-1090 mx-auto mt-80>
        <h2 text-50 font-medium>技术领先</h2>
        <p ml-104 lh-normal text="18 #808080">依托最前沿的自然语言处理与大型语言模型技术，我们确保每个项目<br />的技术先进性。</p>
      </div>
      <img class="fade-trigger" data-hook="95%" w-1235 h-600 mx-auto mt-30 border-rd-30px src="~/assets/img/home-s3-01-poster.png" />
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

    <section id="section-FAQ" bg="#000" p="t-50 x-50">
      <div text="#fff 18" flex="~ col" items-center m="y-100">
        <h1 text-40 font="300 sans">您可能想知道</h1>
        <p text="#E5E5E5" mt-24 font="300 sans">
          这里没有想要了解的问题？您可以现在就<span text="#326CF9" font-bold mx-10><NuxtLink to="/contact">联系我们</NuxtLink></span
          >！我们将为您提供免费的咨询服务。
        </p>
      </div>
      <ul id="card-list" w-full>
        <li v-for="(card, index) in cards" :key="index" class="card-item" border="b-1 gray solid" op-0 translate-y-60>
          <button text="32" w-full p="x-60 y-35" flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 @click="toggleCard(index)">
            <span font-medium text="#fff">{{ card.question }}</span>
            <!-- <ChevronDownIcon w-5 h-5 text-gray-500 transition-transform duration-200 :class="{ 'transform rotate-180': card.expanded }" /> -->
          </button>
          <transition @enter="enter" @after-enter="afterEnter" @leave="leave">
            <div v-show="card.expanded" overflow-hidden p="x-60">
              <div pb-20 text="#ccc 22" line-height-loose v-html="card.answer" />
            </div>
          </transition>
        </li>
      </ul>
    </section>

    <section id="section-user" w-screen relative bg="black cover" py-200>
      <img w-screen block src="~/assets/img/home-s8-bg.png" />
      <div flex="~ col" w-screen tracking-wide items-center absolute left="50%" top="50%" transform="translate-y--50% translate-x--50%" text="white 62">
        <p id="text-one" />
        <p id="text-two" mt-15 />
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
const topImages = [1, 3, 5, 7, 9, 2, 4, 6, 8]
const bottomImages = [2, 4, 6, 8, 1, 3, 5, 7, 9]
const initScrollAnimation = () => {
  const card = document.getElementById('section-scroll-card'),
    endHeight = window.innerHeight + (card?.clientHeight || 0)

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
      '<',
    )
}

// 第四屏-问答卡片
const cards = ref([
  {
    question: '什么是AI Agent？它能为我的业务带来什么价值？',
    answer:
      'AI Agent 是一种基于人工智能大语言模型的智能助手，可以理解自然语言并执行特定任务。我们为客户量身定制的 AI Agent 能帮助企业提高效率、优化业务流程、降低成本，同时提供个性化的客户体验。它可以应用于客户支持、数据分析、内容生成、销售助理等多个场景。',
    expanded: true,
  },
  {
    question: '我们与其他AI解决方案提供商的区别是什么？',
    answer: '我们不提供“一刀切”的通用解决方案，而是深入了解客户的业务特点、痛点和目标，根据这些需求定制专属的 AI Agent。我们的目标是让每一个AI Agent都能成为客户业务的核心驱动力，帮助企业实现更高效、更智能的运营。',
    expanded: false,
  },
  {
    question: 'AI Agent适合哪些行业和场景？',
    answer:
      'AI Agent具有广泛的应用场景，我们已为以下行业提供定制化解决方案：<div><br />● <b style="color: chartreuse;">金融行业</b>：自动化客户支持、合规检查、风险分析；<br />● <b style="color: chartreuse;">医疗与健康行业</b>：智能诊断助手、患者服务、健康数据分析；<br />● <b style="color: chartreuse;">教育行业</b>：个性化学习助手、在线教学支持、知识管理；<br />● <b style="color: chartreuse;">零售与电子商务行业</b>：个性化推荐、订单管理、售后服务；<br />● <b style="color: chartreuse;">物流与供应链行业</b>：运输调度优化、库存管理、实时物流跟踪；<br />● <b style="color: chartreuse;">游戏与娱乐行业</b>：NPC交互设计、玩家行为分析、个性化内容推荐；<br />● <b style="color: chartreuse;">客户服务与HR行业</b>：招聘助手、员工支持、客户关系管理；<br />● <b style="color: chartreuse;">法律与合规行业</b>：文档审查、法律咨询助手、合规检查；<br />● <b style="color: chartreuse;">环境与能源行业</b>：能耗分析、环境监测、智能调度管理。</div><br />无论您的行业是什么，我们都能为您量身定制适合的AI Agent，助力您的业务升级。',
    expanded: false,
  },
  {
    question: '如何为我的公司设计定制化的AI Agent？',
    answer:
      '为了确保您获得真正符合业务需求的定制化AI Agent，我们采用了一套科学高效的服务流程，每一步都以您的业务价值为核心设计：<div><b style="color: chartreuse;">（1）需求分析</b><br />我们的团队会与您深入沟通，全面了解您的项目目标和业务需求。我们相信，只有清晰理解您的行业背景和痛点，才能为您打造真正有效的AI解决方案。<br /><b style="color: chartreuse;">（2）模型选择</b><br />根据您的具体需求，我们会为您挑选最适合的AI模型或技术框架。这一步的核心是确保AI Agent能够与您的业务完美匹配，并具备足够的灵活性和适应性。<br /><b style="color: chartreuse;">（3）Agent开发</b><br />由经验丰富的Prompt工程师团队，设计并开发出专为您业务场景定制的AI Agent。无论是功能设计还是交互逻辑，都将围绕您的目标用户和实际应用场景量身打造。<br /><b style="color: chartreuse;">（4）微调优化</b><br />我们会使用您的业务数据，对AI模型进行深度微调，从而最大化地提升其性能与准确性。通过这一步，AI Agent将更加贴合您的业务需求，并能在复杂场景中表现出色。<br /><b style="color: chartreuse;">（5）测试验证</b><br />开发完成后，我们会对AI Agent进行严格的测试和验证，确保其功能、性能和稳定性都达到预期效果。我们相信，只有经过全面测试的解决方案，才能真正帮助您的业务取得成功。</div>',
    expanded: false,
  },
  {
    question: '如何开展合作？',
    answer: '您可以通过联系我们的团队进行初步沟通，我们会安排一次免费的需求分析会议，了解您的业务需求并为您提供初步建议。您只需点击“联系我们”按钮即可开始。',
    expanded: false,
  },
])
// 卡片收起/展开
const toggleCard = (index: number) => {
  cards.value[index].expanded = !cards.value[index].expanded
}
// 卡片展开/收起过渡动画
const enter = (el: Element) => {
  const element = el as HTMLElement
  element.style.position = 'absolute'
  element.style.height = 'auto'
  const height = element.offsetHeight
  element.style.position = ''
  element.style.height = '0'
  // 触发重绘
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    element.style.height = `${height}px`
  })
}
const afterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = 'auto'
}
const leave = (el: Element) => {
  const element = el as HTMLElement
  const height = element.offsetHeight
  element.style.height = `${height}px`
  // 触发重绘
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    element.style.height = '0'
  })
}

// 卡片展示动画
const cardFn = () => {
  const cardList = document.getElementById('card-list')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: cardList,
        start: 'top 70%',
        end: 'bottom 100%',
        toggleActions: 'play none none reset',
        markers: false,
      },
    })
    .to('.card-item', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
    })
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
      '+=0.5',
    ) // 延迟0.5秒开始第二段文字
}

onMounted(() => {
  agentFn()
  initScrollAnimation()
  triggerFn()
  cardFn()
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
    background-color: #5886f4;
    max-height: 100vh;
  }
}
</style>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: height 0.3s ease;
}
</style>
