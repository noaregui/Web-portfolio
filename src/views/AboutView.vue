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
            I’ve always been curious about technology, even though my career initially led me into
            <span class="highlight">psychology</span>. After completing my degree and a master’s in
            social psychology, I worked for five years in the field. Over time, my interest in
            <span class="highlight">programming</span> kept growing, so I made a meaningful career
            shift and started studying software development. Today, I bring the insights and
            problem-solving skills I developed into my work as a developer, creating digital
            solutions that are both practical and user-friendly.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">My</span>
            <span class="title-purple"> Approach</span>
          </h3>
          <p>
            I enjoy combining <span class="highlight">frontend</span> and
            <span class="highlight">backend</span> skills to create smooth, user-friendly
            experiences. I’m comfortable working in agile, cross-functional teams, collaborating
            closely with others, and seeing projects through from start to finish.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">Outside</span>
            <span class="title-purple"> Work</span>
          </h3>
          <p>
            I enjoy learning new technologies and exploring innovative solutions. My background in
            psychology gives me a fresh perspective on
            <span class="highlight">user experience</span>,
            <span class="highlight">communication</span>, and how
            <span class="highlight">teams</span>
            work together.
          </p>
        </div>

        <div class="about-section">
          <h3 class="about-subtitle">
            <span class="title-white">What</span>
            <span class="title-purple"> I Build</span>
          </h3>
          <p>
            I enjoy building reliable, scalable applications across the
            <span class="highlight">full stack</span>. On the frontend, I work with JavaScript,
            TypeScript, React, and Vue to create clean interfaces and smooth user experiences. On
            the backend, I focus on developing <span class="highlight">REST APIs</span>, workflow
            logic, and <span class="highlight">platform integrations</span>
            using Node.js, Express, Flask, and MySQL. I have experience connecting systems,
            automating processes, and designing data structures that support real business needs. My
            approach is centered on clean architecture, clear communication, and delivering
            solutions that help teams work more efficiently.
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
  line-height: 2;
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
  font-weight: 800;
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #6b46c1;
  text-decoration-thickness: 5px;
  text-underline-offset: 4px;
  line-height: 1.33; /* = 1.5rem / 1.1rem aprox */
  vertical-align: baseline; /* asegura que no empuja la línea */
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
