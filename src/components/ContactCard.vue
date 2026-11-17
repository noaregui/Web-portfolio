<template>
  <div class="contact-layout">
    <!-- Info -->
    <header class="contact-info">
      <p class="eyebrow">{{ t('nav.contact') }}</p>
      <h2 class="contact-title">
        {{ t('contact.titleStart') }}
        <span class="accent">{{ t('contact.titleEnd') }}</span>
      </h2>
      <p class="contact-subtitle">{{ t('contact.subtitle') }}</p>

      <ul class="channels">
        <li v-for="link in CHANNELS" :key="link.name">
          <a
            :href="link.href"
            class="channel"
            :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
          >
            <svg class="channel-icon" :viewBox="link.viewBox" aria-hidden="true">
              <path :d="link.path" />
            </svg>
            <span class="channel-name">{{ link.name }}</span>
            <span v-if="link.handle" class="channel-handle">{{ link.handle }}</span>
            <svg class="channel-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </li>
      </ul>
    </header>

    <!-- Form -->
    <form class="contact-form" @submit.prevent="sendMessage">
      <!-- What it's about: guides the visitor and tells me the context up front -->
      <fieldset class="topics">
        <legend>{{ t('contact.topicLabel') }}</legend>
        <p class="topics-hint">{{ t('contact.topicHint') }}</p>
        <div class="topic-list">
          <label
            v-for="topic in TOPICS"
            :key="topic"
            class="topic"
            :class="{ checked: form.topics.includes(topic) }"
          >
            <input
              type="checkbox"
              :value="topic"
              :checked="form.topics.includes(topic)"
              @change="toggleTopic(topic)"
            />
            {{ t(`contact.topics.${topic}`) }}
          </label>
        </div>
      </fieldset>

      <div class="form-row">
        <div class="form-group">
          <label for="name">{{ t('contact.name') }}</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            required
            :placeholder="t('contact.namePlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="email">{{ t('contact.email') }}</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            required
            :placeholder="t('contact.emailPlaceholder')"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="message">{{ t('contact.message') }}</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          required
          :placeholder="t('contact.messagePlaceholder')"
        ></textarea>
      </div>

      <button type="submit" class="btn send-btn" :disabled="sending">
        <span v-if="sending" class="spinner" aria-hidden="true"></span>
        {{ sending ? t('contact.sending') : t('contact.send') }}
        <svg v-if="!sending" class="send-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      <p v-if="sent" class="status status-success" role="status">{{ t('contact.success') }}</p>
      <p v-if="error" class="status status-error" role="alert">{{ t('contact.error') }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { services } from '@/data/services'
import { socialLinks } from '@/data/social'

const { t } = useI18n()
const route = useRoute()

// One per service, plus recruiters and the "I don't know yet" way out.
// Labels: `contact.topics.<id>` in src/locales/*.json
const UNSURE = 'unsure'
const TOPICS = [...services.map((service) => service.id), 'job', 'other', UNSURE]

// Email first: it's the most direct channel
const CHANNELS = [...socialLinks].sort((a, b) => (b.name === 'Email') - (a.name === 'Email'))

const emptyForm = () => ({ topics: [], name: '', email: '', message: '' })
const form = ref(emptyForm())

// "Not sure yet" can't be combined with a concrete topic, and vice versa
function toggleTopic(topic) {
  const topics = form.value.topics
  if (topics.includes(topic)) {
    form.value.topics = topics.filter((item) => item !== topic)
  } else if (topic === UNSURE) {
    form.value.topics = [UNSURE]
  } else {
    form.value.topics = [...topics.filter((item) => item !== UNSURE), topic]
  }
}

// "I'm interested" on a service links here with ?topic=<id>: tick it
watch(
  () => route.query.topic,
  (topic) => {
    if (TOPICS.includes(topic) && !form.value.topics.includes(topic)) toggleTopic(topic)
  },
  { immediate: true },
)

const sending = ref(false)
const sent = ref(false)
const error = ref(false)

function topicsText() {
  return form.value.topics.map((topic) => t(`contact.topics.${topic}`)).join(', ')
}

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
        topics: topicsText(),
        // Topics also go at the top of the message, so they show up even if
        // the EmailJS template doesn't use {{topics}}
        message: form.value.topics.length
          ? `${t('contact.topicsPrefix')}: ${topicsText()}\n\n${form.value.message}`
          : form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    sent.value = true
    form.value = emptyForm()
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact-layout {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  border-radius: 28px;
  /* Dot grid + glows; strengths come from theme.css (--deco-*) */
  background:
    radial-gradient(
        color-mix(in srgb, var(--deco-color) var(--deco-dots), transparent) 1px,
        transparent 1.5px
      )
      0 0 / 22px 22px,
    radial-gradient(
      circle at 8% 10%,
      color-mix(in srgb, var(--deco-color) var(--deco-glow), transparent),
      transparent 45%
    ),
    radial-gradient(
      circle at 100% 100%,
      color-mix(in srgb, #0ea5e9 var(--deco-glow-2), transparent),
      transparent 45%
    ),
    linear-gradient(135deg, var(--color-card-gradient-start), var(--color-card-gradient-end));
  outline: 1px solid color-mix(in srgb, var(--deco-color) var(--deco-outline), transparent);
  outline-offset: -1px;
  box-shadow: var(--shadow-card);
}

/* ===== Info (left) ===== */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 3rem;
}

.eyebrow {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.eyebrow::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-soft);
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.5px;
  color: var(--color-text-strong);
}

.contact-title .accent {
  display: block;
  font-weight: 700;
  color: var(--color-accent-soft);
}

.contact-subtitle {
  max-width: 46ch;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

/* Direct channels: a quiet list separated by hairlines */
.channels {
  list-style: none;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-subtle);
}

.channel {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.8rem 0.25rem;
  border-bottom: 1px solid var(--color-border-subtle);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.channels li:last-child .channel {
  border-bottom: none;
}

.channel:hover {
  color: var(--color-text-strong);
}

.channel:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 6px;
}

.channel-icon {
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  fill: currentColor;
}

.channel-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.channel-handle {
  margin-left: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.9rem;
}

.channel-arrow {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.5;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;
}

/* No handle (Discord): push the arrow to the right edge */
.channel-name + .channel-arrow {
  margin-left: auto;
}

.channel:hover .channel-arrow {
  opacity: 1;
  color: var(--color-accent-soft);
  transform: translate(2px, -2px);
}

/* ===== Form (right), separated by a fading line ===== */
.contact-form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
}

.contact-form::before {
  content: '';
  position: absolute;
  left: 0;
  top: 2.5rem;
  bottom: 2.5rem;
  width: 1px;
  background: linear-gradient(transparent, var(--color-border), transparent);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group:has(textarea) {
  flex: 1;
}

/* Topic chips: real checkboxes, visually hidden, inside pill labels */
.topics {
  margin: 0;
  padding: 0;
  border: none;
  min-width: 0;
}

.topics legend {
  padding: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.topics-hint {
  margin: 0.25rem 0 0.8rem;
  font-size: 0.85rem;
  color: var(--color-text-subtle);
}

.topic-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Overrides the small-caps field label style below */
.topic {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: normal;
  text-transform: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  cursor: pointer;
  user-select: none;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.topic input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.topic:hover {
  border-color: color-mix(in srgb, var(--color-accent) 60%, var(--color-border));
}

.topic.checked {
  color: var(--color-text-strong);
  border-color: var(--color-accent-soft);
  background-color: color-mix(in srgb, var(--color-accent) 16%, transparent);
}

.topic.checked::before {
  content: '✓';
  margin-right: 0.4rem;
  font-weight: 700;
  color: var(--color-accent-soft);
}

.topic:has(input:focus-visible) {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Small caps label that turns purple while its field is focused */
label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.form-group:focus-within label {
  color: var(--color-accent-soft);
}

/*
 * Minimal fields: no box, just a hairline underneath. On focus a purple line
 * grows over it from the left (a background-image, so no layout shift).
 */
input,
textarea {
  width: 100%;
  padding: 0.55rem 0 0.7rem;
  border: none;
  border-bottom: 1px solid var(--color-border);
  border-radius: 0;
  font: inherit;
  font-size: 1.05rem;
  color: var(--color-text-strong);
  background: linear-gradient(var(--color-accent-soft), var(--color-accent-soft)) left bottom / 0
    2px no-repeat;
  transition:
    background-size 0.3s ease,
    border-color 0.2s ease;
}

textarea {
  flex: 1;
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-subtle);
  opacity: 0.7;
}

input:hover,
textarea:hover {
  border-bottom-color: var(--color-text-subtle);
}

input:focus,
textarea:focus {
  outline: none;
  background-size: 100% 2px;
}

.send-btn {
  align-self: flex-end;
}

.send-icon {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.2s ease;
}

.send-btn:hover:not(:disabled) .send-icon {
  transform: translateX(2px);
}

.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, currentColor 30%, transparent);
  border-top-color: currentColor;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.status {
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.95rem;
}

.status-success {
  color: var(--color-success);
  background-color: color-mix(in srgb, var(--color-success) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-success) 35%, transparent);
}

.status-error {
  color: var(--color-error);
  background-color: color-mix(in srgb, var(--color-error) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-error) 35%, transparent);
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-info,
  .contact-form {
    padding: 2.5rem 1.75rem;
  }

  /* Stacked: the divider becomes horizontal */
  .contact-form::before {
    inset: 0 1.75rem auto;
    width: auto;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-border), transparent);
  }
}

@media (max-width: 600px) {
  .contact-info,
  .contact-form {
    padding: 2rem 1.4rem;
  }

  .contact-form::before {
    inset: 0 1.4rem auto;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .send-btn {
    align-self: stretch;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation-duration: 2s;
  }
}
</style>
