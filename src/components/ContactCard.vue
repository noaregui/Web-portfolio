<template>
  <div class="card contact-card">
    <div class="card-content">
      <div class="contact-info">
        <h2 class="contact-title">
          <span class="title-white">LET'S WORK</span>
          <span class="title-purple"> TOGETHER</span>
        </h2>
        <p class="contact-subtitle">
          If you have an idea, project, or just want to say hi, fill out the form and I’ll get back
          to you as soon as possible.
          <!-- Si tienes una idea, proyecto o simplemente quieres saludar, completa el formulario y te
          responderé lo antes posible. -->
        </p>
      </div>

      <form class="contact-form" @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="form.name" required placeholder="Tu nombre" />
        </div>

        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" v-model="form.email" required placeholder="tu@email.com" />
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button type="submit" class="send-btn" :disabled="sending">
          {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
        </button>

        <p v-if="sent" class="success-msg">✅ ¡Mensaje enviado con éxito!</p>
        <p v-if="error" class="error-msg">❌ Ocurrió un error. Inténtalo de nuevo.</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const sending = ref(false)
const sent = ref(false)
const error = ref(false)

const sendMessage = async () => {
  sending.value = true
  sent.value = false
  error.value = false

  try {
    // Aquí tu lógica real de envío (API, etc)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    sent.value = true
    form.value = { name: '', email: '', message: '' }
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
/* Variables de color morado elegantes */
:root {
  --color-bg-card: #0c1015;
  --color-light-bg: #1a1f25;
  --color-primary: #6b46c1; /* morado medio */
  --color-primary-hover: #553c9a;
  --color-text-light: #d1d5db;
  --color-text-secondary: #9ca3af;
  --color-border: #2d3748;
  --color-success: #22c55e;
  --color-error: #ef4444;
}

@keyframes shift-bg {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

.contact-card {
  display: flex;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  width: 100%;
  background-color: var(--color-bg-card);
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  flex-wrap: wrap;
}

.contact-info {
  flex: 1;
  min-width: 280px;
  background-color: var(--color-light-bg);
  padding: 2rem;
  border-radius: 12px;
}

.contact-title {
  font-size: clamp(2.5rem, 3vw, 3rem);
  font-weight: 700;
  color: var(--color-light-bg);
  margin-bottom: 0.75rem;
}

.contact-subtitle {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}

.contact-form {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--color-light-bg);
  padding: 2rem;
  border-radius: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

input,
textarea {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: var(--color-text-light);
  font-size: 1rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 8px rgba(107, 70, 193, 0.4);
}

.send-btn {
  background-color: #642fae;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.send-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(51, 28, 105, 0.4);
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-msg,
.error-msg {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.success-msg {
  color: var(--color-success);
}

.error-msg {
  color: var(--color-error);
}

.contact-info {
  width: 100%;
  margin-top: 2rem;
  background-color: transparent;
  text-align: left;
}

.contact-info h2 {
  font-family: 'Poppins', sans-serif !important;
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #ffffff;
}

/* ✅ forzamos que los spans hereden el mismo estilo de fuente */
.contact-info h2 span {
  font-family: inherit !important;
  font-weight: inherit !important;
  letter-spacing: inherit;
  font-size: inherit;
}

.title-white {
  color: #ffffff; /* Gris más suave, menos visible */
}

.title-purple {
  color: #6b46c1; /* Morado de tu paleta */
}

.contact-info p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #898888;
}

/* Responsive */
@media (max-width: 900px) {
  .card-content {
    flex-direction: column;
    gap: 0;
    align-items: center;
    text-align: start;
  }

  .contact-form {
    width: 90%;
    max-width: 600px;
  }

  .contact-info {
    width: 90%;
    max-width: 600px;
    padding: 1rem;
  }
}
</style>
