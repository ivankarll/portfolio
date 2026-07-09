import { certificates } from '../../data/certificates';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { HiExternalLink } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import styles from './Certificates.module.css';

const Certificates = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="certificates" className={styles.certificates}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// credentials</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Courses and certifications I've completed to keep growing.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className={`${styles.card} ${inView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Badge icon / image */}
              <div className={styles.badge}>
                {cert.image
                  ? <img src={cert.image} alt={cert.title} />
                  : <MdVerified size={36} className={styles.badgeIcon} />
                }
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.title}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <p className={styles.date}>{cert.date}</p>
              </div>

              {/* Category chip */}
              {cert.category && (
                <span className="tag">{cert.category}</span>
              )}

              {/* Verify link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.verifyLink}
                >
                  <HiExternalLink size={14} /> Verify
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
