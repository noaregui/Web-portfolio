<template>
  <div class="skills-section">
    <div class="text-content">
      <h2>
        <span class="title-line">BUILDING</span>
        <span class="title-line">DIGITAL EXPERIENCES</span>
      </h2>
      <p>
        I create digital experiences by combining frontend and backend. I build full-featured,
        scalable, and easy-to-maintain web applications, integrating databases, APIs, and
        automations. Check out what I can do!
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.skills-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  background-color: transparent;
  flex-wrap: wrap;
}

.text-content {
  flex: 1;
  min-width: 250px;
}

.skills-section h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #ffffff;
  line-height: 1.2;
}

.title-line {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.skills-section p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #898888;
}

.animation {
  flex-shrink: 0;
}
</style>
