<template>
  <nav flex justify-between items-center fixed top-0 left-0 p="x-80 y-10" w-screen bg-white z-1000 text="gray" class="keep-px-nav">
    <img w-60 h-60 src="~/assets/svg/logo.svg" />
    <ul flex gap-40 justify-center items-center>
      <li hover:text-primary><NuxtLink to="/">首页</NuxtLink></li>
      <li hover:text-primary><NuxtLink to="/service">服务</NuxtLink></li>
      <li relative>
        <button hover:text-primary @click="toggleDropdown">行业</button>
        <ul v-if="isDropdownOpen" @click="toggleDropdown" ref="dropdown" absolute left="-55" top-full bg-white b="#ebeef5 solid 1 t-primary t-solid t-3" shadow-lg rounded-6 mt-12 p-10 w-140 text-center>
          <li p-10 hover:text-primary><NuxtLink to="/industry/finance">金融</NuxtLink></li>
          <li p-10 hover:text-primary><NuxtLink to="/industry/education">教育</NuxtLink></li>
          <li p-10 hover:text-primary><NuxtLink to="/industry/healthcare">医疗</NuxtLink></li>
        </ul>
      </li>
      <li hover:text-primary><NuxtLink to="/">关于我们</NuxtLink></li>
    </ul>
    <button>
      <NuxtLink to="/contact" w-121 h-40 py-2 rounded-full bg-primary text-white block flex justify-center items-center>联系我们</NuxtLink>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDropdownOpen = ref(false)
const dropdown = ref(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

onClickOutside(dropdown, () => {
  isDropdownOpen.value = false
})
</script>

<style>
.keep-px-nav {
  height: 65px;
  font-size: 14px;
}
</style>
