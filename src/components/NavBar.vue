<template>
  <header class="navbar">
    <div class="navbar-content">
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>

      <nav class="menu" :class="{ open: isMenuOpen }">
        <router-link to="/" class="link" @click="isMenuOpen = false">Home</router-link>
        <router-link to="/about" class="link" @click="isMenuOpen = false">About me</router-link>
        <router-link to="/projects" class="link" @click="isMenuOpen = false">Projects</router-link>
        <router-link to="/contact" class="link" @click="isMenuOpen = false">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style>
:root {
  --navbar-height: 80px;
}

.navbar {
  width: 100%; /* ocupa todo el ancho del wrapper */
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  background-color: #0d1117;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

/* Contenedor interno del navbar */
.navbar-content {
  width: 100%;

  margin: 0 auto; /* centrado */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

/* Logo */
.logo {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(to bottom, #60a5fa, #1e3a8a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Menú */
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

.link:hover {
  background-color: #21262c;
}

.link.router-link-exact-active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
}

/* Botón menú móvil */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
}

/* Responsividad */
@media (max-width: 768px) {
  .navbar-content {
    flex-wrap: wrap;
    align-items: center;
  }

  .menu-toggle {
    display: block;
  }

  .menu {
    flex-direction: column;
    width: 100%;
    display: none;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .menu.open {
    display: flex;
  }

  .link {
    width: 100%;
    text-align: left;
    padding: 10px;
  }
}
</style>
