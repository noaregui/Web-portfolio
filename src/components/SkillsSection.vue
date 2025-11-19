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

    <!-- Animación Uiverse -->
    <!-- <div class="animation">
      <div class="loader">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <mask id="clipping">
              <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
              <polygon points="25,25 75,25 50,75" fill="white"></polygon>
              <polygon points="50,25 75,75 25,75" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
            </mask>
          </defs>
        </svg>
        <div class="box"></div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
// Componente estático
</script>

<style scoped>
.skills-section {
  display: flex;
  align-items: center; /* centra verticalmente texto y animación */
  justify-content: space-between; /* texto a la izquierda, animación a la derecha */
  gap: 2rem; /* espacio entre texto y animación */
  width: 100%;
  margin-top: 2rem;
  background-color: transparent;
  flex-wrap: wrap; /* hace que sea responsive en pantallas pequeñas */
}

.text-content {
  flex: 1; /* ocupa todo el espacio disponible a la izquierda */
  min-width: 250px; /* evita que se achique demasiado en pantallas pequeñas */
}

.skills-section h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
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
  font-size: 3rem;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.skills-section p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #898888;
}

/* Contenedor de la animación */
.animation {
  flex-shrink: 0; /* evita que se encoja demasiado */
}
</style>
