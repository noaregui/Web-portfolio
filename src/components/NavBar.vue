<template>
  <header class="navbar">
    <div class="navbar-content">
      <button
        class="menu-toggle"
        :aria-label="t('nav.menu')"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        ☰
      </button>
      <div class="navbar-actions">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>

    <nav class="menu" :class="{ open: isMenuOpen }">
      <router-link to="/" class="link" @click="isMenuOpen = false">{{ t('nav.home') }}</router-link>
      <router-link to="/about" class="link" @click="isMenuOpen = false">{{
        t('nav.about')
      }}</router-link>
      <router-link to="/projects" class="link" @click="isMenuOpen = false">{{
        t('nav.projects')
      }}</router-link>
      <router-link to="/contact" class="link" @click="isMenuOpen = false">{{
        t('nav.contact')
      }}</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const { t } = useI18n()

const isMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  --navbar-height: 80px;
  /* Keeps the navbar shadow above the page content (it's a flex item of the layout) */
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-navbar);
  transition: all 0.3s ease;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: var(--navbar-height);
}

.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  gap: 0;
  padding: 0 1rem;
}

.menu.open {
  max-height: 500px;
  gap: 0.5rem;
}

.link {
  text-decoration: none;
  color: var(--color-text-strong);
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.link:hover {
  background-color: var(--color-surface-hover);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-text-strong);
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .menu {
    flex-direction: column;
    gap: 0;
  }

  .menu.open {
    gap: 0.5rem;
  }

  .link {
    width: 100%;
    text-align: left;
  }
}

@media (min-width: 769px) {
  .navbar {
    flex-direction: row;
    align-items: center;
    /* Same left offset the links had before the toggle moved to the right */
    padding-left: 2rem;
  }

  .menu {
    flex-direction: row;
    justify-content: flex-start;
    max-height: none;
    overflow: visible;
    gap: 1rem;
    padding: 0 1rem;
  }

  .link {
    padding: 8px 16px;
  }

  .menu-toggle {
    display: none;
  }

  /* Desktop: links on the left, theme toggle on the right */
  .navbar-content {
    order: 2;
    margin-left: auto;
  }
}
</style>
