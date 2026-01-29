<template>
  <section class="nativeappback-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="hero-title-line">Cloud Native Admin - Backend</span>
        <span class="hero-title-line"> </span>
      </h1>

      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel ===== -->
    <section class="carousel" ref="carouselRef">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="NativeAppBack slide" />
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
            Cloud-native Admin is a modern backend system designed to manage all aspects of the
            internal property management application. It centralizes financial records, rental
            agreements, tenant and landlord data, and maintenance requests.
          </p>
          <p>
            The migration to a cloud-native architecture using Node.js and Docker improves
            scalability, ensures real-time data handling, and provides a more reliable foundation
            for future features.
          </p>
          <p>Key highlights:</p>
          <ul class="feature-list">
            <li>🏢 Centralized management of properties, tenants, and landlords</li>
            <li>💰 Real-time financial data tracking</li>
            <li>⚙️ Automated handling of maintenance requests and incidents</li>
          </ul>
        </div>
      </div>

      <!-- Development -->
      <div class="description-block alternate reverse">
        <div class="text">
          <h2>Development</h2>
          <p>
            This project involved migrating the internal system from MySQL to MongoDB while
            redesigning the backend as a
            <span class="highlight">cloud-native application using Docker and Node.js</span>.
          </p>
          <p>
            The system manages all property-related data including financial records, rental
            agreements, tenants, landlords, and maintenance requests. The migration ensured data
            integrity while enabling new functionalities and real-time data handling.
          </p>
          <p>
            The new backend exposes <span class="highlight">custom-made REST APIs</span> that allow
            the frontend and other internal services to interact seamlessly with the database.
            Docker containers were used to package the application, providing scalability, easier
            deployment, and a consistent development environment.
          </p>

          <p>Key features implemented:</p>
          <ul class="feature-list">
            <li>🏢 Complete migration from MySQL to MongoDB</li>
            <li>🔗 Custom REST APIs for internal application functionality</li>
            <li>📦 Containerized backend using Docker for deployment and scalability</li>
            <li>⚡ Optimized data models and workflow logic for improved efficiency</li>
            <li>✅ Real-time management of tenants, properties, and incidents</li>
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

import Docker from '@/assets/Docker.jpg'
import MongoDB2 from '@/assets/MongoDB2.jpg'
import MySQL1 from '@/assets/MySQL1.jpg'

/* ===== Refs ===== */
const contentRef = ref(null)
const carouselRef = ref(null)

/* ===== Carousel ===== */
const carouselImages = [Docker, MongoDB2, MySQL1]
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
const technologies = ['Node.js', 'Docker', 'MongoDB', 'MySQL', 'Custom-made REST APIs', 'Vue.js']
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
.nativeappback-landing {
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
