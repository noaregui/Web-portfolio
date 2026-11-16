<template>
  <section class="cta">
    <!-- Rotating waves, adapted from the "e-card" by MikeAndrewDesigner on Uiverse.io -->
    <div class="waves" aria-hidden="true">
      <span class="wave"></span>
      <span class="wave"></span>
      <span class="wave"></span>
    </div>
    <div class="cta-text">
      <h2 class="cta-title">{{ t('cta.title') }}</h2>
      <p class="cta-subtitle">{{ t('cta.subtitle') }}</p>
    </div>
    <RouterLink :to="{ name: 'contact' }" class="cta-btn">
      {{ t('cta.button') }} <span aria-hidden="true">→</span>
    </RouterLink>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 15rem;
  margin-bottom: 3rem;
  padding: 3rem;
  border-radius: 28px;
  color: #ffffff;
  background: linear-gradient(120deg, #2e1065, #4c1d95);
  box-shadow: 0 20px 50px color-mix(in srgb, #7c3aed 30%, transparent);
}

/* ===== Waves =====
   Big rounded squares rotating around a centre below the panel: only their top
   edge shows, and as they turn it rises and falls like a wave. */
.waves {
  position: absolute;
  z-index: -1;
  inset: 0;
  transition: transform 0.6s ease;
}

.cta:hover .waves {
  transform: translateY(-1.5rem);
}

.wave {
  position: absolute;
  left: 50%;
  width: 3000px;
  height: 3000px;
  margin-left: -1500px;
  border-radius: 40%;
  opacity: 0.55;
  background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  animation: wave 40s linear infinite;
  will-change: transform;
}

.wave:nth-child(1) {
  top: 72%;
  opacity: 0.35;
}

.wave:nth-child(2) {
  top: 84%;
  animation-duration: 50s;
  animation-direction: reverse;
}

.wave:nth-child(3) {
  top: 94%;
  animation-duration: 32s;
}

@keyframes wave {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none;
  }

  .waves {
    transition: none;
  }
}

/* ===== Content ===== */
.cta-text {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 34rem;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  line-height: 1.2;
}

.cta-subtitle {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

.cta-btn {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 1.6rem;
  border-radius: 12px;
  font-weight: 600;
  color: #5b21b6;
  background-color: #ffffff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.cta-btn span {
  display: inline-block;
  transition: transform 0.2s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
}

.cta-btn:hover span {
  transform: translateX(4px);
}

.cta-btn:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

/* ===== Responsive ===== */
@media (max-width: 760px) {
  .cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 2.25rem 1.6rem 5rem;
  }

  .wave:nth-child(1) {
    top: 78%;
  }

  .wave:nth-child(2) {
    top: 87%;
  }

  .wave:nth-child(3) {
    top: 95%;
  }
}
</style>
