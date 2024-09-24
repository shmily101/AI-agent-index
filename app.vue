<template>
  <div class="app-container">
    <header class="global-header">
      <TopMenu />
    </header>
    <main class="main-content">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh
}

.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.global-header {
  position: fixed;
  top: 20px; /* 上边距 */
  left: 20px; /* 左边距 */
  right: 20px; /* 右边距 */
  padding: 10px;
  background: rgba(255, 255, 255, 0.9); /* 半透明背景 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.main-content {
  min-height: 100vh;
}
</style>