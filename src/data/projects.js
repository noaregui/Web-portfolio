/**
 * Portfolio projects.
 *
 * Each project renders at /projects/:slug and as a card in the Projects page.
 *
 * Section `content` items:
 * - a string renders as a paragraph
 * - an array of strings renders as a bullet list
 * Wrap words in **double asterisks** to highlight them.
 */

import BotpressCover from '@/assets/Botpress.jpg'
import Botpress1 from '@/assets/Botpress1.jpg'
import Botpress2 from '@/assets/Botpress2.jpg'
import Botpress3 from '@/assets/Botpress3.jpg'
import Botpress4 from '@/assets/Botpress4.jpg'
import Botpress5 from '@/assets/Botpress5.jpg'
import ChatGPTCover from '@/assets/ChatGPT1.jpg'
import ChatGPT2 from '@/assets/chatgpt2.jpg'
import ChatGPT3 from '@/assets/chatgpt3.jpg'
import ChatGPT4 from '@/assets/chatgpt4.jpg'
import Docker from '@/assets/Docker.jpg'
import Landbot1 from '@/assets/Landbot1.jpg'
import Landbot2 from '@/assets/landbot2.jpg'
import Landbot3 from '@/assets/landbot3.jpg'
import MetaCover from '@/assets/MetaFondo.jpg'
import MongoDB from '@/assets/MongoDB2.jpg'
import MySQL from '@/assets/MySQL1.jpg'
import NativeAppBackCover from '@/assets/NativeAppBack.jpg'
import NativeAppFrontCover from '@/assets/NativeAppFront.jpg'
import Nuxt from '@/assets/Nuxt.jpg'
import Vapi1 from '@/assets/VAPI 1.jpg'
import Vapi2 from '@/assets/VAPI 2.jpg'
import Vapi3 from '@/assets/VAPI 3.jpg'
import Vapi4 from '@/assets/VAPI 4.jpg'
import Vue from '@/assets/Vue1.jpg'
import WhatsApp1 from '@/assets/whatsapp1.jpg'
import WhatsApp2 from '@/assets/whatsapp2.jpg'

export const projects = [
  {
    slug: 'vapi',
    title: 'VAPI – AI Voice Assistant',
    card: {
      name: 'AI Voice Assistant',
      tagline: 'VAPI · Voice AI Agents',
      image: Vapi1,
    },
    images: [Vapi1, Vapi2, Vapi3, Vapi4],
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
  {
    slug: 'botpress',
    title: 'Botpress – AI Agent Automated Conversations',
    card: {
      name: 'Chatbot',
      tagline: 'Botpress · Landbot',
      image: BotpressCover,
    },
    images: [Botpress1, Botpress2, Botpress3, Botpress4, Botpress5],
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
  {
    slug: 'meta',
    title: 'Meta – WhatsApp Business Automation',
    card: {
      name: 'Automated visit management',
      tagline: 'Meta',
      image: MetaCover,
    },
    images: [Landbot1, Landbot2, Landbot3, WhatsApp1, WhatsApp2],
    sections: [
      {
        heading: 'What is Meta - WhatsApp?',
        content: [
          'Meta WhatsApp Business Cloud API enables the **automation** of WhatsApp messages using pre-approved message templates, helping businesses efficiently engage with clients and capture leads.',
          'In this project, it was used to streamline real estate inquiries, sending automated messages in a structured sequence while ensuring consistency and timing.',
          [
            '💬 Automated WhatsApp contact with potential clients',
            '🧠 Guided conversational flows via **Landbot**',
            '📅 Appointment scheduling inside WhatsApp',
          ],
        ],
      },
      {
        heading: 'Development',
        content: [
          'This solution connected Meta’s WhatsApp Business Cloud API with a **custom internal application** and **Landbot conversational flows**.',
          [
            '⏳ Controlled message timing',
            '🌐 Custom-made Webhooks & real-time updates',
            '⚡ Fully automated lead qualification',
          ],
        ],
      },
    ],
    technologies: [
      'Meta WhatsApp Business Cloud API',
      'Landbot',
      'Custom-made Webhooks',
      'Node.js',
      'JavaScript (ES6+)',
      'Custom-made REST APIs',
    ],
  },
  {
    slug: 'chatgpt',
    title: 'ChatGPT – AI Content Automation for Real Estate',
    card: {
      name: 'Automatic ads generation',
      tagline: 'ChatGPT',
      image: ChatGPTCover,
    },
    images: [ChatGPT2, ChatGPT3, ChatGPT4],
    sections: [
      {
        heading: 'What is ChatGPT Content Automation?',
        content: [
          'ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text based on the inputs it receives. Using the ChatGPT API, developers can integrate **AI-powered conversational** and content generation capabilities into their applications, enabling automation, natural language understanding, and high-quality text creation.',
          [
            '💬 AI-powered content generation',
            '🧠 Understands structured inputs and generates human-like text',
            '⚡ Automates repetitive writing tasks',
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
            '🧠 AI-generated content based on structured property data',
            '🔗 Full integration of Pipedrive, ChatGPT API, and Witei',
            '✅ Automated publishing across multiple portals',
            '⚡ Eliminates manual content creation and human errors',
            '📊 Maintains consistent tone, style, and structure',
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
  {
    slug: 'nativeappback',
    title: 'Cloud Native Admin – Backend',
    card: {
      name: 'Backend migration from MySQL to MongoDB',
      tagline: 'Cloud Native Admin – Backend',
      image: NativeAppBackCover,
    },
    images: [Docker, MongoDB, MySQL],
    sections: [
      {
        heading: 'What is Cloud-native Admin?',
        content: [
          'Cloud-native Admin is a modern backend system designed to manage all aspects of the internal property management application. It centralizes financial records, rental agreements, tenant and landlord data, and maintenance requests.',
          'The migration to a cloud-native architecture using Node.js and Docker improves scalability, ensures real-time data handling, and provides a more reliable foundation for future features.',
          'Key highlights:',
          [
            '🏢 Centralized management of properties, tenants, and landlords',
            '💰 Real-time financial data tracking',
            '⚙️ Automated handling of maintenance requests and incidents',
          ],
        ],
      },
      {
        heading: 'Development',
        content: [
          'This project involved migrating the internal system from MySQL to MongoDB while redesigning the backend as a **cloud-native application using Docker and Node.js**.',
          'The system manages all property-related data including financial records, rental agreements, tenants, landlords, and maintenance requests. The migration ensured data integrity while enabling new functionalities and real-time data handling.',
          'The new backend exposes **custom-made REST APIs** that allow the frontend and other internal services to interact seamlessly with the database. Docker containers were used to package the application, providing scalability, easier deployment, and a consistent development environment.',
          'Key features implemented:',
          [
            '🏢 Complete migration from MySQL to MongoDB',
            '🔗 Custom REST APIs for internal application functionality',
            '📦 Containerized backend using Docker for deployment and scalability',
            '⚡ Optimized data models and workflow logic for improved efficiency',
            '✅ Real-time management of tenants, properties, and incidents',
          ],
        ],
      },
    ],
    technologies: ['Node.js', 'Docker', 'MongoDB', 'MySQL', 'Custom-made REST APIs', 'Vue.js'],
  },
  {
    slug: 'nativeappfront',
    title: 'Cloud Native Admin – Frontend',
    card: {
      name: 'Frontend migration using Vue.js and Nuxt.js',
      tagline: 'Cloud Native Admin – Frontend',
      image: NativeAppFrontCover,
    },
    images: [Nuxt, Vue],
    sections: [
      {
        heading: 'What is Cloud-native Admin?',
        content: [
          'Cloud-native Admin Frontend is an **end-to-end software suite for total office productivity**, designed to provide an intuitive and scalable interface for managing properties, tenants, landlords, financials, and maintenance requests.',
          'The frontend was rebuilt using **Vue.js and Nuxt.js**, focusing on creating a **visual, interactive, and highly functional user experience**. With the new design, staff can perform tasks faster, access data in real time, and manage all aspects of property administration more efficiently.',
          'Key highlights:',
          [
            '💻 Modern and scalable frontend architecture',
            '🎨 Improved visual design and user experience',
            '⚙️ Streamlined workflows for total office productivity',
            '📊 Real-time access to data across all modules',
          ],
        ],
      },
      {
        heading: 'Development',
        content: [
          'In this project, I focused on rebuilding the frontend of the internal admin system as part of the migration. I implemented scalable Vue.js components and Nuxt.js pages to create modular and maintainable code. The interface was redesigned to be more visual, intuitive, and functional, improving navigation and overall usability.',
          [
            '⚡ Optimized for real-time data updates from the backend APIs, ensuring staff always have access to the latest information.',
            '🎨 Applied modern styling practices for a clean, consistent, and professional look across the application.',
            '✅ Ensured end-to-end functionality for property management, tenant and landlord workflows, financial data, and incident tracking, making daily operations more efficient.',
          ],
          'Key features implemented:',
          [
            '🏛️ Scalable Vue.js and Nuxt.js architecture',
            '🖥️ Improved UI/UX for better productivity and usability',
            '💬 Interactive, real-time data handling',
            '🌐 Seamless integration with backend APIs',
            '📦 Modular and maintainable code structure',
          ],
        ],
      },
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Axios', 'Custom-made REST APIs'],
  },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
