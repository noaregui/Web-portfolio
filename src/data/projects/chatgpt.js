export default {
  slug: 'chatgpt',
  featured: false,
  icon: 'pen',
  accent: '#f59e0b',
  ai: true,
  tags: ['OpenAI API', 'Pipedrive', 'Witei', 'Node.js'],
  flowIcons: ['database', 'link', 'sparkles', 'send', 'globe'],
  content: {
    en: {
      title: 'ChatGPT – AI Content Automation for Real Estate',
      card: {
        name: 'Automatic ads generation',
        summary:
          'Generates property listings with ChatGPT and publishes them on real estate portals automatically.',
      },
      flow: [
        { title: 'Pipedrive deal', text: 'A sales rep creates or updates a property' },
        { title: 'Data fetch', text: 'Property details via the Pipedrive API' },
        { title: 'ChatGPT', text: 'Writes an SEO-ready listing from prompts' },
        { title: 'Witei', text: 'Listing sent automatically' },
        { title: 'Portals', text: 'Published on Idealista, Fotocasa…' },
      ],
      sections: [
        {
          heading: 'What is ChatGPT Content Automation?',
          content: [
            'ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text based on the inputs it receives. Using the ChatGPT API, developers can integrate **AI-powered conversational** and content generation capabilities into their applications, enabling automation, natural language understanding, and high-quality text creation.',
            [
              'AI-powered content generation',
              'Understands structured inputs and generates human-like text',
              'Automates repetitive writing tasks',
            ],
          ],
        },
        {
          heading: 'Development',
          content: [
            'This project integrates Pipedrive, ChatGPT API, and Witei to automate the full workflow of creating and publishing property listings.',
            'When a commercial enters or updates a deal in **Pipedrive**, the system retrieves all relevant property information (location, price, features, characteristics) via the Pipedrive API.',
            'This data is sent to the **ChatGPT API** along with predefined prompts and guidelines. ChatGPT generates optimized property descriptions that are professional, SEO-friendly, and ready for publication.',
            'The generated content is then sent automatically to **Witei**, a real estate management platform that distributes listings to multiple portals like Idealista, Fotocasa, and others. The system ensures that listings are published automatically without any manual intervention.',
            'Key features implemented:',
            [
              'AI-generated content based on structured property data',
              'Full integration of Pipedrive, ChatGPT API, and Witei',
              'Automated publishing across multiple portals',
              'Eliminates manual content creation and human errors',
              'Maintains consistent tone, style, and structure',
            ],
          ],
        },
      ],
      technologies: [
        'OpenAI ChatGPT API',
        'Pipedrive CRM API',
        'Witei API',
        'Custom-made Webhooks',
        'Node.js',
        'JavaScript (ES6+)',
        'Custom-made REST APIs',
        'Authentication Tokens',
      ],
    },
    es: {
      title: 'ChatGPT – Automatización de contenido con IA para inmobiliarias',
      card: {
        name: 'Generación automática de anuncios',
        summary:
          'Genera anuncios de inmuebles con ChatGPT y los publica automáticamente en portales inmobiliarios.',
      },
      flow: [
        { title: 'Oportunidad en Pipedrive', text: 'Un comercial crea o actualiza un inmueble' },
        { title: 'Obtención de datos', text: 'Datos del inmueble vía API de Pipedrive' },
        { title: 'ChatGPT', text: 'Redacta un anuncio listo para SEO' },
        { title: 'Witei', text: 'Anuncio enviado automáticamente' },
        { title: 'Portales', text: 'Publicado en Idealista, Fotocasa…' },
      ],
      sections: [
        {
          heading: '¿Qué es la automatización de contenido con ChatGPT?',
          content: [
            'ChatGPT es un modelo de lenguaje de IA desarrollado por OpenAI que entiende y genera texto similar al humano a partir de la información que recibe. Con la API de ChatGPT, se pueden integrar en las aplicaciones capacidades **conversacionales con IA** y de generación de contenido, lo que permite automatizar tareas, entender el lenguaje natural y crear textos de gran calidad.',
            [
              'Generación de contenido con IA',
              'Entiende datos estructurados y genera texto natural',
              'Automatiza tareas de redacción repetitivas',
            ],
          ],
        },
        {
          heading: 'Desarrollo',
          content: [
            'Este proyecto integra Pipedrive, la API de ChatGPT y Witei para automatizar todo el proceso de creación y publicación de anuncios de inmuebles.',
            'Cuando un comercial crea o actualiza una oportunidad en **Pipedrive**, el sistema obtiene toda la información relevante del inmueble (ubicación, precio, prestaciones, características) mediante la API de Pipedrive.',
            'Estos datos se envían a la **API de ChatGPT** junto con unas instrucciones y pautas predefinidas. ChatGPT genera descripciones optimizadas de los inmuebles, profesionales, preparadas para SEO y listas para publicar.',
            'El contenido generado se envía automáticamente a **Witei**, una plataforma de gestión inmobiliaria que distribuye los anuncios en varios portales como Idealista, Fotocasa y otros. El sistema garantiza que los anuncios se publiquen automáticamente, sin ninguna intervención manual.',
            'Funcionalidades principales:',
            [
              'Contenido generado con IA a partir de datos estructurados del inmueble',
              'Integración completa de Pipedrive, la API de ChatGPT y Witei',
              'Publicación automática en varios portales',
              'Elimina la redacción manual y los errores humanos',
              'Mantiene un tono, un estilo y una estructura coherentes',
            ],
          ],
        },
      ],
      technologies: [
        'API de ChatGPT de OpenAI',
        'API del CRM Pipedrive',
        'API de Witei',
        'Webhooks a medida',
        'Node.js',
        'JavaScript (ES6+)',
        'APIs REST a medida',
        'Tokens de autenticación',
      ],
    },
    eu: {
      title: 'ChatGPT – AA bidezko eduki-automatizazioa higiezinentzat',
      card: {
        name: 'Iragarkien sorrera automatikoa',
        summary:
          'Higiezinen iragarkiak ChatGPTrekin sortu eta higiezin-atarietan automatikoki argitaratzen ditu.',
      },
      flow: [
        {
          title: 'Pipedriveko aukera',
          text: 'Saltzaile batek higiezin bat sortu edo eguneratzen du',
        },
        { title: 'Datuak lortzea', text: 'Higiezinaren datuak Pipedriveren APIaren bidez' },
        { title: 'ChatGPT', text: 'SEOrako prest dagoen iragarkia idazten du' },
        { title: 'Witei', text: 'Iragarkia automatikoki bidalita' },
        { title: 'Atariak', text: 'Idealistan, Fotocasan… argitaratuta' },
      ],
      sections: [
        {
          heading: 'Zer da ChatGPT bidezko eduki-automatizazioa?',
          content: [
            'ChatGPT OpenAIk garatutako AA hizkuntza-eredu bat da, jasotzen duen informazioan oinarrituta gizakiaren antzeko testua ulertu eta sortzeko gai dena. ChatGPTren APIari esker, aplikazioetan **AA bidezko gaitasun konbertsazionalak** eta eduki-sorkuntza integra daitezke, zereginak automatizatzeko, hizkuntza naturala ulertzeko eta kalitate handiko testuak sortzeko.',
            [
              'AA bidezko eduki-sorkuntza',
              'Datu egituratuak ulertu eta testu naturala sortzen du',
              'Idazketa-zeregin errepikakorrak automatizatzen ditu',
            ],
          ],
        },
        {
          heading: 'Garapena',
          content: [
            'Proiektu honek Pipedrive, ChatGPTren APIa eta Witei integratzen ditu, higiezinen iragarkiak sortu eta argitaratzeko prozesu osoa automatizatzeko.',
            'Saltzaile batek **Pipedriven** aukera bat sortu edo eguneratzen duenean, sistemak higiezinaren informazio garrantzitsu guztia (kokapena, prezioa, ezaugarriak) lortzen du Pipedriveren APIaren bidez.',
            'Datu horiek **ChatGPTren APIra** bidaltzen dira, aurrez zehaztutako jarraibide eta irizpideekin batera. ChatGPTk higiezinen deskribapen optimizatuak sortzen ditu: profesionalak, SEOrako prestatuak eta argitaratzeko moduan.',
            'Sortutako edukia automatikoki bidaltzen zaio **Witeiri**, iragarkiak Idealista, Fotocasa eta beste hainbat atarira zabaltzen dituen higiezinen kudeaketa-plataformari. Sistemak bermatzen du iragarkiak automatikoki argitaratzen direla, inolako eskuzko esku-hartzerik gabe.',
            'Ezaugarri nagusiak:',
            [
              'Higiezinaren datu egituratuetan oinarritutako AA bidezko edukia',
              'Pipedrive, ChatGPTren APIa eta Witeiren integrazio osoa',
              'Argitalpen automatikoa hainbat ataritan',
              'Eskuzko idazketa eta giza akatsak ezabatzen ditu',
              'Tonu, estilo eta egitura koherentea mantentzen du',
            ],
          ],
        },
      ],
      technologies: [
        'OpenAIren ChatGPT APIa',
        'Pipedrive CRMaren APIa',
        'Witeiren APIa',
        'Neurrira egindako webhookak',
        'Node.js',
        'JavaScript (ES6+)',
        'Neurrira egindako REST APIak',
        'Autentifikazio-tokenak',
      ],
    },
  },
}
