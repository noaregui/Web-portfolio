<template>
  <!-- The stack drawn as isometric layers, from the interface down to the cloud -->
  <ol class="stack">
    <li
      v-for="(group, index) in layers"
      :key="group.id"
      class="layer"
      :style="{ '--accent': group.accent, '--depth': index }"
    >
      <div class="slab-cell" aria-hidden="true">
        <div class="slab-shadow">
          <div class="slab"></div>
        </div>
      </div>
      <div class="layer-body">
        <h3 class="layer-name">{{ t(`about.skills.${group.id}.title`) }}</h3>
        <ul class="layer-items">
          <li v-for="item in group.core" :key="item">{{ item }}</li>
        </ul>
      </div>
    </li>
  </ol>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { skills } from '@/data/skills'

const { t } = useI18n()

// Top to bottom, like a real stack
const ORDER = ['frontend', 'backend', 'ai', 'cloud']
const layers = ORDER.map((id) => skills.find((group) => group.id === id))
</script>

<style scoped>
.stack {
  --slab: 150px;
  --cell: 270px;
  --row: 112px;

  list-style: none;
  padding: 1rem 0;
}

.layer {
  position: relative;
  z-index: calc(10 - var(--depth));
  display: grid;
  grid-template-columns: var(--cell) minmax(0, 1fr);
  align-items: center;
  min-height: var(--row);
}

/* ===== Isometric slab ===== */
.slab-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--row);
}

/* The solid drop-shadow below the flat face reads as the slab's thickness */
.slab-shadow {
  filter: drop-shadow(0 9px 0 color-mix(in srgb, var(--accent) 55%, #000))
    drop-shadow(0 18px 18px color-mix(in srgb, var(--accent) 30%, transparent));
  transition: transform 0.3s ease;
}

.slab {
  width: var(--slab);
  height: var(--slab);
  border-radius: 14px;
  transform: rotateX(60deg) rotateZ(-45deg);
  background:
    repeating-linear-gradient(
      0deg,
      transparent 0 18px,
      color-mix(in srgb, #fff 18%, transparent) 18px 19px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0 18px,
      color-mix(in srgb, #fff 18%, transparent) 18px 19px
    ),
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--accent) 75%, #fff),
      var(--accent)
    );
}

.layer:hover .slab-shadow {
  transform: translateY(-8px);
}

/* ===== Label ===== */
.layer-body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-left: 1.75rem;
}

/* Dashed leader line from the slab to its label */
.layer-body::before {
  content: '';
  position: absolute;
  top: 0.8rem;
  left: -2.75rem;
  width: 3.75rem;
  border-top: 2px dashed color-mix(in srgb, var(--accent) 70%, transparent);
}

.layer-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.4;
  /* Mixed with the text color so it keeps contrast in both themes */
  color: color-mix(in srgb, var(--accent) 75%, var(--color-text-strong));
}

.layer-items {
  list-style: none;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

/* Inline items that wrap like text; the separator stays at the end of a line */
.layer-items li {
  display: inline;
  white-space: nowrap;
}

.layer-items li:not(:last-child)::after {
  content: '/';
  margin: 0 0.9rem;
  color: color-mix(in srgb, var(--accent) 60%, transparent);
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .stack {
    --slab: 64px;
    --cell: 96px;
    --row: 96px;
  }

  .layer {
    padding-block: 0.6rem;
  }

  .layer-items li:not(:last-child)::after {
    margin: 0 0.6rem;
  }

  .slab {
    border-radius: 8px;
  }

  .slab-shadow {
    filter: drop-shadow(0 5px 0 color-mix(in srgb, var(--accent) 55%, #000))
      drop-shadow(0 10px 10px color-mix(in srgb, var(--accent) 30%, transparent));
  }

  .layer-body {
    padding-left: 0.5rem;
  }

  .layer-body::before {
    display: none;
  }
}
</style>
