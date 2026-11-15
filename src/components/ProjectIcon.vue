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
  // Generic icons used by the "How it works" diagrams
  text: ['M4 6h16', 'M4 10h16', 'M4 14h10', 'M4 18h7', 'M17 15v5', 'M15 17.5h4'],
  sparkles: [
    'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z',
    'M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z',
    'M5 15l.6 1.4 1.4.6-1.4.6L5 19l-.6-1.4L3 17l1.4-.6z',
  ],
  document: [
    'M6 3h8l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z',
    'M14 3v5h5',
    'M8.5 13h7',
    'M8.5 17h5',
  ],
  search: ['M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z', 'M15.5 15.5L21 21'],
  folder: ['M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M3 10h18'],
  check: ['M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z', 'M8 12.5l2.8 2.8L16.5 9.5'],
  calendar: [
    'M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
    'M4 10h16',
    'M8 3v4',
    'M16 3v4',
    'M9 15l2 2 4-4',
  ],
  link: [
    'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1',
    'M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  ],
  user: ['M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z', 'M4 21a8 8 0 0 1 16 0'],
  send: ['M21 3L10 14', 'M21 3l-7 18-4-7-7-4z'],
  globe: [
    'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z',
    'M3 12h18',
    'M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z',
  ],
  code: ['M8 7l-5 5 5 5', 'M16 7l5 5-5 5', 'M13.5 4l-3 16'],
  server: [
    'M4 4h16a1 1 0 0 1 1 1v5H3V5a1 1 0 0 1 1-1z',
    'M3 10h18v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z',
    'M7 7h.01',
    'M7 13h.01',
    'M12 16v4',
    'M8 20h8',
  ],
  box: ['M12 3l8 4.5v9L12 21l-8-4.5v-9z', 'M4 7.5l8 4.5 8-4.5', 'M12 12v9'],
}
</script>
