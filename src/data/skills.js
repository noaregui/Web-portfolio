/**
 * Skill groups in the About page. Titles and descriptions are translated in
 * src/locales/*.json under `about.skills.<id>`; the items are tech names.
 */

export const skills = [
  {
    id: 'ai',
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
    items: ['TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Vite', 'Ant Design', 'i18n'],
  },
  {
    id: 'cloud',
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
