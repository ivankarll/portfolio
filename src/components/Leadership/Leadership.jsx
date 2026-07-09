import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Leadership.module.css';

/**
 * Leadership data — defined inline for now.
 * TODO: Move to src/data/leadership.js if the list grows.
 */
const leadershipItems = [
  {
    id: 1,
    role: 'Class Mayor',
    organization: 'BS in Computer Engineering — TUPV',
    period: '2022 – 2026',
    description: [
      'Represented class concerns and coordinated communication between students and faculty.',
      'Assisted in disseminating announcements, academic updates, and institutional information.'
    ],
    tags: ['Leadership', 'Event Management', 'Team'],
  },
  {
    id: 2,
    role: 'Finance Committee',
    organization: 'TUPV Graduating Class Committee 2026',
    period: 'May 2026 – Jun 2026',
    description: [
      'Manage and track budgeting and allocation of funds for graduation-related events, ensuring financial accuracy and transparency.',
      'Coordinate the collection and documentation of graduation fees, providing regular financial updates to the student body and the university administration.'
    ],
    tags: ['Finance', 'Budget Management', 'Organization'],
  },
  {
    id: 3,
    role: 'President',
    organization: "Peer Facilitators' Guild - TUPV Chapter",
    period: 'Sep 2024 – Sep 2025',
    description: [
      'Supervised organizational programs and presided over decision-making processes for university-wide initiatives.',
      'Coordinated with university stakeholders to plan and evaluate student-centered programs.'
    ],
    tags: ['Leadership', 'Event Management', 'Team Building'],
  },
  {
    id: 4,
    role: 'Vice President - Internal',
    organization: 'Institute of Computer Engineers of the Philippines Student Edition, TUPV ',
    period: 'Sep 2024 – Aug 2025',
    description: [
      "Assisted the president in overseeing organizational operations and assumed executive responsibilities in the president's absence.",
      'Managed internal operations and committee collaboration to align with organizational objectives.'
    ],
    tags: ['Leadership', 'Internal Operations', 'Team Collaboration', 'Strategic Planning'],
  },
  {
    id: 5,
    role: 'Head of Finance',
    organization: "Peer Facilitators' Guild - TUPV Chapter",
    period: 'Sep 2023 – Aug 2024',
    description: [
      "Managed organizational budget and maintained accurate financial reports.",
      'Oversaw financial documentation and allocation of organizational resources.'
    ],
    tags: ['Leadership', 'Financial Management', 'Organization', 'Reporting'],
  },
];

const Leadership = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="leadership" className={styles.leadership}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// beyond the code</span>
          <h2 className="section-title">Leadership &amp; Activities</h2>
          <p className="section-subtitle">
            Roles where I led, collaborated, and made an impact outside of development.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {leadershipItems.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.card} ${inView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.org}>{item.organization}</p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
