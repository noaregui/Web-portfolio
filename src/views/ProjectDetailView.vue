<template>
  <article class="project" :style="{ '--accent': project.accent }">
    <!-- Header: colored block with the project's icon as a watermark -->
    <header class="header">
      <RouterLink :to="{ name: 'projects' }" class="back">
        <span aria-hidden="true">←</span> {{ t('project.back') }}
      </RouterLink>
      <div class="hero">
        <ProjectIcon :name="project.icon" class="watermark" />
        <div class="header-top">
          <span class="icon"><ProjectIcon :name="project.icon" /></span>
          <span v-if="project.ai" class="badge">{{ t('projects.aiBadge') }}</span>
        </div>
        <h1 class="title">{{ project.title }}</h1>
        <p class="lead">{{ project.card.summary }}</p>
        <p v-if="job" class="meta">
          <strong>{{ job.company }}</strong>
          <span aria-hidden="true">·</span>
          <span>{{ job.role }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ job.period }}</span>
        </p>
      </div>
    </header>

    <!-- How it works: step-by-step diagram -->
    <section v-if="flow.length" class="flow">
      <h2 class="flow-title">{{ t('project.howItWorks') }}</h2>
      <ol class="steps" :style="{ '--steps': flow.length }">
        <li v-for="(step, i) in flow" :key="i" class="step">
          <span class="step-icon"><ProjectIcon :name="step.icon" /></span>
          <span class="step-number">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-text">{{ step.text }}</p>
        </li>
      </ol>
    </section>

    <!-- Body: content + sidebar -->
    <div class="body">
      <div class="content">
        <section v-for="section in project.sections" :key="section.heading" class="section">
          <h2>{{ section.heading }}</h2>
          <template v-for="(item, index) in section.content" :key="index">
            <ul v-if="Array.isArray(item)" class="points">
              <li v-for="point in item" :key="point"><HighlightedText :text="point" /></li>
            </ul>
            <p v-else><HighlightedText :text="item" /></p>
          </template>
        </section>
      </div>

      <aside class="sidebar">
        <div v-if="project.card.highlights" class="side-block">
          <h2 class="side-title">{{ t('project.highlights') }}</h2>
          <ul class="checks">
            <li v-for="item in project.card.highlights" :key="item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="side-block">
          <h2 class="side-title">{{ t('project.technologies') }}</h2>
          <ul class="tags">
            <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Previous / next project -->
    <nav class="pager" :aria-label="t('nav.projects')">
      <RouterLink
        :to="projectRoute(previous)"
        class="pager-link"
        :style="{ '--accent': previous.accent }"
      >
        <span class="pager-label"
          ><span aria-hidden="true">←</span> {{ t('project.prevProject') }}</span
        >
        <span class="pager-name">
          <span class="pager-icon"><ProjectIcon :name="previous.icon" /></span>
          {{ previous.card.name }}
        </span>
      </RouterLink>
      <RouterLink
        :to="projectRoute(next)"
        class="pager-link pager-next"
        :style="{ '--accent': next.accent }"
      >
        <span class="pager-label"
          >{{ t('project.nextProject') }} <span aria-hidden="true">→</span></span
        >
        <span class="pager-name">
          {{ next.card.name }}
          <span class="pager-icon"><ProjectIcon :name="next.icon" /></span>
        </span>
      </RouterLink>
    </nav>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { findJobForProject, localizeEntry } from '@/data/experience'
import { getProject, localizeProject, projects } from '@/data/projects'
import HighlightedText from '@/components/HighlightedText.vue'
import ProjectIcon from '@/components/ProjectIcon.vue'

const { t, locale } = useI18n()
const route = useRoute()

// The router guard guarantees the slug exists before this view renders.
const project = computed(() => localizeProject(getProject(route.params.slug), locale.value))

// Company and dates come from the About page's experience data
const job = computed(() => {
  const entry = findJobForProject(project.value.slug)
  return entry ? localizeEntry(entry, locale.value) : null
})

// Diagram steps: icons are shared, titles/texts come from the active language
const flow = computed(() =>
  (project.value.flow ?? []).map((step, i) => ({ ...step, icon: project.value.flowIcons[i] })),
)

// Previous / next in the Projects page order, wrapping around
const index = computed(() => projects.findIndex((p) => p.slug === project.value.slug))
const neighbour = (offset) =>
  localizeProject(
    projects[(index.value + offset + projects.length) % projects.length],
    locale.value,
  )
const previous = computed(() => neighbour(-1))
const next = computed(() => neighbour(1))

const projectRoute = (p) => ({ name: 'project', params: { slug: p.slug } })
</script>

<style scoped>
.project {
  --tint: color-mix(in srgb, var(--accent) 14%, transparent);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem 4rem;
  color: var(--color-text);
}

/* ===== Header ===== */
.header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.back {
  align-self: flex-start;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.back:hover {
  color: var(--accent);
}

.hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2.75rem;
  border-radius: 24px;
  background:
    radial-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1.5px) 0 0 /
      22px 22px,
    radial-gradient(
      circle at 90% 10%,
      color-mix(in srgb, var(--accent) 30%, transparent),
      transparent 60%
    ),
    linear-gradient(135deg, var(--color-card-gradient-start), var(--color-card-gradient-end));
  outline: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  outline-offset: -1px;
  box-shadow: var(--shadow-card);
}

.watermark {
  position: absolute;
  right: -30px;
  bottom: -50px;
  width: 300px;
  height: 300px;
  color: var(--accent);
  opacity: 0.1;
  transform: rotate(-12deg);
  z-index: -1;
  pointer-events: none;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  color: var(--accent);
  background-color: var(--tint);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
}

.icon svg {
  width: 34px;
  height: 34px;
}

.badge {
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 18%, transparent);
}

.title {
  max-width: 22ch;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.3px;
  color: var(--color-text-strong);
}

.lead {
  max-width: 60ch;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: var(--color-text);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.meta strong {
  font-weight: 700;
  color: var(--color-text-strong);
}

/* ===== How it works ===== */
.flow {
  margin-bottom: 3.5rem;
}

.flow-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text-strong);
  margin-bottom: 1.5rem;
}

.flow-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  margin-top: 0.5rem;
  border-radius: 2px;
  background-color: var(--accent);
}

.steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(var(--steps), minmax(0, 1fr));
  gap: 1rem;
  counter-reset: step;
}

.step {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.25rem 1.1rem;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  box-shadow: var(--shadow-card);
}

/* Arrow to the next step */
.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 2.6rem;
  right: -0.85rem;
  width: 0.7rem;
  height: 0.7rem;
  border-top: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
  transform: rotate(45deg);
  z-index: 1;
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 0.4rem;
  border-radius: 12px;
  color: var(--accent);
  background-color: var(--tint);
}

.step-icon svg {
  width: 24px;
  height: 24px;
}

.step-number {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--accent);
}

.step-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-strong);
}

.step-text {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

/* ===== Body ===== */
.body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 3rem;
  align-items: start;
}

.section + .section {
  margin-top: 2.75rem;
}

.section h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text-strong);
  margin-bottom: 1.1rem;
}

.section h2::after {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  margin-top: 0.5rem;
  border-radius: 2px;
  background-color: var(--accent);
}

.section p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 1rem;
}

/* Highlighted words: marker effect in the project's color (continuous, unlike an underline) */
.section :deep(.highlight) {
  font-size: inherit;
  font-weight: 700;
  color: var(--color-text-strong);
  text-decoration: none;
  padding: 0 0.15em;
  border-radius: 3px;
  background-image: linear-gradient(
    transparent 55%,
    color-mix(in srgb, var(--accent) 35%, transparent) 55%
  );
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 0.5rem 0 1.5rem;
}

.points li {
  position: relative;
  padding-left: 1.6rem;
  line-height: 1.6;
  color: var(--color-text);
}

/* Small marker in the project's color instead of a bullet */
.points li::before {
  content: '';
  position: absolute;
  left: 0.2rem;
  top: 0.55em;
  width: 9px;
  height: 9px;
  border-radius: 3px;
  background-color: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 18%, transparent);
}

/* ===== Sidebar ===== */
.sidebar {
  position: sticky;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.side-block {
  padding: 1.25rem 1.4rem;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
}

.side-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.checks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.checks li {
  display: flex;
  gap: 0.55rem;
  font-size: 0.93rem;
  line-height: 1.5;
}

.checks svg {
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

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tags li {
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.82rem;
  color: var(--color-text-strong);
  background-color: var(--color-chip);
}

/* ===== Pager ===== */
.pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-subtle);
}

.pager-link {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.4rem;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  transition:
    transform 0.25s ease,
    outline-color 0.25s ease;
}

.pager-link:hover {
  transform: translateY(-3px);
  outline: 1px solid color-mix(in srgb, var(--accent) 65%, transparent);
}

.pager-next {
  align-items: flex-end;
  text-align: right;
}

.pager-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.pager-name {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-text-strong);
}

.pager-icon {
  display: inline-flex;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 9px;
  color: var(--accent);
  background-color: color-mix(in srgb, var(--accent) 14%, transparent);
}

.pager-icon svg {
  width: 100%;
  height: 100%;
}

/* ===== Responsive ===== */
@media (max-width: 960px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }

  .step {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
    column-gap: 1rem;
    row-gap: 0.15rem;
    align-items: start;
  }

  .step-icon {
    grid-row: 1 / span 3;
    margin-bottom: 0;
  }

  .step:not(:last-child)::after {
    top: auto;
    bottom: -0.75rem;
    right: auto;
    left: 2.2rem;
    transform: rotate(135deg);
  }

  .body {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .sidebar {
    position: static;
  }
}

@media (max-width: 600px) {
  .project {
    padding: 1.5rem 1rem 3rem;
  }

  .hero {
    padding: 1.75rem 1.4rem;
  }

  .watermark {
    width: 200px;
    height: 200px;
  }

  /* Company, role and dates on separate lines instead of a wrapped "a · b · c" */
  .meta {
    flex-direction: column;
    gap: 0.1rem;
  }

  .meta span[aria-hidden='true'] {
    display: none;
  }

  /* Long single words (e.g. Basque titles) must fit small phones */
  .title {
    font-size: clamp(1.6rem, 7vw, 2rem);
    overflow-wrap: break-word;
  }

  .section p {
    font-size: 1rem;
  }

  .pager {
    grid-template-columns: 1fr;
  }

  .pager-next {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
