<template>
  <section class="not-found">
    <p class="code">404</p>
    <h1 class="title">
      <span class="title-white">{{ t('notFound.titleStart') }}</span>
      <span class="title-purple">{{ ' ' + t('notFound.titleEnd') }}</span>
    </h1>
    <p class="subtitle">{{ t('notFound.subtitle') }}</p>
    <div class="actions">
      <RouterLink to="/" class="btn">{{ t('notFound.home') }}</RouterLink>
      <RouterLink to="/projects" class="btn btn-quiet">{{ t('notFound.projects') }}</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1.5rem;
  text-align: center;
  font-family: var(--font-display);
  background: var(--color-bg);
}

.code {
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 700;
  line-height: 1;
  color: var(--color-accent);
}

.title {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.5px;
}

.title-white {
  color: var(--color-text-strong);
}

.title-purple {
  color: var(--color-accent);
}

.subtitle {
  max-width: 32rem;
  color: var(--color-text-subtle);
  font-size: 1.05rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
