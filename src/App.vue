<script setup>
import FooterCard from './components/FooterCard.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-layout">
    <NavBar />

    <main class="main-content">
      <RouterView />
    </main>

    <FooterCard />
  </div>
</template>

<style scoped>
.app-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-content :deep(.container) {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 0;
}
</style>
