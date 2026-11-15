<template>
  <section class="project-landing">
    <header class="hero">
      <h1 class="hero-title">{{ project.title }}</h1>
      <button @click="scrollToContent">{{ t('project.viewDetails') }}</button>
    </header>

    <ProjectCarousel :images="project.images" :alt="project.title" />

    <section class="project-description" ref="contentRef">
      <div v-for="section in project.sections" :key="section.heading" class="description-block">
        <div class="text">
          <h2>{{ section.heading }}</h2>
          <template v-for="(item, index) in section.content" :key="index">
            <ul v-if="Array.isArray(item)" class="feature-list">
              <li v-for="point in item" :key="point"><HighlightedText :text="point" /></li>
            </ul>
            <p v-else><HighlightedText :text="item" /></p>
          </template>
        </div>
      </div>

      <div class="description-block tech-section">
        <h2>{{ t('project.technologies') }}</h2>
        <div class="tech-cards">
          <span class="tech-card" v-for="tech in project.technologies" :key="tech">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { getProject, localizeProject } from '@/data/projects'
import HighlightedText from '@/components/HighlightedText.vue'
import ProjectCarousel from '@/components/ProjectCarousel.vue'

const { t, locale } = useI18n()
const route = useRoute()
// The router guard guarantees the slug exists before this view renders.
const project = computed(() => localizeProject(getProject(route.params.slug), locale.value))

const contentRef = ref(null)
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.project-landing {
  font-family: var(--font-display);
  min-height: 100vh;
  color: var(--color-text-strong);
  overflow-x: hidden;
  padding-bottom: 4rem;
  background: var(--color-bg);
}

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 0.5px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.hero button {
  background: var(--color-accent);
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.hero button:hover {
  background: var(--color-accent-hover);
}

/* ===== Project Description ===== */
.project-description {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.description-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.description-block h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-text-strong);
}

.description-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-strong);
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 1rem;
}

/* ===== Feature list ===== */
.feature-list {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 1.2rem;
  list-style-type: disc;
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.6;
}

.feature-list li {
  margin-bottom: 0.5rem;
}

/* ===== Tech Cards ===== */
.tech-section {
  text-align: center;
}

.tech-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.tech-card {
  background: var(--color-chip);
  color: var(--color-text-strong);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}

.tech-card:hover {
  background: var(--color-accent-hover);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 5px 15px color-mix(in srgb, var(--color-accent) 50%, transparent);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .project-description {
    width: 90%;
    padding: 2rem 1rem;
  }
}

@media (max-width: 768px) {
  .description-block h2 {
    font-size: 1.5rem;
  }

  .description-block p {
    font-size: 0.95rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 7vw, 4rem);
  }

  .project-description {
    width: 100%;
    padding: 1rem;
  }
}
</style>
