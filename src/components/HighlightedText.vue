<template>
  <template v-for="(part, index) in parts" :key="index">
    <span v-if="part.highlight" class="highlight">{{ part.text }}</span>
    <template v-else>{{ part.text }}</template>
  </template>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

// Splits "plain **highlighted** plain" into segments; odd indexes are highlighted.
const parts = computed(() =>
  props.text
    .split('**')
    .map((text, index) => ({ text, highlight: index % 2 === 1 }))
    .filter((part) => part.text),
)
</script>

<style scoped>
.highlight {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-color: #6b46c1;
  text-decoration-thickness: 4px;
  text-underline-offset: 3px;
}
</style>
