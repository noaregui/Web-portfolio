<template>
  <section class="vapi-landing">
    <!-- ===== Hero ===== -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="title-white">Botpress – AI Agent</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel ===== -->
    <section class="carousel">
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

    <!-- ===== Project Description ===== -->
    <section class="project-description" ref="contentRef">
      <!-- What is Botpress -->
      <div class="description-block">
        <h2>What is Botpress?</h2>
        <p>
          Botpress is an
          <span class="highlight">AI-powered conversational platform</span> that enables the
          creation of intelligent, stateful chatbots using
          <span class="highlight">large language models (LLMs)</span>. It allows businesses to
          design flexible conversational workflows, integrate external systems through APIs, and
          deploy conversations across channels such as WhatsApp. In this project, Botpress was used
          to automate post-visit feedback collection in a real estate context, providing a
          <span class="highlight">personalized conversational experience</span> instead of static
          forms.
        </p>

        <ul class="feature-list">
          <li>💬 Automated post-visit feedback via WhatsApp</li>
          <li>🧠 AI-driven, context-aware conversational flows</li>
          <li>📊 Structured data collection and persistence</li>
          <li>🔗 Seamless integration with internal systems</li>
        </ul>
      </div>

      <!-- Development -->
      <div class="description-block">
        <h2>Development</h2>
        <p>
          This solution connected Botpress with the
          <span class="highlight">WhatsApp Business API</span> and a custom internal backend to
          collect and store feedback from property visitors after each visit. The conversational
          flow was triggered automatically once a visit was completed.
        </p>

        <p>
          By accessing internal database records beforehand, the bot personalized each conversation
          using existing client data, guiding users through a
          <span class="highlight">dynamic feedback flow</span> based on context and responses.
        </p>

        <ul class="feature-list">
          <li>🧠 Adapt questions based on previous answers and stored context</li>
          <li>🔄 Maintain conversational state across interactions</li>
          <li>📥 Collect structured feedback and validate user inputs</li>
          <li>🌐 Sync data with internal systems using REST APIs and webhooks</li>
          <li>✅ Deliver a natural, user-friendly experience directly in WhatsApp</li>
        </ul>
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
import { ref, onMounted, onUnmounted } from 'vue'
import Botpress1 from '@/assets/Botpress1.jpg'
import Botpress2 from '@/assets/Botpress2.jpg'
import Botpress3 from '@/assets/Botpress3.jpg'
import Botpress4 from '@/assets/Botpress4.jpg'
import Botpress5 from '@/assets/Botpress5.jpg'

const contentRef = ref(null)

/* ===== Carousel ===== */
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

/* ===== Scroll ===== */
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/* ===== Technologies ===== */
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
  padding: 3rem 2rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 2rem;
}

.hero button {
  background: #6b46c1;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
}

/* ===== Carousel ===== */
.carousel {
  max-width: 900px;
  margin: 2rem auto 4rem;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: none;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
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
}

.prev {
  left: 1rem;
}
.next {
  right: 1rem;
}

.carousel-dots {
  position: absolute;
  bottom: 0.8rem;
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
}

.description-block p {
  line-height: 1.6;
  text-align: justify;
}

/* ===== Lists ===== */
.feature-list {
  margin-top: 1rem;
  padding-left: 1.2rem;
  line-height: 2rem;
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

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .carousel {
    max-width: 100%;
  }
}
</style>
