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
  min-height: 100vh;
}

.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.main-content {
  min-height: 100vh;
}
</style>