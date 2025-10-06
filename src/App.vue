<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Evita scroll horizontal y asegura que padding/border no sumen ancho extra */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* elimina scroll horizontal */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0d1117; /* fondo general */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* evita exceder el ancho */
  justify-content: flex-start;
  width: 100%;
  color: white;
}
</style>
