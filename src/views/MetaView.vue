<template>
  <section class="vapi-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="title-white">Meta – WhatsApp</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel ===== -->
    <section class="carousel" ref="carouselRef">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="Meta project slide" :ref="(el) => (slideImages[index] = el)" />
        </div>
      </div>

      <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-btn next" @click="nextSlide">&#10095;</button>

      <div class="carousel-dots">
        <span
          v-for="(_, index) in carouselImages"
          :key="index"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </section>

    <!-- ===== Project Description ===== -->
    <section class="project-description" ref="contentRef">
      <!-- What is Meta -->
      <div class="description-block alternate">
        <div class="text">
          <h2>What is Meta - Whatsapp?</h2>
          <p>
            Meta WhatsApp Business Cloud API enables the
            <span class="highlight">automation</span> of WhatsApp messages using pre‑approved
            message templates, helping businesses efficiently engage with clients, send information,
            and capture leads without manual intervention. In this project, it was used to
            streamline real estate inquiries, sending automated messages to prospective clients in a
            structured sequence, while ensuring message timing, avoiding duplicates, and providing a
            consistent user experience.
          </p>

          <ul class="feature-list">
            <li>💬 Automated WhatsApp contact with potential clients</li>
            <li>🧠 Guided conversational flows via <span class="highlight">Landbot</span></li>
            <li>📅 Appointment scheduling directly within WhatsApp</li>
          </ul>
        </div>
      </div>

      <!-- ===== Development ===== -->
      <div class="description-block alternate reverse">
        <div class="text">
          <h2>Development</h2>
          <p>
            This solution connected Meta’s WhatsApp Business Cloud API with a
            <span class="highlight">custom internal application</span> and
            <span class="highlight">Landbot conversational flows</span>. Prospective clients
            received the Landbot link automatically, following a defined order of arrival. The
            system implemented logic to:
          </p>

          <ul class="feature-list">
            <li>⏳ Send messages at controlled intervals to avoid duplicates</li>
            <li>💬 Provide a response window for each lead to interact with the bot</li>
            <li>
              🌐 Integrate <span class="highlight">webhooks</span> and
              <span class="highlight">APIs</span> for real-time updates and lead tracking
            </li>
            <li>⚡ Fully automated lead qualification</li>
            <li>✅ Consistent user experience from first contact to confirmation</li>
          </ul>
        </div>
      </div>

      <!-- Technologies -->
      <div class="description-block tech-section">
        <h2>Technologies Used</h2>
        <div class="tech-cards">
          <span class="tech-card" v-for="(tech, index) in technologies" :key="index">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

import landbot1 from '@/assets/landbot1.jpg'
import landbot2 from '@/assets/landbot2.jpg'
import landbot3 from '@/assets/landbot3.jpg'
import whatsapp1 from '@/assets/whatsapp1.jpg'
import whatsapp2 from '@/assets/whatsapp2.jpg'
import whatsapp3 from '@/assets/whatsapp3.jpg'
import whatsapp4 from '@/assets/whatsapp4.jpg'
import whatsapp5 from '@/assets/whatsapp5.jpg'

/* ===== Refs ===== */
const contentRef = ref(null)
const carouselRef = ref(null)
const slideImages = ref([])

/* ===== Carousel ===== */
const carouselImages = [
  landbot1,
  landbot2,
  landbot3,
  whatsapp1,
  whatsapp2,
  whatsapp3,
  whatsapp4,
  whatsapp5,
]
const currentSlide = ref(0)
let interval = null

const updateCarouselHeight = () => {
  nextTick(() => {
    const img = slideImages.value[currentSlide.value]
    if (img && carouselRef.value) {
      carouselRef.value.style.height = img.offsetHeight + 'px'
    }
  })
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length
  updateCarouselHeight()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length
  updateCarouselHeight()
}

const goToSlide = (index) => {
  currentSlide.value = index
  updateCarouselHeight()
}

onMounted(() => {
  updateCarouselHeight()
  interval = setInterval(nextSlide, 4000)
  window.addEventListener('resize', updateCarouselHeight)
})

onUnmounted(() => {
  clearInterval(interval)
  window.removeEventListener('resize', updateCarouselHeight)
})

/* ===== Scroll ===== */
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/* ===== Technologies ===== */
const technologies = [
  'Meta WhatsApp Business Cloud API',
  'Landbot',
  'Webhooks',
  'Node.js',
  'JavaScript (ES6+)',
  'REST APIs',
  'Authentication Tokens',
]
</script>

<style scoped>
/* ===== Base ===== */
.vapi-landing {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  color: white;
  background: #0c1016;
  padding-bottom: 4rem;
  overflow-x: hidden;
}

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 3rem 2rem 3rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.hero button {
  background: #6b46c1;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.hero button:hover {
  background: #7b5fd3;
}

/* ===== Carousel ===== */
.carousel {
  max-width: 900px;
  margin: 2rem auto 4rem;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
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
  border-radius: 16px;
  transition: transform 0.3s;
}

.carousel-slide img:hover {
  transform: scale(1.03);
}

/* ===== Buttons & dots ===== */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(107, 70, 193, 0.7);
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;
}

.carousel-btn:hover {
  background: rgba(107, 70, 193, 0.9);
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
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  background: #555;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.carousel-dots span.active {
  background: #6b46c1;
  transform: scale(1.3);
}

/* ===== Description ===== */
.project-description {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.description-block h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
}

.description-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
  text-align: justify;
}

.feature-list {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  list-style-type: disc;
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 2rem;
}

.feature-list li {
  margin-bottom: 0.8rem;
}

/* ===== Highlighted words ===== */
.highlight {
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-color: #6b46c1;
  text-decoration-thickness: 4px;
  text-underline-offset: 3px;
  transition: transform 0.3s;
}

.highlight:hover {
  transform: scale(1.05);
}

/* ===== Tech Cards ===== */
.tech-section {
  text-align: center;
}

.tech-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.tech-card {
  background: #353141;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}

.tech-card:hover {
  background: #7b5fd3;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 5px 15px rgba(107, 70, 193, 0.5);
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .carousel-slide img {
    height: 220px;
  }
  .description-block h2 {
    font-size: 1.5rem;
  }
  .description-block p {
    font-size: 0.95rem;
  }
  .hero-title {
    font-size: clamp(2.5rem, 7vw, 4rem);
  }
  .highlight {
    font-size: 1.1rem;
  }
}
</style>
