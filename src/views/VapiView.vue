<template>
  <section class="vapi-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="title-white">VAPI - AI Voice Assistant</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Image Carousel ===== -->
    <section class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="VAPI slide" />
        </div>
      </div>
    </section>

    <!-- ===== Project Description ===== -->
    <section class="project-description" ref="contentRef">
      <!-- What is -->
      <div class="description-block">
        <h2>What is VAPI?</h2>
        <p>
          VAPI is an AI-powered voice assistant designed to automate phone call handling, allowing a
          virtual assistant to answer calls.
        </p>
      </div>

      <!-- Development -->
      <div class="description-block">
        <h2>Development</h2>
        <p>
          The voice assistant answered incoming calls, understood the user’s intent, and interacted
          naturally using AI. When a caller asked about a property, the assistant queried the
          internal database to identify the property and provided key information such as price,
          location, and general details.
        </p>
        <p>
          During the call, it also collected the caller’s contact information and marked them as an
          interested lead in the company’s internal application, allowing the sales team to follow
          up without needing to handle the initial call.
        </p>
      </div>

      <!-- Technologies Used -->
      <div class="description-block">
        <h2>Technologies Used</h2>
        <div class="tech-cards">
          <span class="tech-card" v-for="(tech, index) in technologies" :key="index">{{
            tech
          }}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import VAPI1 from '@/assets/VAPI 1.jpg'
import VAPI2 from '@/assets/VAPI 2.jpg'
import VAPI3 from '@/assets/VAPI 3.jpg'
import VAPI4 from '@/assets/VAPI 4.jpg'

const contentRef = ref(null)

/* ===== Carousel ===== */
const carouselImages = [VAPI1, VAPI2, VAPI3, VAPI4]
const currentSlide = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})

/* ===== Scroll ===== */
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/* ===== Technologies ===== */
const technologies = ['Node.js', 'JavaScript (ES6+)', 'React', 'REST APIs', 'VAPI AI']
</script>

<style scoped>
/* ===== Remove global scroll ===== */
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* ===== Base ===== */
.vapi-landing {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
  padding-bottom: 4rem;
}

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.hero-title span {
  display: inline-block;
}

.title-white {
  color: #ffffff;
}

.title-purple {
  color: #6b46c1;
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

/* ===== Carousel ===== */
.carousel {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 3rem;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
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
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
}

/* ===== Project Description ===== */
.project-description {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.description-block {
  margin-bottom: 2.5rem;
}

.description-block h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.description-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: #e0e0e0;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 1.5rem;
}

/* ===== Technologies Cards ===== */
.tech-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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
  transform: translateY(-3px);
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
}
</style>
