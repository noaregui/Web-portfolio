<template>
  <section class="vapi-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="title-white">Meta – WhatsApp Lead Automation</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- Image carousel -->
    <section class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="Meta project slide" />
        </div>
      </div>
    </section>

    <!-- Project description -->
    <section class="project-description" ref="contentRef">
      <div class="description-block">
        <h2>What is Meta?</h2>
        <p>
          The Meta project automates customer interactions for real estate inquiries using the Meta
          WhatsApp platform. Instead of requiring a sales representative to manually contact users
          who expressed interest in a property, the system initiates automated contact via WhatsApp.
          Through an integrated Landbot flow, prospects can provide their details and select
          preferred viewing times directly in chat, streamlining the lead capture and scheduling
          process.
        </p>
      </div>

      <div class="description-block">
        <h2>Development</h2>
        <p>
          This solution connects Meta’s WhatsApp Business Cloud API with a custom Landbot
          conversational flow to manage inbound and outbound communication. When a user shows
          interest in a property, the system initiates a WhatsApp conversation where a chatbot
          guides them through data collection and appointment scheduling.
        </p>
        <p>
          The workflow was designed to operate without human intervention by using structured chat
          flows, webhooks and API integrations. Conversations adapt dynamically based on user input
          until the booking process is completed.
        </p>
        <p>
          Automating this process improves operational efficiency, reduces manual errors and ensures
          a consistent user experience from first contact to visit confirmation.
        </p>
      </div>

      <div class="description-block">
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
import { ref, onMounted, onUnmounted } from 'vue'

import Meta1 from '@/assets/Meta1.jpg'
import Meta2 from '@/assets/Meta2.jpg'
import Meta3 from '@/assets/Meta3.jpg'
import Meta4 from '@/assets/Meta4.jpg'

const contentRef = ref(null)

/* Carousel logic */
const carouselImages = [Meta1, Meta2, Meta3, Meta4]
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

/* Scroll to project content */
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/* Technologies list */
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
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.vapi-landing {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  color: white;
  padding-bottom: 4rem;
}

/* Hero */
.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 2rem;
}

.title-white {
  color: #ffffff;
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

/* Carousel */
.carousel {
  width: 60%;
  max-width: 900px;
  margin: 0 auto 3rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  aspect-ratio: 16 / 9;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Description */
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
  line-height: 1.6;
  color: #e0e0e0;
  text-align: justify;
  margin-bottom: 1.5rem;
}

/* Technologies */
.tech-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-card {
  background: #353141;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: 0.3s;
}

.tech-card:hover {
  background: #7b5fd3;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(2.5rem, 7vw, 4rem);
  }

  .carousel {
    width: 90%;
  }

  .description-block h2 {
    font-size: 1.5rem;
  }
}
</style>
