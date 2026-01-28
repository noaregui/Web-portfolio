<template>
  <section class="buffy-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="hero-title-line">BotPress – AI Agent Automated Conversations</span>
        <span class="hero-title-line"> </span>
        <!-- Para mantener el mismo estilo de VAPI -->
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- Carousel -->
    <section class="carousel" ref="carouselRef">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="Botpress slide" />
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

    <!-- Project Description -->
    <section class="project-description" ref="contentRef">
      <div class="description-block alternate">
        <div class="text">
          <h2>What is BotPress?</h2>
          <p>
            Botpress is an <span class="highlight">AI-powered conversational platform</span> that
            enables the creation of intelligent, stateful chatbots using
            <span class="highlight">large language models (LLMs)</span>. It allows businesses to
            design flexible conversational workflows, integrate external systems, and deploy
            conversations across channels like WhatsApp.
          </p>
          <ul class="feature-list">
            <li>💬 Automated post-visit feedback via WhatsApp</li>
            <li>🧠 AI-driven, context-aware conversational flows</li>
            <li>📊 Structured data collection and persistence</li>
            <li>🔗 Seamless integration with internal systems</li>
          </ul>
        </div>
      </div>

      <div class="description-block alternate reverse">
        <div class="text">
          <h2>Development</h2>
          <p>
            This solution connected Botpress with the
            <span class="highlight">WhatsApp Business API</span> and a custom internal backend to
            collect and store feedback. The conversational flow was triggered automatically after
            each visit.
          </p>
          <p>
            By accessing internal database records beforehand, the bot personalized each
            conversation using existing client data, guiding users through a
            <span class="highlight">dynamic feedback flow</span>
            based on context and responses.
          </p>
          <ul class="feature-list">
            <li>🧠 Adapt questions based on previous answers and stored context</li>
            <li>🔄 Maintain conversational state across interactions</li>
            <li>📥 Collect structured feedback and validate user inputs</li>
            <li>🌐 Sync data with internal systems using REST APIs and webhooks</li>
            <li>✅ Deliver a natural, user-friendly experience directly in WhatsApp</li>
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

import Botpress1 from '@/assets/Botpress1.jpg'
import Botpress2 from '@/assets/Botpress2.jpg'
import Botpress3 from '@/assets/Botpress3.jpg'
import Botpress4 from '@/assets/Botpress4.jpg'
import Botpress5 from '@/assets/Botpress5.jpg'

const contentRef = ref(null)
const carouselRef = ref(null)

/* Carousel */
const carouselImages = [Botpress1, Botpress2, Botpress3, Botpress4, Botpress5]
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

/* Scroll */
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/* Technologies */
const technologies = [
  'Botpress (AI conversational agent)',
  'WhatsApp Business API',
  'Webhooks',
  'Node.js',
  'TypeScript',
  'REST APIs',
  'Authentication Tokens',
]
</script>

<style scoped>
/* ===== Base ===== */
.buffy-landing {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  color: white;
  background: #0c1016;
  width: 100%;
  padding-bottom: 4rem;
  overflow-x: hidden;
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

/* Carousel */
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

/* Project Description */
.project-description {
  max-width: 1200px;
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

/* Highlight */
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

/* Feature list */
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

/* Tech Cards */
.tech-section {
  text-align: center;
  margin-bottom: 3rem; /* Más margen inferior para que no quede pegado */
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

/* Responsive */
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
