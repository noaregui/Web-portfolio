<template>
  <section class="projects">
    <div class="projects-hero">
      <h1 class="projects-title">
        <span class="title-line">PROJECTS</span>
      </h1>
      <p class="projects-subtitle">
        Here you will find a selection of projects I have worked on — polished, real-world
        applications that reflect my skills, creativity, and technical expertise. Each project
        showcases my ability to build scalable, maintainable, and user-friendly applications across
        different technologies.
      </p>
    </div>

    <div class="columns">
      <div class="column">
        <!-- VAPI -->
        <RouterLink
          to="/vapi"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${VAPI1})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">AI Voice Assistant</h3>
            <p class="project-tech">VAPI · Voice AI Agents</p>
          </div>
        </RouterLink>

        <!-- CHATBOT -->
        <RouterLink
          to="/botpress"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${BotpressLogo})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">Chatbot</h3>
            <p class="project-tech">Botpress · Landbot</p>
          </div>
        </RouterLink>
      </div>

      <div class="column">
        <!-- META -->
        <RouterLink
          to="/meta"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${MetaFondo})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">Automated visit management</h3>
            <p class="project-tech">Meta</p>
          </div>
        </RouterLink>

        <!-- CHATGPT -->
        <RouterLink
          to="/chatgpt"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${ChatGPTLogo})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">Automatic ads generation</h3>
            <p class="project-tech">ChatGPT</p>
          </div>
        </RouterLink>
      </div>

      <div class="column">
        <!-- Native App Back-->
        <RouterLink
          to="/nativeappback"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${NativeAppBack})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">Backend migration from MySQL to MongoDB</h3>
            <p class="project-tech">Cloud Native Admin - Backend</p>
          </div>
        </RouterLink>

        <!-- Native App Front -->
        <RouterLink
          to="/nativeappfront"
          class="project-card project-card-bg"
          :style="{ backgroundImage: `url(${NativeAppFront})` }"
        >
          <div class="overlay"></div>
          <div class="project-content">
            <h3 class="project-name">Fronted migration using Vue.js and Nuxt.js</h3>
            <p class="project-tech">Cloud Native Admin - Fronted</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import VAPI1 from '@/assets/VAPI 1.jpg'
import BotpressLogo from '@/assets/Botpress.jpg'
import MetaFondo from '@/assets/MetaFondo.jpg'
import ChatGPTLogo from '@/assets/ChatGPT1.jpg'
import NativeAppBack from '@/assets/NativeAppBack.jpg'
import NativeAppFront from '@/assets/NativeAppFront.jpg'
</script>

<style scoped>
.projects {
  padding: 3rem 2rem 4rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.projects-hero {
  text-align: left;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.projects-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 4vw, 3rem);
  letter-spacing: 0.5px;
  color: #ffffff;
  line-height: 1.2;
  margin: 0;
}

.title-line {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 0.5px;
  color: #e0e0e0;
}

.projects-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  color: #898888;
  width: 100%; /* ocupa todo el ancho del contenedor de hero */
  max-width: 100%; /* igual que el h1 */
  margin: 0;
}

/* Resto del estilo de los proyectos (tarjetas) */
.columns {
  display: flex;
  gap: 2rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  position: relative;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.project-card-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.project-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0) 0%);
  transition: background 0.3s ease;
  z-index: 1;
  border-radius: 12px;
}

.project-card:hover .overlay {
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.85) 100%);
}

.project-content {
  position: relative;
  z-index: 2;
  text-align: left;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  padding: 1rem;
}

.project-card:hover .project-content {
  opacity: 1;
  transform: translateY(0);
}

.project-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.project-tech {
  font-size: 1rem;
  opacity: 0.85;
}

.extra-text {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.3rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .projects-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }
  .project-card {
    min-height: 250px;
  }
}

@media (max-width: 768px) {
  .projects-hero {
    text-align: center;
    align-items: center;
  }
  .title-line {
    text-align: center;
  }
  .projects-subtitle {
    text-align: center;
  }
  .columns {
    flex-direction: column;
  }
  .project-card {
    min-height: 220px;
  }
}
</style>
