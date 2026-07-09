/**
 * Skills data
 * Organized by category. Each item can be a plain string
 * or an object { name, icon } if you want to attach react-icons later.
 */

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'code',             // for icon mapping in the component
    items: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'PHP'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: 'layers',
    items: ['React', 'Node.js', 'Laravel', 'Flask'],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: 'tool',
    items: ['Git', 'VS Code', 'Figma', 'Vite', 'Composer', 'MkDocs'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'database',
    items: ['MySQL'],
  },
];
