/**
 * Experience data
 * Listed in reverse chronological order (most recent first).
 *
 * Fields:
 *  id           - unique identifier
 *  role         - job title
 *  company      - company or organization name
 *  location     - city, country (or "Remote")
 *  startDate    - e.g. "Jan 2024"
 *  endDate      - e.g. "Present" or "Dec 2024"
 *  description  - array of bullet-point achievements/responsibilities
 *  technologies - array of tech used in this role (shown as chips)
 *  type         - "work" | "internship" | "volunteer"
 */

export const experiences = [
  {
    id: 1,
    role: 'Software Development & Technical Support Intern',
    company: 'iReply Back Office Services Inc.',
    location: 'Bacolod City',
    startDate: 'Mar 2026',
    endDate: 'May 2026',
    description: [
      'Engineered LogicQuest, a web-based company engagement and gamified learning system utilizing the Laravel framework and React to enhance internal employee training and operations',
      'Conducted end-to-end troubleshooting for VoIP systems to ensure stable connectivity and communication reliability.',
      'Collaborated on a company engagement system using web-based solutions to enhance internal operations.',
      'Developed technical documentation and user guides to streamline system maintenance for developers and end-users.'
    ],
    technologies: ['React', 'Laravel', 'Git', 'Vite', 'Composer'],
    type: 'internship',
  },
  {
    id: 2,
    role: 'Student Assistant',
    company: 'TUP Visayas - Guidance and Admissions Office',
    location: 'Talisay City',
    startDate: 'Jan 2024',
    endDate: 'Mar 2026',
    description: [
      'Managed administrative support and enrollment inquiries for 50+ students daily, ensuring efficient document processing.'
    ],
    technologies: ['Google Sheets', 'Microsoft Office', 'Canva'],
    type: 'work',
  },
  {
    id: 3,
    role: 'Technical Support Intern',
    company: "TUP Visayas - Registrar's Office",
    location: 'Talisay City',
    startDate: 'Aug 2023',
    endDate: 'Sep 2023',
    description: [
      'Managed and organized departmental records, ensuring accurate documentation and compliance with administrative standards for efficient tracking and retrieval.',
      'Assisted in maintaining and auditing document inventories and office resources to support organized record management and operational efficiency.'
    ],
    technologies: ['Google Sheets', 'Microsoft Office'],
    type: 'internship',
  },
];
