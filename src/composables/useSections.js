import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

/**
 * One-page Home sections.
 *
 * The Home is a single page split into sections (ids below). The navbar links
 * scroll to them, and while you scroll the section in view is tracked so the
 * navbar can highlight it.
 */

// In page order. Labels are `nav.<id>` in src/locales/*.json.
export const SECTIONS = ['home', 'services', 'process', 'projects', 'about', 'contact']

// Height of the sticky navbar, so a section's title isn't hidden under it
export const NAV_OFFSET = 88

const active = ref(null)
export const activeSection = readonly(active)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Scroll to a Home section (the first one means the very top). */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  const top =
    !el || id === SECTIONS[0] ? 0 : el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

/**
 * Tracks which section is in view. Call it from the Home: a section becomes
 * active when it crosses a thin band a bit above the middle of the screen.
 */
export function useSectionSpy() {
  let observer

  // At the very bottom the last section may never reach the band: force it
  function onScroll() {
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
    if (atBottom) active.value = SECTIONS[SECTIONS.length - 1]
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    active.value ??= SECTIONS[0]
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', onScroll)
    active.value = null
  })
}
