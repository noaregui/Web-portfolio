<template>
  <section class="not-found">
    <p class="code">404</p>
    <h1 class="title">
      <span class="title-white">PAGE</span>
      <span class="title-purple"> NOT FOUND</span>
    </h1>
    <p class="subtitle">The page you are looking for doesn't exist or has been moved.</p>
    <div class="actions">
      <RouterLink to="/" class="btn btn-primary">Go home</RouterLink>
      <RouterLink to="/projects" class="btn btn-secondary">See projects</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1.5rem;
  text-align: center;
  font-family: var(--font-display);
  background: var(--color-bg);
}

.code {
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 700;
  line-height: 1;
  color: var(--color-accent);
}

.title {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.5px;
}

.title-white {
  color: var(--color-text-strong);
}

.title-purple {
  color: var(--color-accent);
}

.subtitle {
  max-width: 32rem;
  color: var(--color-text-subtle);
  font-size: 1.05rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  color: var(--color-on-accent);
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background-color: var(--color-button);
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
}

.btn-secondary {
  border: 1px solid var(--color-accent);
  color: var(--color-text-strong);
}

.btn-secondary:hover {
  background-color: color-mix(in srgb, var(--color-accent) 20%, transparent);
}
</style>
