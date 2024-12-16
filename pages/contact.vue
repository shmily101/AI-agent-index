<template>
  <section w-screen p="y-105 x-200" flex items-center gap-100 class="bg-[url('~/assets/img/service-s3-bg.png')] bg-cover keep-px-height">
    <div text="48 gray" mb-200>
      <p>联系我们，</p>
      <p>
        <span mr-12>获取您的</span>
        <span id="text-type" text-primary bg="[linear-gradient(transparent_75%,_rgba(42,_130,_228,_0.34)_0%)]"> </span>
        <span ml-12>解决方案。</span>
      </p>
      <p text="18 #A6A6A6" mt-35 w-685>
        我们提供高度定制化的人工智能解决方案，<br />专注于自然语言处理 (NLP) 和Prompt Engineering，帮助各类企业和机构快速实现智能化转型。<br />通过灵活的解决方案和全面的技术支持，我们助您应对业务挑战、提升效率，并推动企业持续增长。
      </p>
    </div>
    <div w-full max-h-full bg="#fff" rd-24 p="y-60 x-90" flex="~ col" items-end>
      <ul w-full text="16 gray" flex="~ col" gap-24>
        <li>
          <div text="#808080"><span text="red">*</span>您的姓名</div>
          <input v-model="userForm.name" w-full h-56 b="solid #ccc 0.5" rd-12 px-24 mt-8 />
        </li>
        <li>
          <div text="#808080"><span text="red">*</span>您的邮箱地址</div>
          <input v-model="userForm.email" w-full h-56 b="solid #ccc 0.5" rd-12 px-24 mt-8 />
        </li>
        <li>
          <div text="#808080"><span text="red">*</span>您的手机号码</div>
          <div w-full h-56 b="solid #ccc 0.5" rd-12 p="x-24 y-12" mt-8 flex items-center gap-12>
            <IntlTel :to-front="['cn', 'hk', 'tw', 'mo']" :country-code="country.code" @excountry="(item) => (country = item)"></IntlTel>
            <span>(+{{ country.dialCode }})</span>
            <input v-model="userForm.phonenumber" w-full h-full @input="validateInput" />
          </div>
        </li>
        <li>
          <div text="#808080"><span text="red">*</span>请简要描述您的需求</div>
          <textarea v-model="userForm.info" w-full max-h-150 min-h-150 b="solid #ccc 0.5" rd-12 p="x-24 y-12" mt-8></textarea>
        </li>
      </ul>
      <div flex items-center mt-32 text-16 font-600>
        <p v-show="showTip" :class="showTip === 'success' ? 'text-lightBlue' : 'text-red'">
          {{ tipText }}
        </p>
        <button w-160 h-60 ml-32 rd-40 :class="canSubmit ? ['bg-primary', 'text-#fff', 'cursor-pointer'] : ['bg-#ccc', 'text-gray', 'cursor-not-allowed']" @click="canSubmit && handleSubmit()">提交</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Typed from 'typed.js'
import IntlTel from '@/components/IntlTel/index.vue'
import type { Country } from '@/components/IntlTel/countryList'

interface response {
  code: number
  msg: string
}

const country = ref<Country>({
  code: 'cn',
  name: 'China (中国)',
  dialCode: 86,
  phoneFormat: '131 2345 6789',
})

const userForm = ref({
  name: '',
  email: '',
  phonenumber: '',
  info: '',
})

const canSubmit = computed(() => {
  return !!(userForm.value.name && userForm.value.email && userForm.value.phonenumber && userForm.value.info)
})

const showTip: Ref<'success' | 'error' | null> = ref('success')
const tipText: Ref<string> = ref('')
const handleSubmit = async () => {
  try {
    const res: response = await $fetch('/proxy/api/user', {
      server: false,
      method: 'POST',
      body: {
        ...userForm.value,
        phonenumber: `+${country.value.dialCode}${userForm.value.phonenumber}`,
      },
    })
    showTip.value = res?.code === 200 ? 'success' : 'error'
    tipText.value = res?.msg
  } catch {
    showTip.value = 'error'
    tipText.value = '出了一点问题，请稍后重试'
  }
}

const validateInput = (event: Event) => {
  // 只允许输入数字
  const target = event.target as HTMLInputElement
  const value = target.value
  if (!/^\d*$/.test(value)) {
    userForm.value.phonenumber = value.replace(/\D/g, '')
  }
}

watch(
  () => userForm.value,
  () => {
    showTip.value = null
  },
  {
    deep: true,
  },
)

onMounted(() => {
  const options = {
    strings: ['定制化', '智能化', '高效化'],
    typeSpeed: 200,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  }

  new Typed('#text-type', options)
})
</script>
