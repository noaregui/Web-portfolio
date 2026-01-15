<script setup>
import FooterCard from './components/FooterCard.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <div class="navbar-wrapper">
      <NavBar />
    </div>

    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer solo usa Vuetify -->
    <FooterCard />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: #0c1016;
  overflow-x: hidden;
}

#app {
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Navbar wrapper */
.navbar-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: block;
}

/* Contenido principal */
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 100vh; */
  box-sizing: border-box;
}

.main-content .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 5rem; /* espacio uniforme entre los hijos de .container */
  padding: 0 1rem; /* padding horizontal si quieres */
}
</style>
