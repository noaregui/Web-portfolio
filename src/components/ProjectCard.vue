<template>
  <RouterLink
    :to="{ name: 'project', params: { slug: project.slug } }"
    class="card"
    :class="{ featured: project.featured }"
    :style="{ '--accent': project.accent, '--i': index }"
  >
    <div class="card-top">
      <span class="icon">
        <ProjectIcon :name="project.icon" />
      </span>
      <span v-if="project.ai" class="badge">{{ t('projects.aiBadge') }}</span>
    </div>

    <h2 class="card-title">{{ project.card.name }}</h2>
    <p class="card-summary">{{ project.card.summary }}</p>

    <ul v-if="project.featured && project.card.highlights" class="highlights">
      <li v-for="item in project.card.highlights" :key="item">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        {{ item }}
      </li>
    </ul>

    <div class="card-bottom">
      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <span class="arrow" aria-hidden="true">→</span>
    </div>
  </RouterLink>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ProjectIcon from '@/components/ProjectIcon.vue'

// One project card (bento style). Its size in a grid is set by the parent.
defineProps({
  // A project localized with localizeProject()
  project: { type: Object, required: true },
  // Position in the list, used to stagger the entrance animation
  index: { type: Number, default: 0 },
})

const { t } = useI18n()
</script>

<style scoped>
.card {
  /* --accent comes from each project's data */
  --tint: color-mix(in srgb, var(--accent) 14%, transparent);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  overflow: hidden;
  isolation: isolate;
  border-radius: 18px;
  color: var(--color-text);
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    outline-color 0.25s ease;
  animation: card-in 0.5s ease both;
  animation-delay: calc(var(--i, 0) * 60ms);
}

/* Soft glow of the project's color in the corner */
.card::before {
  content: '';
  position: absolute;
  inset: -40% -40% auto auto;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, var(--tint), transparent 70%);
  z-index: -1;
  transition: opacity 0.3s ease;
  opacity: 0.8;
}

.card:hover {
  transform: translateY(-4px);
  outline: 1px solid color-mix(in srgb, var(--accent) 65%, transparent);
  box-shadow:
    var(--shadow-project-card-hover),
    0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
}

.card:hover::before {
  opacity: 1.6;
}

.card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.card.featured {
  padding: 2rem;
  gap: 0.9rem;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: var(--accent);
  background-color: var(--tint);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
}

.icon svg {
  width: 26px;
  height: 26px;
}

.featured .icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
}

.featured .icon svg {
  width: 32px;
  height: 32px;
}

.badge {
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 18%, transparent);
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-strong);
}

.featured .card-title {
  font-size: clamp(1.35rem, 2.2vw, 1.7rem);
}

.card-summary {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.featured .card-summary {
  font-size: 1.05rem;
}

.highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin: 0.25rem 0;
}

.highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text);
}

.highlights svg {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  fill: none;
  stroke: var(--accent);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.card-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
}

.tags li {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.78rem;
  color: var(--color-text-strong);
  background-color: var(--color-chip);
}

.arrow {
  flex-shrink: 0;
  font-size: 1.3rem;
  color: var(--accent);
  transition: transform 0.2s ease;
}

.card:hover .arrow {
  transform: translateX(4px);
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .card::before,
  .arrow {
    animation: none;
    transition: none;
  }
}

@media (max-width: 680px) {
  .card,
  .card.featured {
    padding: 1.4rem;
  }
}
</style>
