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
        </p>
      </div>

      <form class="contact-form" @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required placeholder="Your name" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="you@email.com"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            placeholder="Tell me about your idea, project or just say hi 🙂"
          ></textarea>
        </div>

        <button type="submit" class="send-btn" :disabled="sending">
          {{ sending ? 'Sending...' : 'Send message' }}
        </button>

        <p v-if="sent" class="success-msg">✅ Message sent successfully!</p>
        <p v-if="error" class="error-msg">❌ Something went wrong. Please try again.</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

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
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    sent.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact-card {
  display: flex;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  width: 100%;
  background-color: #0c1015;
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
  padding: 2rem;
  border-radius: 12px;
}

/* ===== Mantener estilos existentes para el título ===== */
.contact-title {
  font-family: 'Poppins', sans-serif !important;
  font-size: 4.5rem; /* tamaño original */
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap; /* permite que baje de línea si no cabe */
}

.contact-title span {
  font-family: inherit !important;
  font-weight: inherit !important;
  letter-spacing: inherit;
  /* Solo ajustamos TOGETHER */
}

.title-purple {
  color: #6b46c1;
  font-size: clamp(3rem, 6vw, 4.5rem); /* se reduce automáticamente en pantallas estrechas */
}

.title-white {
  color: #ffffff;
}

.contact-subtitle {
  color: #898888;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* ===== Formulario y resto de estilos se mantienen igual ===== */
.contact-form {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.95rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
}

input,
textarea {
  background-color: #0c1015;
  border: 1px solid #2d3748;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #d1d5db;
  font-size: 1rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #6b46c1;
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

/* Mensajes de estado */
.success-msg {
  color: #22c55e;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.error-msg {
  color: #ef4444;
  margin-top: 1rem;
  font-size: 0.95rem;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .card-content {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: start;
  }

  .contact-form,
  .contact-info {
    width: 90%;
    max-width: 600px;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  /* Ajuste solo para TOGETHER */
  .title-purple {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }

  .contact-subtitle {
    font-size: 0.95rem;
  }

  .contact-form {
    width: 95%;
  }
}
</style>
