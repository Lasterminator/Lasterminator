/**
 * Everything the profile says, below the banner.
 *
 * Edit this file, then run `node build.mjs`. That redraws the coloured tiles in
 * assets/ and rewrites README.md. Do not edit README.md by hand: it is generated.
 *
 * Each tile is a picture, so it can carry one link (`href`). Keep text short:
 * a tile is about 43 characters wide.
 */

export const intro =
  "Hey, I'm Subhash. I'm a full-stack software engineer with 3+ years building backend services and web applications across finance and higher education. I'm currently a Systems Developer at Clemson University, and I'm open to software engineering opportunities. Outside of work I make games.";

/** The row of pills under the banner. */
export const links = [
  { id: 'portfolio', label: 'Portfolio', colour: 'work', href: 'https://trinathpittala.com/' },
  { id: 'games', label: 'Games', colour: 'game', href: 'https://lasterminator.github.io/' },
  { id: 'linkedin', label: 'LinkedIn', colour: 'research', href: 'https://linkedin.com/in/trinathpittala/' },
  { id: 'resume', label: 'Resume', colour: 'project', href: 'https://trinathpittala.com/resume.pdf' },
  { id: 'email', label: 'Email', colour: 'education', href: 'mailto:subhash8111999@gmail.com' },
];

/**
 * The sections, in order. `colour` is one of: work, game, project, research, education.
 * A tile has: title, and optionally label (small caps line), meta (monospace
 * line), body, href, icon (a PNG in assets/). `pills` adds a row of small
 * links under the section.
 */
export const sections = [
  {
    heading: 'Games',
    colour: 'game',
    tiles: [
      {
        id: 'infinite-labyrinth',
        icon: 'infinite-labyrinth.png',
        label: 'Maze · iPhone, iPad, Android',
        title: 'Infinite Labyrinth',
        body: 'Find the way out and beat the clock. A swipe-to-run maze game with a 60-level Journey, a Daily Maze and an Endless mode.',
        href: 'https://lasterminator.github.io/infinite-labyrinth/',
      },
      {
        id: 'lantern-city',
        icon: 'lantern-city.png',
        label: 'Rhythm · iPhone, iPad, Android',
        title: 'Lantern City',
        body: 'A rhythm game about tapping right on the beat. Every catch uncovers a piece of a hidden picture, across twenty-five islands.',
        href: 'https://lasterminator.github.io/lantern-city/',
      },
    ],
    pills: [
      { id: 'labyrinth-app-store', label: 'Labyrinth · App Store', href: 'https://apps.apple.com/us/app/infinite-labyrinth/id6824725791' },
      { id: 'labyrinth-google-play', label: 'Labyrinth · Google Play', href: 'https://play.google.com/store/apps/details?id=com.subhash8111999.infinitelabyrinth.game' },
      { id: 'lantern-app-store', label: 'Lantern · App Store', href: 'https://apps.apple.com/us/app/lantern-city-rhythm-game/id6824568843' },
      { id: 'lantern-google-play', label: 'Lantern · Google Play', href: 'https://play.google.com/store/apps/details?id=com.trinathpittala.lanterncity' },
    ],
  },
  {
    heading: 'Projects',
    colour: 'project',
    tiles: [
      {
        id: 'org-license-manager',
        title: 'Org License Manager',
        meta: '.NET 8 · PostgreSQL',
        body: 'Multi-tenant SaaS API with JWT authentication and role-based access control for organizations, invitations and software licenses.',
        href: 'https://github.com/Lasterminator/OrgLicenseManager',
      },
      {
        id: 'agentic-rag',
        title: 'Agentic RAG',
        meta: 'Python · LangChain',
        body: 'Retrieval-augmented generation for querying faculty policies, using LLM agents with document retrieval.',
        href: 'https://github.com/Lasterminator/Agentic-Rag-faculty-polacy',
      },
      {
        id: 'cuda-aes',
        title: 'CUDA AES-128',
        meta: 'CUDA · C++',
        body: 'GPU-parallel AES-128 encryption and decryption with multi-stream processing and pinned host memory. Handles 1 GB files.',
        href: 'https://github.com/Lasterminator/CUDA-AES',
      },
      {
        id: 'hearing-loss',
        title: 'Hearing Loss from MRI',
        meta: 'Python · PyTorch',
        body: 'ML pipeline using autoencoders and CNNs to predict hearing loss thresholds from 3D brain MRI.',
        href: 'https://github.com/Lasterminator/Hearing-Loss-Prediction-from-MRI',
      },
      {
        id: 'messenger',
        title: 'Messenger',
        meta: 'React Native · Firebase',
        body: 'Mobile messenger with real-time chat, group messaging, image sharing and push notifications on iOS and Android.',
        href: 'https://github.com/Lasterminator/messengerApp',
      },
      {
        id: 'image-cloud',
        title: 'ImageCloud',
        meta: 'AWS · Node.js · Python',
        body: 'Multi-tier image recognition service on AWS: uploads go to S3 and queue in SQS, and an app tier on EC2 works through the queue.',
        href: 'https://github.com/Lasterminator/ImageCloud',
      },
      {
        id: 'mood-journal',
        title: 'Mood Journal',
        meta: 'Swift · SwiftUI',
        body: 'iOS app for tracking mood and activities, with interactive statistics and Face ID.',
        href: 'https://github.com/Lasterminator/Mood_Journal',
      },
      {
        id: 'festive-fusion',
        title: 'Festive Fusion',
        meta: 'Python · Pygame',
        body: 'Multi-level holiday-themed game built around the Memento, Singleton and Factory design patterns.',
        href: 'https://github.com/Lasterminator/Festive-Fusion',
      },
    ],
  },
  {
    heading: "Where I've been",
    colour: 'work',
    tiles: [
      {
        id: 'clemson',
        label: 'May 2024 - Present',
        title: 'Clemson University',
        meta: 'Systems Developer',
        body: 'Led the design and build of a production observability platform (Python/FastAPI, Next.js/React): one live view of 450+ networked devices across 54 rooms. Built an AI troubleshooting engine that cut fault diagnosis time by 75%, and backed releases with 380+ automated tests.',
        href: 'https://www.clemson.edu/',
      },
      {
        id: 'rbl-bank',
        label: 'July 2021 - December 2022',
        title: 'RBL Bank',
        meta: 'Software Engineer',
        body: 'Built a transaction reconciliation portal (ASP.NET, SQL Server) that automates error resolution for 1M+ daily payments. Cut transaction failures by 78% with a dispute resolution system on .NET Core, and automated onboarding for 1,000+ vendors.',
        href: 'https://www.rblbank.com/',
      },
      {
        id: 'glocol',
        label: 'July 2020 - April 2021',
        title: 'Glocol Networks',
        meta: 'Software Engineer Intern',
        body: 'Migrated backend workloads to AWS Lambda, cutting compute costs by 40%. Built DynamoDB pipelines for 35+ IoT devices and a Bluetooth transit tracker with 96%-accurate passenger counts.',
        href: 'https://www.glocol.net/',
      },
      {
        id: 'bits-research',
        label: 'August 2019 - June 2020',
        title: 'BITS Pilani',
        meta: 'Research Assistant',
        body: 'Built a Node.js and SQL web app for managing 5,000+ departmental financial records, with REST APIs that reduced manual spreadsheet work by 25%.',
        href: 'https://www.bits-pilani.ac.in/',
      },
    ],
  },
  {
    heading: 'Education',
    colour: 'education',
    tiles: [
      {
        id: 'clemson-ms',
        label: 'January 2023 - December 2024',
        title: 'M.S. Computer Science',
        meta: 'Clemson University',
        href: 'https://www.clemson.edu/',
      },
      {
        id: 'bits-be',
        label: 'August 2017 - May 2021',
        title: 'B.E. Computer Science',
        meta: 'BITS Pilani, Hyderabad',
        href: 'https://www.bits-pilani.ac.in/',
      },
    ],
  },
  {
    heading: 'Research',
    colour: 'research',
    tiles: [
      {
        id: 'paper-adversarial',
        label: 'arXiv · May 2024',
        body: 'A Novel Approach to Guard from Adversarial Attacks using Stable Diffusion',
        bold: true,
        href: 'https://arxiv.org/abs/2405.01838',
      },
      {
        id: 'paper-hearing-loss',
        label: 'arXiv · April 2024',
        body: 'Utilizing Machine Learning and 3D Neuroimaging to Predict Hearing Loss: A Comparative Analysis',
        bold: true,
        href: 'https://arxiv.org/abs/2405.00142',
      },
      {
        id: 'paper-airbnb',
        label: 'IRJET · December 2023',
        body: 'Unveiling Patterns in European Airbnb Prices: A Comprehensive Analytical Study Using ML Techniques',
        bold: true,
        href: 'https://www.irjet.net/archives/V10/i12/IRJET-V10I12153.pdf',
      },
    ],
  },
  {
    heading: 'What I work with',
    // No single colour: each tile names its own.
    tiles: [
      { id: 'stack-languages', colour: 'work', label: 'Languages', body: 'Python · C# · TypeScript · JavaScript · SQL · Java · C++', bold: true },
      { id: 'stack-frameworks', colour: 'project', label: 'Frameworks', body: '.NET Core · Entity Framework · FastAPI · Node.js · React · Next.js · React Native', bold: true },
      { id: 'stack-cloud', colour: 'game', label: 'Cloud and tools', body: 'AWS Lambda · EC2 · S3 · DynamoDB · Docker · Kafka · GitHub Actions', bold: true },
      { id: 'stack-databases', colour: 'research', label: 'Databases', body: 'PostgreSQL · SQL Server · MySQL · MongoDB · SQLite', bold: true },
    ],
    pills: [
      {
        id: 'aws-certified',
        label: 'AWS Solutions Architect, Associate',
        wide: true,
        colour: 'education',
        href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/22c4e7f0f677493f8d08e49eb2c58e6f',
      },
    ],
  },
  {
    heading: 'Get in touch',
    tiles: [],
    pills: [
      { id: 'contact-email', label: 'subhash8111999@gmail.com', wide: true, colour: 'education', href: 'mailto:subhash8111999@gmail.com' },
      { id: 'contact-linkedin', label: 'linkedin.com/in/trinathpittala', wide: true, colour: 'research', href: 'https://linkedin.com/in/trinathpittala/' },
      { id: 'contact-portfolio', label: 'trinathpittala.com', wide: true, colour: 'work', href: 'https://trinathpittala.com/' },
    ],
  },
];
