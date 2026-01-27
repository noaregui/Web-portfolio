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
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.navbar-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: block;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

.main-content .container {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 5rem;
  padding: 0;
}
</style>
