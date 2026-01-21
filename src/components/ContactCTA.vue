<template>
  <div class="contact-card cta">
    <div class="contact-info">
      <h2 class="contact-title">
        <span class="title-white">LET'S WORK</span>
        <span class="title-purple"> TOGETHER</span>
      </h2>

      <p class="contact-subtitle">
        If you have an idea, project, or just want to say hi, let’s talk.
      </p>

      <RouterLink to="/contact" class="cta-btn" alt="contact me">
        <i>C</i>
        <i>o</i>
        <i>n</i>
        <i>t</i>
        <i>a</i>
        <i>c</i>
        <i>t</i>
        <i>&nbsp;</i>
        <i>m</i>
        <i>e</i>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.contact-card {
  background: linear-gradient(135deg, #131924 0%, #1e232e 100%);
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}

.contact-info {
  text-align: center;
  max-width: 500px;
}

.contact-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-title span {
  font-weight: 700;
}

.title-white {
  color: #fff;
}

.title-purple {
  color: #a37feb;
}

.contact-subtitle {
  color: #ccc;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* CTA button */
.cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 20px;
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  background-color: #632abe;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 7px 0px #3f0fa5;
  transition: 31ms cubic-bezier(0.5, 0.7, 0.4, 1);
  text-decoration: none;
}

.cta-btn:before {
  content: attr(alt);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  opacity: 1;
}

.cta-btn:active {
  transform: translateY(7px);
  box-shadow: none;
  transition: 35ms cubic-bezier(0.5, 0.7, 0.4, 1);
}

.cta-btn:hover:before {
  transform: translateY(100%);
  opacity: 0;
  transition: all 0s;
}

.cta-btn i {
  color: white;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 4px;
  font-style: normal;
  transition: all 2s ease;
  transform: translateY(-20px);
  opacity: 0;
}

.cta-btn:hover i {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.2s ease;
}

.cta-btn:hover i:nth-child(1) {
  transition-delay: 0.045s;
}
.cta-btn:hover i:nth-child(2) {
  transition-delay: 0.09s;
}
.cta-btn:hover i:nth-child(3) {
  transition-delay: 0.135s;
}
.cta-btn:hover i:nth-child(4) {
  transition-delay: 0.18s;
}
.cta-btn:hover i:nth-child(5) {
  transition-delay: 0.225s;
}
.cta-btn:hover i:nth-child(6) {
  transition-delay: 0.27s;
}
.cta-btn:hover i:nth-child(7) {
  transition-delay: 0.315s;
}
.cta-btn:hover i:nth-child(8) {
  transition-delay: 0.36s;
}
.cta-btn:hover i:nth-child(9) {
  transition-delay: 0.405s;
}
.cta-btn:hover i:nth-child(10) {
  transition-delay: 0.45s;
}
</style>
