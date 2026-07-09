import { skillCategories } from '../../data/skills';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Skills.module.css';

const Skills = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="skills" className={styles.skills}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// what I know</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A curated collection of technologies, frameworks, and tools I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {skillCategories.map((category, i) => (
            <div
              key={category.id}
              className={`${styles.card} ${inView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className={styles.categoryLabel}>{category.label}</h3>
              <ul className={styles.items}>
                {category.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
