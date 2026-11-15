import Botpress1 from '@/assets/Botpress1.jpg'
import Botpress2 from '@/assets/Botpress2.jpg'
import Botpress3 from '@/assets/Botpress3.jpg'
import Botpress4 from '@/assets/Botpress4.jpg'
import Botpress5 from '@/assets/Botpress5.jpg'

export default {
  slug: 'botpress',
  images: [Botpress1, Botpress2, Botpress3, Botpress4, Botpress5],
  featured: false,
  icon: 'bot',
  accent: '#3b82f6',
  ai: true,
  tags: ['Botpress', 'LLMs', 'WhatsApp API', 'TypeScript'],
  content: {
    en: {
      title: 'Botpress – AI Agent Automated Conversations',
      card: {
        name: 'Chatbot',
        summary: 'AI agent on WhatsApp that collects personalised feedback after each visit.',
      },
      sections: [
        {
          heading: 'What is BotPress?',
          content: [
            'Botpress is an **AI-powered conversational platform** that enables the creation of intelligent, stateful chatbots using **large language models (LLMs)**. It allows businesses to design flexible conversational workflows, integrate external systems, and deploy conversations across channels like WhatsApp.',
            [
              '💬 Automated post-visit feedback via WhatsApp',
              '🧠 AI-driven, context-aware conversational flows',
              '📊 Structured data collection and persistence',
              '🔗 Seamless integration with internal systems',
            ],
          ],
        },
        {
          heading: 'Development',
          content: [
            'This solution connected Botpress with the **WhatsApp Business API** and a custom internal backend to collect and store feedback. The conversational flow was triggered automatically after each visit.',
            'By accessing internal database records beforehand, the bot personalized each conversation using existing client data, guiding users through a **dynamic feedback flow** based on context and responses.',
            [
              '🧠 Adapt questions based on previous answers and stored context',
              '🔄 Maintain conversational state across interactions',
              '📥 Collect structured feedback and validate user inputs',
              '🌐 Sync data with internal systems using custom-made REST APIs and webhooks',
              '✅ Deliver a natural, user-friendly experience directly in WhatsApp',
            ],
          ],
        },
      ],
      technologies: [
        'Botpress (AI conversational agent)',
        'WhatsApp Business API',
        'Custom-made Webhooks',
        'Node.js',
        'TypeScript',
        'Custom-made REST APIs',
        'Authentication Tokens',
      ],
    },
    es: {
      title: 'Botpress – Conversaciones automatizadas con agentes de IA',
      card: {
        name: 'Chatbot',
        summary:
          'Agente de IA en WhatsApp que recoge valoraciones personalizadas tras cada visita.',
      },
      sections: [
        {
          heading: '¿Qué es Botpress?',
          content: [
            'Botpress es una **plataforma conversacional con IA** que permite crear chatbots inteligentes y con memoria de contexto usando **modelos de lenguaje de gran tamaño (LLM)**. Permite a las empresas diseñar flujos conversacionales flexibles, integrar sistemas externos y desplegar conversaciones en canales como WhatsApp.',
            [
              '💬 Valoraciones automáticas tras cada visita por WhatsApp',
              '🧠 Flujos conversacionales con IA que tienen en cuenta el contexto',
              '📊 Recogida y almacenamiento de datos estructurados',
              '🔗 Integración fluida con los sistemas internos',
            ],
          ],
        },
        {
          heading: 'Desarrollo',
          content: [
            'Esta solución conectaba Botpress con la **API de WhatsApp Business** y un backend interno propio para recoger y guardar las valoraciones. El flujo conversacional se iniciaba automáticamente después de cada visita.',
            'Consultando antes los registros de la base de datos interna, el bot personalizaba cada conversación con los datos del cliente y lo guiaba por un **flujo de valoración dinámico** según el contexto y sus respuestas.',
            [
              '🧠 Adapta las preguntas según las respuestas anteriores y el contexto guardado',
              '🔄 Mantiene el estado de la conversación entre interacciones',
              '📥 Recoge valoraciones estructuradas y valida las respuestas',
              '🌐 Sincroniza los datos con los sistemas internos mediante APIs REST y webhooks a medida',
              '✅ Ofrece una experiencia natural y sencilla directamente en WhatsApp',
            ],
          ],
        },
      ],
      technologies: [
        'Botpress (agente conversacional con IA)',
        'API de WhatsApp Business',
        'Webhooks a medida',
        'Node.js',
        'TypeScript',
        'APIs REST a medida',
        'Tokens de autenticación',
      ],
    },
    eu: {
      title: 'Botpress – AA agenteekin automatizatutako elkarrizketak',
      card: {
        name: 'Chatbota',
        summary:
          'Bisita bakoitzaren ondoren balorazio pertsonalizatuak biltzen dituen AA agentea, WhatsAppen.',
      },
      sections: [
        {
          heading: 'Zer da Botpress?',
          content: [
            'Botpress **AA bidezko plataforma konbertsazional** bat da, txatbot adimendunak eta testuingurua gogoratzen dutenak sortzeko aukera ematen duena, **hizkuntza-eredu handiak (LLM)** erabiliz. Enpresei elkarrizketa-fluxu malguak diseinatzeko, kanpoko sistemak integratzeko eta WhatsApp bezalako kanaletan elkarrizketak zabaltzeko aukera ematen die.',
            [
              '💬 Bisita ondorengo balorazio automatikoak WhatsApp bidez',
              '🧠 Testuingurua kontuan hartzen duten AA bidezko elkarrizketa-fluxuak',
              '📊 Datu egituratuen bilketa eta gordetzea',
              '🔗 Barne-sistemekin integrazio arina',
            ],
          ],
        },
        {
          heading: 'Garapena',
          content: [
            'Irtenbide honek Botpress **WhatsApp Business APIarekin** eta neurrira egindako barne-backend batekin lotzen zuen, balorazioak jaso eta gordetzeko. Elkarrizketa-fluxua automatikoki abiarazten zen bisita bakoitzaren ondoren.',
            'Aurretik barne-datu baseko erregistroak kontsultatuz, botak elkarrizketa bakoitza bezeroaren datuekin pertsonalizatzen zuen, eta **balorazio-fluxu dinamiko** batean zehar gidatzen zuen testuinguruaren eta erantzunen arabera.',
            [
              '🧠 Galderak aurreko erantzunen eta gordetako testuinguruaren arabera egokitzen ditu',
              '🔄 Elkarrizketaren egoera mantentzen du elkarreraginen artean',
              '📥 Balorazio egituratuak jasotzen ditu eta erantzunak balioztatzen ditu',
              '🌐 Datuak barne-sistemekin sinkronizatzen ditu neurrira egindako REST API eta webhooken bidez',
              '✅ Esperientzia natural eta erraza eskaintzen du zuzenean WhatsAppen',
            ],
          ],
        },
      ],
      technologies: [
        'Botpress (AA agente konbertsazionala)',
        'WhatsApp Business APIa',
        'Neurrira egindako webhookak',
        'Node.js',
        'TypeScript',
        'Neurrira egindako REST APIak',
        'Autentifikazio-tokenak',
      ],
    },
  },
}
