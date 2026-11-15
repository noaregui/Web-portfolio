<template>
  <div class="language-switcher" role="group" :aria-label="t('language.label')">
    <template v-for="(item, index) in LOCALES" :key="item.code">
      <span v-if="index > 0" class="separator" aria-hidden="true">·</span>
      <button
        type="button"
        class="language"
        :class="{ active: item.code === locale }"
        :lang="item.code"
        :aria-label="item.name"
        :aria-pressed="item.code === locale"
        @click="setLocale(item.code)"
      >
        {{ item.label }}
      </button>
    </template>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { LOCALES, setLocale } from '@/i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  font-size: 0.85rem;
}

.separator {
  color: var(--color-text-subtle);
}

.language {
  padding: 4px 6px;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--color-text-muted);
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.language:hover {
  color: var(--color-text-strong);
  background-color: var(--color-surface-hover);
}

.language.active {
  color: var(--color-accent);
}

.language:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}
</style>
