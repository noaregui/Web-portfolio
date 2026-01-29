<template>
  <section class="nativeappfront-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="hero-title-line">Cloud Native Admin - Fronted</span>
        <span class="hero-title-line"> </span>
      </h1>

      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel ===== -->
    <section class="carousel" ref="carouselRef">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="NativeAppFront slide" />
        </div>
      </div>
      <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-btn next" @click="nextSlide">&#10095;</button>
      <div class="carousel-dots">
        <span
          v-for="(image, index) in carouselImages"
          :key="index"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </section>

    <!-- ===== Project Description ===== -->
    <section class="project-description" ref="contentRef">
      <div class="description-block alternate">
        <div class="text">
          <h2>What is Cloud-native Admin?</h2>
          <p>
            Cloud-native Admin Frontend is an
            <span class="highlight">end-to-end software suite for total office productivity</span>,
            designed to provide an intuitive and scalable interface for managing properties,
            tenants, landlords, financials, and maintenance requests. The frontend was rebuilt using
            Vue.js and Nuxt.js, focusing on creating a visual, interactive, and highly functional
            user experience. With the new design, staff can perform tasks faster, access data in
            real time, and manage all aspects of property administration more efficiently. Key
            highlights: 💻 Modern and scalable frontend architecture 🎨 Improved visual design and
            user experience ⚙️ Streamlined workflows for total office productivity 📊 Real-time
            access to data across all modules
          </p>
          <p>
            The frontend was rebuilt using <span class="highlight">Vue.js and Nuxt.js</span>,
            focusing on creating a
            <span class="highlight">visual, interactive, and highly functional user experience</span
            >. With the new design, staff can perform tasks faster, access data in real time, and
            manage all aspects of property administration more efficiently.
          </p>
          <p>Key highlights:</p>
          <ul class="feature-list">
            <li>💻 Modern and scalable frontend architecture</li>
            <li>🎨 Improved visual design and user experience</li>
            <li>⚙️ Streamlined workflows for total office productivity</li>
            <li>📊 Real-time access to data across all modules</li>
          </ul>
        </div>
      </div>

      <!-- Development -->
      <div class="description-block alternate reverse">
        <div class="text">
          <h2>Development</h2>
          <p>
            In this project, I focused on rebuilding the frontend of the internal admin system as
            part of the migration. I implemented scalable Vue.js components and Nuxt.js pages to
            create modular and maintainable code. The interface was redesigned to be more visual,
            intuitive, and functional, improving navigation and overall usability.
          </p>
          <ul class="feature-list">
            <li>
              ⚡ Optimized for real-time data updates from the backend APIs, ensuring staff always
              have access to the latest information.
            </li>
            <li>
              🎨 Applied modern styling practices for a clean, consistent, and professional look
              across the application.
            </li>
            <li>
              ✅ Ensured end-to-end functionality for property management, tenant and landlord
              workflows, financial data, and incident tracking, making daily operations more
              efficient.
            </li>
          </ul>

          <p>Key features implemented:</p>
          <ul class="feature-list">
            <li>🏛️ Scalable Vue.js and Nuxt.js architecture</li>
            <li>🖥️ Improved UI/UX for better productivity and usability</li>
            <li>💬 Interactive, real-time data handling</li>
            <li>🌐 Seamless integration with backend APIs</li>
            <li>📦 Modular and maintainable code structure</li>
          </ul>
        </div>
      </div>

      <!-- Used Technologies -->
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

import Nuxt from '@/assets/Nuxt.jpg'
import Vue1 from '@/assets/Vue1.jpg'

/* ===== Refs ===== */
const contentRef = ref(null)
const carouselRef = ref(null)

/* ===== Carousel ===== */
const carouselImages = [Nuxt, Vue1]
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

onUnmounted(() => {
  clearInterval(interval)
})

/* ===== Scroll ===== */
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/* ===== Technologies ===== */
const technologies = ['Vue.js', 'Nuxt.js', 'Axios', 'Custom-made REST APIs']
</script>

<style scoped>
/* ===== Reset ===== */
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* ===== Base ===== */
.nativeappfront-landing {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
  padding-bottom: 4rem;
  background: #0c1016;
}

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2;
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

.title-white {
  color: #ffffff;
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
  width: 95%;
  max-width: 1200px;
  margin: 2rem auto 4rem;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  height: auto;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}

.carousel-slide {
  min-width: 100%;
  height: auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  z-index: 10;
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

/* ===== Dots sobre la imagen ===== */
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
  background: #555;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.carousel-dots span.active {
  background: #6b46c1;
  transform: scale(1.3);
}

/* ===== Project Description ===== */
.project-description {
  max-width: 1200px; /* Igual que el carousel */
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.description-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.description-block h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
}

.description-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 1rem;
}

/* ===== Highlighted words ===== */
.highlight {
  color: #ffffff;
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

/* ===== Feature list ===== */
.feature-list {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 1.2rem;
  list-style-type: disc;
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
}

.feature-list li {
  margin-bottom: 0.5rem;
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
@media (max-width: 1024px) {
  .carousel {
    width: 90%;
  }
  .project-description {
    width: 90%;
    padding: 2rem 1rem;
  }
}

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
  .carousel {
    width: 100%;
  }
  .project-description {
    width: 100%;
    padding: 1rem;
  }
}
</style>
