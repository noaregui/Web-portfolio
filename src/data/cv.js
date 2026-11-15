/**
 * Downloadable CV per language. Files live in public/cv/ and are served as-is.
 *
 * Set a path to show the "Download CV" button for that language; leave it
 * null to hide it. Languages without their own CV use FALLBACK_LOCALE's.
 */

const CV_FILES = {
  en: 'cv/Ainhoa-Leon-CV-en.pdf',
  es: 'cv/Ainhoa-Leon-CV-es.pdf',
}

const FALLBACK_LOCALE = { eu: 'es' }

export function cvUrl(locale) {
  const file = CV_FILES[locale] ?? CV_FILES[FALLBACK_LOCALE[locale]] ?? CV_FILES.en
  return file ? `${import.meta.env.BASE_URL}${file}` : null
}
