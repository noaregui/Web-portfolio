<template>
  <section class="about">
    <div class="about-wrapper">
      <!-- Texto con scroll (sin mostrar barra) -->
      <div class="about-text no-scrollbar">
        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">My</span>
            <span class="title-purple"> Background</span>
          </h3>
          <p>
            I've always been curious about <span class="highlight">programming</span>, but my first
            path took me to psychology. I completed my degree in 4 years and then pursued a master's
            in social <span class="highlight">psychology</span>. After working for 5 years as a
            social psychologist, I decided to follow my passion for tech and switched careers to
            study programming.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">My</span>
            <span class="title-purple"> Approach</span>
          </h3>
          <p>
            I combine <span class="highlight">frontend</span> and
            <span class="highlight">backend</span> skills with a strong focus on user experience and
            operational efficiency. I work well in agile, cross-functional teams, managing projects
            autonomously from planning to final delivery.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">Outside</span>
            <span class="title-purple"> Work</span>
          </h3>
          <p>
            I enjoy learning new technologies and exploring innovative solutions. My background in
            psychology gives me a unique perspective on user experience,
            <span class="highlight">team dynamics</span>, and
            <span class="highlight">problem-solving</span>.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">What</span>
            <span class="title-purple"> I Build</span>
          </h3>
          <p>
            I enjoy creating efficient and scalable solutions across both frontend and backend. My
            experience includes developing internal and
            <span class="highlight">external APIs</span>, workflow automations, and integrations
            between platforms using <span class="highlight">Node.js</span>,
            <span class="highlight">Express</span>, <span class="highlight">Flask</span>, and
            <span class="highlight">MySQL</span>. I've also built conversational bots, WhatsApp
            automations, and real-estate tools that streamline internal operations. I focus on clean
            architecture, clarity in requirements, and delivering solutions that genuinely improve
            how teams work.
          </p>
        </div>
      </div>

      <!-- Imagen fija -->
      <div class="about-image">
        <img src="@/assets/Avatar_programming_sin_fondo.jpg" alt="Ainhoa Avatar" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0rem auto;
  padding: 1rem;
}

.about-wrapper {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* TEXTO CON SCROLL SIN MOSTRAR BARRA */
.about-text {
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  padding-right: 1rem;
}

/* Ocultar scroll en todos los navegadores */
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE / Edge */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

/* Cada sección ocupa el alto completo */
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

/* Fuerza negrita total también en los spans */
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
  line-height: 1.6;
}

/* Imagen fija */
.about-image {
  flex: 0 0 400px;
  position: sticky;
  top: 2rem;
  align-self: flex-start;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.highlight {
  font-weight: 800; /* negrita más fuerte */
  font-size: 1.5rem; /* un poco más grande que el texto normal */
  color: #aba6a6; /* color del texto */
  text-decoration: underline; /* subrayado */
  text-decoration-color: #6b46c1; /* color del subrayado morado */
  text-decoration-thickness: 5px; /* grosor del subrayado */
  text-underline-offset: 4px; /* separación del subrayado del texto */
}

/* Responsive */
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
