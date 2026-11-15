<template>
  <section class="about">
    <div class="about-wrapper">
      <!-- Rotating text with slide-up effect -->
      <div class="about-text">
        <transition name="slide-up" mode="out-in">
          <div class="about-section" :key="currentSection">
            <h3 class="about-subtitle">
              <span class="title-white">{{ t(`about.${currentSection}.titleStart`) }}</span>
              <span class="title-purple">{{ ' ' + t(`about.${currentSection}.titleEnd`) }}</span>
            </h3>
            <p><HighlightedText :text="t(`about.${currentSection}.text`)" /></p>
          </div>
        </transition>
      </div>

      <!-- Imagen fija -->
      <div class="about-image">
        <img src="@/assets/Avatar_programming_sin_fondo.jpg" :alt="t('about.avatarAlt')" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import HighlightedText from '@/components/HighlightedText.vue'

const { t } = useI18n()

// Keys under `about` in src/locales/*.json, shown one after another
const SECTIONS = ['background', 'approach', 'outside', 'build']

const currentIndex = ref(0)
const currentSection = computed(() => SECTIONS[currentIndex.value])
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % SECTIONS.length
  }, 10000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 5rem;
}

.about-wrapper {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Texto */
.about-text {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-subtitle {
  font-family: var(--font-display) !important;
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.title-white {
  color: var(--color-text-strong);
}
.title-purple {
  color: var(--color-accent);
}

/* Highlighted words (overrides HighlightedText's default style on this page) */
.about-section p :deep(.highlight) {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-text-strong);
  text-decoration: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
}

p {
  font-size: 1.1rem;
  line-height: 2;
  color: var(--color-text-strong);
}

/* Imagen */
.about-image {
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

/* Transition efecto slide-up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.7s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Responsivo */
@media (max-width: 900px) {
  .about-wrapper {
    flex-direction: column;
  }

  .about-image {
    margin-top: 2rem;
    max-width: 300px;
  }

  .about-subtitle {
    font-size: clamp(2rem, 5vw, 4rem);
  }

  p {
    font-size: 1rem;
  }
}
</style>
