<template>
  <nav class="top-menu">
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/about">关于</a></li>
      <!-- 其他菜单项 -->
    </ul>
  </nav>
</template>

<style scoped>
.top-menu {
  position: fixed;
  top: 20px; /* 上边距 */
  left: 30px; /* 左边距 */
  right: 30px; /* 右边距 */
  padding: 10px;
  background: #fff; /* 半透明背景 */
  border-radius: 20px;
  border: 4px solid rgba(242, 243, 245, 1);
  z-index: 1000;
}
</style>