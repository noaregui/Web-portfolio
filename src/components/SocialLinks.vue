<template>
  <ul class="social">
    <li v-for="link in LINKS" :key="link.name">
      <a
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.name"
        :title="link.name"
        :style="{ '--brand': link.brand }"
      >
        <svg :viewBox="link.viewBox" aria-hidden="true"><path :d="link.path" /></svg>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { socialLinks as LINKS } from '@/data/social'
</script>

<style scoped>
.social {
  display: flex;
  gap: 0.75rem;
  list-style: none;
}

.social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: var(--color-text-strong);
  background-color: var(--color-surface-hover);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.social a:hover {
  color: #ffffff;
  background-color: var(--brand);
  transform: translateY(-2px);
}

.social a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.social svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
