<template>
  <header class="navbar">
    <div class="navbar-content">
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>
    </div>

    <nav class="menu" :class="{ open: isMenuOpen }">
      <router-link to="/" class="link" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/about" class="link" @click="isMenuOpen = false">About me</router-link>
      <router-link to="/projects" class="link" @click="isMenuOpen = false">Projects</router-link>
      <router-link to="/contact" class="link" @click="isMenuOpen = false">Contact</router-link>
    </nav>
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0d1117;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  height: var(--navbar-height);
}

.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  gap: 0;
  padding: 0 1rem;
}

.menu.open {
  max-height: 500px;
  gap: 0.5rem;
}

.link {
  text-decoration: none;
  color: white;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.link:hover {
  background-color: #21262c;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .menu {
    flex-direction: column;
    gap: 0;
  }

  .menu.open {
    gap: 0.5rem;
  }

  .link {
    width: 100%;
    text-align: left;
  }
}

@media (min-width: 769px) {
  .navbar {
    flex-direction: row;
    align-items: center;
  }

  .menu {
    flex-direction: row;
    justify-content: flex-start;
    max-height: none;
    overflow: visible;
    gap: 1rem;
    padding: 0 1rem;
  }

  .link {
    padding: 8px 16px;
  }

  .menu-toggle {
    display: none;
  }
}
</style>
