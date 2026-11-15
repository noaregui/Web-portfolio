export default {
  slug: 'nativeappback',
  featured: false,
  icon: 'database',
  accent: '#06b6d4',
  ai: false,
  tags: ['Node.js', 'MongoDB', 'MySQL', 'Docker'],
  flowIcons: ['database', 'code', 'database', 'server', 'box'],
  content: {
    en: {
      title: 'Cloud Native Admin – Backend',
      card: {
        name: 'Backend migration from MySQL to MongoDB',
        summary:
          'Migration of an internal property-management backend from MySQL to MongoDB, containerised with Docker.',
      },
      flow: [
        { title: 'MySQL', text: 'Legacy relational data' },
        { title: 'Migration', text: 'Data models redesigned and migrated' },
        { title: 'MongoDB', text: 'Flexible document database' },
        { title: 'REST API', text: 'Node.js services for the frontend' },
        { title: 'Docker', text: 'Containerised and scalable' },
      ],
      sections: [
        {
          heading: 'What is Cloud-native Admin?',
          content: [
            'Cloud-native Admin is a modern backend system designed to manage all aspects of the internal property management application. It centralizes financial records, rental agreements, tenant and landlord data, and maintenance requests.',
            'The migration to a cloud-native architecture using Node.js and Docker improves scalability, ensures real-time data handling, and provides a more reliable foundation for future features.',
            'Key highlights:',
            [
              'Centralized management of properties, tenants, and landlords',
              'Real-time financial data tracking',
              'Automated handling of maintenance requests and incidents',
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
              'Complete migration from MySQL to MongoDB',
              'Custom REST APIs for internal application functionality',
              'Containerized backend using Docker for deployment and scalability',
              'Optimized data models and workflow logic for improved efficiency',
              'Real-time management of tenants, properties, and incidents',
            ],
          ],
        },
      ],
      technologies: ['Node.js', 'Docker', 'MongoDB', 'MySQL', 'Custom-made REST APIs', 'Vue.js'],
    },
    es: {
      title: 'Cloud Native Admin – Backend',
      card: {
        name: 'Migración del backend de MySQL a MongoDB',
        summary:
          'Migración del backend interno de gestión inmobiliaria de MySQL a MongoDB, en contenedores Docker.',
      },
      flow: [
        { title: 'MySQL', text: 'Datos relacionales heredados' },
        { title: 'Migración', text: 'Modelos de datos rediseñados y migrados' },
        { title: 'MongoDB', text: 'Base de datos documental flexible' },
        { title: 'API REST', text: 'Servicios Node.js para el frontend' },
        { title: 'Docker', text: 'En contenedores y escalable' },
      ],
      sections: [
        {
          heading: '¿Qué es Cloud-native Admin?',
          content: [
            'Cloud-native Admin es un sistema backend moderno diseñado para gestionar todos los aspectos de la aplicación interna de administración de inmuebles. Centraliza los registros financieros, los contratos de alquiler, los datos de inquilinos y propietarios y las solicitudes de mantenimiento.',
            'La migración a una arquitectura cloud-native con Node.js y Docker mejora la escalabilidad, permite trabajar con datos en tiempo real y ofrece una base más fiable para futuras funcionalidades.',
            'Aspectos destacados:',
            [
              'Gestión centralizada de inmuebles, inquilinos y propietarios',
              'Seguimiento de datos financieros en tiempo real',
              'Gestión automatizada de solicitudes de mantenimiento e incidencias',
            ],
          ],
        },
        {
          heading: 'Desarrollo',
          content: [
            'Este proyecto consistió en migrar el sistema interno de MySQL a MongoDB y, a la vez, rediseñar el backend como una **aplicación cloud-native con Docker y Node.js**.',
            'El sistema gestiona todos los datos relacionados con los inmuebles: registros financieros, contratos de alquiler, inquilinos, propietarios y solicitudes de mantenimiento. La migración garantizó la integridad de los datos y permitió añadir nuevas funcionalidades y trabajar en tiempo real.',
            'El nuevo backend expone **APIs REST a medida** que permiten al frontend y a otros servicios internos comunicarse con la base de datos sin fricciones. La aplicación se empaquetó en contenedores Docker, lo que aporta escalabilidad, despliegues más sencillos y un entorno de desarrollo homogéneo.',
            'Funcionalidades principales:',
            [
              'Migración completa de MySQL a MongoDB',
              'APIs REST a medida para las funcionalidades de la aplicación interna',
              'Backend en contenedores Docker para el despliegue y la escalabilidad',
              'Modelos de datos y lógica de flujos optimizados para ganar eficiencia',
              'Gestión en tiempo real de inquilinos, inmuebles e incidencias',
            ],
          ],
        },
      ],
      technologies: ['Node.js', 'Docker', 'MongoDB', 'MySQL', 'APIs REST a medida', 'Vue.js'],
    },
    eu: {
      title: 'Cloud Native Admin – Backenda',
      card: {
        name: 'Backendaren migrazioa MySQLtik MongoDBra',
        summary:
          'Higiezinak kudeatzeko barne-backendaren migrazioa MySQLtik MongoDBra, Docker edukiontzietan.',
      },
      flow: [
        { title: 'MySQL', text: 'Datu erlazional zaharrak' },
        { title: 'Migrazioa', text: 'Datu-ereduak birdiseinatu eta migratuta' },
        { title: 'MongoDB', text: 'Dokumentu-datu-base malgua' },
        { title: 'REST APIa', text: 'Frontendarentzako Node.js zerbitzuak' },
        { title: 'Docker', text: 'Edukiontzietan eta eskalagarria' },
      ],
      sections: [
        {
          heading: 'Zer da Cloud-native Admin?',
          content: [
            'Cloud-native Admin backend-sistema moderno bat da, higiezinak kudeatzeko barne-aplikazioaren alderdi guztiak kudeatzeko diseinatua. Erregistro finantzarioak, alokairu-kontratuak, maizter eta jabeen datuak eta mantentze-eskaerak zentralizatzen ditu.',
            'Node.js eta Docker erabiliz cloud-native arkitektura batera egindako migrazioak eskalagarritasuna hobetzen du, denbora errealeko datuekin lan egitea ahalbidetzen du eta etorkizuneko funtzionalitateetarako oinarri fidagarriagoa eskaintzen du.',
            'Alderdi nagusiak:',
            [
              'Higiezinen, maizterren eta jabeen kudeaketa zentralizatua',
              'Datu finantzarioen jarraipena denbora errealean',
              'Mantentze-eskaeren eta gorabeheren kudeaketa automatizatua',
            ],
          ],
        },
        {
          heading: 'Garapena',
          content: [
            'Proiektu honetan barne-sistema MySQLtik MongoDBra migratu genuen, eta, aldi berean, backenda **Docker eta Node.js erabiliz cloud-native aplikazio gisa** birdiseinatu.',
            'Sistemak higiezinekin lotutako datu guztiak kudeatzen ditu: erregistro finantzarioak, alokairu-kontratuak, maizterrak, jabeak eta mantentze-eskaerak. Migrazioak datuen osotasuna bermatu zuen, eta funtzionalitate berriak eta denbora errealeko lana ahalbidetu zituen.',
            'Backend berriak **neurrira egindako REST APIak** eskaintzen ditu, frontendak eta beste barne-zerbitzu batzuek datu-basearekin arazorik gabe komunika daitezen. Aplikazioa Docker edukiontzietan paketatu zen, eskalagarritasuna, hedapen errazagoak eta garapen-ingurune homogeneoa lortzeko.',
            'Ezaugarri nagusiak:',
            [
              'MySQLtik MongoDBrako migrazio osoa',
              'Barne-aplikazioaren funtzionalitateetarako neurrira egindako REST APIak',
              'Docker edukiontzietako backenda, hedapenerako eta eskalagarritasunerako',
              'Datu-eredu eta lan-fluxuen logika optimizatuak, eraginkortasuna hobetzeko',
              'Maizter, higiezin eta gorabeheren kudeaketa denbora errealean',
            ],
          ],
        },
      ],
      technologies: [
        'Node.js',
        'Docker',
        'MongoDB',
        'MySQL',
        'Neurrira egindako REST APIak',
        'Vue.js',
      ],
    },
  },
}
