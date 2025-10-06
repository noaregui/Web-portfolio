<template>
  <header class="navbar">
    <div class="logo">Ainhoa</div>
    <nav class="input">
      <router-link to="/" class="value">Inicio</router-link>
      <router-link to="/about" class="value">Sobre mí</router-link>
      <router-link to="/projects" class="value">Proyectos</router-link>
      <router-link to="/contact" class="value">Contacto</router-link>
    </nav>
  </header>
</template>

<script setup>
// Nada especial aquí
</script>

<style scoped>
/* Navbar principal */
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #0d1117;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Menú de enlaces */
.input {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.value {
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;
  font-weight: 500;
}

.value:not(:active):hover,
.value:focus {
  background-color: #21262c;
}

.value:focus,
.value:active {
  background-color: #1a1f24;
  outline: none;
}

.value::before {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2f81f7;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.2s;
}

.value.router-link-exact-active::before {
  opacity: 1;
}

/* Logo con tipografía más ancha y moderna */
.logo {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 790;
  letter-spacing: 1px;
  margin-right: 2rem;

  /* Degradado azul vertical */
  background: linear-gradient(to bottom, #60a5fa, #1e3a8a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
