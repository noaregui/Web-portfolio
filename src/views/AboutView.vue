<template>
  <section class="about">
    <!-- Intro -->
    <header class="intro">
      <div class="intro-text">
        <p class="eyebrow">{{ t('nav.about') }}</p>
        <h1 class="intro-title"><HighlightedText :text="t('about.title')" /></h1>
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

      <!-- Snapshot of the skill areas (decorative shortcut to the section below) -->
      <ul class="intro-areas">
        <li
          v-for="(group, index) in skills"
          :key="group.id"
          :style="{ '--accent': group.accent, '--i': index }"
        >
          <a :href="`#skill-${group.id}`" class="area" @click.prevent="goToSkill(group.id)">
            <span class="area-icon"><ProjectIcon :name="group.icon" /></span>
            <span class="area-title">{{ t(`about.skills.${group.id}.title`) }}</span>
          </a>
        </li>
      </ul>
    </header>

    <!-- What I work with -->
    <section class="block">
      <h2 class="block-title">{{ t('about.skillsTitle') }}</h2>
      <div class="skills">
        <article
          v-for="group in skills"
          :id="`skill-${group.id}`"
          :key="group.id"
          class="skill-card"
          :class="{ flash: flashed === group.id }"
          :style="{ '--accent': group.accent }"
          @animationend="flashed = null"
        >
          <div class="skill-head">
            <span class="skill-icon"><ProjectIcon :name="group.icon" /></span>
            <h3>{{ t(`about.skills.${group.id}.title`) }}</h3>
          </div>
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
          <article class="job">
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
          </article>
        </li>
      </ol>
    </section>

    <!-- Languages -->
    <section class="block">
      <h2 class="block-title">{{ t('about.languagesTitle') }}</h2>
      <ul class="languages">
        <li v-for="language in LANGUAGES" :key="language.id" class="language-card">
          <span class="language-code" aria-hidden="true">{{ language.code }}</span>
          <div class="language-info">
            <span class="language-name">{{ t(`about.languages.${language.id}.name`) }}</span>
            <span class="language-level">{{ t(`about.languages.${language.id}.level`) }}</span>
            <span class="meter" aria-hidden="true">
              <span
                v-for="step in LEVEL_STEPS"
                :key="step"
                :class="{ filled: step <= language.level }"
              ></span>
            </span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HighlightedText from '@/components/HighlightedText.vue'
import ProjectIcon from '@/components/ProjectIcon.vue'
import { cvUrl } from '@/data/cv'
import { experience, localizeEntry } from '@/data/experience'
import { getProject, localizeProject } from '@/data/projects'
import { skills } from '@/data/skills'

const { t, tm, rt, locale } = useI18n()

// `id` = key under `about.languages` in src/locales/*.json, in display order.
// `level` (1-5) only drives the visual meter; the translated level is the text.
const LANGUAGES = [
  { id: 'spanish', code: 'ES', level: 5 },
  { id: 'basque', code: 'EU', level: 5 },
  { id: 'english', code: 'EN', level: 3 },
  { id: 'catalan', code: 'CA', level: 2 },
]
const LEVEL_STEPS = [1, 2, 3, 4, 5]

/*
 * Intro tiles → skill card. Instead of a plain anchor jump (which pins the card
 * to the top, or leaves it low when there's little page below), center it in
 * the viewport and briefly highlight it so it's clear where you landed.
 */
const flashed = ref(null)

async function goToSkill(id) {
  const card = document.getElementById(`skill-${id}`)
  if (!card) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
  // Reset first so clicking the same tile twice replays the highlight
  flashed.value = null
  await nextTick()
  void card.offsetWidth // force a reflow so the animation restarts
  flashed.value = id
}

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
/* Same width and padding as .home so every page lines up with navbar/footer */
.about {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

/* ===== Intro (card in the same style as the Home hero) ===== */
.intro {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  align-items: center;
  gap: 3rem;
  padding: 3.5rem;
  border-radius: 28px;
  background:
    radial-gradient(color-mix(in srgb, var(--color-accent) 22%, transparent) 1px, transparent 1.5px)
      0 0 / 22px 22px,
    radial-gradient(
      circle at 90% 20%,
      color-mix(in srgb, var(--color-accent) 30%, transparent),
      transparent 55%
    ),
    radial-gradient(
      circle at 5% 100%,
      color-mix(in srgb, #0ea5e9 14%, transparent),
      transparent 50%
    ),
    linear-gradient(135deg, var(--color-card-gradient-start), var(--color-card-gradient-end));
  outline: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
  outline-offset: -1px;
  box-shadow: var(--shadow-card);
}

.intro-text {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.intro-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-text-strong);
}

/* Small label above the title */
.eyebrow {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.eyebrow::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent), #0ea5e9);
}

/* **word** in the title: brand purple instead of the usual underline */
.intro-title :deep(.highlight) {
  font-size: inherit;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-accent-soft);
}

.intro-paragraph {
  max-width: 62ch;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-muted);
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
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  color: var(--color-on-accent);
  background-color: var(--color-button);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--color-accent) 30%, transparent);
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

/* Skill areas snapshot: 2×2 tiles, each in its area color */
.intro-areas {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.area {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  padding: 1.2rem;
  border-radius: 18px;
  background: color-mix(in srgb, var(--accent) 10%, var(--color-card-gradient-start));
  outline: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  outline-offset: -1px;
  box-shadow: var(--shadow-card);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  animation: tile-in 0.5s ease both;
  animation-delay: calc(var(--i, 0) * 80ms);
}

.area:hover {
  transform: translateY(-4px);
  box-shadow:
    var(--shadow-card-hover),
    0 0 0 4px color-mix(in srgb, var(--accent) 14%, transparent);
}

.area:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.area-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-strong);
}

@keyframes tile-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

/* Icon badge shared by the tiles and the skill cards */
.area-icon,
.skill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  color: var(--accent);
  background-color: color-mix(in srgb, var(--accent) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
}

.area-icon :deep(svg),
.skill-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

/* ===== Blocks ===== */
.block-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  font-weight: 700;
  color: var(--color-text-strong);
  margin-bottom: 1.5rem;
}

.block-title::after {
  content: '';
  display: block;
  width: 44px;
  height: 4px;
  margin-top: 0.5rem;
  border-radius: 2px;
  background: var(--title-bar);
}

/* ===== Skills ===== */
.skills {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.skill-card {
  scroll-margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.6rem;
  border-radius: 18px;
  /* Neutral card: only the icon carries the area color */
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
}

/* Highlight after jumping here from an intro tile (waits for the scroll) */
.skill-card.flash {
  animation: card-flash 1.8s ease 0.35s;
}

@keyframes card-flash {
  0%,
  100% {
    box-shadow: var(--shadow-card);
  }
  25%,
  55% {
    box-shadow:
      var(--shadow-card-hover),
      0 0 0 4px color-mix(in srgb, var(--accent) 45%, transparent),
      0 0 32px color-mix(in srgb, var(--accent) 35%, transparent);
  }
}

.skill-head {
  display: flex;
  align-items: center;
  gap: 0.9rem;
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
  margin-top: auto;
  padding-top: 0.25rem;
}

.chips li {
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  color: var(--color-text-strong);
  background-color: var(--color-chip);
}

/* ===== Timeline ===== */
.timeline {
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-left: 2.25rem;
}

/* Vertical line that fades out at the end */
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0.5rem;
  bottom: 0;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(var(--color-accent), transparent);
}

.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: calc(-2.25rem + 1px);
  top: 1.75rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow:
    0 0 0 4px var(--color-bg),
    0 0 0 6px color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.job {
  padding: 1.6rem 1.75rem;
  border-radius: 18px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
}

.period {
  display: inline-block;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
}

.role {
  margin-top: 0.6rem;
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
  max-width: 75ch;
  line-height: 1.7;
  color: var(--color-text);
}

.job-projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.job-projects-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

/* Neutral pills; the brand color only shows on hover */
.project-link {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--color-text-strong);
  border: 1px solid var(--color-border);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.project-link:hover {
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
  transform: translateY(-1px);
}

.project-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* ===== Languages ===== */
.languages {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.language-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.25rem;
  border-radius: 18px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
}

.language-card {
  --accent: var(--color-accent);
}

.language-code {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--accent) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
}

.language-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.language-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text-strong);
}

.language-level {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.meter {
  display: flex;
  gap: 4px;
  margin-top: 0.35rem;
}

.meter span {
  width: 16px;
  height: 5px;
  border-radius: 3px;
  background-color: color-mix(in srgb, var(--accent) 18%, var(--color-chip));
}

.meter span.filled {
  background-color: var(--accent);
}

/* ===== Responsive ===== */
@media (max-width: 1000px) {
  .languages {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .intro {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.75rem;
  }

  .skills {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 1rem 0 0;
    gap: 3.5rem;
  }

  .intro {
    padding: 2rem 1.4rem;
  }

  .timeline {
    padding-left: 1.75rem;
  }

  .timeline-item::before {
    left: calc(-1.75rem + 1px);
  }

  .job {
    padding: 1.3rem 1.25rem;
  }

  .languages {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .area {
    animation: none;
    transition: none;
  }
}
</style>
