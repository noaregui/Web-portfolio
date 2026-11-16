<template>
  <section class="contact">
    <ContactCard />
  </section>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
</script>

<style scoped>
/* Same width and padding as .home / .about so it lines up with navbar and footer */
.contact {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2rem 1rem;
}

@media (max-width: 600px) {
  .contact {
    padding: 1rem 0 0;
  }
}
</style>
