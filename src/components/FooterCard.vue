<template>
  <footer class="footer">
    <!-- LEFT COLUMN -->
    <div class="footer-column">
      <!-- Row 1 -->
      <div class="footer-row">
        <strong>Ainhoa León</strong>
        <span class="role">{{ t('footer.role') }}</span>
      </div>

      <!-- Row 2 -->
      <div class="footer-row">
        <p>{{ t('footer.builtWith') }}</p>
      </div>

      <!-- Row 3 -->
      <div class="footer-row">
        <span class="copyright">{{ t('footer.rights', { year }) }}</span>
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="footer-column footer-column-right">
      <!-- Row 1 -->
      <div class="footer-row">
        <p>{{ t('footer.location') }}</p>
      </div>

      <!-- Row 2 -->
      <div class="footer-row">
        <a href="mailto:noareguileon@gmail.com" class="footer-link"> noareguileon@gmail.com </a>
      </div>

      <!-- Row 3 -->
      <div class="footer-row">
        <div class="social-links">
          <a
            href="https://github.com/noaregui"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            GitHub
          </a>
          ·
          <a
            href="https://www.linkedin.com/in/ainhoa-leon-arrieta/"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  /* Layout previously provided by Vuetify's <v-footer> and px-6/py-4 utilities */
  position: relative;
  flex: 1 1 auto;
  align-items: center;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 4rem;
  background-color: var(--color-bg);
  color: var(--color-text-faint);
  border-top: 1px solid var(--color-border-subtle);
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
  padding: 3px;
  color: var(--color-link);
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
  color: var(--color-link-hover);
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
