<template>
  <section class="projects">
    <div class="projects-hero">
      <h1 class="projects-title">
        <span class="title-line">{{ t('projects.title') }}</span>
      </h1>
      <p class="projects-subtitle">{{ t('projects.subtitle') }}</p>
    </div>

    <!-- Bento grid: featured projects take more space; each card has its own accent color -->
    <div class="bento">
      <ProjectCard
        v-for="(project, index) in localized"
        :key="project.slug"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'
import { localizeProject, projects } from '@/data/projects'

const { t, locale } = useI18n()

// Order comes from src/data/projects/index.js
const localized = computed(() => projects.map((project) => localizeProject(project, locale.value)))
</script>

<style scoped>
.projects {
  padding: 3rem 2rem 4rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* ===== Hero ===== */
.projects-hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.projects-title {
  margin: 0;
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

.projects-subtitle {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  color: var(--color-text-subtle);
}

/* ===== Bento grid ===== */
.bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25rem;
}

/* Card sizes (the cards themselves are ProjectCard components) */
.bento .card {
  grid-column: span 2;
}

.bento .card.featured {
  grid-column: span 3;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .bento .card,
  .bento .card.featured {
    grid-column: span 3;
  }
}

@media (max-width: 680px) {
  .projects {
    padding: 2rem 1rem 3rem;
  }

  .projects-hero {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .bento .card,
  .bento .card.featured {
    grid-column: 1 / -1;
  }
}
</style>
