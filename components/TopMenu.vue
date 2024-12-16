<template>
  <nav flex justify-between items-center fixed top-0 left-0 p="x-80 y-10" w-screen bg-white z-1000 text="gray" class="keep-px-nav">
    <img class="keep-px-logo" src="~/assets/svg/logo.svg" />
    <ul class="hidden lg:flex gap-40 justify-center items-center">
      <li hover:text-primary><NuxtLink to="/">首页</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/service">服务</NuxtLink></li>
      <li relative>
        <button hover:text-primary @click="toggleDropdown">行业</button>
        <ul v-if="isDropdownOpen" ref="dropdown" absolute left="-55" top-full bg-white b="#ebeef5 solid 1 t-primary t-solid t-3" shadow-lg rounded-6 mt-12 p-10 w-140 text-center @click="toggleDropdown">
          <li p-10 hover:text-primary><NuxtLink to="/industry/finance">金融</NuxtLink></li>
          <li p-10 hover:text-primary><NuxtLink to="/industry/education">教育</NuxtLink></li>
          <li p-10 hover:text-primary><NuxtLink to="/industry/healthcare">医疗</NuxtLink></li>
        </ul>
      </li>
      <li hover:text-primary><NuxtLink to="/">关于我们</NuxtLink></li>
    </ul>
    <button class="hidden lg:flex p-[5px_20px] rounded-full bg-primary text-white justify-center items-center">
      <NuxtLink to="/contact">联系我们</NuxtLink>
    </button>

    <!-- Mobile Menu Button -->
    <button lg:hidden @click="toggleMobileMenu">
      <div class="keep-px-menu-button" flex="~ col" gap-10 justify-between>
        <span class="keep-px-line" bg-gray transition-all :class="{ 'rotate-30 keep-px-translate-y': isMobileMenuOpen }"></span>
        <span class="keep-px-line" bg-gray transition-all :class="{ 'opacity-0': isMobileMenuOpen }"></span>
        <span class="keep-px-line" bg-gray transition-all :class="{ '-rotate-30 keep-px-translate--y': isMobileMenuOpen }"></span>
      </div>
    </button>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" fixed left-0 w-full bg-white border-t border-gray-200 shadow-lg class="keep-px-fixed">
        <ul flex="~ col" cursor-pointer @click="isMobileMenuOpen = false">
          <NuxtLink to="/" block p="y-30 x-60" border-b border-gray-100 hover:bg="#eee">首页</NuxtLink>
          <NuxtLink to="/service" block p="y-30 x-60" border-b border-gray-100 hover:bg="#eee">服务</NuxtLink>
          <li p="y-30 x-60" border-b border-gray-100 hover:bg="#eee" :class="{ 'bg-#eee': isMobileIndustryOpen }" @click.stop="toggleMobileIndustryMenu">
            <button flex justify-between items-center w-full>
              行业
              <span transition-transform :class="{ 'rotate-180': isMobileIndustryOpen }">▼</span>
            </button>
            <ul v-if="isMobileIndustryOpen" mt-10 @click="isMobileMenuOpen = false">
              <NuxtLink block p="y-30 x-60" w-full h-full hover:bg="#fff" to="/industry/finance">金融行业</NuxtLink>
              <NuxtLink block p="y-30 x-60" w-full h-full hover:bg="#fff" to="/industry/education">教育行业</NuxtLink>
              <NuxtLink block p="y-30 x-60" w-full h-full hover:bg="#fff" to="/industry/healthcare">医疗行业</NuxtLink>
            </ul>
          </li>
          <NuxtLink to="/" block p="y-30 x-60" border-b border-gray-100 hover:bg="#eee">关于我们</NuxtLink>
          <NuxtLink to="/contact" block p="y-30 x-60" border-b border-gray-100 hover:bg="#eee">联系我们</NuxtLink>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileIndustryOpen = ref(false)
const dropdown = ref(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    isMobileIndustryOpen.value = false
  }
}

const toggleMobileIndustryMenu = () => {
  isMobileIndustryOpen.value = !isMobileIndustryOpen.value
}

onClickOutside(dropdown, () => {
  isDropdownOpen.value = false
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.keep-px-menu-button {
  width: 18px;
  gap: 4px;
}

.keep-px-line {
  width: 100%;
  height: 1px;
}

.keep-px-logo {
  width: 30px;
  height: 30px;
}

.keep-px-translate-y {
  --un-translate-y: 5px;
}

.keep-px-translate--y {
  --un-translate-y: -5px;
}

@media (max-width: 1023px) {
  .keep-px-fixed {
    top: 30px;
  }
}

@media (min-width: 1024px) {
  .keep-px-fixed {
    top: 65px;
  }
}
</style>
