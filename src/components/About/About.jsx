import styles from './About.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`} ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// about me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Content — two-column: text left, photo + stats right */}
        <div className={`${styles.grid} ${inView ? styles.visible : ''}`}>

          {/* Left: bio text */}
          <div className={styles.text}>
            <p>
              Hi! I'm <strong>Ivan Karl</strong>, a software developer based in
              Hinigaran, Negros Occidental, Philippines. I love the challenge of
              taking complex datasets and intelligent algorithms and turning them
              into practical, interactive applications.
            </p>
            <p>
              My development focus sits at the intersection of{' '}
              <strong>Machine Learning</strong> and{' '}
              <strong>Application Development</strong>. I enjoy training and
              optimizing models—such as building Convolutional Neural Networks
              (CNNs) for image classification or using Keras for real-time
              Natural Language Processing—and then engineering the backend logic
              and frontend interfaces needed to bring those models to life.
            </p>
            <p>
              By balancing framework architectures like{' '}
              <strong>Laravel</strong> and <strong>React</strong> with
              data-driven workflows in <strong>Python</strong>, I aim to build
              systems that are both computationally smart and highly
              user-friendly. I am currently looking for opportunities where I
              can apply my skills, collaborate on meaningful projects, and
              continue expanding my engineering toolkit.
            </p>

            {/* Stats */}
            <div className={styles.stats}>
              {[
                { value: '3+', label: 'Years of Experience' },
                { value: '5', label: 'Projects Completed' },
                { value: '5', label: 'Leadership Roles' },
              ].map(({ value, label }) => (
                <div key={label} className={styles.statCard}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: profile photo */}
          <div className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <img
                src="/images/Lobaton, Ivan Karl L-9198.jpg"
                alt="Ivan Karl Lobaton"
                className={styles.photo}
              />
              {/* decorative ring */}
              <div className={styles.photoRing} aria-hidden="true" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
