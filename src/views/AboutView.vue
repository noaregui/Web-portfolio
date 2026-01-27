<template>
  <section class="about">
    <div class="about-wrapper">
      <!-- Texto rotatorio con efecto slide-up -->
      <div class="about-text">
        <transition name="slide-up" mode="out-in">
          <div class="about-section" :key="currentIndex">
            <!-- Usamos v-if para mostrar solo el bloque activo -->
            <div v-if="currentIndex === 0">
              <h3 class="about-subtitle">
                <span class="title-white">My</span>
                <span class="title-purple"> Background</span>
              </h3>
              <p>
                I’ve always been curious about technology, even though my career initially led me
                into
                <span class="highlight">psychology</span>. After completing my degree and a master’s
                in social psychology, I worked for five years in the field. Over time, my interest
                in <span class="highlight">programming</span> kept growing, so I made a meaningful
                career shift and started studying software development.
              </p>
            </div>

            <div v-else-if="currentIndex === 1">
              <h3 class="about-subtitle">
                <span class="title-white">My</span>
                <span class="title-purple"> Approach</span>
              </h3>
              <p>
                I enjoy combining <span class="highlight">frontend</span> and
                <span class="highlight">backend</span> skills to create smooth experiences. I’m
                comfortable working in agile, cross-functional teams, collaborating closely with
                others, and seeing projects through from start to finish.
              </p>
            </div>

            <div v-else-if="currentIndex === 2">
              <h3 class="about-subtitle">
                <span class="title-white">Outside</span>
                <span class="title-purple"> Work</span>
              </h3>
              <p>
                I enjoy learning <span class="highlight">new technologies</span> and exploring
                innovative solutions. My background in psychology gives me a fresh perspective on
                user experience, <span class="highlight">communication</span>, and how teams work
                together.
              </p>
            </div>

            <div v-else-if="currentIndex === 3">
              <h3 class="about-subtitle">
                <span class="title-white">What</span>
                <span class="title-purple"> I Build</span>
              </h3>
              <p>
                I enjoy building reliable, scalable applications across the full stack. On the
                frontend, I work with <span class="highlight">JavaScript</span>,
                <span class="highlight">TypeScript</span>, <span class="highlight">React</span>, and
                <span class="highlight">Vue</span> to create clean interfaces and smooth user
                experiences. On the backend, I focus on developing
                <span class="highlight">REST APIs</span>, workflow logic, and
                <span class="highlight">platform integrations</span>
                using Node.js, Express, Flask, and MySQL. I have experience connecting systems,
                automating processes, and designing data structures that support real business
                needs.
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Imagen fija -->
      <div class="about-image">
        <img src="@/assets/Avatar_programming_sin_fondo.jpg" alt="Ainhoa Avatar" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 4
  }, 10000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 5rem;
}

.about-wrapper {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Texto */
.about-text {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.about-section {
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

.title-white {
  color: #ffffff;
}
.title-purple {
  color: #6b46c1;
}

/* Palabras resaltadas */
.highlight {
  font-weight: 800;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #6b46c1;
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
}

p {
  font-size: 1.1rem;
  line-height: 2;
}

/* Imagen */
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

/* Transition efecto slide-up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.7s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Responsivo */
@media (max-width: 900px) {
  .about-wrapper {
    flex-direction: column;
  }

  .about-image {
    margin-top: 2rem;
    max-width: 300px;
  }

  .about-subtitle {
    font-size: clamp(2rem, 5vw, 4rem);
  }

  p {
    font-size: 1rem;
  }
}
</style>
