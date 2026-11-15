/**
 * Portfolio projects.
 *
 * Each project lives in its own file in this folder and renders at
 * /projects/:slug and as a card in the Projects page (in the order below).
 *
 * To add a project: copy an existing file, change the slug, images and the
 * texts in every language (`content.en`, `content.es`, `content.eu`), then
 * add it to the `projects` list.
 *
 * Projects page card: `icon` (see src/components/ProjectIcon.vue) and `accent`
 * color; `featured` projects get a bigger card that also lists
 * `card.highlights`; `ai` adds an "AI" badge; `tags` are the main technologies
 * (the full list is `technologies`, per language).
 *
 * `images` feeds the carousel on the project page; leave it empty for projects
 * that can't show screenshots (the page then shows only the text).
 *
 * Section `content` items:
 * - a string renders as a paragraph
 * - an array of strings renders as a bullet list
 * Wrap words in **double asterisks** to highlight them.
 */

import { DEFAULT_LOCALE } from '@/i18n'
import aiProcurementCopilot from './ai-procurement-copilot'
import aiMedicalReports from './ai-medical-reports'
import botpress from './botpress'
import chatgpt from './chatgpt'
import meta from './meta'
import nativeappback from './nativeappback'
import nativeappfront from './nativeappfront'
import vapi from './vapi'

export const projects = [
  aiMedicalReports,
  aiProcurementCopilot,
  vapi,
  botpress,
  meta,
  chatgpt,
  nativeappback,
  nativeappfront,
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

/**
 * Returns the project with its texts in `locale`, falling back to the default
 * language when a translation is missing.
 */
export function localizeProject(project, locale) {
  const { content, ...rest } = project
  return { ...rest, ...(content[locale] ?? content[DEFAULT_LOCALE]) }
}
