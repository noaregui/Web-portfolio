<template>
  <section class="home">
    <div class="container">
      <PresentationCard />
      <SkillsSection />
      <ToolsCard />
      <ContactCTA />
    </div>
  </section>
</template>

<script setup>
import PresentationCard from '@/components/PresentationCard.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ToolsCard from '@/components/ToolsCard.vue'
import ContactCTA from '@/components/ContactCTA.vue'
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  width: 100%;
  background: radial-gradient(circle at top left, #0d1117, #0b0f14);
  color: #8c8a8a;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
