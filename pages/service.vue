<template>
  <div>
    <section id="section-service" bg="#FFF" text="gray 20" relative z-2 text-center>
      <div relative z-1>
        <div flex="~ wrap" items-center justify-center sticky top-0 overflow-hidden w-full class="keep-px-height">
          <div id="section-wrapper" mt-120 mb-240 relative>
            <svg id="service-svg" ref="magicRingSvg" w-200 h-auto m="y-0 auto" width="162px" height="146px" viewBox="0 0 162 146" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color: #fe6783; stop-opacity: 1" />
                  <stop offset="100%" style="stop-color: #326cf9; stop-opacity: 1" />
                </linearGradient>
              </defs>

              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1536.000000, -479.000000)">
                  <g transform="translate(1542.400000, 483.800000)">
                    <ellipse
                      class="magic-path"
                      stroke="url(#gradient)"
                      stroke-width="2"
                      stroke-dasharray="0 220% 0"
                      transform="translate(74.844732, 68.400000) rotate(-240.000000) translate(-74.844732, -68.400000) "
                      cx="74.8447318"
                      cy="68.4"
                      rx="31.5406825"
                      ry="68.2132305"
                    />
                    <ellipse class="magic-path" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="0 220% 0" cx="74.8447318" cy="68.4" rx="31.4542843" ry="68.4" />
                    <ellipse
                      class="magic-path"
                      stroke="url(#gradient)"
                      stroke-width="2"
                      stroke-dasharray="0 220% 0"
                      transform="translate(74.844732, 68.400000) rotate(-300.000000) translate(-74.844732, -68.400000) "
                      cx="74.8447318"
                      cy="68.4"
                      rx="31.5406825"
                      ry="68.2132305"
                    />
                    <ellipse ref="magicRingCircle" class="magic-circle" fill="#0000FF" cx="74.8447318" cy="68.4" rx="10.4847614" ry="10.5230769" opacity="0" />
                  </g>
                </g>
              </g>
            </svg>
            <h2 id="section-headline" relative z-2 text-72 my-20 font="300 sans" op-0>提示工程服务</h2>
            <p id="section-subhead" my-20 font="300 sans" op-0>
              我们提供高度定制化的人工智能解决方案，专注于自然语言处理 (NLP)和Prompt Engineering，帮助各类企业和机构快速实现智能化转型。<br />
              我们的服务不仅针对现有业务需求进行优化，更在技术前沿不断探索，以确保您始终领先一步。<br />
              通过灵活的解决方案和全面的技术支持，我们助您应对业务挑战、提升效率，并推动企业持续增长。
            </p>
            <div id="section-link" op-0>
              <button w-250 h-50 py-8 my-24 rounded-full bg-primary text-white>
                <NuxtLink to="/contact"> 讨论您的项目需求→ </NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-card" py-200 bg="#F0F0F0" w-screen overflow-hidden text="gray 16">
      <div m="y-30 x-350">
        <h1 text-40 font-600>利用我们的提示工程服务提供AI解决方案</h1>
        <h2 text="#808080">我们为您的人工智能计划提供定制解决方案。无论是定制AI Agent、为人工智能系统设计提示词、设计生成式人工智能模型，还是启用高级 NLP，我们的提示工程师都能满足您的需求。</h2>
      </div>
      <ul id="carousel" flex="~" w-fit overflow-hidden gap-100 translate-x--650 transition="transform duration-0.5s ease">
        <li v-for="(item, index) in aiServiceList" :key="index" flex items-center w-1300 rounded-30 overflow-hidden bg="#FAFAFA" transition="filter duration-0.5s ease" :class="['carousel-card', index === 0 && 'ml-50vw']">
          <div w-550 px-80>
            <h3 text-32>
              {{ item.title }}
            </h3>
            <p font="300 sans" text="#808080">
              {{ item.content }}
            </p>
          </div>
          <img w-750 h-450 src="~/assets/img/home-s3-01-poster.jpg" />
        </li>
      </ul>
    </section>
    <section p="y-200 x-100" text-gray flex="~ col" items-center class="bg-[url('~/assets/img/service-s3-bg.png')] bg-cover">
      <h1 class="fade-trigger" data-hook="90%" text="48" font="300 sans" mb-120>提示工程服务的优势</h1>
      <ul class="fade-trigger" grid="~ cols-3 rows-2" gap="x-200 y-100" w-full>
        <li v-for="(item, index) in advantagesList" :key="index" flex="~ col" items-center text-center>
          <img w-40 h-40 :src="item.img" />
          <h2 my-12 text="32">
            {{ item.title }}
          </h2>
          <p text="16 #808080" v-html="item.content" />
        </li>
      </ul>
    </section>
    <section id="section-steps" p="t-150 b-300 x-100" text="#808080" bg="#fff cover" flex="~ col" items-center>
      <h1 class="fade-trigger" data-hook="90%" text="48 gray" font="300 sans" mb-100>我们的服务流程</h1>
      <ul w-full flex="~ col" items-center text-20>
        <li class="step-item" relative>
          <img class="step-img" w-420 op-0 src="~/assets/img/service-s4-01.png" alt="" />
          <div class="step-info" absolute top-20 left-350 flex items-center gap-12 op-0>
            <hr border-none w-150 h-1 bg="#808080" />
            <span w-400>了解客户项目需求及目标</span>
          </div>
        </li>
        <li class="step-item" mr-300 relative>
          <img class="step-img" w-420 op-0 src="~/assets/img/service-s4-02.png" alt="" />
          <div class="step-info" absolute top-10 op-0 left="-400" flex items-center gap-12>
            <span w-300 text-center>根据客户需求，<br />确定最合适的AI模型或框架</span>
            <hr border-none w-170 h-1 bg="#808080" />
          </div>
        </li>
        <li class="step-item" ml-100 relative>
          <img class="step-img" w-420 op-0 src="~/assets/img/service-s4-03.png" alt="" />
          <div class="step-info" absolute top-20 left-350 flex op-0 items-center gap-12>
            <hr border-none w-150 h-1 bg="#808080" />
            <span w-350 text-center>Prompt工程师<br />设计符合客户使用情况的定制agent</span>
          </div>
        </li>
        <li class="step-item" mr-200 relative>
          <img class="step-img" w-420 op-0 src="~/assets/img/service-s4-04.png" alt="" />
          <div class="step-info" absolute top-10 left="-400" op-0 flex items-center gap-12>
            <span w-280 text-center>使用客户的数据微调 AI 模型，<br />以优化性能和准确性</span>
            <hr border-none w-170 h-1 bg="#808080" />
          </div>
        </li>
        <li class="step-item" ml-100 relative>
          <img class="step-img" w-420 op-0 src="~/assets/img/service-s4-05.png" alt="" />
          <div class="step-info" op-0 absolute top-20 left-350 flex items-center gap-12>
            <hr border-none w-150 h-1 bg="#808080" />
            <span w-300 text-center>测试和验证AI模型，<br />以确保它们满足客户需求及期望</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const aiServiceList = [
  {
    title: '专业咨询',
    content: '根据您的业务需求提供咨询解决方案，专家顾问提供指导，帮助您就生成式人工智能计划做出明智的决策。',
    img: '~/assets/img/home-s3-01-poster.jpg',
  },
  {
    title: '设计和优化AI模型提示词',
    content: '设计提示和指令以提高AI模型性能和结果准确性。',
    img: '~/assets/img/home-s3-01-poster.jpg',
  },
  {
    title: 'NLP模型定制',
    content: '根据客户需求定制的自然语言处理模型，提升业务自动化。',
    img: '~/assets/img/home-s3-01-poster.jpg',
  },
  {
    title: 'AI系统集成',
    content: '从技术咨询到实施落地，确保AI系统与现有业务系统无缝集成。',
    img: '~/assets/img/home-s3-01-poster.jpg',
  },
  {
    title: '后续优化与维护',
    content: '为客户提供持续的系统监控、维护和优化服务。',
    img: '~/assets/img/home-s3-01-poster.jpg',
  },
  {
    title: '定制AI Agent',
    content: '根据客户需求定制AI Agent，提高业务效率。',
    img: '~/assets/img/home-s3-01-poster.jpg',
  },
]
const advantagesList = [
  {
    title: '快速解决方案',
    content: '及时的工程师擅长快速理解和解决项目需求，</br>大大缩短开发周期和产品上市时间。',
    img: '_nuxt/assets/svg/adv-logo1.svg',
  },
  {
    title: '经济高效的解决方案',
    content: '聘请一位反应敏捷的工程师可以大幅节省成本。</br>他们高效的工作方式确保资源得到最佳利用，</br>从而降低开发成本。',
    img: '_nuxt/assets/svg/adv-logo2.svg',
  },
  {
    title: '提高生产力',
    content: '提示工程师专注于在紧迫的期限内交付高质量的工作，</br>从而提高整个团队的生产力。</br>他们高效而专注的方法确保项目顺利进展。',
    img: '_nuxt/assets/svg/adv-logo3.svg',
  },
  {
    title: '改进的语言生成',
    content: '提示工程师可以提高语言生成的质量，</br>使人工智能聊天机器人更易于理解和更像人类。</br>通过聘请及时的工程师，</br>您可以确保创建能够轻松回答具有挑战性的查询的机器人。',
    img: '_nuxt/assets/svg/adv-logo4.svg',
  },
  {
    title: '精密度和准确度',
    content: '精度是软件开发的关键，</br>而敏捷的工程师擅长提供准确的结果。</br>他们对细节的细致关注确保最终产品完美地满足要求，</br>从而提高客户满意度。',
    img: '_nuxt/assets/svg/adv-logo5.svg',
  },
  {
    title: '个性化回复',
    content: '提示工程师开发了聊天机器人，</br>可根据每位访客的独特需求提供个性化响应。</br>这种定制增强了用户体验，使互动更加个性化和真实。',
    img: '_nuxt/assets/svg/adv-logo6.svg',
  },
]

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger, $triggerFn: triggerFn } = useNuxtApp()

// 第一屏-svg首页动画
const magicRingFn = () => {
  const section = document.querySelector('#section-service'),
    wrapper = document.querySelector('#section-wrapper'),
    headline = document.querySelector('#section-headline'),
    subhead = document.querySelector('#section-subhead'),
    link = document.querySelector('#section-link'),
    svg = document.querySelector('#service-svg'),
    path = document.querySelectorAll('.magic-path'),
    circle = document.querySelector('.magic-circle')

  function calculateScaleFactor(element, maxWidth) {
    const rect = element.getBoundingClientRect();
    const currentWidth = rect.width;
    return Math.min(maxWidth / currentWidth, 4); // Limit to original 4x scale or less
  }
  // 限制缩放的最大宽度
  const maxWidth = window.innerHeight * 0.7;
  const scaleFactor = calculateScaleFactor(svg, maxWidth);

  // 创建一个动画
  const animate = () => {
    // 重置初始状态
    gsap.set(path, {
      strokeDasharray: '0 220% 0',
      stroke: 'url(#gradient)',
      strokeWidth: 2,
    })
    gsap.set(svg, {
      yPercent: 0,
      scale: 1,
    })
    gsap.set(wrapper, {
      yPercent: 0,
    })
    gsap.set(circle, {
      opacity: 0,
    })
    gsap.set(headline, {
      opacity: 0,
    })
    gsap.set(subhead, {
      opacity: 0,
    })
    gsap.set(link, {
      opacity: 0,
    })

    gsap
      .timeline()
      .to(svg, {
        duration: 0,
        scale: scaleFactor,
        yPercent: 100,
      })
      .to(path, {
        duration: 1,
        strokeDasharray: '0% 0% 220%',
      })
      .to(circle, {
        duration: 0.5,
        opacity: 1,
      })
      .to(
        path,
        {
          duration: 0.5,
          strokeWidth: 4,
        },
        '<'
      )
      .tech4([svg, headline, subhead, link, wrapper], '<')
  }

  // 初始加载时触发动画
  animate()

  // 使用 ScrollTrigger 监听滚动事件
  ScrollTrigger.create({
    trigger: section,
    start: 'top 0', // 当 section 的顶部与视口顶部对齐时触发
    onEnterBack: () => animate(), // 向上滚动回到视口时触发动画
    onLeave: () => {
      // 重置初始状态
      gsap.killTweensOf([path, circle, headline, subhead, link, wrapper, svg])
    },
  })
}

// 第二屏-卡片轮播图动画
let intervalId = null
const cardFn = () => {
  const cards = document.querySelectorAll('.carousel-card')
  let currentIndex = 0

  const updateCards = () => {
    cards.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.remove('blur')
      } else {
        item.classList.add('blur')
      }
    })

    const screenWidth = window.innerWidth
    const cardWidth = cards[0].offsetWidth
    // 100px: 5.2vw
    const gap = (5.2 * screenWidth) / 100
    // 650px: 33.854vw
    const initialOffset = -(33.854 * screenWidth) / 100 // translate-x--650 的初始偏移量
    const offset = initialOffset + -currentIndex * (cardWidth + gap)

    gsap.to('#carousel', { x: offset, duration: 0.5 })
  }

  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length
    updateCards()
  }, 3000) // 每3秒切换一次
}

// 第四屏-我们的服务流程动画
const stepFn = () => {
  const stepList = document.querySelectorAll('.step-item')
  stepList.forEach((item) => {
    const stepImg = item.querySelector('.step-img')
    const stepInfo = item.querySelector('.step-info')
    gsap
      .timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 70%',
          end: 'bottom 100%',
          scrub: 2,
          markers: false,
        },
      })
      .fromTo(stepImg, { y: 60 }, { y: 0, duration: 0.5, opacity: 1 })
      .fromTo(stepInfo, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 })
  })
}

onMounted(() => {
  magicRingFn()
  cardFn()
  stepFn()
  triggerFn()
  ScrollTrigger.refresh(true)
})

onUnmounted(() => {
  intervalId && clearInterval(intervalId)
})
</script>
