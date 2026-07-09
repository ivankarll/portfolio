import { education } from '../../data/education';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import styles from './Education.module.css';

const Education = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="education" className={styles.education}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// where I studied</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and honours received.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className={`${styles.item} ${inView ? styles.itemVisible : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Dot + line column */}
              <div className={styles.dotCol}>
                <div className={styles.dot} />
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={styles.card}>
                {/* Top row */}
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>
                        <FiMapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <span className={styles.dates}>
                    <FiCalendar size={11} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>

                {/* Awards */}
                {edu.awards && edu.awards.length > 0 && (
                  <>
                    <p className={styles.awardsLabel}>
                      <FiAward size={13} /> Achievements &amp; Awards
                    </p>
                    <ul className={styles.awards}>
                      {edu.awards.map((award, j) => (
                        <li key={j} className={styles.awardItem}>
                          <span className={styles.awardName}>{award.name}</span>
                          <span className={styles.awardMeta}>
                            {award.year}
                            {award.detail && <> · {award.detail}</>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
