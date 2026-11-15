// Work project at Omnios AI: described only, no code or screenshots can be shown.
export default {
  slug: 'ai-medical-reports',
  featured: true,
  icon: 'mic',
  accent: '#14b8a6',
  ai: true,
  tags: ['Voice AI', 'RAG', 'AWS Bedrock', 'FastAPI', 'React'],
  flowIcons: ['mic', 'text', 'sparkles', 'search', 'message'],
  content: {
    en: {
      title: 'AI Medical Reporting Platform',
      card: {
        name: 'AI medical reports',
        summary:
          'Turns spoken dictation into structured medical reports, with an assistant that cites its sources.',
        highlights: [
          'Real-time dictation with several speakers',
          'Structured reports with verifiable citations',
          'Assistant to edit and query the report',
        ],
      },
      flow: [
        { title: 'Dictation', text: 'Audio streamed live over WebSocket' },
        { title: 'Transcription', text: 'Live, with several speakers' },
        { title: 'Report generation', text: 'Claude on Bedrock structures the findings' },
        { title: 'Sources (RAG)', text: 'Knowledge base with verifiable citations' },
        { title: 'Assistant', text: 'Edits and answers questions about the report' },
      ],
      sections: [
        {
          heading: 'What is it?',
          content: [
            'A platform that helps radiologists write their reports faster and more consistently. The radiologist **dictates the findings out loud** and sees the transcription live, and the AI turns the dictation into a **structured report** ready to review.',
            'An integrated assistant can edit the report or answer clinical questions about it, backing its answers with **verifiable citations** from scientific literature.',
            [
              'Real-time dictation with several speakers',
              'Structured reports generated from the dictation',
              'RAG over scientific literature with verifiable citations',
              'Assistant to edit the report or ask questions about it',
              'Multilingual interface',
            ],
          ],
        },
        {
          heading: 'Development',
          content: [
            'I worked on the platform end to end as part of the team, across the backend, the frontend and the cloud infrastructure.',
            'On the backend I worked on the **real-time audio streaming over WebSockets**, solving concurrency problems such as race conditions and silent failures with Python asyncio, and on integrating transcription and report generation on **AWS**.',
            'The knowledge base is refreshed automatically from scientific sources, and every citation comes from stored metadata, so the model never makes up a reference.',
            [
              'WebSocket audio streaming with configurable transcription providers',
              'Report generation and assistant with Claude on AWS Bedrock, using tool calls',
              'Bedrock Knowledge Bases with an automated ingestion pipeline',
              'Anonymisation of patient data',
              'Spec-Driven Development with AI-agent-assisted coding',
            ],
          ],
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'WebSockets',
        'React',
        'TypeScript',
        'AWS Bedrock (Claude)',
        'Bedrock Knowledge Bases',
        'AWS Transcribe',
        'Gemini',
        'S3',
        'ECS Fargate',
        'Cognito',
      ],
    },
    es: {
      title: 'Plataforma de informes médicos con IA',
      card: {
        name: 'Informes médicos con IA',
        summary:
          'Convierte el dictado por voz en informes médicos estructurados, con un asistente que cita sus fuentes.',
        highlights: [
          'Dictado en tiempo real con varios interlocutores',
          'Informes estructurados con citas verificables',
          'Asistente para editar y consultar el informe',
        ],
      },
      flow: [
        { title: 'Dictado', text: 'Audio enviado en directo por WebSocket' },
        { title: 'Transcripción', text: 'En directo y con varios interlocutores' },
        { title: 'Generación del informe', text: 'Claude en Bedrock estructura los hallazgos' },
        { title: 'Fuentes (RAG)', text: 'Base de conocimiento con citas verificables' },
        { title: 'Asistente', text: 'Edita y responde preguntas sobre el informe' },
      ],
      sections: [
        {
          heading: '¿Qué es?',
          content: [
            'Una plataforma que ayuda a los radiólogos a redactar sus informes más rápido y de forma más homogénea. El radiólogo **dicta los hallazgos en voz alta** y ve la transcripción en directo, y la IA convierte el dictado en un **informe estructurado** listo para revisar.',
            'Un asistente integrado permite editar el informe o hacerle preguntas clínicas, y respalda sus respuestas con **citas verificables** de literatura científica.',
            [
              'Dictado en tiempo real con varios interlocutores',
              'Informes estructurados generados a partir del dictado',
              'RAG sobre literatura científica con citas verificables',
              'Asistente para editar el informe o hacerle preguntas',
              'Interfaz multilingüe',
            ],
          ],
        },
        {
          heading: 'Desarrollo',
          content: [
            'He trabajado en la plataforma de principio a fin como parte del equipo, en el backend, el frontend y la infraestructura cloud.',
            'En el backend he trabajado en el **streaming de audio en tiempo real por WebSockets**, resolviendo problemas de concurrencia como condiciones de carrera y fallos silenciosos con Python asyncio, y en la integración de la transcripción y la generación de informes en **AWS**.',
            'La base de conocimiento se actualiza automáticamente a partir de fuentes científicas, y cada cita sale de metadatos almacenados, así que el modelo nunca se inventa una referencia.',
            [
              'Streaming de audio por WebSocket con proveedores de transcripción configurables',
              'Generación de informes y asistente con Claude en AWS Bedrock, mediante tool calls',
              'Bedrock Knowledge Bases con un pipeline de ingesta automatizado',
              'Anonimización de los datos del paciente',
              'Spec-Driven Development con desarrollo asistido por agentes de IA',
            ],
          ],
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'WebSockets',
        'React',
        'TypeScript',
        'AWS Bedrock (Claude)',
        'Bedrock Knowledge Bases',
        'AWS Transcribe',
        'Gemini',
        'S3',
        'ECS Fargate',
        'Cognito',
      ],
    },
    eu: {
      title: 'AA bidezko txosten medikoen plataforma',
      card: {
        name: 'AA bidezko txosten medikoak',
        summary:
          'Ahozko diktaketa txosten mediko egituratu bihurtzen du, iturriak aipatzen dituen laguntzaile batekin.',
        highlights: [
          'Denbora errealeko diktaketa, hainbat hiztunekin',
          'Txosten egituratuak, aipamen egiaztagarriekin',
          'Txostena editatu eta kontsultatzeko laguntzailea',
        ],
      },
      flow: [
        { title: 'Diktaketa', text: 'Audioa zuzenean WebSocket bidez' },
        { title: 'Transkripzioa', text: 'Zuzenean, hainbat hiztunekin' },
        { title: 'Txostenaren sorrera', text: 'Claude-k Bedrocken aurkikuntzak egituratzen ditu' },
        { title: 'Iturriak (RAG)', text: 'Ezagutza-basea, aipamen egiaztagarriekin' },
        { title: 'Laguntzailea', text: 'Txostena editatu eta galderak erantzuten ditu' },
      ],
      sections: [
        {
          heading: 'Zer da?',
          content: [
            'Erradiologoei txostenak azkarrago eta modu homogeneoagoan idazten laguntzen dien plataforma. Erradiologoak **aurkikuntzak ozen diktatzen ditu** eta transkripzioa zuzenean ikusten du, eta AAk diktaketa **txosten egituratu** bihurtzen du, berrikusteko prest.',
            'Laguntzaile integratu batek txostena editatu edo horri buruzko galdera klinikoak erantzun ditzake, eta literatura zientifikoko **aipamen egiaztagarriekin** babesten ditu erantzunak.',
            [
              'Denbora errealeko diktaketa, hainbat hiztunekin',
              'Diktaketatik sortutako txosten egituratuak',
              'RAG literatura zientifikoaren gainean, aipamen egiaztagarriekin',
              'Txostena editatzeko edo galderak egiteko laguntzailea',
              'Interfaze eleaniztuna',
            ],
          ],
        },
        {
          heading: 'Garapena',
          content: [
            'Plataforman hasieratik amaierara aritu naiz taldeko kide gisa, backendean, frontendean eta hodeiko azpiegituran.',
            'Backendean, **WebSocket bidezko denbora errealeko audio-streamingean** aritu naiz, Python asyncio-rekin konkurrentzia-arazoak konponduz (lasterketa-baldintzak eta isilpeko hutsegiteak, adibidez), baita transkripzioa eta txostenen sorrera **AWSn** integratzen ere.',
            'Ezagutza-basea automatikoki eguneratzen da iturri zientifikoetatik, eta aipamen bakoitza gordetako metadatuetatik dator; beraz, ereduak ez du inoiz erreferentziarik asmatzen.',
            [
              'WebSocket bidezko audio-streaming-a, transkripzio-hornitzaile konfiguragarriekin',
              'Txostenen sorrera eta laguntzailea Claude-rekin AWS Bedrocken, tool call bidez',
              'Bedrock Knowledge Bases, ingesta-pipeline automatizatu batekin',
              'Pazientearen datuen anonimizazioa',
              'Spec-Driven Development, AA agenteek lagundutako garapenarekin',
            ],
          ],
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'WebSockets',
        'React',
        'TypeScript',
        'AWS Bedrock (Claude)',
        'Bedrock Knowledge Bases',
        'AWS Transcribe',
        'Gemini',
        'S3',
        'ECS Fargate',
        'Cognito',
      ],
    },
  },
}
