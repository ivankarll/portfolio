import { experiences } from '../../data/experience';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Experience.module.css';

const Experience = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="experience" className={styles.experience}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// where I've worked</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and internship experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`${styles.item} ${inView ? styles.itemVisible : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Timeline dot & line */}
              <div className={styles.dotCol}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={styles.card}>
                {/* Header row */}
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className={styles.dates}>
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                {/* Bullets */}
                <ul className={styles.bullets}>
                  {exp.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className={styles.tags}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
