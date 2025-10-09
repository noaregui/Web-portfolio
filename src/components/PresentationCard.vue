<template>
  <div class="card">
    <div class="card-content">
      <!-- 🖼️ Contenedor horizontal: imagen a la izquierda y texto a la derecha -->
      <div class="header-content">
        <div class="image-placeholder"></div>
        <div class="text-header">
          <h1>Hola, soy <span class="highlight">Ainhoa</span>✨</h1>
          <p class="subtitle">Desarrolladora Full Stack</p>
        </div>
      </div>

      <!-- 📝 Descripción personal -->
      <p class="description">
        Me gusta transformar ideas en soluciones web eficientes y en experiencias digitales
        intuitivas, combinando frontend y backend de manera sencilla y efectiva.
      </p>

      <!-- 🌐 Redes sociales -->
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
          href="mailto:noareguileon@gmail.com"
          aria-label="Gmail"
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
</template>

<script setup>
// 🧩 Aquí se podrían añadir props para parametrizar contenido (nombre, título, redes)
</script>

<style scoped>
/* --- 🎨 Card base full-width --- */
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: #0c1015;
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  box-sizing: border-box;
}
#0C1016 #0B0F14 .card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
}

/* --- 🖼️ Header imagen + texto --- */
.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.image-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2f81f7, #1e40af);
  opacity: 0.5;
  flex-shrink: 0;
}

.text-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.highlight {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  color: #9ca3af;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #d1d5db;
}

/* --- Redes sociales --- */
.social-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  flex-wrap: wrap;
}

.socialContainer {
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.containerOne:hover {
  background-color: #171515;
}
.containerTwo:hover {
  background-color: #0072b1;
}
.containerThree:hover {
  background-color: #5865f2;
}
.containerFour:hover {
  background-color: #7b2626;
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

/* --- 📱 Responsividad --- */
@media (max-width: 768px) {
  .card-content {
    align-items: center;
    text-align: center;
  }

  .header-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-placeholder {
    width: 100px;
    height: 100px;
  }

  .text-header h1 {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .social-card {
    justify-content: center;
    gap: 15px;
  }
}
</style>
