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
 * Section `content` items:
 * - a string renders as a paragraph
 * - an array of strings renders as a bullet list
 * Wrap words in **double asterisks** to highlight them.
 */

import { DEFAULT_LOCALE } from '@/i18n'
import botpress from './botpress'
import chatgpt from './chatgpt'
import meta from './meta'
import nativeappback from './nativeappback'
import nativeappfront from './nativeappfront'
import vapi from './vapi'

export const projects = [vapi, botpress, meta, chatgpt, nativeappback, nativeappfront]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

/**
 * Returns the project with its texts in `locale`, falling back to the default
 * language when a translation is missing.
 */
export function localizeProject(project, locale) {
  const texts = project.content[locale] ?? project.content[DEFAULT_LOCALE]
  return { slug: project.slug, cardImage: project.cardImage, images: project.images, ...texts }
}
