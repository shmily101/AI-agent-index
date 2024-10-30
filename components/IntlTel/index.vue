<template>
  <div class="intl-tel-input allow-dropdown">
    <div class="flag-container">
      <div
        class="selected-flag"
        :title="currentData.name + ': +' + currentData.dialCode"
        @click="hideSubMenu = !hideSubMenu"
      >
        <div w-20 h-14 :class="'iti-flag ' + currentData.code"></div>
        <div class="iti-arrow"></div>
      </div>
      <ul
        class="country-list"
        v-if="!hideSubMenu"
        v-on-click-outside="() => (hideSubMenu = true)"
      >
        <li
          v-for="item in frontCountriesArray"
          :key="item.id"
          :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
          @click="handleSelectCountry(item)"
        >
          <div class="flag-box">
            <div :class="'iti-flag ' + item.code"></div>
          </div>
          <span class="country-name">{{ item.name }}</span>
          <span class="dial-code">+{{ item.dialCode }}</span>
        </li>
        <li class="divider"></li>
        <li
          v-for="item in countriesArray"
          :key="item.code"
          :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
          @click="handleSelectCountry(item)"
        >
          <div class="flag-box">
            <div :class="'iti-flag ' + item.code"></div>
          </div>
          <span class="country-name">{{ item.name }}</span>
          <span class="dial-code">+{{ item.dialCode }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { countries, type CountryCode } from "./countryList"
import { vOnClickOutside } from "@vueuse/components"

const props = withDefaults(
  defineProps<{
    toFront?: CountryCode[]
    countryCode?: CountryCode
  }>(),
  {
    toFront: () => [],
    countryCode: Object.keys(countries)[0] as CountryCode,
  }
)
// 定义事件
const emit = defineEmits<{
  (e: "excountry", item: any): void
}>()

// 初始化数据
const currentCode = ref<CountryCode>(props.countryCode)
const hideSubMenu = ref<boolean>(true)

// 计算属性：当前国家数据
const currentData = computed(() => {
  return countries[currentCode.value]
})

// 计算属性：前置国家数组
const frontCountriesArray = computed(() => {
  const toFrontCodes: Record<string, any> = {}
  props.toFront.forEach((code) => {
    const stringCode = String(code) as CountryCode
    const needObj = countries[stringCode]

    if (needObj) {
      toFrontCodes[stringCode] = needObj
    }
  })
  return toFrontCodes
})

// 计算属性：国家数组
const countriesArray = computed(() => {
  const countryCopie = { ...countries }
  props.toFront.forEach((code) => {
    delete countryCopie[code]
  })
  return countryCopie
})

// 监听器：国家代码变化
watch(
  () => props.countryCode,
  (newCode) => {
    setCountry(countries[newCode])
  }
)

// 方法：设置国家
const setCountry = (item: any) => {
  currentCode.value = item.code
  props.toFront.push(String(item.code) as CountryCode)
  emit("excountry", item)
}

// 方法：处理选择国家
const handleSelectCountry = (item: any) => {
  currentCode.value = item.code
  hideSubMenu.value = true
  setCountry(item)
}

// 组件挂载时触发
onMounted(() => {
  emit("excountry", countries[props.countryCode])
})
</script>

<style lang="scss" scoped>
@import "intl.css";

.intl-tel-input {
  width: 60px;
  height: 30px;
  color: #666;
  font-size: 14px;
  .country-list {
    width: 500px;
    height: 400px;
    margin-top: 2px;
  }
}
</style>
