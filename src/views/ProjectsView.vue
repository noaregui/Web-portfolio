<template>
  <section class="projects">
    <div class="projects-hero">
      <h1 class="projects-title">
        <span class="title-line">{{ t('projects.title') }}</span>
      </h1>
      <p class="projects-subtitle">{{ t('projects.subtitle') }}</p>
    </div>

    <div class="columns">
      <div class="column" v-for="(column, columnIndex) in columns" :key="columnIndex">
        <RouterLink
          v-for="project in column"
          :key="project.slug"
          :to="{ name: 'project', params: { slug: project.slug } }"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${project.cardImage})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">{{ project.card.name }}</h3>
            <p class="project-tech">{{ project.card.tagline }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { localizeProject, projects } from '@/data/projects'

const { t, locale } = useI18n()

const COLUMN_COUNT = 3

// Split projects into consecutive groups, one per column, keeping their order in projects/index.js.
const columns = computed(() => {
  const localized = projects.map((project) => localizeProject(project, locale.value))
  const perColumn = Math.ceil(localized.length / COLUMN_COUNT)
  return Array.from({ length: COLUMN_COUNT }, (_, index) =>
    localized.slice(index * perColumn, (index + 1) * perColumn),
  ).filter((column) => column.length)
})
</script>

<style scoped>
.projects {
  padding: 3rem 2rem 4rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.projects-hero {
  text-align: left;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.projects-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.5rem, 4vw, 3rem);
  letter-spacing: 0.5px;
  color: var(--color-text-strong);
  line-height: 1.2;
  margin: 0;
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
  width: 100%; /* ocupa todo el ancho del contenedor de hero */
  max-width: 100%; /* igual que el h1 */
  margin: 0;
}

/* Resto del estilo de los proyectos (tarjetas) */
.columns {
  display: flex;
  gap: 2rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  position: relative;
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-on-accent);
  overflow: hidden;
  min-height: 300px;
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-project-card-hover);
}

.project-card-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.project-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0) 0%);
  transition: background 0.3s ease;
  z-index: 1;
  border-radius: 12px;
}

.project-card:hover .overlay {
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.85) 100%);
}

.project-content {
  position: relative;
  z-index: 2;
  text-align: left;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  padding: 1rem;
}

.project-card:hover .project-content {
  opacity: 1;
  transform: translateY(0);
}

.project-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.project-tech {
  font-size: 1rem;
  opacity: 0.85;
}

.extra-text {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.3rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .projects-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }
  .project-card {
    min-height: 250px;
  }
}

@media (max-width: 768px) {
  .projects-hero {
    text-align: center;
    align-items: center;
  }
  .title-line {
    text-align: center;
  }
  .projects-subtitle {
    text-align: center;
  }
  .columns {
    flex-direction: column;
  }
  .project-card {
    min-height: 220px;
  }
}
</style>
