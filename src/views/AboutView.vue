<template>
  <section class="about">
    <div class="about-wrapper">
      <div class="about-text no-scrollbar" ref="aboutText">
        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">My</span>
            <span class="title-purple"> Background</span>
          </h3>
          <p>
            I’ve always been curious about technology, even though my career initially led me into
            <span class="highlight">psychology</span>. After completing my degree and a master’s in
            social psychology, I worked for five years in the field. Over time, my interest in
            <span class="highlight">programming</span> kept growing, so I made a meaningful career
            shift and started studying software development.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">My</span>
            <span class="title-purple"> Approach</span>
          </h3>
          <p>
            I enjoy combining <span class="highlight">frontend</span> and
            <span class="highlight">backend</span> skills to create smooth experiences. I’m
            comfortable working in agile, cross-functional teams, collaborating closely with others,
            and seeing projects through from start to finish.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">Outside</span>
            <span class="title-purple"> Work</span>
          </h3>
          <p>
            I enjoy learning <span class="highlight">new technologies</span> and exploring
            innovative solutions. My background in psychology gives me a fresh perspective on user
            experience, <span class="highlight">communication</span>, and how teams work together.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">What</span>
            <span class="title-purple"> I Build</span>
          </h3>
          <p>
            I enjoy building reliable, scalable applications across the full stack. On the frontend,
            I work with JavaScript, TypeScript, React, and Vue to create clean interfaces and smooth
            user experiences. On the backend, I focus on developing
            <span class="highlight">REST APIs</span>, workflow logic, and
            <span class="highlight">platform integrations</span>
            using Node.js, Express, Flask, and MySQL. I have experience connecting systems,
            automating processes, and designing data structures that support real business needs.
          </p>
        </div>
      </div>

      <div class="about-image">
        <img src="@/assets/Avatar_programming_sin_fondo.jpg" alt="Ainhoa Avatar" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const aboutText = ref(null)
let inactivityTimer = null
let autoScrollInterval = null

onMounted(() => {
  const container = aboutText.value
  if (!container) return

  const resetTimer = () => {
    clearTimeout(inactivityTimer)
    clearInterval(autoScrollInterval)
    inactivityTimer = setTimeout(startAutoScroll, 4000)
  }

  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
      const bottom = container.scrollHeight - container.clientHeight

      // Si ha llegado al final → volver arriba
      if (container.scrollTop >= bottom) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      // Desplazamiento normal
      container.scrollBy({ top: 3, behavior: 'smooth' })
    }, 30)
  }
  container.addEventListener('scroll', resetTimer)
  resetTimer()
})
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0rem auto;
  padding: 1rem;
}

.about-wrapper {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.about-text {
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  padding-right: 1rem;
}

.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.about-section {
  scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-subtitle {
  font-family: 'Poppins', sans-serif !important;
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.about-subtitle span {
  font-weight: 700 !important;
}

.title-white {
  color: #ffffff;
}

.title-purple {
  color: #6b46c1;
}

p {
  font-size: 1.1rem;
  line-height: 2;
}

.about-image {
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.highlight {
  font-weight: 800;
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #6b46c1;
  text-decoration-thickness: 5px;
  text-underline-offset: 4px;
  line-height: 1.33;
  vertical-align: baseline;
}

@media (max-width: 900px) {
  .about-wrapper {
    flex-direction: column;
  }

  .about-text {
    height: auto;
    overflow-y: visible;
    scroll-snap-type: none;
  }

  .about-section {
    min-height: auto;
  }

  .about-image {
    position: relative;
    top: 0;
    margin-bottom: 2rem;
  }
}
</style>
