<template>
  <section class="chatgpt-landing">
    <!-- Hero -->
    <header class="hero">
      <h1 class="hero-title">
        <span class="hero-title-line">ChatGPT – AI Content Automation for Real Estate</span>
      </h1>
      <button @click="scrollToContent">View project details</button>
    </header>

    <!-- ===== Carousel ===== -->
    <section class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="ChatGPT slide" />
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
import chatgpt2 from '@/assets/chatgpt2.jpg'
import chatgpt3 from '@/assets/chatgpt3.jpg'
import chatgpt4 from '@/assets/chatgpt4.jpg'

const contentRef = ref(null)
const carouselImages = [chatgpt2, chatgpt3, chatgpt4]
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
const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}
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
/* ===== Reset & Base ===== */
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.chatgpt-landing {
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
  width: 100%; /* ocupa todo el ancho */
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
  color: #fff;
}
.description-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  text-align: justify;
  margin-bottom: 1rem;
}
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
  list-style-type: disc;
}
.feature-list li {
  margin-bottom: 0.5rem;
}
.tech-section {
  text-align: center;
  margin-bottom: 3rem;
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
