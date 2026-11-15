/**
 * Work experience shown in the About page, newest first.
 *
 * `projects` lists project slugs (see src/data/projects/) done in that role;
 * they render as links to the project pages.
 */

import { DEFAULT_LOCALE } from '@/i18n'

export const experience = [
  {
    id: 'omnios',
    company: 'Omnios AI',
    projects: [],
    content: {
      en: {
        period: 'March 2026 – Present',
        role: 'Full Stack Developer',
        description:
          'AI-powered SaaS platforms for different sectors: RAG over knowledge bases, agents with tools, real-time voice and multi-tenant backends, from design to production.',
      },
      es: {
        period: 'Marzo 2026 – Actualidad',
        role: 'Full Stack Developer',
        description:
          'Plataformas SaaS con IA para distintos sectores: RAG sobre bases de conocimiento, agentes con herramientas, voz en tiempo real y backends multi-tenant, desde el diseño hasta producción.',
      },
      eu: {
        period: '2026ko martxoa – Gaur egun',
        role: 'Full Stack garatzailea',
        description:
          'Hainbat sektoretarako AA bidezko SaaS plataformak: RAG ezagutza-baseen gainean, tresnadun agenteak, denbora errealeko ahotsa eta multi-tenant backendak, diseinutik produkziora.',
      },
    },
  },
  {
    id: 'rentuos',
    company: 'Rentuos Real Estate',
    projects: ['vapi', 'botpress', 'meta', 'chatgpt', 'nativeappback', 'nativeappfront'],
    content: {
      en: {
        period: 'August 2024 – November 2025',
        role: 'Full Stack Developer',
        description:
          'REST APIs, internal process automation and AI conversational assistants, plus the migration of the backend to a cloud-native architecture with Docker.',
      },
      es: {
        period: 'Agosto 2024 – Noviembre 2025',
        role: 'Full Stack Developer',
        description:
          'APIs REST, automatización de procesos internos y asistentes conversacionales con IA, además de la migración del backend a una arquitectura cloud-native con Docker.',
      },
      eu: {
        period: '2024ko abuztua – 2025eko azaroa',
        role: 'Full Stack garatzailea',
        description:
          'REST APIak, barne-prozesuen automatizazioa eta AA bidezko laguntzaile konbertsazionalak, baita backendaren migrazioa Docker bidezko cloud-native arkitektura batera ere.',
      },
    },
  },
]

/** Returns an entry with its texts in `locale` (falls back to the default language). */
export function localizeEntry(entry, locale) {
  const { content, ...rest } = entry
  return { ...rest, ...(content[locale] ?? content[DEFAULT_LOCALE]) }
}
