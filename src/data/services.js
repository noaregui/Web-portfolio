/**
 * Services for clients (Home "services" section) and the principles of how I
 * work (Home "process" section).
 *
 * Texts are translated in src/locales/*.json under `services.items.<id>`
 * (title, problem, solutions[]). `icon` is a ProjectIcon name. `projects` lists
 * project slugs (src/data/projects/) that prove the service; they render as
 * links to the project pages.
 */

export const services = [
  {
    id: 'web',
    icon: 'globe',
    projects: [],
  },
  {
    id: 'apps',
    icon: 'code',
    projects: ['nativeappfront', 'nativeappback'],
  },
  {
    id: 'assistants',
    icon: 'sparkles',
    projects: ['ai-medical-reports', 'ai-procurement-copilot'],
  },
  {
    id: 'automation',
    icon: 'link',
    projects: ['meta', 'chatgpt'],
  },
  {
    id: 'voice',
    icon: 'mic',
    projects: ['vapi', 'botpress'],
  },
]

// "How I work" principles: keys under `process.principles.<id>` (title, text)
export const principles = [
  { id: 'direct', icon: 'message' },
  { id: 'business', icon: 'search' },
  { id: 'grow', icon: 'box' },
]

// "Ways to work together": keys under `process.models.<id>` (title, text)
export const models = [
  { id: 'fixed', icon: 'document' },
  { id: 'hourly', icon: 'calendar' },
  { id: 'support', icon: 'check' },
]
