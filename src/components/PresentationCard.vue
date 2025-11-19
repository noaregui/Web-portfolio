<template>
  <!-- Card ocupando todo el container -->
  <div class="container">
    <div class="card">
      <div class="card-content">
        <!-- Header imagen + texto -->
        <div class="header-content">
          <div class="image-placeholder">
            <img src="@/assets/Avatar_web_sin_fondo.jpg" alt="AvatarPrueba" />
          </div>
          <div class="text-header">
            <h1>Hi, I'm <span class="highlight">Ainhoa</span>✨</h1>
            <p class="subtitle">Full Stack Developer</p>
            <div class="animation" @click="playAudioAndAnimate">
              <div class="loader" ref="loaderRef">
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
            </div>
          </div>
        </div>

        <!-- Descripción personal -->
        <p class="description">
          I enjoy turning ideas into efficient web solutions and creating intuitive digital
          experiences, combining frontend and backend in a simple and effective way.
          <!-- Me gusta transformar ideas en soluciones web eficientes y en experiencias digitales
          intuitivas, combinando frontend y backend de manera sencilla y efectiva. -->
        </p>

        <!-- Redes sociales -->
        <div class="social-card">
          <!-- GitHub -->
          <a
            class="socialContainer containerOne"
            href="https://github.com/noaregui"
            target="_blank"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" class="socialSvg">
              <path
                d="M12 .297a12 12 0 0 0-3.793 23.406c.6.112.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416a3.183 3.183 0 0 0-1.335-1.756c-1.09-.746.083-.73.083-.73a2.525 2.525 0 0 1 1.842 1.238 2.563 2.563 0 0 0 3.5 1 2.56 2.56 0 0 1 .764-1.61c-2.665-.3-5.467-1.335-5.467-5.933A4.648 4.648 0 0 1 5.44 8.49a4.307 4.307 0 0 1 .116-3.18s1.006-.322 3.3 1.23a11.389 11.389 0 0 1 6 0c2.292-1.552 3.296-1.23 3.296-1.23a4.307 4.307 0 0 1 .117 3.18 4.648 4.648 0 0 1 1.238 3.223c0 4.61-2.807 5.63-5.48 5.923a2.876 2.876 0 0 1 .82 2.225v3.293c0 .32.216.694.825.576A12.003 12.003 0 0 0 12 .297Z"
              />
            </svg>
          </a>
          <!-- LinkedIn -->
          <a
            class="socialContainer containerTwo"
            href="https://www.linkedin.com/in/ainhoa-leon-arrieta/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 448 512" class="socialSvg">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1a53.79 53.79,0,1,1,0-107.58,53.79,53.79,0,0,1,0,107.58ZM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29,0-55.69,37.7-55.69,76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5,42.69-48.3,87.88-48.3,94,0,111.28,61.9,111.28,142.3V448z"
              />
            </svg>
          </a>
          <!-- Discord -->
          <a
            class="socialContainer containerThree"
            href="https://discord.com/users/1171855914656088157"
            target="_blank"
            aria-label="Discord"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="socialSvg">
              <path
                d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0a12.36 12.36 0 0 0-.617-1.249.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.68 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.138 13.138 0 0 1-1.874-.9.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.791 8.18 1.791 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.372.292a.077.077 0 0 1-.006.127 12.532 12.532 0 0 1-1.875.899.076.076 0 0 0-.04.106c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.876 19.876 0 0 0 6.002-3.031.077.077 0 0 0 .03-.055c.5-5.177-.838-9.676-3.548-13.661a.061.061 0 0 0-.031-.03Zm-12.66 9.268c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.096 2.157 2.419 0 1.334-.955 2.419-2.157 2.419Zm8.683 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.096 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z"
                fill="white"
              />
            </svg>
          </a>
          <!-- Gmail -->
          <a
            class="socialContainer containerFour"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=noareguileon@gmail.com"
            target="_blank"
            aria-label="Gmail"
            style="position: relative; z-index: 10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="socialSvg">
              <path
                fill="white"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import audioFile from '@/assets/audio.mp3'
import { ref } from 'vue'

const loaderRef = ref(null)

const playAudioAndAnimate = () => {
  const audio = new Audio(audioFile)
  audio.play()

  if (loaderRef.value) {
    loaderRef.value.classList.add('playing')

    audio.onended = () => {
      loaderRef.value.classList.remove('playing')
    }
  }
}

// props opcionales
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.card {
  width: 100%;
  min-height: 500px;
  height: auto;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0c1015;
  background-image:
    radial-gradient(circle at 50% 50%, rgba(8, 126, 126, 0.3) 1px, transparent 0),
    linear-gradient(rgba(138, 43, 226, 0.15) 1px, transparent 0),
    linear-gradient(90deg, rgba(29, 78, 216, 0.15) 1px, transparent 0);
  background-size:
    40px 40px,
    20px 20px,
    20px 20px;
  background-repeat: repeat;
  box-sizing: border-box;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.image-placeholder {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #0e1217;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-header h1 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.highlight {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  background-color: #4d3ee6;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: #9ca3af;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #d1d5db;
  text-align: center;
}

.social-card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.socialContainer {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.containerOne:hover {
  background-color: #171515;
}
.containerTwo:hover {
  background-color: #0a66c2;
}
.containerThree:hover {
  background-color: #535fee;
}
.containerFour:hover {
  background-color: #bf1f1f;
}

.socialSvg {
  width: 60%;
  height: 60%;
}
.socialSvg path {
  fill: #fff;
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .card {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .card {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }
  .header-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .text-header h1 {
    font-size: 1.75rem;
  }
  .description {
    font-size: 0.95rem;
  }
}

.animation {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
}

.loader {
  --time-animation: 4s;
  --size: 0.45;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--size));
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  animation: color-phases 9s ease-in-out infinite;
  box-shadow:
    0 0 25px 0 var(--color-three),
    0 0px 50px 0 var(--color-four);
  transition: all 0.3s ease-in-out;
}

.loader::before {
  content: '';
  position: relative;
  inset: 0;
  border-radius: 50%;
  border-top: solid 1px var(--color-one);
  border-bottom: solid 1px var(--color-two);
  background: linear-gradient(180deg, var(--color-five), var(--color-four));
  box-shadow:
    inset 0 10px 10px 0 var(--color-three),
    inset 0 -10px 10px 0 var(--color-four);
  width: 170px;
  height: 170px;
}

.loader .box {
  width: 100px;
  height: 100px;
  background: linear-gradient(180deg, var(--color-one) 30%, var(--color-two) 70%);
  mask: url(#clipping);
  -webkit-mask: url(#clipping);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
}

.loader svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader svg #clipping {
  filter: contrast(15);
  animation: roundness calc(var(--time-animation) / 2) linear infinite;
}

.loader svg #clipping polygon {
  filter: blur(7px);
}

.loader svg #clipping polygon:nth-child(1) {
  transform-origin: 75% 25%;
  transform: rotate(90deg);
}

.loader svg #clipping polygon:nth-child(2) {
  transform-origin: 50% 50%;
  animation: rotation var(--time-animation) linear infinite reverse;
}

.loader svg #clipping polygon:nth-child(3) {
  transform-origin: 50% 60%;
  animation: rotation var(--time-animation) linear infinite;
  animation-delay: calc(var(--time-animation) / -3);
}

.loader svg #clipping polygon:nth-child(4) {
  transform-origin: 40% 40%;
  animation: rotation var(--time-animation) linear infinite reverse;
}

.loader svg #clipping polygon:nth-child(5) {
  transform-origin: 40% 40%;
  animation: rotation var(--time-animation) linear infinite reverse;
  animation-delay: calc(var(--time-animation) / -2);
}

.loader svg #clipping polygon:nth-child(6) {
  transform-origin: 60% 40%;
  animation: rotation var(--time-animation) linear infinite;
}

.loader svg #clipping polygon:nth-child(7) {
  transform-origin: 60% 40%;
  animation: rotation var(--time-animation) linear infinite;
  animation-delay: calc(var(--time-animation) / -1.5);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes roundness {
  0% {
    filter: contrast(15);
  }
  20% {
    filter: contrast(3);
  }
  40% {
    filter: contrast(3);
  }
  60% {
    filter: contrast(15);
  }
  100% {
    filter: contrast(15);
  }
}

/* 🔹 Animación de fases de color controladas */
@keyframes color-phases {
  0%,
  100% {
    --color-one: #f8960c;
    --color-two: #f7940b;
    --color-three: #fea05b;
    --color-four: #fec22a;
    --color-five: #ffd262;
  }
}
.loader:hover {
  transform: translate(-50%, -50%) scale(calc(var(--size) * 1.1)); /* 10% más grande */
  box-shadow:
    0 0 35px 0 var(--color-three),
    0 0 70px 0 var(--color-four);
  cursor: pointer;
}

/* Para suavizar la transición de colores */
.loader,
.loader.playing {
  transition: all 0.3s ease-in-out;
}

.loader.playing {
  animation: talking-color 2s ease-in-out infinite alternate;
}

/* Mientras se está reproduciendo */
.loader.playing {
  --color-one: #f8a024;
  --color-two: #f8a024;
  --color-three: #fea05b;
  --color-four: #ffd262;
  --color-five: #ffd262;

  /* Animación tipo “pulse” */
  animation: pulse 1s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(calc(var(--size) * 1));
  }
  50% {
    transform: translate(-50%, -50%) scale(calc(var(--size) * 1.1)); /* 10% más grande */
  }
  100% {
    transform: translate(-50%, -50%) scale(calc(var(--size) * 1));
  }
}

@keyframes talking-color {
  0%,
  100% {
    --color-one: #f8a024;
    --color-two: #f8a024;
    --color-three: #fea05b;
    --color-four: #ffd262;
    --color-five: #ffd262;
  }
}
</style>
