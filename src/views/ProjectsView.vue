<template>
  <section class="projects">
    <!-- HERO -->
    <div class="projects-hero">
      <h1 class="projects-title">Projects</h1>
      <p class="projects-subtitle">
        Here you will find a selection of projects I have worked on — polished, real-world
        applications that reflect my skills and experience.
      </p>
    </div>

    <!-- COLUMNAS -->
    <div class="columns">
      <!-- Columna izquierda -->
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
            <p class="extra-text">
              Chatbots inteligentes con integración multicanal y automatización de conversaciones.
            </p>
          </div>
        </RouterLink>
      </div>

      <!-- Columna derecha -->
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
    </div>
  </section>
</template>

<script setup>
import VAPI1 from '@/assets/VAPI 1.jpg'
import BotpressLogo from '@/assets/Botpress.jpg'
import MetaFondo from '@/assets/MetaFondo.jpg'
import ChatGPTLogo from '@/assets/ChatGPT1.jpg'
</script>

<style scoped>
.projects {
  padding: 3rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-hero {
  text-align: center;
  margin-bottom: 2rem;
}

.projects-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.projects-subtitle {
  font-size: 1.1rem;
  opacity: 0.75;
  line-height: 1.6;
}

/* ===== COLUMNAS ===== */
.columns {
  display: flex;
  gap: 2rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ===== CARD ===== */
.project-card {
  position: relative;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  overflow: hidden;
  min-height: 220px;
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

/* Fondo dinámico */
.project-card-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Overlay invisible inicialmente */
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

/* Overlay degradado al hover */
.project-card:hover .overlay {
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.85) 100%);
}

/* Contenido encima del overlay */
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

/* Mostrar contenido al hover */
.project-card:hover .project-content {
  opacity: 1;
  transform: translateY(0);
}

/* ===== TEXTOS ===== */
.project-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.project-tech {
  font-size: 0.95rem;
  opacity: 0.85;
}

.extra-text {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: 0.3rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .columns {
    flex-direction: column;
  }
}
</style>
