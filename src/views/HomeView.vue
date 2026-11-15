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
  background: radial-gradient(
    circle at top left,
    var(--color-bg-gradient-start),
    var(--color-bg-gradient-end)
  );
  color: var(--color-text-subtle);
}
.container {
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
