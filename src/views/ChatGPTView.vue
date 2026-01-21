<template>
  <section class="vapi-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="title-white">Chat GPT – Automated Content</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel (único cambio) ===== -->
    <section class="carousel" ref="carouselRef">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="ChatGPT slide" :ref="(el) => (slideImages[index] = el)" />
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

    <!-- Project description -->
    <section class="project-description" ref="contentRef">
      <div class="description-block">
        <h2>What is ChatGPT Content Automation?</h2>
        <p>
          ChatGPT is an AI language model developed by OpenAI that can understand and generate
          human-like text based on the inputs it receives. Using the ChatGPT API, developers can
          integrate <span class="highlight">AI-powered conversational</span> and content generation
          capabilities into their applications, enabling automation, natural language understanding,
          and high-quality text creation.
        </p>
        <ul class="feature-list">
          <li>💬 AI-powered content generation</li>
          <li>🧠 Understands structured inputs and generates human-like text</li>
          <li>⚡ Automates repetitive writing tasks</li>
        </ul>
      </div>

      <div class="description-block">
        <h2>Development</h2>
        <p>
          This project integrates Pipedrive, ChatGPT API, and Witei to automate the full workflow of
          creating and publishing property listings.
        </p>
        <p>
          When a commercial enters or updates a deal in <span class="highlight">Pipedrive</span>,
          the system retrieves all relevant property information (location, price, features,
          characteristics) via the Pipedrive API.
        </p>
        <p>
          This data is sent to the <span class="highlight">ChatGPT API</span> along with predefined
          prompts and guidelines. ChatGPT generates optimized property descriptions that are
          professional, SEO-friendly, and ready for publication.
        </p>
        <p>
          The generated content is then sent automatically to <span class="highlight">Witei</span>,
          a real estate management platform that distributes listings to multiple portals like
          Idealista, Fotocasa, and others. The system ensures that listings are published
          automatically without any manual intervention.
        </p>
        <p>Key features implemented:</p>
        <ul class="feature-list">
          <li>🧠 AI-generated content based on structured property data</li>
          <li>🔗 Full integration of Pipedrive, ChatGPT API, and Witei</li>
          <li>✅ Automated publishing across multiple portals</li>
          <li>⚡ Eliminates manual content creation and human errors</li>
          <li>📊 Maintains consistent tone, style, and structure</li>
        </ul>
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

import chatgpt2 from '@/assets/chatgpt2.jpg'
import chatgpt3 from '@/assets/chatgpt3.jpg'
import chatgpt4 from '@/assets/chatgpt4.jpg'

const contentRef = ref(null)

/* ===== Carousel logic ===== */
const carouselRef = ref(null)
const slideImages = ref([])

const carouselImages = [chatgpt2, chatgpt3, chatgpt4]
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
  'OpenAI ChatGPT API',
  'Pipedrive CRM API',
  'Witei API',
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

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
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

/* ===== Carousel ===== */
.carousel {
  width: 100%;
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
  height: auto;
  object-fit: contain;
  border-radius: 16px;
}

/* Buttons */
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
  z-index: 10;
}

.carousel-btn:hover {
  background: rgba(107, 70, 193, 0.9);
}

.prev {
  left: 1rem;
}
.next {
  right: 1rem;
}

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
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

.feature-list {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
}

/* ===== Tech cards ===== */
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
</style>
