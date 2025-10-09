<template>
  <!-- 🧭 Navbar principal fija en la parte superior -->
  <header class="navbar">
    <div class="navbar-content">
      <!-- 🔷 Logotipo / Nombre -->
      <div class="logo">Ainhoa</div>

      <!-- 📱 Botón hamburguesa visible solo en móvil -->
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>

      <!-- 🌐 Menú de navegación -->
      <!-- Se muestra u oculta según el estado 'isMenuOpen' -->
      <nav class="menu" :class="{ open: isMenuOpen }">
        <router-link to="/" class="link" @click="isMenuOpen = false">Inicio</router-link>
        <router-link to="/about" class="link" @click="isMenuOpen = false">Sobre mí</router-link>
        <router-link to="/projects" class="link" @click="isMenuOpen = false">Proyectos</router-link>
        <router-link to="/contact" class="link" @click="isMenuOpen = false">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
/*
  🧩 Estado reactivo:
  - 'isMenuOpen' controla la visibilidad del menú en pantallas pequeñas.
  - Cambia de true/false al hacer clic en el botón hamburguesa.
*/
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
/* --- 🎨 Estilos base --- */
.navbar {
  position: sticky; /* permanece visible al hacer scroll */
  top: 0;
  width: 100%;
  background-color: #0d1117;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  z-index: 1000; /* asegura que quede por encima del contenido */
}

.navbar-content {
  max-width: 1200px; /* limita el ancho en pantallas grandes */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
}

/* --- 🔷 Logo con degradado y tamaño fluido --- */
.logo {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.3rem, 2vw, 1.6rem); /* ajusta según ancho de pantalla */
  font-weight: 790;
  letter-spacing: 1px;
  background: linear-gradient(to bottom, #60a5fa, #1e3a8a);
  /* Compatibilidad con navegadores modernos */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* --- 🌐 Menú de navegación --- */
.menu {
  display: flex;
  gap: 1rem;
  transition: all 0.3s ease;
}

.link {
  text-decoration: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s ease;
}

/* Efecto hover */
.link:hover {
  background-color: #21262c;
}

/* Línea inferior activa en el link actual */
.link.router-link-exact-active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2f81f7;
}

/* --- 📱 Botón menú móvil (hamburguesa) --- */
.menu-toggle {
  display: none; /* oculto en escritorio */
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
}

/* --- 📏 Responsividad --- */
@media (max-width: 768px) {
  .navbar-content {
    flex-wrap: wrap;
    align-items: center;
  }

  /* Mostrar botón en pantallas pequeñas */
  .menu-toggle {
    display: block;
  }

  /* Ocultar menú por defecto en móvil */
  .menu {
    flex-direction: column;
    width: 100%;
    display: none;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  /* Mostrar menú cuando está abierto */
  .menu.open {
    display: flex;
  }

  /* Enlaces ocupan todo el ancho en móvil */
  .link {
    width: 100%;
    text-align: left;
    padding: 10px;
  }
}
</style>
