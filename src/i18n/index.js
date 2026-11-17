import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
// Basque is temporarily disabled: its texts stay in the repo (src/locales/eu.json
// and `content.eu` in the data files). To re-enable it, uncomment the three
// lines marked "// eu" in this file.
// import eu from '@/locales/eu.json' // eu

/**
 * Languages.
 *
 * The first visit uses the browser language when it is one of ours, else
 * English. Once the visitor picks a language it is saved and reused.
 *
 * To add a language: add src/locales/<code>.json, register it in `messages`
 * and LOCALES below, and add its texts to each project in src/data/projects/.
 */

export const LOCALES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  // { code: 'eu', label: 'EU', name: 'Euskara' }, // eu
]

export const DEFAULT_LOCALE = 'en'
const STORAGE_KEY = 'locale'
const CODES = LOCALES.map((locale) => locale.code)

function readStoredLocale() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return CODES.includes(value) ? value : null
  } catch {
    return null // storage can be blocked (private mode, disabled cookies)
  }
}

function browserLocale() {
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tag of preferred) {
    const code = tag?.toLowerCase().split('-')[0]
    if (CODES.includes(code)) return code
  }
  return null
}

export const i18n = createI18n({
  legacy: false,
  locale: readStoredLocale() || browserLocale() || DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, es /* , eu */ }, // eu
})

function applyToDocument(code) {
  document.documentElement.lang = code
  document.title = i18n.global.t('meta.title')
}

applyToDocument(i18n.global.locale.value)
watch(i18n.global.locale, applyToDocument)

export function setLocale(code) {
  if (!CODES.includes(code)) return
  i18n.global.locale.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Not persisted, but still applied for this visit.
  }
}
