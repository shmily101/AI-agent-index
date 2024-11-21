<template><div></div></template>

<script setup lang="ts">
definePageMeta({
  middleware: function (to, from) {
    // 自定义内联中间件 跳转到首页
    return navigateTo('/home', { replace: true })
  },
})
</script>
