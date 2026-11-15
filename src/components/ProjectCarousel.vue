<template>
  <section class="carousel">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-slide" v-for="(image, index) in images" :key="image">
        <img :src="image" :alt="`${alt} – slide ${index + 1}`" />
      </div>
    </div>

    <template v-if="hasMultipleSlides">
      <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-btn next" @click="nextSlide">&#10095;</button>
      <div class="carousel-dots">
        <span
          v-for="(image, index) in images"
          :key="image"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </template>
  </section>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  alt: { type: String, required: true },
  interval: { type: Number, default: 4000 },
})

const currentSlide = ref(0)
const hasMultipleSlides = computed(() => props.images.length > 1)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.images.length) % props.images.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const stopAutoplay = () => {
  clearInterval(timer)
  timer = null
}

const startAutoplay = () => {
  stopAutoplay()
  if (hasMultipleSlides.value) timer = setInterval(nextSlide, props.interval)
}

// Reset when the same component is reused for a different project.
watch(
  () => props.images,
  () => {
    currentSlide.value = 0
    startAutoplay()
  },
)

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<style scoped>
.carousel {
  width: 95%;
  max-width: 1200px;
  margin: 2rem auto 4rem;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}

.carousel-slide {
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  display: block;
  transition: transform 0.3s;
}

.carousel-slide img:hover {
  transform: scale(1.03);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: color-mix(in srgb, var(--color-accent) 70%, transparent);
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-on-accent);
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  z-index: 10;
}

.carousel-btn:hover {
  background: color-mix(in srgb, var(--color-accent) 90%, transparent);
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 5;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  background: var(--color-indicator);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.carousel-dots span.active {
  background: var(--color-accent);
  transform: scale(1.3);
}

@media (max-width: 1024px) {
  .carousel {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .carousel {
    width: 100%;
  }

  .carousel-slide img {
    height: 220px;
  }
}
</style>
