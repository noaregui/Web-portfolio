/**
 * Skill groups, shown in the About section of the Home.
 * Titles and descriptions are translated in src/locales/*.json under
 * `about.skills.<id>`; the items are tech names. `icon` is a ProjectIcon name.
 */

export const skills = [
  {
    id: 'ai',
    icon: 'sparkles',
    accent: '#8b5cf6',
    items: [
      'RAG',
      'Bedrock Knowledge Bases',
      'Agents & tool use',
      'Prompt engineering',
      'Structured outputs',
      'LLM-as-a-judge',
      'Voice AI',
      'Claude',
      'Gemini',
    ],
  },
  {
    id: 'backend',
    icon: 'server',
    accent: '#06b6d4',
    items: [
      'Python',
      'FastAPI',
      'asyncio',
      'Node.js',
      'Express',
      'PostgreSQL',
      'pgvector',
      'SQLAlchemy',
      'MongoDB',
      'REST APIs',
      'WebSockets',
    ],
  },
  {
    id: 'frontend',
    icon: 'layout',
    accent: '#ec4899',
    items: ['TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Vite', 'Ant Design', 'i18n'],
  },
  {
    id: 'cloud',
    icon: 'box',
    accent: '#f59e0b',
    items: [
      'AWS Bedrock',
      'S3',
      'SQS',
      'Transcribe',
      'ECS Fargate',
      'Cognito',
      'Docker',
      'Bitbucket Pipelines',
      'pytest',
      'Claude Code',
      'Spec-Driven Development',
    ],
  },
]
