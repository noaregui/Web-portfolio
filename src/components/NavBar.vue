<template>
  <header class="navbar" :class="{ open: isMenuOpen }">
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
        <RouterLink
          v-for="link in LINKS"
          :key="link.name"
          :to="{ name: link.name }"
          class="link"
          :class="{ active: isActive(link) }"
          :aria-current="isActive(link) ? 'page' : undefined"
        >
          {{ t(link.label) }}
        </RouterLink>
      </nav>

      <div class="actions">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const { t } = useI18n()
const route = useRoute()

// `match` lists the route names that highlight each link (project pages → Projects)
const LINKS = [
  { name: 'home', label: 'nav.home', match: ['home'] },
  { name: 'about', label: 'nav.about', match: ['about'] },
  { name: 'projects', label: 'nav.projects', match: ['projects', 'project'] },
  { name: 'contact', label: 'nav.contact', match: ['contact'] },
]

function isActive(link) {
  return link.match.includes(route.name)
}

const isMenuOpen = ref(false)

// Close the mobile menu after navigating
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<style scoped>
/*
 * No background of its own: like the footer, the navbar sits on the page
 * background and lines up with the content (.home: max 1200px minus 2rem
 * side padding). A fading line underneath separates it from the page.
 */
.navbar {
  position: relative;
  z-index: 10;
  width: min(100% - 4rem, 1200px - 4rem);
  margin: 0 auto;
}

.navbar::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
}

.navbar-bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-height: 72px;
}

/* Links */
.menu {
  display: flex;
  align-items: center;
  gap: 2rem;
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
@media (max-width: 768px) {
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
    max-height: 320px;
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

@media (max-width: 600px) {
  .navbar {
    width: 100%;
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
