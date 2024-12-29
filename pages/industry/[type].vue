<template>
  <div>
    <section id="section-industry" class="keep-px-section" bg="[linear-gradient(rgba(255,_-255,_255,_0),_rgb(247,_250,_255)_100%)]">
      <div flex p="t-50 b-0 x-200" justify-between>
        <div class="section-text" flex="~ col" justify-center transition="duration-1s delay-0.5s">
          <h2 class="section-title" transition-duration-1s text="62 gray" op-0>
            AI Power在
            <span :text="type === 'finance' ? '#FFC300' : type === 'education' ? '#E33C64' : '#00BA5A'" mx-8>{{ configJson[type].title }}</span>
            领域
          </h2>
          <h4 class="section-slogan" transition="duration-0.5s delay-0.5s" text="24 #808080" mt-50 font="300 sans" op-0>{{ configJson[type].titleSlogan }}</h4>
          <button class="section-btn" transition="duration-0.5s delay-0.5s" op-0 w-250 h-50 py-8 my-24 rounded-full bg-primary text="white 20">
            <NuxtLink to="/contact"> 讨论您的项目需求→ </NuxtLink>
          </button>
        </div>
        <img op-0 w-698 h-698 ml-100 :src="configJson[type].bgImg" />
      </div>
      <svg w-full preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
        <path fill="#ffffff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
      </svg>
    </section>
    <section flex="~ col" items-center p="t-50 b-150 x-200">
      <h3 text="40 gray">{{ configJson[type].title }}行业的问题和挑战</h3>
      <div class="fade-trigger" data-hook="90%" bg="#FAFAFC" w-full p="x-170 y-70" rounded-20 text="20 gray" mt-70>
        {{ configJson[type].questionSlogan }}
      </div>
    </section>
    <section flex="~ col" items-center p="y-150 x-200" bg="#F7FAFF">
      <h3 class="fade-trigger" text="40 gray" font="300 sans">提示工程(Prompt Engineering)赋能{{ configJson[type].title }}行业</h3>
      <h2 class="fade-trigger" text="20 gray" m="t-20 b-20">{{ configJson[type].advSlogan }}</h2>
      <ul id="advantages-list" grid="~ cols-3 rows-2" gap="x-200 y-50" w-full>
        <li v-for="(item, index) in configJson[type].advantagesList" :key="index" class="advantage-item" op-0 flex="~ col" items-center text-center>
          <img w-70 h-70 :src="item.img" />
          <h2 my-12 text="32">
            {{ item.title }}
          </h2>
          <p text="16 #808080" v-html="item.content" />
        </li>
      </ul>
    </section>
    <section bg="[linear-gradient(rgba(255,_-255,_255,_0),_rgb(247,_250,_255)_100%)]">
      <h3 m="t-100 x-100" text="40 gray" font="300 sans">我们的案例</h3>
      <ul class="fade-trigger" flex m="x-100 y-50" justify-between>
        <li v-for="(item, index) in configJson[type].demoList" :key="index" w-500 overflow-hidden rounded-20 bg="#FFF" shadow="[rgba(140,152,164,0.25)_0px_3px_6px_0px]">
          <img w-full h-360 :src="item.img" />
          <div p="x-50 y-50">
            <h2 my-12 text="32 gray">
              {{ item.title }}
            </h2>
            <p text="16 #808080" v-html="item.content" />
          </div>
        </li>
      </ul>
      <svg w-full preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
        <path fill="#ffffff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
      </svg>
    </section>
    <section flex="~ col" items-center py-100>
      <h3 text="40 gray">准备好使用AI Power了吗？</h3>
      <button w-250 h-50 py-8 my-40 rounded-full bg-primary text="white 20">
        <NuxtLink to="/contact"> 讨论您的项目需求→ </NuxtLink>
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
// 默认进金融页面
const type = route.params.type === 'finance' || route.params.type === 'healthcare' || route.params.type === 'education' ? route.params.type : 'finance'

const configJson = {
  finance: {
    title: '金融',
    bgImg: '/img/industry-finance-01.png',
    titleSlogan: '通过NLP技术优化客户服务、风险控制和合规检查，提升金融机构的运营效率和用户体验。',
    questionSlogan: '金融行业面临复杂的欺诈行为和风险管理问题，传统的规则驱动系统无法灵活应对不断变化的欺诈模式。此外，客户期望个性化金融服务，但海量数据难以有效分析，合规团队也面临高强度的法规审核压力，增加了运营成本和风险。',
    advSlogan: '利用独特、智能且无缝集成的尖端服务提升金融机构的绩效。探索我们多样化的产品，包括：',
    advantagesList: [
      {
        title: '设计研报系统',
        content: '大幅度提高撰写研报的效率，为分析师提供更加智能化的内容生成工具，支持深度数据分析和智能推荐。',
        img: '/svg/finance-adv-01.svg',
      },
      {
        title: '智能客服与客户支持',
        content: '通过AI驱动的智能客服系统，实现7x24小时的客户支持，减少人工客服成本，大幅提高客户满意度。',
        img: '/svg/finance-adv-02.svg',
      },
      {
        title: '风险管理与合规检查',
        content: '自动化处理复杂的法规文本和交易数据，实时捕捉潜在风险，确保合规性与安全性。',
        img: '/svg/finance-adv-03.svg',
      },
      {
        title: '个性化金融产品推荐',
        content: '基于客户行为数据和交易历史，提供个性化的产品推荐，提升用户参与度和品牌信赖。',
        img: '/svg/finance-adv-04.svg',
      },
      {
        title: '智能数据洞察与趋势分析',
        content: '基于强大的AI模型和数据分析能力，为企业提供关键业务数据的洞察和市场趋势分析，帮助企业把握发展机遇，支持战略决策。',
        img: '/svg/finance-adv-05.svg',
      },
      {
        title: '自动化财务报告生成',
        content: '为企业提供智能化的财务报告生成服务，涵盖数据整合、分析和报告输出，大幅减少财务人员的工作量，确保数据准确性和透明度。',
        img: '/svg/finance-adv-06.svg',
      },
    ],
    demoList: [
      {
        title: '算法交易',
        content: '算法交易，也称为算法交易或暗箱交易，是指使用基于人工智能的计算机算法来自动化全球市场上金融工具的买卖过程。这些算法被编程为根据预定义的条件（例如价格波动、交易量或其他市场指标）执行交易。',
        img: '/img/industry-finance-02.webp',
      },
      {
        title: '自动信用评分和风险评估',
        content: '人工智能在信用评分中发挥着变革性的作用。传统的信用评分模型往往无法解释个人财务行为的复杂性和多变性。而人工智能可以处理大量数据，识别模式，并做出高度准确的预测。这使得信用评估更加个性密口公平。',
        img: '/img/industry-finance-03.webp',
      },
      {
        title: '聊天机器人和虚拟助手',
        content:
          '由生成式人工智能驱动的聊天机器人和虚拟助手正在引领银行业和金融科技的未来。它们提供了一系列好处，从改善客户体验和节省成本到增强安全性和数据驱动的洞察力。随着金融科技应用开发B艮务推动这一转变，我们可以期待银行业出现令人兴奋的变革，人工智能将成为日常金融互动中不可或缺的一部分。',
        img: '/img/industry-finance-04.webp',
      },
    ],
  },
  healthcare: {
    title: '医疗',
    bgImg: '/img/industry-healthcare-01.png',
    titleSlogan: '利用AI技术，助力医疗数据分析与患者管理，提升医疗服务的精准度与效率。',
    questionSlogan: '医疗行业因庞大的病历数据处理、精准医疗与个性化治疗需求面临挑战，手动分析患者数据和医学文献既耗时又易出错。同时，医院难以及时捕捉和分析患者反馈，影响服务质量和患者情绪管理。',
    advSlogan: '应用AI技术进行医疗记录处理、患者数据分析、临床决策支持，提高医疗机构的服务质量与管理效率。探索我们多样化的产品，包括：',
    advantagesList: [
      {
        title: '医学文献分析',
        content: '通过Prompt Engineering帮助医疗研究人员快速筛选和分析海量的医学文献，提高研究效率。',
        img: '/svg/health-adv-01.svg',
      },
      {
        title: '智能客服与客户支持',
        content: '通过AI驱动的智能客服系统，实现7x24小时的患者支持，减少人工客服成本，提高患者满意度。',
        img: '/svg/finance-adv-02.svg',
      },
      {
        title: '病历数据处理',
        content: '自动化处理电子病历，简化医生的日常工作，减少人工错误，提高数据管理效率。',
        img: '/svg/health-adv-03.svg',
      },
      {
        title: '患者情绪分析与管理',
        content: '通过NLP技术分析患者反馈及其数据规律，为患者提供个性化医疗服务，支持个体化诊疗方案的制定。',
        img: '/svg/health-adv-04.svg',
      },
      {
        title: '远程医疗助手',
        content: '为医生和患者提供AI驱动的远程医疗支持，涵盖在线问诊、药物建议和健康指导等功能，改善医疗服务可及性。',
        img: '/svg/health-adv-05.svg',
      },
      {
        title: '医疗数据安全与合规支持',
        content: '利用AI技术确保医疗数据的安全性，支持合规性检查和风险防控，为机构建立可信赖的数据管理系统。',
        img: '/svg/finance-adv-05.svg',
      },
    ],
    demoList: [
      {
        title: '人工智能家庭和社区护理支持',
        content:
          '人工智能(AI)正在显著增强医疗保健领域的内部和社区护理支持。通过部署AI驱动的技术，医疗保健提供育可以为医疗机构和社区环境中的患者提供更加个性化、高效和主动的护理。AI的这种应用解决了提供持续、优质护理的关键夕K战，包括管理大量患者、确保及时干预以及提供个性化护理计划。',
        img: '/img/industry-healthcare-02.webp',
      },
      {
        title: '慢性病管理',
        content:
          '在医疗要用不断上涨的时代，利用人工智能的力星不仅可以提高风险评估和个性化护理，而且还为提高慢性病管理的透明度、问责制和公平性提供了重要机会。有了合适的人才和合适的技术，我们就能站在医疗保健革命的前沿，将患者福祉和经济可持续性放在首位。',
        img: '/img/industry-healthcare-03.webp',
      },
      {
        title: '电子健康记录(EHR)',
        content: '区块链正在改变患者电子健康记录的存储和共享方式。它可以为健康信息交换提供更安全、更透明、更可追溯的基础系统。该技术有可能连接多个孤立运行的数据管理系统，并提供一个可以互联互通的电子健康记录系统。',
        img: '/img/industry-healthcare-04.webp',
      },
    ],
  },
  education: {
    title: '教育',
    bgImg: '/img/industry-education-01.png',
    titleSlogan: '利用AI技术推动个性化学习与教育管理的智能化转型。',
    questionSlogan: '教育行业在实现个性化学习和自动化评估时遇到挑战，教师难以为大规模学生提供定制化学习路径，且现有的考试评估系统对主观性题目表现不佳。此外，智能化辅导系统无法实时提供个性化学习支持，影响学生学习体验。',
    advSlogan: '通过AI驱动的内容生成和学生反馈分析，实现个性化学习体验与教学效率的提升。探索我们多样化的产品，包括：',
    advantagesList: [
      {
        title: '个性化学习方案',
        content: '通过Prompt Engineering为学生设计个性化学习路径，提升学习效率与学习兴趣。',
        img: '/svg/finance-adv-01.svg',
      },
      {
        title: '智能客服与客户支持',
        content: '通过AI驱动的智能客服系统，实现7x24小时的客户支持，减少人工客服成本，提高客户满意度。',
        img: '/svg/finance-adv-02.svg',
      },
      {
        title: '自动化考试评估',
        content: '利用AI实现考试的自动评估和分析，减少教师的工作量，提升评分的公平性与效率。',
        img: '/svg/edu-adv-03.svg',
      },
      {
        title: '智能学习助手',
        content: '通过AI模型提供7x24的智能答疑服务，帮助学生快速解决学习中的问题，优化学习体验。',
        img: '/svg/edu-adv-04.svg',
      },
      {
        title: '学习进度跟踪与反馈',
        content: '通过AI技术帮助教师实时追踪学生的学习进度，生成可视化的反馈报告，支持个性化教学策略的制定，提升学习效果。',
        img: '/svg/edu-adv-05.svg',
      },
      {
        title: '教育数据洞察与优化',
        content: '通过分析教育数据，提供教学模式优化建议，帮助教育机构提升教学质量和运营效率。',
        img: '/svg/finance-adv-06.svg',
      },
    ],
    demoList: [
      {
        title: '自动评分和评估',
        content: '在当今快节奏、技术驱动的世界里，教育正在经历重大变革。评估在衡量学生的进步和对概念的理解方面起着至关重要的作用。这一历程中最有趣的进步之一是将人工智能融入课堂，特别是在评分和评估领域。',
        img: '/img/industry-education-02.webp',
      },
      {
        title: '通过区块链进行凭证验证',
        content: '教育科技行业正在通过将数字证书验证与区块链技术结合起来，推动其教育平台的发展，以促进职业发展并提供高等教育，同时减少对纸质成绩单和证书的需求。',
        img: '/img/industry-education-03.webp',
      },
      {
        title: '去中心化学习平台',
        content: '区块链技术可以创建去中心化的学习平台。这些平台使学习者能睡从世界任何地方访问教育费源，从而营造更具包容性和可及性的教育环境。',
        img: '/img/industry-education-04.webp',
      },
    ],
  },
}

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger, $triggerFn: triggerFn } = useNuxtApp()

// 第一屏-开屏动画
const industryFn = () => {
  const sectionIndustry = document.getElementById('section-industry')
  gsap.timeline({
    scrollTrigger: {
      trigger: sectionIndustry,
      toggleClass: 'animated',
    },
  })
}

// 第三屏-优势卡片
const cardFn = () => {
  const advantagesList = document.getElementById('advantages-list')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: advantagesList,
        start: 'top 70%',
        end: 'bottom 100%',
        toggleActions: 'play none none reset',
        markers: false,
      },
    })
    .to('.advantage-item', {
      opacity: 1,
      y: 60,
      stagger: function (index) {
        const columns = 3 // 每行的列数
        const row = Math.floor(index / columns)
        const col = index % columns
        return row * 0.6 + col * 0.2 // 自定义的时间间隔
      },
    })
}

onMounted(() => {
  industryFn()
  cardFn()
  triggerFn()
  ScrollTrigger.refresh(true)
})
</script>

<style lang="scss" scoped>
.keep-px-section {
  margin-top: 65px;
}

.animated {
  .section-text {
    transform: translate3d(0, -30px, 0);
  }
  .section-title {
    opacity: 1;
  }
  img,
  .section-slogan,
  .section-btn {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
