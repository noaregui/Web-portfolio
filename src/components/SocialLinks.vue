<template>
  <ul class="social">
    <li v-for="link in LINKS" :key="link.name">
      <a
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.name"
        :title="link.name"
        :style="{ '--brand': link.brand }"
      >
        <svg :viewBox="link.viewBox" aria-hidden="true"><path :d="link.path" /></svg>
      </a>
    </li>
  </ul>
</template>

<script setup>
// Social / contact links shown in the home hero
const LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/noaregui',
    brand: '#6e7681',
    viewBox: '0 0 24 24',
    path: 'M12 .297a12 12 0 0 0-3.793 23.406c.6.112.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416a3.183 3.183 0 0 0-1.335-1.756c-1.09-.746.083-.73.083-.73a2.525 2.525 0 0 1 1.842 1.238 2.563 2.563 0 0 0 3.5 1 2.56 2.56 0 0 1 .764-1.61c-2.665-.3-5.467-1.335-5.467-5.933A4.648 4.648 0 0 1 5.44 8.49a4.307 4.307 0 0 1 .116-3.18s1.006-.322 3.3 1.23a11.389 11.389 0 0 1 6 0c2.292-1.552 3.296-1.23 3.296-1.23a4.307 4.307 0 0 1 .117 3.18 4.648 4.648 0 0 1 1.238 3.223c0 4.61-2.807 5.63-5.48 5.923a2.876 2.876 0 0 1 .82 2.225v3.293c0 .32.216.694.825.576A12.003 12.003 0 0 0 12 .297Z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ainhoa-leon-arrieta/',
    brand: '#0a66c2',
    viewBox: '0 0 448 512',
    path: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1a53.79 53.79,0,1,1,0-107.58,53.79,53.79,0,0,1,0,107.58ZM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29,0-55.69,37.7-55.69,76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5,42.69-48.3,87.88-48.3,94,0,111.28,61.9,111.28,142.3V448z',
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/1171855914656088157',
    brand: '#5865f2',
    viewBox: '0 0 24 24',
    path: 'M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0a12.36 12.36 0 0 0-.617-1.249.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.68 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.138 13.138 0 0 1-1.874-.9.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.791 8.18 1.791 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.372.292a.077.077 0 0 1-.006.127 12.532 12.532 0 0 1-1.875.899.076.076 0 0 0-.04.106c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.876 19.876 0 0 0 6.002-3.031.077.077 0 0 0 .03-.055c.5-5.177-.838-9.676-3.548-13.661a.061.061 0 0 0-.031-.03Zm-12.66 9.268c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.096 2.157 2.419 0 1.334-.955 2.419-2.157 2.419Zm8.683 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.096 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z',
  },
  {
    name: 'Email',
    href: 'mailto:noareguileon@gmail.com',
    brand: '#ea4335',
    viewBox: '0 0 24 24',
    path: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5Z',
  },
]
</script>

<style scoped>
.social {
  display: flex;
  gap: 0.75rem;
  list-style: none;
}

.social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: var(--color-text-strong);
  background-color: var(--color-surface-hover);
  outline: 1px solid var(--color-card-outline);
  outline-offset: -1px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.social a:hover {
  color: #ffffff;
  background-color: var(--brand);
  transform: translateY(-2px);
}

.social a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.social svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
