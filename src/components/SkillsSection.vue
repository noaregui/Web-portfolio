<template>
  <div class="skills-section">
    <div class="text-content">
      <h2>
        <span class="title-line">{{ t('skills.titleLine1') }}</span>
        <span class="title-line">{{ t('skills.titleLine2') }}</span>
      </h2>
      <p>{{ t('skills.text') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.skills-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  background-color: transparent;
  flex-wrap: wrap;
  padding: 0 5rem;
  box-sizing: border-box;
}

.text-content {
  flex: 1;
  min-width: 250px;
}

.skills-section h2 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: var(--color-text-strong);
  line-height: 1.2;
}

.title-line {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 0.5px;
  color: var(--color-text);
}

.skills-section p {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--color-text-subtle);
}

.animation {
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .skills-section {
    padding: 0 3rem;
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 0 1.5rem;
    justify-content: center;
  }
  .title-line {
    text-align: center;
  }
  .skills-section p {
    text-align: center;
  }
}

/* Long single words (e.g. "CONSTRUYENDO", "ESPERIENTZIA") must fit small phones */
@media (max-width: 480px) {
  .title-line {
    font-size: clamp(1.75rem, 8.5vw, 2.5rem);
  }
}
</style>
