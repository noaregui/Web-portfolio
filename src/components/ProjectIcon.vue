<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(d, index) in ICONS[name] ?? ICONS.layout" :key="index" :d="d" />
  </svg>
</template>

<script setup>
defineProps({
  // One of the keys below; set per project in src/data/projects/<slug>.js (`icon`)
  name: { type: String, required: true },
})

// Simple 24×24 line icons, one array of path commands per icon
const ICONS = {
  mic: [
    'M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z',
    'M5 11a7 7 0 0 0 14 0',
    'M12 18v3',
    'M9 21h6',
  ],
  scale: [
    'M12 3v18',
    'M7 21h10',
    'M5 7h14',
    'M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
    'M5 7l-3 7a3 3 0 0 0 6 0z',
    'M19 7l-3 7a3 3 0 0 0 6 0z',
  ],
  phone: [
    'M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
    'M15 3a6 6 0 0 1 6 6',
    'M15 7a2 2 0 0 1 2 2',
  ],
  bot: [
    'M5 9h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z',
    'M12 5v4',
    'M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
    'M9 14v1',
    'M15 14v1',
    'M2 13v3',
    'M22 13v3',
  ],
  message: [
    'M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z',
    'M8 11.5h.01',
    'M12 11.5h.01',
    'M16 11.5h.01',
  ],
  pen: [
    'M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z',
    'M13.5 6.5l4 4',
    'M19 15l.8 1.7 1.7.8-1.7.8L19 20l-.8-1.7-1.7-.8 1.7-.8z',
  ],
  database: [
    'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3z',
    'M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6',
    'M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  ],
  layout: [
    'M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z',
    'M3 9h18',
    'M9 9v11',
  ],
}
</script>
