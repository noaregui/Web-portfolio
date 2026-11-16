<!--
  Day/night switch adapted from Uiverse.io by satyamchaudharydev
  https://uiverse.io/satyamchaudharydev/shy-earwig-18
  Changes: wired to useTheme, accessible switch semantics, focus ring,
  reduced-motion support and a track outline in light mode.
-->
<template>
  <label class="switch" :title="isDark ? t('theme.toLight') : t('theme.toDark')">
    <input
      type="checkbox"
      role="switch"
      :aria-label="t('theme.label')"
      :checked="isDark"
      @change="toggleTheme"
    />
    <span class="slider" aria-hidden="true"></span>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { theme, toggleTheme } = useTheme()
const isDark = computed(() => theme.value === 'dark')
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  /* size of the sliding icon (sun and moon) */
  --size-of-icon: 1.4em;
  /* inline padding of the switch */
  --slider-offset: 0.3em;
  display: block;
  position: relative;
  flex-shrink: 0;
  font-size: 16px;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
}

/* Hide the native checkbox but keep it focusable */
.switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Track */
.slider {
  position: absolute;
  inset: 0;
  cursor: pointer;
  background-color: var(--color-toggle-track);
  border-radius: 30px;
  box-shadow: inset 0 0 0 1px var(--color-border);
  transition: 0.4s;
}

/* Sun */
.slider::before {
  position: absolute;
  content: '';
  height: var(--size-of-icon);
  width: var(--size-of-icon);
  border-radius: 20px;
  left: var(--slider-offset);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #303136;
  box-shadow: none;
}

/* Moon */
input:checked + .slider::before {
  left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
  background: #303136;
  /* the second inset sets the angle and direction of the moon */
  box-shadow:
    inset -3px -2px 5px -2px #8983f7,
    inset -10px -4px 0 0 #a3dafb;
}

input:focus-visible + .slider {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .slider,
  .slider::before {
    transition: none;
  }
}
</style>
