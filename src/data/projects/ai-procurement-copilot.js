// Work project at Omnios AI: described only, no code or screenshots can be shown.
export default {
  slug: 'ai-procurement-copilot',
  featured: true,
  icon: 'scale',
  accent: '#8b5cf6',
  ai: true,
  tags: ['AI agents', 'RAG', 'pgvector', 'FastAPI', 'React'],
  flowIcons: ['search', 'document', 'folder', 'sparkles', 'check'],
  content: {
    en: {
      title: 'AI Copilot for Public Procurement',
      card: {
        name: 'AI public procurement copilot',
        summary:
          'Helps teams manage public tenders and draft their documents with an AI agent and a legal rules engine.',
        highlights: [
          'Agent with tool use that knows the open document',
          'Procedures validated by a legal rules engine',
          'Drafting based on similar past examples',
        ],
      },
      flow: [
        { title: 'Tender search', text: 'Public tenders collected automatically' },
        { title: 'Ingestion', text: 'Text extraction, chunking and embeddings' },
        { title: 'Case file', text: 'Documents organised per tender' },
        { title: 'AI agent', text: 'Drafts with tool use and past examples' },
        { title: 'Rules engine', text: 'Validates the procedure against the law' },
      ],
      sections: [
        {
          heading: 'What is it?',
          content: [
            'A copilot for teams that prepare public tenders. It gathers and indexes tender documents, and helps users manage each **case file** and draft their documents with the support of a **conversational agent**.',
            'Key decisions, such as which procurement procedure applies, are checked by a **rules engine** based on public procurement law: the AI suggests and the rules validate.',
            [
              'Case-file management with autosave, versioning and document alerts',
              'Conversational agent that knows what the user is working on',
              'Document drafting based on similar past examples',
              'Procedure validated by a legal rules engine',
              'Multi-tenant platform',
            ],
          ],
        },
        {
          heading: 'Development',
          content: [
            'I worked across the whole product as part of a small team: the agent, the backend, the frontend and the cloud.',
            'The agent uses **tool use** and **structured outputs** that drive the React/TypeScript interface directly, and its edits are merged with the user’s autosaves without overwriting either.',
            'Documents go through an ingestion pipeline (text extraction, chunking and embeddings) into a vector database that powers **RAG** and the search for similar examples.',
            [
              'Skill-based agent with Claude on AWS Bedrock',
              'RAG with embeddings on PostgreSQL + pgvector',
              'Multi-tenant backend with FastAPI, async SQLAlchemy and Alembic',
              'Asynchronous document processing with S3 and SQS workers',
              'Strict typing and automated tests in CI',
            ],
          ],
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'pgvector',
        'React',
        'TypeScript',
        'Ant Design',
        'AWS Bedrock (Claude)',
        'Titan Embeddings',
        'S3',
        'SQS',
        'Cognito',
        'Docker',
        'Bitbucket Pipelines',
      ],
    },
    es: {
      title: 'Copiloto de contratación pública con IA',
      card: {
        name: 'Copiloto de contratación pública con IA',
        summary:
          'Ayuda a gestionar licitaciones públicas y a redactar sus documentos con un agente de IA y un motor de reglas legales.',
        highlights: [
          'Agente con tool use que conoce el documento abierto',
          'Procedimientos validados por un motor de reglas legales',
          'Redacción a partir de ejemplos similares',
        ],
      },
      flow: [
        {
          title: 'Búsqueda de licitaciones',
          text: 'Licitaciones públicas recopiladas automáticamente',
        },
        { title: 'Ingesta', text: 'Extracción de texto, troceado y embeddings' },
        { title: 'Expediente', text: 'Documentos organizados por licitación' },
        { title: 'Agente de IA', text: 'Redacta con tool use y ejemplos anteriores' },
        { title: 'Motor de reglas', text: 'Valida el procedimiento según la ley' },
      ],
      sections: [
        {
          heading: '¿Qué es?',
          content: [
            'Un copiloto para los equipos que preparan licitaciones públicas. Recopila e indexa la documentación de las licitaciones y ayuda a gestionar cada **expediente** y a redactar sus documentos con el apoyo de un **agente conversacional**.',
            'Las decisiones clave, como qué procedimiento de contratación corresponde, las comprueba un **motor de reglas** basado en la ley de contratos del sector público: la IA propone y las reglas validan.',
            [
              'Gestión de expedientes con autoguardado, versiones y alertas sobre documentos',
              'Agente conversacional que sabe en qué está trabajando el usuario',
              'Redacción de documentos a partir de ejemplos similares anteriores',
              'Procedimiento validado por un motor de reglas legales',
              'Plataforma multi-tenant',
            ],
          ],
        },
        {
          heading: 'Desarrollo',
          content: [
            'He trabajado en todo el producto como parte de un equipo pequeño: el agente, el backend, el frontend y el cloud.',
            'El agente usa **tool use** y **salidas estructuradas** que alimentan directamente la interfaz en React/TypeScript, y sus cambios se combinan con el autoguardado del usuario sin que ninguno sobrescriba al otro.',
            'Los documentos pasan por un pipeline de ingesta (extracción de texto, troceado y embeddings) hasta una base de datos vectorial que alimenta el **RAG** y la búsqueda de ejemplos similares.',
            [
              'Agente basado en skills con Claude en AWS Bedrock',
              'RAG con embeddings sobre PostgreSQL + pgvector',
              'Backend multi-tenant con FastAPI, SQLAlchemy asíncrono y Alembic',
              'Procesamiento asíncrono de documentos con S3 y workers de SQS',
              'Tipado estricto y tests automatizados en CI',
            ],
          ],
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'pgvector',
        'React',
        'TypeScript',
        'Ant Design',
        'AWS Bedrock (Claude)',
        'Titan Embeddings',
        'S3',
        'SQS',
        'Cognito',
        'Docker',
        'Bitbucket Pipelines',
      ],
    },
    eu: {
      title: 'Kontratazio publikorako AA kopilotua',
      card: {
        name: 'Kontratazio publikorako AA kopilotua',
        summary:
          'Lizitazio publikoak kudeatzen eta haien dokumentuak idazten laguntzen du, AA agente baten eta arau juridikoen motor baten bidez.',
        highlights: [
          'Irekitako dokumentua ezagutzen duen tool use agentea',
          'Arau juridikoen motor batek balioztatutako prozedurak',
          'Antzeko adibideetan oinarritutako idazketa',
        ],
      },
      flow: [
        { title: 'Lizitazioen bilaketa', text: 'Lizitazio publikoak automatikoki bilduta' },
        { title: 'Ingesta', text: 'Testu-erauzketa, zatiketa eta embeddingak' },
        { title: 'Espedientea', text: 'Dokumentuak lizitazioka antolatuta' },
        { title: 'AA agentea', text: 'Tool use eta aurreko adibideekin idazten du' },
        { title: 'Arau-motorra', text: 'Prozedura legearen arabera balioztatzen du' },
      ],
      sections: [
        {
          heading: 'Zer da?',
          content: [
            'Lizitazio publikoak prestatzen dituzten taldeentzako kopilotua. Lizitazioen dokumentazioa bildu eta indexatzen du, eta **espediente** bakoitza kudeatzen eta haren dokumentuak idazten laguntzen du, **agente konbertsazional** baten laguntzarekin.',
            'Erabaki garrantzitsuak, hala nola zer kontratazio-prozedura dagokion, sektore publikoko kontratuen legean oinarritutako **arau-motor** batek egiaztatzen ditu: AAk proposatzen du eta arauek balioztatzen dute.',
            [
              'Espedienteen kudeaketa, gordetze automatikoarekin, bertsioekin eta dokumentuei buruzko alertekin',
              'Erabiltzailea zertan ari den dakien agente konbertsazionala',
              'Dokumentuak idaztea aurreko antzeko adibideetan oinarrituta',
              'Arau juridikoen motor batek balioztatutako prozedura',
              'Multi-tenant plataforma',
            ],
          ],
        },
        {
          heading: 'Garapena',
          content: [
            'Produktu osoan aritu naiz talde txiki bateko kide gisa: agentean, backendean, frontendean eta hodeian.',
            'Agenteak **tool use** eta **irteera egituratuak** erabiltzen ditu, React/TypeScript interfazea zuzenean elikatzen dutenak, eta haren aldaketak erabiltzailearen gordetze automatikoarekin konbinatzen dira, batak bestea gainidatzi gabe.',
            'Dokumentuak ingesta-pipeline batetik pasatzen dira (testu-erauzketa, zatiketa eta embeddingak) datu-base bektorial bateraino, eta horrek elikatzen ditu **RAGa** eta antzeko adibideen bilaketa.',
            [
              'Skilletan oinarritutako agentea, Claude-rekin AWS Bedrocken',
              'RAG embeddingekin, PostgreSQL + pgvector gainean',
              'Multi-tenant backenda FastAPI, SQLAlchemy asinkrono eta Alembic-ekin',
              'Dokumentuen prozesamendu asinkronoa S3 eta SQS workerrekin',
              'Tipatze zorrotza eta test automatizatuak CIn',
            ],
          ],
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'pgvector',
        'React',
        'TypeScript',
        'Ant Design',
        'AWS Bedrock (Claude)',
        'Titan Embeddings',
        'S3',
        'SQS',
        'Cognito',
        'Docker',
        'Bitbucket Pipelines',
      ],
    },
  },
}
