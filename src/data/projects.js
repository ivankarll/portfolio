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
  {
    id: 1,
    title: 'LogicQuest: Company Engagement & Gamified Learning Platform',
    description: 'A gamified learning system that boosts employee engagement and streamlines company operations.',
    tags: ['React', 'Laravel', 'MySQL'],
    github: "https://github.com/annkatm/LogicQuest.git",
    live: null,
    image: `${base}images/LogicQuestSS.png`,
    featured: true,
  },
  {
    id: 3,
    title: 'CPLD-Based Variable-Frequency Capacitive Sensor: Thesis Project',
    description: 'A hardware-software co-design project focused on developing a high-precision capacitive sensor utilizing a Complex Programmable Logic Device (CPLD) to track variable frequencies for accurate material or environmental sensing.',
    tags: ['Verilog', 'Altera Quartus'],
    github: null,
    live: null,
    image: `${base}images/ThesisPic.png`,
    featured: false,
  },
  {
    id: 2,
    title: 'Sentiment Analysis System',
    description: 'Trained and deployed a custom Keras Sequential neural network for Natural Language Processing (NLP), developed a lightweight Flask API gateway, and integrated it into an interactive user interface.',
    tags: ['Python', 'TensorFlow/Keras', 'Flask', 'Natural Language Processing (NLP)'],
    github: "https://github.com/ivankarll/sentiment-analysis-nlp.git",
    live: null,
    image: `${base}images/SentimentAnalysisSS.png`,
    featured: true,
  },
  {
    id: 4,
    title: 'CNN Banana Classification',
    description: 'A computer vision application that utilizes Deep Learning to automatically identify, classify, and assess the quality or ripeness stages of bananas from image datasets.',
    tags: ['Python', 'TensorFlow/Keras', 'Jupyter Notebook', 'Convolutional Neural Network (CNN)'],
    github: null,
    live: null,
    image: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Task-to-Tree: Task Management System',
    description: 'An intuitive, visually driven task management platform designed to help users break down overwhelming goals into manageable, hierarchical sub-tasks represented as a structured tree.',
    tags: ['HTML/CSS', 'PHP', 'MySQL'],
    github: null,
    live: null,
    image: null,
    featured: false,
  },
];

