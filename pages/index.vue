<template><div></div></template>

<script setup lang="ts">
definePageMeta({
  middleware: function () {
    // 自定义内联中间件 跳转到首页
    return navigateTo('/home', { replace: true })
  },
})
</script>
