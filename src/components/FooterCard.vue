<template>
  <v-footer class="footer px-6 py-4">
    <!-- LEFT COLUMN -->
    <div class="footer-column">
      <!-- Row 1 -->
      <div class="footer-row">
        <strong>Ainhoa León</strong>
        <span class="role">Frontend Developer · Vue / React</span>
      </div>

      <!-- Row 2 -->
      <div class="footer-row">
        <p>Website built with Vue and Vuetify.</p>
      </div>

      <!-- Row 3 -->
      <div class="footer-row">
        <span class="copyright">
          © {{ new Date().getFullYear() }} Ainhoa León. All rights reserved.
        </span>
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="footer-column footer-column-right">
      <!-- Row 1 -->
      <div class="footer-row">
        <p>Based in Barcelona</p>
      </div>

      <!-- Row 2 -->
      <div class="footer-row">
        <a href="mailto:noareguileon@gmail.com" class="footer-link"> noareguileon@gmail.com </a>
      </div>

      <!-- Row 3 -->
      <div class="footer-row">
        <div class="social-links">
          <a href="https://github.com/noaregui" target="_blank" rel="noopener" class="footer-link">
            GitHub
          </a>
          ·
          <a
            href="https://www.linkedin.com/in/ainhoa-leon-arrieta/"
            target="_blank"
            rel="noopener"
            class="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 4rem;
  background-color: #0c1015;
  color: rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Columns */
.footer-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.footer-column-right {
  text-align: right;
}

/* Rows = aligned horizontal bands */
.footer-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.9rem;
}

.footer-row:last-child {
  margin-bottom: 0;
}

.role {
  font-size: 0.85rem;
}

/* Links – clean & elegant */
.footer-link {
  display: inline;
  color: #9bbcff;
  text-decoration: none;
  font-size: 0.9rem;
  background: none;
  outline: none;
  transition:
    color 0.2s ease,
    opacity 0.2s ease,
    transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

.footer-link:hover,
.footer-link:focus-visible {
  color: #c3d7ff;
  opacity: 0.9;
  transform: translateY(-1px);
}

.footer-link:active {
  opacity: 0.7;
  transform: translateY(0);
}

.social-links {
  font-size: 0.9rem;
}

.footer-column-right p {
  margin: 0;
  font-size: 0.9rem;
}

.copyright {
  font-size: 0.8rem;
}

/* Mobile */
@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    text-align: center;
  }

  .footer-column-right {
    text-align: center;
  }
}
</style>
