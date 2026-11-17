import { readonly, ref } from 'vue'

/**
 * Light/dark theme.
 *
 * The active theme lives in <html data-theme="light|dark">. index.html sets it
 * before the app loads (to avoid a flash of the wrong theme); this composable
 * keeps it in sync afterwards.
 *
 * - Dark by default, whatever the OS setting.
 * - Once the visitor toggles it, the choice is saved and reused on later visits.
 */

const STORAGE_KEY = 'theme'
const THEMES = ['light', 'dark']

const DEFAULT_THEME = 'dark'

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return THEMES.includes(value) ? value : null
  } catch {
    return null // storage can be blocked (private mode, disabled cookies)
  }
}

function applyTheme(value) {
  document.documentElement.dataset.theme = value
}

const theme = ref(document.documentElement.dataset.theme || readStoredTheme() || DEFAULT_THEME)
applyTheme(theme.value)

function setTheme(value) {
  if (!THEMES.includes(value)) return
  theme.value = value
  applyTheme(value)
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Not persisted, but still applied for this visit.
  }
}

function toggleTheme() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

export function useTheme() {
  return { theme: readonly(theme), setTheme, toggleTheme }
}
