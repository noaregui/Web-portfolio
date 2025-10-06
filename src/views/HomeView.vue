<template>
  <section class="home">
    <PresentationCard />
  </section>
</template>

<script setup>
import PresentationCard from '@/components/PresentationCard.vue'
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  background: radial-gradient(circle at top left, #0d1117, #0b0f14);
  color: #fff;
  padding: 2rem;
}
</style>
