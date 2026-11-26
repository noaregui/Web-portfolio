<template>
  <div ref="root">
    <h2 class="section-title">{{ t('services.title') }}</h2>
    <p class="section-lead">{{ t('services.lead') }}</p>

    <div class="layout" :class="{ paused: isPaused }">
      <!-- Service list: pick one, or let it rotate on its own -->
      <div class="list-wrap">
        <div
          class="list"
          role="tablist"
          aria-orientation="vertical"
          :aria-label="t('services.title')"
          @keydown="onKeydown"
        >
          <button
            v-for="(service, index) in services"
            :id="`service-tab-${service.id}`"
            :key="service.id"
            ref="tabRefs"
            type="button"
            role="tab"
            class="tab"
            :class="{ active: index === current }"
            :aria-selected="index === current"
            :aria-controls="`service-panel-${service.id}`"
            :tabindex="index === current ? 0 : -1"
            @click="choose(index)"
          >
            <span class="tab-icon"><ProjectIcon :name="service.icon" /></span>
            <span class="tab-label">{{ t(`services.items.${service.id}.short`) }}</span>
            <span class="tab-arrow" aria-hidden="true">→</span>
            <!-- Invisible autoplay timer: when its animation ends, the next service shows -->
            <span
              v-if="autoplay && index === current"
              :key="cycle"
              class="timer"
              aria-hidden="true"
              @animationend="next"
            ></span>
          </button>
        </div>

        <button v-if="autoplay" type="button" class="pause" @click="userPaused = !userPaused">
          <svg v-if="userPaused" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
          </svg>
          {{ userPaused ? t('services.play') : t('services.pause') }}
        </button>
      </div>

      <!--
        Every panel is rendered, stacked in the same grid cell, and only the
        selected one is visible: the stage always takes the tallest panel's
        height, so the card keeps one size while the services change.
      -->
      <div class="stage">
        <article
          v-for="(item, index) in items"
          :id="`service-panel-${item.id}`"
          :key="item.id"
          class="panel"
          :class="{ active: index === current }"
          role="tabpanel"
          data-theme="dark"
          :aria-labelledby="`service-tab-${item.id}`"
          :aria-hidden="index !== current"
          :inert="index !== current"
        >
          <!-- Big faded icon of the service, as a backdrop -->
          <span class="panel-mark" aria-hidden="true"><ProjectIcon :name="item.icon" /></span>
          <h3>{{ t(`services.items.${item.id}.title`) }}</h3>
          <p class="description">{{ t(`services.items.${item.id}.description`) }}</p>

          <ul class="solutions">
            <li v-for="(solution, i) in item.solutions" :key="i">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              {{ solution }}
            </li>
          </ul>

          <div class="panel-foot">
            <!-- Jumps to the contact form with this service already ticked -->
            <RouterLink
              :to="{ name: 'home', query: { topic: item.id }, hash: '#contact' }"
              class="btn"
            >
              {{ t('services.interested') }} <span class="btn-arrow" aria-hidden="true">→</span>
            </RouterLink>

            <p v-if="item.projects.length" class="related">
              <span>{{ t('services.projectsLabel') }}:</span>
              <RouterLink
                v-for="project in item.projects"
                :key="project.slug"
                :to="{ name: 'project', params: { slug: project.slug } }"
                class="project-link"
              >
                {{ project.card.name }}
              </RouterLink>
            </p>
          </div>
        </article>
      </div>
    </div>

    <p class="not-listed">
      {{ t('services.notListed') }}
      <RouterLink :to="{ name: 'home', hash: '#contact' }">
        {{ t('services.notListedLink') }} <span aria-hidden="true">→</span>
      </RouterLink>
    </p>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectIcon from '@/components/ProjectIcon.vue'
import { getProject, localizeProject } from '@/data/projects'
import { services } from '@/data/services'

const { t, tm, rt, locale } = useI18n()

const root = ref(null)
const tabRefs = ref([])
const current = ref(0)

const items = computed(() =>
  services.map((service) => ({
    ...service,
    solutions: tm(`services.items.${service.id}.solutions`).map((item) => rt(item)),
    projects: service.projects
      .map((slug) => getProject(slug))
      .filter(Boolean)
      .map((project) => localizeProject(project, locale.value)),
  })),
)

/*
 * Autoplay. An invisible timer in the current service runs a CSS animation
 * (--autoplay-ms); when it ends, the next service shows. It pauses while the
 * section is off screen or the browser tab is hidden, and with the pause
 * button. Choosing a service stops it for good. With "reduce motion" it never
 * starts.
 */
const autoplay = ref(false)
const userPaused = ref(false)
const inView = ref(false)
const pageVisible = ref(true)
const cycle = ref(0) // remounts the timer so it restarts from zero

const isPaused = computed(() => userPaused.value || !inView.value || !pageVisible.value)

function next() {
  current.value = (current.value + 1) % services.length
  cycle.value++
}

function choose(index) {
  autoplay.value = false
  current.value = index
}

// Keyboard: arrows move between services (standard tablist behaviour)
function onKeydown(event) {
  const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
  if (!(event.key in keys)) return
  event.preventDefault()
  const index = (current.value + keys[event.key] + services.length) % services.length
  choose(index)
  tabRefs.value[index]?.focus()
}

let observer
function onVisibility() {
  pageVisible.value = document.visibilityState === 'visible'
}

onMounted(() => {
  autoplay.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  observer = new IntersectionObserver(([entry]) => (inView.value = entry.isIntersecting), {
    threshold: 0.15,
  })
  observer.observe(root.value)
  document.addEventListener('visibilitychange', onVisibility)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<style scoped>
.layout {
  --autoplay-ms: 6000ms;
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 2fr);
  gap: 1.5rem;
}

/* ===== List ===== */
.list-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tab {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 14px;
  /* Transparent until active, so selecting doesn't shift the layout */
  border: 1.5px solid transparent;
  text-align: left;
  font: inherit;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.tab:hover {
  background-color: color-mix(in srgb, var(--color-surface-hover) 60%, transparent);
}

/* Selected: light card, dark border and a solid offset shadow in the brand color */
.tab.active {
  background-color: var(--color-card-gradient-start);
  border-color: var(--color-text-strong);
  box-shadow: 5px 5px 0 var(--color-accent);
  transform: translate(-2px, -2px);
}

.tab:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.tab-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: var(--color-text-muted);
  background-color: var(--color-chip);
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.tab-icon :deep(svg) {
  width: 21px;
  height: 21px;
}

.tab.active .tab-icon {
  color: var(--color-on-accent);
  background-color: var(--color-button);
}

.tab-arrow {
  margin-left: auto;
  font-size: 1.1rem;
  color: var(--color-accent-soft);
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.tab.active .tab-arrow {
  opacity: 1;
  transform: none;
}

.tab-label {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text-muted);
}

.tab:hover .tab-label {
  color: var(--color-text-strong);
}

.tab.active .tab-label {
  font-weight: 700;
  color: var(--color-text-strong);
}

/*
 * Autoplay timer: an invisible element whose animation lasts --autoplay-ms.
 * Using an animation (not setInterval) makes pausing free: just pause it.
 */
.timer {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  animation: fill var(--autoplay-ms) linear forwards;
}

.paused .timer {
  animation-play-state: paused;
}

@keyframes fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.pause {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font: inherit;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  cursor: pointer;
}

.pause:hover {
  color: var(--color-text-strong);
}

.pause:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.pause svg {
  width: 12px;
  height: 12px;
  fill: currentColor;
}

/* ===== Panel ===== */
.stage {
  display: grid;
}

/* All panels share one cell; only the active one is shown */
.stage > .panel {
  grid-area: 1 / 1;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0s linear 0.25s;
}

.stage > .panel.active {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition:
    opacity 0.25s ease 0.05s,
    transform 0.25s ease 0.05s;
}

/*
 * Dark panel inside the light band (data-theme="dark" brings the dark tokens
 * back): same dot grid + glow as the hero, so it pops against the band.
 */
.panel {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 2.25rem 2.5rem;
  border-radius: 22px;
  color: var(--color-text);
  background:
    radial-gradient(
        color-mix(in srgb, var(--deco-color) var(--deco-dots), transparent) 1px,
        transparent 1.5px
      )
      0 0 / 22px 22px,
    radial-gradient(
      circle at 100% 0%,
      color-mix(in srgb, var(--deco-color) var(--deco-glow), transparent),
      transparent 55%
    ),
    linear-gradient(145deg, var(--color-card-gradient-start), var(--color-card-gradient-end));
  outline: 1px solid color-mix(in srgb, var(--deco-color) var(--deco-outline), transparent);
  outline-offset: -1px;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.28);
}

.panel-mark {
  position: absolute;
  right: -1.5rem;
  bottom: -1.5rem;
  z-index: -1;
  color: var(--color-accent-soft);
  opacity: 0.1;
  pointer-events: none;
}

.panel-mark :deep(svg) {
  width: 220px;
  height: 220px;
  stroke-width: 1.2;
}

.panel h3 {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.4vw, 1.7rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-text-strong);
}

/* What this kind of project is, in one line */
.description {
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--color-text);
}

.solutions {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 2rem;
  margin-top: 0.4rem;
}

.solutions li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.97rem;
  line-height: 1.45;
  color: var(--color-text);
}

.solutions svg {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 0.1rem;
  fill: none;
  stroke: var(--color-accent-soft);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.panel-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.5rem;
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-subtle);
}

.related {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.6rem;
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.project-link {
  font-weight: 600;
  color: var(--color-text-strong);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--color-accent) 50%, transparent);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: text-decoration-color 0.2s ease;
}

.project-link:hover {
  text-decoration-color: var(--color-accent);
}

.project-link:focus-visible,
.not-listed a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Closing line: plain text, set off by a short accent rule above */
.not-listed {
  margin-top: 2rem;
  line-height: 1.7;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-text-strong);
}

.not-listed::before {
  content: '';
  display: block;
  width: 44px;
  height: 3px;
  margin-bottom: 0.85rem;
  border-radius: 2px;
  background: var(--color-accent);
}

/* Link underlined like the project links in the panel */
.not-listed a {
  margin-left: 0.4rem;
  font-weight: 700;
  white-space: nowrap;
  color: var(--color-text-strong);
  text-decoration: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}

.not-listed a span {
  display: inline-block;
  transition: transform 0.2s ease;
}

.not-listed a:hover span {
  transform: translateX(4px);
}

/* ===== Responsive: list on top as a 2-column grid, panel below ===== */
@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .solutions {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .tab {
    padding: 0.55rem 0.6rem;
    gap: 0.6rem;
  }

  .tab-icon {
    width: 34px;
    height: 34px;
  }

  .tab-label {
    font-size: 0.9rem;
  }

  .panel {
    padding: 1.5rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stage > .panel,
  .stage > .panel.active {
    transition: none;
  }
}
</style>
