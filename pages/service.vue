<template>
    <div>
      <section
        id="section-service"
        bg="#FFF"
        text="gray 20"
        relative
        z-2
        text-center
      >
        <div h-[200vh] relative z-1>
          <div
            flex="~ wrap"
            items-center
            justify-center
            sticky
            top-0
            overflow-hidden
            w-full
            h-screen
          >
            <div id="section-wrapper" relative>
              <svg
                id="service-svg"
                w-200
                h-auto
                m="y-0 auto"
                width="162px"
                height="146px"
                viewBox="0 0 162 146"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                ref="magicRingSvg"
              >
                <!-- 渐变 -->
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style="stop-color: #fe6783; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #326cf9; stop-opacity: 1"
                    />
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
                      ></ellipse>
                      <ellipse
                        class="magic-path"
                        stroke="url(#gradient)"
                        stroke-width="2"
                        stroke-dasharray="0 220% 0"
                        cx="74.8447318"
                        cy="68.4"
                        rx="31.4542843"
                        ry="68.4"
                      ></ellipse>
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
                      ></ellipse>
                      <ellipse
                        ref="magicRingCircle"
                        class="magic-circle"
                        fill="#0000FF"
                        cx="74.8447318"
                        cy="68.4"
                        rx="10.4847614"
                        ry="10.5230769"
                        opacity="0"
                      ></ellipse>
                    </g>
                  </g>
                </g>
              </svg>
              <h2
                relative
                z-2
                text-72
                my-20
                font="300 sans"
                op-0
                id="section-headline"
              >
                提示工程服务
              </h2>
              <p my-20 font="300 sans" op-0 id="section-subhead">
                我们提供高度定制化的人工智能解决方案，专注于自然语言处理
                (NLP)和Prompt
                Engineering，帮助各类企业和机构快速实现智能化转型。<br />
                我们的服务不仅针对现有业务需求进行优化，更在技术前沿不断探索，以确保您始终领先一步。<br />
                通过灵活的解决方案和全面的技术支持，我们助您应对业务挑战、提升效率，并推动企业持续增长。
              </p>
              <div op-0 id="section-link">
                <button w-250 h-50 py-8 my-24 rounded-full bg-primary text-white>
                  讨论您的项目需求→
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section py-200 bg="#F0F0F0" w-screen overflow-hidden text-gray>
        <div m="y-30 x-350">
          <h1 text-40 font-600>利用我们的提示工程服务提供AI解决方案</h1>
          <h2 text="#808080">
            我们为您的人工智能计划提供定制解决方案。无论是定制AI
            Agent、为人工智能系统设计提示词、设计生成式人工智能模型，还是启用高级
            NLP，我们的提示工程师都能满足您的需求。
          </h2>
        </div>
        <div
          flex="~"
          w-fit
          overflow-hidden
          gap-100
          translate-x--650
          transition="transform duration-0.5s ease"
          id="carousel"
        >
          <div
            v-for="(item, index) in aiServiceList"
            :key="index"
            flex
            items-center
            w-1300
            rounded-30
            overflow-hidden
            bg="#FAFAFA"
            transition="filter duration-0.5s ease"
            :class="['carousel-card', index === 0 && 'ml-50vw']"
          >
            <div w-550 px-80>
              <h3 text-32>{{ item.title }}</h3>
              <p font="300 sans" text="#808080">{{ item.content }}</p>
            </div>
            <img w-750 h-450 src="~/assets/img/home-s3-01-poster.jpg" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const aiServiceList = [
    {
      title: "专业咨询",
      content:
        "根据您的业务需求提供咨询解决方案，专家顾问提供指导，帮助您就生成式人工智能计划做出明智的决策。",
      img: "~/assets/img/home-s3-01-poster.jpg",
    },
    {
      title: "设计和优化AI模型提示词",
      content: "设计提示和指令以提高AI模型性能和结果准确性。",
      img: "~/assets/img/home-s3-01-poster.jpg",
    },
    {
      title: "NLP模型定制",
      content: "根据客户需求定制的自然语言处理模型，提升业务自动化。",
      img: "~/assets/img/home-s3-01-poster.jpg",
    },
    {
      title: "AI系统集成",
      content: "从技术咨询到实施落地，确保AI系统与现有业务系统无缝集成。",
      img: "~/assets/img/home-s3-01-poster.jpg",
    },
    {
      title: "后续优化与维护",
      content: "为客户提供持续的系统监控、维护和优化服务。",
      img: "~/assets/img/home-s3-01-poster.jpg",
    },
    {
      title: "定制AI Agent",
      content: "根据客户需求定制AI Agent，提高业务效率。",
      img: "~/assets/img/home-s3-01-poster.jpg",
    },
  ]
  
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
  
  const magicRingFn = () => {
    const section = document.querySelector("#section-service"),
      wrapper = document.querySelector("#section-wrapper"),
      headline = document.querySelector("#section-headline"),
      subhead = document.querySelector("#section-subhead"),
      link = document.querySelector("#section-link"),
      svg = document.querySelector("#service-svg"),
      path = document.querySelectorAll(".magic-path"),
      circle = document.querySelector(".magic-circle")
  
    // 创建一个动画
    const animate = () => {
      // 重置初始状态
      gsap.set(path, {
        strokeDasharray: "0 220% 0",
        stroke: "url(#gradient)",
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
          scale: 4,
          yPercent: 80,
        })
        .to(path, {
          duration: 1,
          strokeDasharray: "0% 0% 220%",
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
          "<"
        )
        .tech4([svg, headline, subhead, link, wrapper], "<")
    }
  
    // 初始加载时触发动画
    animate()
  
    // 使用 ScrollTrigger 监听滚动事件
    ScrollTrigger.create({
      trigger: section,
      start: "top 0", // 当 section 的顶部与视口顶部对齐时触发
      onEnterBack: () => animate(), // 向上滚动回到视口时触发动画
      onLeave: () => {
        // 重置初始状态
        gsap.killTweensOf([path, circle, headline, subhead, link, wrapper, svg])
      },
    })
  }
  
  let intervalId = null
  const cardFn = () => {
    const cards = document.querySelectorAll(".carousel-card")
    let currentIndex = 0
  
    const updateCards = () => {
      cards.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.remove("blur")
        } else {
          item.classList.add("blur")
        }
      })
  
      const screenWidth = window.innerWidth
      const cardWidth = cards[0].offsetWidth
      // 100px: 5.2vw
      const gap = (5.2 * screenWidth) / 100
      // 650px: 33.854vw
      const initialOffset = -(33.854 * screenWidth) / 100 // translate-x--650 的初始偏移量
      const offset = initialOffset + -currentIndex * (cardWidth + gap)
  
      gsap.to("#carousel", { x: offset, duration: 0.5 })
    }
  
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length
      updateCards()
    }, 3000) // 每3秒切换一次
  }
  
  onMounted(() => {
    magicRingFn()
    cardFn()
  })
  
  onUnmounted(() => {
    intervalId && clearInterval(intervalId)
  })
  </script>
  