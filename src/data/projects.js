/**
 * Projects data
 * Each project object represents one portfolio project card.
 *
 * Fields:
 *  id          - unique identifier
 *  title       - project name
 *  description - short description (1–2 sentences)
 *  tags        - tech stack used (shown as chips)
 *  github      - GitHub repo URL (set null to hide button)
 *  live        - live demo URL   (set null to hide button)
 *  image       - filename inside public/images/ (set null for placeholder)
 *  featured    - if true, shown in a larger "featured" card
 */

const base = import.meta.env.BASE_URL;

export const projects = [

  // ─── Featured Projects ────────────────────────────────────────────────────

  {
    id: 1,
    title: 'Developer Portfolio Website',
    description: 'A professional portfolio website for software developers to showcase their projects, skills, and experience.',
    tags: ['React', 'Vite', 'CSS Modules', 'Framer Motion'],
    github: 'https://github.com/ivankarll/portfolio.git',
    live: 'https://ivankarll.github.io/portfolio/',
    image: `${base}images/PortfolioSS.png`,
    featured: true,
  },
  {
    id: 2,
    title: 'QR Code Generator',
    description: 'A sleek, interactive web utility that allows users to instantly generate highly customizable QR codes for URLs, text blocks, emails, phone numbers, and connectivity configurations.',
    tags: ['React', 'Vite', 'CSS Modules'],
    github: 'https://github.com/ivankarll/qr-code-generator.git',
    live: 'https://ivankarll.github.io/qr-code-generator/',
    image: `${base}images/QRSS.png`,
    featured: true,
  },
  {
    id: 3,
    title: 'LogicQuest: Company Engagement & Gamified Learning Platform',
    description: 'A gamified learning system that boosts employee engagement and streamlines company operations.',
    tags: ['React', 'Laravel', 'MySQL'],
    github: 'https://github.com/annkatm/LogicQuest.git',
    live: null,
    image: `${base}images/LogicQuestSS.png`,
    featured: true,
  },
  {
    id: 4,
    title: 'Sentiment Analysis System',
    description: 'Trained and deployed a custom Keras Sequential neural network for NLP, developed a lightweight Flask API gateway, and integrated it into an interactive user interface.',
    tags: ['Python', 'TensorFlow/Keras', 'Flask', 'NLP'],
    github: 'https://github.com/ivankarll/sentiment-analysis-nlp.git',
    live: null,
    image: `${base}images/SentimentAnalysisSS.png`,
    featured: true,
  },

  // ─── Other Projects ───────────────────────────────────────────────────────

  {
    id: 5,
    title: 'CPLD-Based Variable-Frequency Capacitive Sensor',
    description: 'A hardware-software co-design project developing a high-precision capacitive sensor using a CPLD to track variable frequencies for accurate material or environmental sensing. (Thesis Project)',
    tags: ['Verilog', 'Altera Quartus'],
    github: null,
    live: null,
    image: `${base}images/ThesisPic.png`,
    featured: false,
  },
  {
    id: 6,
    title: 'CNN Banana Classification',
    description: 'A computer vision application that uses Deep Learning to automatically identify, classify, and assess the ripeness stages of bananas from image datasets.',
    tags: ['Python', 'TensorFlow/Keras', 'Jupyter Notebook', 'CNN'],
    github: null,
    live: null,
    image: null,
    featured: false,
  },
  {
    id: 7,
    title: 'Task-to-Tree: Task Management System',
    description: 'An intuitive, visually driven task management platform that helps users break down overwhelming goals into manageable, hierarchical sub-tasks represented as a structured tree.',
    tags: ['HTML/CSS', 'PHP', 'MySQL'],
    github: null,
    live: null,
    image: null,
    featured: false,
  },

];
