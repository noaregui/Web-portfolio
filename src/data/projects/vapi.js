import Vapi1 from '@/assets/VAPI 1.jpg'
import Vapi2 from '@/assets/VAPI 2.jpg'
import Vapi3 from '@/assets/VAPI 3.jpg'
import Vapi4 from '@/assets/VAPI 4.jpg'

export default {
  slug: 'vapi',
  cardImage: Vapi1,
  images: [Vapi1, Vapi2, Vapi3, Vapi4],
  content: {
    en: {
      title: 'VAPI – AI Voice Assistant',
      card: { name: 'AI Voice Assistant', tagline: 'VAPI · Voice AI Agents' },
      sections: [
        {
          heading: 'What is VAPI?',
          content: [
            'VAPI is an AI-powered voice assistant designed to **automate phone call handling** and streamline customer interactions. It allows a virtual assistant to answer calls, understand caller intent, and interact naturally in **real time**, significantly reducing the need for manual intervention. This makes day-to-day operations smoother and ensures a more responsive experience for clients.',
            [
              '📞 Handles incoming calls automatically',
              '🤖 Recognizes user intent using AI',
              '📊 Provides accurate information instantly',
            ],
          ],
        },
        {
          heading: 'Development',
          content: [
            'In this project, I implemented VAPI to handle incoming calls from potential property clients. The assistant was capable of **querying the internal database in real time** to locate properties and check availability for visits.',
            'It could also schedule appointments automatically, log caller information and responses in the database, and **integrate with internal sales applications** to streamline operations.',
            [
              '✅ Answered incoming calls efficiently',
              '🗂️ Maintained accurate records of client interactions',
              '⚡ Reduced manual workload and increased efficiency',
            ],
          ],
        },
      ],
      technologies: ['Node.js', 'JavaScript (ES6+)', 'React', 'Custom-made REST APIs', 'VAPI AI'],
    },
    es: {
      title: 'VAPI – Asistente de voz con IA',
      card: { name: 'Asistente de voz con IA', tagline: 'VAPI · Agentes de voz con IA' },
      sections: [
        {
          heading: '¿Qué es VAPI?',
          content: [
            'VAPI es un asistente de voz con inteligencia artificial diseñado para **automatizar la gestión de llamadas** y agilizar la atención a clientes. Permite que un asistente virtual responda llamadas, entienda la intención de quien llama e interactúe de forma natural en **tiempo real**, reduciendo mucho la necesidad de intervención manual. Así, el día a día es más fluido y los clientes reciben una atención más ágil.',
            [
              '📞 Atiende las llamadas entrantes automáticamente',
              '🤖 Reconoce la intención del usuario con IA',
              '📊 Ofrece información precisa al instante',
            ],
          ],
        },
        {
          heading: 'Desarrollo',
          content: [
            'En este proyecto implementé VAPI para atender las llamadas de posibles clientes interesados en inmuebles. El asistente podía **consultar la base de datos interna en tiempo real** para localizar inmuebles y comprobar la disponibilidad para visitas.',
            'También podía agendar citas automáticamente, registrar los datos y respuestas de cada llamada en la base de datos e **integrarse con las aplicaciones internas de ventas** para agilizar el trabajo.',
            [
              '✅ Respondía las llamadas entrantes de forma eficiente',
              '🗂️ Mantenía un registro preciso de las interacciones con clientes',
              '⚡ Reducía el trabajo manual y aumentaba la eficiencia',
            ],
          ],
        },
      ],
      technologies: ['Node.js', 'JavaScript (ES6+)', 'React', 'APIs REST a medida', 'VAPI AI'],
    },
    eu: {
      title: 'VAPI – AA bidezko ahots-laguntzailea',
      card: { name: 'AA bidezko ahots-laguntzailea', tagline: 'VAPI · AA ahots-agenteak' },
      sections: [
        {
          heading: 'Zer da VAPI?',
          content: [
            'VAPI adimen artifizialean oinarritutako ahots-laguntzaile bat da, **telefono-deien kudeaketa automatizatzeko** eta bezeroekiko harremana errazteko diseinatua. Laguntzaile birtual batek deiak erantzun, deitzailearen asmoa ulertu eta modu naturalean jardun dezake **denbora errealean**, eskuzko esku-hartzearen beharra nabarmen murriztuz. Horri esker, eguneroko lana arinagoa da eta bezeroek arreta azkarragoa jasotzen dute.',
            [
              '📞 Sarrerako deiak automatikoki kudeatzen ditu',
              '🤖 Erabiltzailearen asmoa AA bidez ezagutzen du',
              '📊 Informazio zehatza berehala ematen du',
            ],
          ],
        },
        {
          heading: 'Garapena',
          content: [
            'Proiektu honetan, VAPI inplementatu nuen etxebizitzetan interesa zuten bezero potentzialen deiak kudeatzeko. Laguntzaileak **barne-datu basea denbora errealean kontsulta** zezakeen, etxebizitzak aurkitzeko eta bisitetarako erabilgarritasuna egiaztatzeko.',
            'Gainera, hitzorduak automatikoki antola zitzakeen, deitzaileen datuak eta erantzunak datu-basean erregistratu, eta **barne-salmenta aplikazioekin integratu** lana errazteko.',
            [
              '✅ Sarrerako deiei modu eraginkorrean erantzuten zien',
              '🗂️ Bezeroekiko elkarreraginen erregistro zehatza mantentzen zuen',
              '⚡ Eskuzko lana murriztu eta eraginkortasuna handitu zuen',
            ],
          ],
        },
      ],
      technologies: [
        'Node.js',
        'JavaScript (ES6+)',
        'React',
        'Neurrira egindako REST APIak',
        'VAPI AI',
      ],
    },
  },
}
