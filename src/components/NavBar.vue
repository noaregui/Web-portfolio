<template>
  <header
    class="navbar"
    :class="{ open: isMenuOpen, scrolled: isScrolled }"
    :data-theme="isOverLight ? 'light' : undefined"
  >
    <div class="navbar-bar">
      <button
        type="button"
        class="menu-toggle"
        :aria-label="t('nav.menu')"
        :aria-expanded="isMenuOpen"
        aria-controls="main-menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="burger" aria-hidden="true"><span></span></span>
      </button>

      <nav id="main-menu" class="menu">
        <a
          v-for="id in SECTIONS"
          :key="id"
          :href="hrefFor(id)"
          class="link"
          :class="{ active: current === id }"
          :aria-current="current === id ? 'location' : undefined"
          @click.prevent="goTo(id)"
        >
          {{ t(`nav.${id}`) }}
        </a>
      </nav>

      <div class="actions">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { activeSection, scrollToSection, SECTIONS } from '@/composables/useSections'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

/*
 * Links point to the Home sections. On the Home they scroll there; from any
 * other page (projects, a project) they go to the Home at that section.
 */
const current = computed(() => {
  if (route.name === 'home') return activeSection.value
  if (route.name === 'projects' || route.name === 'project') return 'projects'
  return null
})

function hrefFor(id) {
  return router.resolve({ name: 'home', hash: `#${id}` }).href
}

function goTo(id) {
  isMenuOpen.value = false
  if (route.name === 'home') scrollToSection(id)
  else router.push({ name: 'home', hash: `#${id}` })
}

const isMenuOpen = ref(false)

// Once the page scrolls, the sticky bar gets a background to stay readable
const isScrolled = ref(false)

// Over a light band (see HomeView) the bar switches to the light colors too
const isOverLight = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 8
  const probe = 36 // roughly the middle of the bar
  isOverLight.value = [...document.querySelectorAll('.band[data-theme="light"]')].some((band) => {
    const rect = band.getBoundingClientRect()
    return rect.top <= probe && rect.bottom >= probe
  })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// After navigating: close the mobile menu
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
    // The new page may have no bands (or be at another position): re-check
    nextTick(onScroll)
  },
)
</script>

<style scoped>
/*
 * Sticky bar. At the top of the page it has no background of its own (it sits
 * on the page background, like the footer); once you scroll it gets a blurred
 * background so it stays readable over the content. It spans the full width
 * (cancelling .app-layout's 2rem padding) while its content lines up with the
 * page content (.home: max 1200px minus 2rem side padding).
 */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0 -2rem;
  padding: 0 2rem;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.navbar.scrolled,
.navbar.open {
  background-color: color-mix(in srgb, var(--color-bg) 82%, transparent);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: 0 1px 0 var(--color-border-subtle);
}

.navbar-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: min(100%, 1200px - 4rem);
  min-height: 72px;
  margin: 0 auto;
}

/* Fading line under the bar while at the top of the page */
.navbar-bar::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
  transition: opacity 0.3s ease;
}

.scrolled .navbar-bar::after {
  opacity: 0;
}

/* Links */
.menu {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.link {
  position: relative;
  padding: 0.4rem 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  white-space: nowrap;
  transition: color 0.2s ease;
}

/* Accent bar under the current page (grows in on hover too) */
.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: var(--title-bar);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.link:hover {
  color: var(--color-text-strong);
}

.link:hover::after {
  transform: scaleX(0.4);
}

.link.active {
  font-weight: 600;
  color: var(--color-text-strong);
}

.link.active::after {
  transform: scaleX(1);
}

.link:focus-visible,
.menu-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Right side */
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}

/* Burger (mobile only): three lines that turn into an X */
.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: var(--color-text-strong);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-toggle:hover {
  background-color: var(--color-surface-hover);
}

.burger,
.burger::before,
.burger::after,
.burger span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background-color: currentColor;
  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
}

.burger {
  position: relative;
  background: none;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  left: 0;
}

.burger::before {
  top: -6px;
}

.burger::after {
  top: 6px;
}

.open .burger span {
  opacity: 0;
}

.open .burger::before {
  transform: translateY(6px) rotate(45deg);
}

.open .burger::after {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile: links collapse into a list under the bar */
/* Six links need room: collapse them into the burger menu below 1024px */
@media (max-width: 1024px) {
  .navbar-bar {
    flex-wrap: wrap;
    gap: 0 1rem;
    min-height: 64px;
  }

  .menu-toggle {
    display: inline-flex;
    margin-left: -0.5rem;
  }

  .menu {
    order: 3;
    flex-basis: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition:
      max-height 0.3s ease,
      padding 0.3s ease,
      visibility 0.3s;
  }

  .open .menu {
    max-height: 420px;
    padding: 0.25rem 0 1rem;
    visibility: visible;
  }

  .link {
    padding: 0.6rem 0;
  }

  .link::after {
    bottom: 0.3rem;
    width: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .menu,
  .link::after,
  .burger,
  .burger::before,
  .burger::after,
  .burger span {
    transition: none;
  }
}
</style>
