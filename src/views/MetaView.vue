<template>
  <section class="meta-landing">
    <!-- ===== Hero ===== -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="hero-title-line">META – WHATSAPP BUSINESS AUTOMATION</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel ===== -->
    <section class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="Meta project slide" />
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
      <div class="description-block">
        <h2>What is Meta - WhatsApp?</h2>
        <p>
          Meta WhatsApp Business Cloud API enables the
          <span class="highlight">automation</span> of WhatsApp messages using pre-approved message
          templates, helping businesses efficiently engage with clients and capture leads.
        </p>

        <p>
          In this project, it was used to streamline real estate inquiries, sending automated
          messages in a structured sequence while ensuring consistency and timing.
        </p>

        <ul class="feature-list">
          <li>💬 Automated WhatsApp contact with potential clients</li>
          <li>🧠 Guided conversational flows via <span class="highlight">Landbot</span></li>
          <li>📅 Appointment scheduling inside WhatsApp</li>
        </ul>
      </div>

      <div class="description-block">
        <h2>Development</h2>
        <p>
          This solution connected Meta’s WhatsApp Business Cloud API with a
          <span class="highlight">custom internal application</span> and
          <span class="highlight">Landbot conversational flows</span>.
        </p>

        <ul class="feature-list">
          <li>⏳ Controlled message timing</li>
          <li>🌐 Custonm-made Webhooks & real-time updates</li>
          <li>⚡ Fully automated lead qualification</li>
        </ul>
      </div>

      <div class="description-block tech-section">
        <h2>Used Technologies</h2>
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
import { ref, onMounted, onUnmounted } from 'vue'

import landbot1 from '@/assets/landbot1.jpg'
import landbot2 from '@/assets/landbot2.jpg'
import landbot3 from '@/assets/landbot3.jpg'
import whatsapp1 from '@/assets/whatsapp1.jpg'
import whatsapp2 from '@/assets/whatsapp2.jpg'

const contentRef = ref(null)

const carouselImages = [landbot1, landbot2, landbot3, whatsapp1, whatsapp2]
const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length
}
const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  interval = setInterval(nextSlide, 4000)
})
onUnmounted(() => clearInterval(interval))

const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

const technologies = [
  'Meta WhatsApp Business Cloud API',
  'Landbot',
  'Custom-made Webhooks',
  'Node.js',
  'JavaScript (ES6+)',
  'Custom-made REST APIs',
]
</script>

<style scoped>
.meta-landing {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: #0c1016;
  color: white;
  padding-bottom: 4rem;
  overflow-x: hidden;
}

.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.hero-title {
  margin-bottom: 2rem;
}

.hero-title-line {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 0.5px;
  color: #e0e0e0;
}

.hero button {
  background: #6b46c1;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.hero button:hover {
  background: #7b5fd3;
}

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
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  display: block;
}

/* ===== Buttons ===== */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(107, 70, 193, 0.7);
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  border-radius: 50%;
}

.prev {
  left: 1rem;
}
.next {
  right: 1rem;
}

/* ===== Dots ===== */
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
}

.carousel-dots span.active {
  background: #6b46c1;
  transform: scale(1.3);
}

/* ===== Description ===== */
.project-description {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.description-block h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.description-block p {
  line-height: 1.6;
  text-align: justify;
}

/* ===== Highlight ===== */
.highlight {
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-color: #6b46c1;
  text-decoration-thickness: 4px;
  text-underline-offset: 3px;
}

/* ===== Tech ===== */
.tech-section {
  text-align: center;
}

.tech-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.tech-card {
  background: #353141;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .carousel-slide {
    min-height: 260px;
  }
}
</style>
