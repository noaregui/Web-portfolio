<template>
  <div class="skills-section">
    <div class="text-content">
      <h2>
        <span class="title-line">BUILDING</span>
        <span class="title-line">DIGITAL EXPERIENCES</span>
      </h2>
      <p>
        I create digital experiences by combining frontend and backend. I build full-featured,
        scalable, and easy-to-maintain web applications, integrating databases, APIs, and
        automations. Check out what I can do!
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.skills-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  background-color: transparent;
  flex-wrap: wrap;
  padding: 0 5rem; /* margen en escritorio */
  box-sizing: border-box; /* importante para que padding no rompa layout */
}

.text-content {
  flex: 1;
  min-width: 250px;
}

/* Títulos */
.skills-section h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 4vw, 3rem); /* escalable y responsive */
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #ffffff;
  line-height: 1.2;
}

.title-line {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem); /* escalable */
  letter-spacing: 0.5px;
  color: #e0e0e0;
}

/* Párrafo */
.skills-section p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.1rem); /* escalable */
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #898888;
}

.animation {
  flex-shrink: 0;
}

/* 🔹 Media queries para tablets y móviles */
@media (max-width: 1024px) {
  .skills-section {
    padding: 0 3rem; /* menos margen en tablet */
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 0 1.5rem; /* margen más pequeño en móviles */
    justify-content: center; /* centrar contenido horizontal */
  }
  .title-line {
    text-align: center; /* títulos centrados */
  }
  .skills-section p {
    text-align: center; /* párrafo centrado */
  }
}
</style>
