<template>
  <RouterLink :to="{ name: 'project', params: { slug: project.slug } }" class="tile">
    <div class="tile-top">
      <span class="tile-icon"><ProjectIcon :name="project.icon" /></span>
      <span v-if="project.ai" class="badge">{{ t('projects.aiBadge') }}</span>
    </div>
    <h3 class="tile-title">{{ project.card.name }}</h3>
    <p class="tile-summary">{{ project.card.summary }}</p>
    <span class="tile-arrow" aria-hidden="true">→</span>
  </RouterLink>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ProjectIcon from '@/components/ProjectIcon.vue'

// Compact project card for the Home grid (the Projects page uses ProjectCard)
defineProps({
  // A project localized with localizeProject()
  project: { type: Object, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  padding: 1.2rem 1.2rem 1.4rem;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    outline-color 0.2s ease;
}

.tile:hover {
  transform: translateY(-3px);
  outline-color: color-mix(in srgb, var(--color-accent) 55%, transparent);
  box-shadow: var(--shadow-card-hover);
}

.tile:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.tile-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tile-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
}

.tile-icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.badge {
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
}

.tile-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-strong);
}

/* One-glance summary: at most two lines */
.tile-summary {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.tile-arrow {
  position: absolute;
  right: 1.1rem;
  bottom: 0.9rem;
  color: var(--color-text-muted);
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;
}

.tile:hover .tile-arrow,
.tile:focus-visible .tile-arrow {
  opacity: 1;
  transform: none;
  color: var(--color-accent-soft);
}

@media (prefers-reduced-motion: reduce) {
  .tile,
  .tile-arrow {
    transition: none;
  }
}
</style>
