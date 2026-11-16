<template>
  <footer class="footer">
    <div class="footer-inner">
      <span>{{ t('footer.rights', { year }) }}</span>
      <span>{{ t('footer.builtWith') }}</span>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
/*
 * No background of its own: the footer sits on the page background (and the
 * light theme's glows), like the rest of the content.
 */
.footer {
  margin-top: auto;
  padding-top: 5rem;
}

/* Same width and side padding as the page content (.home, etc.) */
.footer-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  font-size: 0.8rem;
  color: var(--color-text-faint);
}

/* Divider that fades out at both ends, aligned with the content */
.footer-inner::before {
  content: '';
  position: absolute;
  inset: 0 2rem auto;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
}

/* Mobile */
@media (max-width: 900px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .footer {
    padding-top: 3.5rem;
  }

  .footer-inner {
    padding: 1.25rem 0 0;
  }

  .footer-inner::before {
    inset: 0 0 auto;
  }
}
</style>
