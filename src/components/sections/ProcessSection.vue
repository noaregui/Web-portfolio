<template>
  <div class="process">
    <!-- Left: what to expect -->
    <div class="intro">
      <h2 class="section-title">{{ t('process.title') }}</h2>
      <p class="section-lead">{{ t('process.lead') }}</p>

      <div class="models">
        <p class="label">{{ t('process.modelsTitle') }}</p>
        <ul>
          <li v-for="model in models" :key="model.id" class="model">
            <span class="model-icon"><ProjectIcon :name="model.icon" /></span>
            <span>
              <strong>{{ t(`process.models.${model.id}.title`) }}</strong>
              {{ t(`process.models.${model.id}.text`) }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right: the principles that don't change -->
    <ul class="principles">
      <li v-for="principle in principles" :key="principle.id" class="principle">
        <span class="icon-badge"><ProjectIcon :name="principle.icon" /></span>
        <div>
          <h3>{{ t(`process.principles.${principle.id}.title`) }}</h3>
          <p>{{ t(`process.principles.${principle.id}.text`) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ProjectIcon from '@/components/ProjectIcon.vue'
import { models, principles } from '@/data/services'

const { t } = useI18n()
</script>

<style scoped>
.process {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: 3rem;
  align-items: center;
}

/* ===== Left ===== */
.label {
  margin-bottom: 0.8rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.models ul {
  list-style: none;
  border-top: 1px solid var(--color-border);
}

.model {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.model strong {
  font-weight: 700;
  color: var(--color-text-strong);
}

.model-icon {
  flex-shrink: 0;
  margin-top: 0.1rem;
  color: var(--color-accent-soft);
}

.model-icon :deep(svg) {
  width: 20px;
  height: 20px;
}

/* ===== Right: principle cards ===== */
.principles {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.principle {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  border-radius: 18px;
  background: linear-gradient(
    145deg,
    var(--color-card-gradient-start),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
}

.principle h3 {
  margin-bottom: 0.3rem;
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-strong);
}

.principle p {
  font-size: 0.94rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .process {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .principle {
    padding: 1.2rem;
  }
}
</style>
