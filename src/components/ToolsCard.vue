<template>
  <div class="slider-container">
    <div class="slider-track">
      <!-- Slides originales -->
      <div class="slide"><img src="@/assets/javascript.jpg" alt="JS" /></div>
      <div class="slide"><img src="@/assets/typescript.jpg" alt="TS" /></div>
      <div class="slide"><img src="@/assets/python.jpg" alt="Python" /></div>
      <div class="slide"><img src="@/assets/Vue.jpg" alt="Vue" /></div>
      <div class="slide"><img src="@/assets/react.jpg" alt="React" /></div>
      <div class="slide"><img src="@/assets/css3.jpg" alt="CSS3" /></div>
      <div class="slide"><img src="@/assets/Node.jpg" alt="Node" /></div>
      <div class="slide"><img src="@/assets/express.jpg" alt="Express" /></div>
      <div class="slide"><img src="@/assets/flask.jpg" alt="Flask" /></div>
      <div class="slide"><img src="@/assets/rest-api.jpg" alt="REST API" /></div>
      <div class="slide"><img src="@/assets/mysql.jpg" alt="MySQL" /></div>
      <div class="slide"><img src="@/assets/mongodb.jpg" alt="MongoDB" /></div>

      <!-- Clon para loop infinito -->
      <div class="slide"><img src="@/assets/javascript.jpg" alt="JS" /></div>
      <div class="slide"><img src="@/assets/typescript.jpg" alt="TS" /></div>
      <div class="slide"><img src="@/assets/python.jpg" alt="Python" /></div>
      <div class="slide"><img src="@/assets/Vue.jpg" alt="Vue" /></div>
      <div class="slide"><img src="@/assets/react.jpg" alt="React" /></div>
      <div class="slide"><img src="@/assets/css3.jpg" alt="CSS3" /></div>
      <div class="slide"><img src="@/assets/Node.jpg" alt="Node" /></div>
      <div class="slide"><img src="@/assets/express.jpg" alt="Express" /></div>
      <div class="slide"><img src="@/assets/flask.jpg" alt="Flask" /></div>
      <div class="slide"><img src="@/assets/rest-api.jpg" alt="REST API" /></div>
      <div class="slide"><img src="@/assets/mysql.jpg" alt="MySQL" /></div>
      <div class="slide"><img src="@/assets/mongodb.jpg" alt="MongoDB" /></div>
    </div>
  </div>
</template>

<script setup>
// No necesitamos script
</script>

<style scoped>
.slider-container {
  width: 70%; /* margen lateral relativo */
  max-width: 1200px; /* ancho máximo del carrusel */
  margin: 0 auto; /* centra horizontalmente */
  overflow: hidden;
  padding: 20px 0;
}

.slider-track {
  display: flex;
  width: calc(100px * 24); /* 12 iconos * 2 */
  animation: scroll 15s linear infinite;
}

.slide {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  padding: 15px;
  box-sizing: border-box;
}

.slide img {
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.slide:hover img {
  transform: scale(1.1);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100px * 12));
  }
}

/* Responsive */
@media screen and (max-width: 768px) {
  .slider-container {
    width: 95%;
  }
  .slide {
    width: 80px;
    height: 80px;
  }
  .slider-track {
    width: calc(80px * 24);
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-80px * 12));
    }
  }
}

@media screen and (max-width: 480px) {
  .slide {
    width: 60px;
    height: 60px;
  }
  .slider-track {
    width: calc(60px * 24);
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-60px * 12));
    }
  }
}
</style>
