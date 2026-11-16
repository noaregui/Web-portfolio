/**
 * Skill groups, used in the About page and the Home ("What I do" and the stack).
 * Titles and descriptions are translated in src/locales/*.json under
 * `about.skills.<id>`; the items are tech names. `icon` is a ProjectIcon name.
 * `core` is the short list shown in the Home stack (About shows all `items`).
 */

export const skills = [
  {
    id: 'ai',
    icon: 'sparkles',
    accent: '#8b5cf6',
    core: ['RAG', 'Agents & tool use', 'Structured outputs', 'LLM-as-a-judge', 'Claude', 'Gemini'],
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
    core: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'pgvector', 'WebSockets'],
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
    core: ['TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Vite'],
    items: ['TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Vite', 'Ant Design', 'i18n'],
  },
  {
    id: 'cloud',
    icon: 'box',
    accent: '#f59e0b',
    core: ['AWS Bedrock', 'S3', 'SQS', 'ECS Fargate', 'Docker', 'Claude Code'],
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
