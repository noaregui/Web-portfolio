<template>
  <section class="about">
    <!-- Intro -->
    <header class="intro">
      <div class="intro-text">
        <h1 class="intro-title">
          <i18n-t keypath="about.greeting" scope="global">
            <template #name><span class="accent">Ainhoa</span></template>
          </i18n-t>
        </h1>
        <p v-for="(paragraph, index) in intro" :key="index" class="intro-paragraph">
          <HighlightedText :text="paragraph" />
        </p>
        <a v-if="cv" :href="cv" class="cv-button" download>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14" />
          </svg>
          {{ t('about.downloadCv') }}
        </a>
      </div>
      <div class="intro-image">
        <img src="@/assets/Avatar_programming_sin_fondo.jpg" :alt="t('about.avatarAlt')" />
      </div>
    </header>

    <!-- What I work with -->
    <section class="block">
      <h2 class="block-title">{{ t('about.skillsTitle') }}</h2>
      <div class="skills">
        <article v-for="group in skills" :key="group.id" class="skill-card">
          <h3>{{ t(`about.skills.${group.id}.title`) }}</h3>
          <p>{{ t(`about.skills.${group.id}.text`) }}</p>
          <ul class="chips">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Experience -->
    <section class="block">
      <h2 class="block-title">{{ t('about.experienceTitle') }}</h2>
      <ol class="timeline">
        <li v-for="job in jobs" :key="job.id" class="timeline-item">
          <p class="period">{{ job.period }}</p>
          <h3 class="role">
            {{ job.role }} <span class="company">· {{ job.company }}</span>
          </h3>
          <p class="description">{{ job.description }}</p>
          <div v-if="job.projects.length" class="job-projects">
            <span class="job-projects-label">{{ t('about.projectsLabel') }}:</span>
            <RouterLink
              v-for="project in job.projects"
              :key="project.slug"
              :to="{ name: 'project', params: { slug: project.slug } }"
              class="project-link"
            >
              {{ project.card.name }}
            </RouterLink>
          </div>
        </li>
      </ol>
    </section>

    <!-- Languages -->
    <section class="block">
      <h2 class="block-title">{{ t('about.languagesTitle') }}</h2>
      <ul class="languages">
        <li v-for="language in LANGUAGES" :key="language" class="language-card">
          <span class="language-name">{{ t(`about.languages.${language}.name`) }}</span>
          <span class="language-level">{{ t(`about.languages.${language}.level`) }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HighlightedText from '@/components/HighlightedText.vue'
import { cvUrl } from '@/data/cv'
import { experience, localizeEntry } from '@/data/experience'
import { getProject, localizeProject } from '@/data/projects'
import { skills } from '@/data/skills'

const { t, tm, rt, locale } = useI18n()

// Keys under `about.languages` in src/locales/*.json, in display order
const LANGUAGES = ['spanish', 'basque', 'english', 'catalan']

const intro = computed(() => tm('about.intro').map((paragraph) => rt(paragraph)))
const cv = computed(() => cvUrl(locale.value))

const jobs = computed(() =>
  experience.map((entry) => {
    const job = localizeEntry(entry, locale.value)
    return {
      ...job,
      projects: job.projects.map((slug) => localizeProject(getProject(slug), locale.value)),
    }
  }),
)
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

/* ===== Intro ===== */
.intro {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.intro-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.intro-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.5px;
  color: var(--color-text-strong);
}

.intro-title .accent {
  font-weight: 700;
  color: var(--color-accent);
}

.intro-paragraph {
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--color-text);
}

.intro-paragraph :deep(.highlight) {
  font-size: inherit;
  font-weight: 700;
  color: var(--color-text-strong);
  text-decoration-thickness: 3px;
}

.cv-button {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  color: var(--color-on-accent);
  background-color: var(--color-button);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.cv-button:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-2px);
}

.cv-button svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.intro-image {
  flex: 0 0 360px;
  display: flex;
  justify-content: center;
}

.intro-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

/* ===== Blocks ===== */
.block-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--color-text-strong);
  margin-bottom: 1.5rem;
}

.block-title::after {
  content: '';
  display: block;
  width: 48px;
  height: 4px;
  margin-top: 0.5rem;
  border-radius: 2px;
  background-color: var(--color-accent);
}

/* ===== Skills ===== */
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
}

.skill-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-strong);
}

.skill-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin-top: 0.25rem;
}

.chips li {
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.8rem;
  color: var(--color-text-strong);
  background-color: var(--color-chip);
}

/* ===== Timeline ===== */
.timeline {
  list-style: none;
  border-left: 2px solid var(--color-border);
  margin-left: 0.5rem;
}

.timeline-item {
  position: relative;
  padding: 0 0 2.5rem 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 0.3rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-accent);
  box-shadow: 0 0 0 4px var(--color-bg);
}

.period {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--color-accent-soft);
}

.role {
  margin-top: 0.25rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-strong);
}

.company {
  font-weight: 600;
  color: var(--color-text-muted);
}

.description {
  margin-top: 0.5rem;
  max-width: 70ch;
  line-height: 1.7;
  color: var(--color-text);
}

.job-projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.9rem;
}

.job-projects-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.project-link {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--color-text-strong);
  border: 1px solid var(--color-accent);
  transition: background-color 0.2s ease;
}

.project-link:hover {
  background-color: color-mix(in srgb, var(--color-accent) 20%, transparent);
}

/* ===== Languages ===== */
.languages {
  list-style: none;
  display: grid;
  /* 4 per row on desktop, 2 per row on phones */
  grid-template-columns: repeat(auto-fit, minmax(min(125px, 100%), 1fr));
  gap: 0.75rem;
}

.language-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.1rem 1.25rem;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
}

.language-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text-strong);
}

.language-level {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .intro {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .intro-image {
    flex-basis: auto;
    max-width: 260px;
  }

  .about {
    padding-top: 3rem;
    gap: 3.5rem;
  }
}
</style>
