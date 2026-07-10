import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import styles from './Contact.module.css';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'lobaton.ivankarll@gmail.com',
    href: 'mailto:lobaton.ivankarll@gmail.com',
    icon: <FiMail size={22} />,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/ivankarll',
    href: 'https://github.com/ivankarll',
    icon: <FiGithub size={22} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ivankarllobaton',
    href: 'https://linkedin.com/in/ivankarllobaton',
    icon: <FiLinkedin size={22} />,
  },
];

const Contact = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="contact" className={styles.contact}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// get in touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Reach out — I'd love to hear from you!
          </p>
        </div>

        {/* Two-column: profile card + links */}
        <div className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}>

          {/* Left — Profile card */}
          <div className={styles.profileCard}>
            <div className={styles.photoWrap}>
              <img
                src={`${import.meta.env.BASE_URL}images/Lobaton-Ivan%20Karl%20L-9198.jpg`}
                alt="Ivan Karl Lobaton"
                className={styles.photo}
              />
            </div>
            <h3 className={styles.profileName}>Ivan Karl Lobaton</h3>
            <p className={styles.profileTitle}>Computer Engineer</p>
            <div className={styles.profileMeta}>
              <span className={styles.metaItem}>
                <FiMapPin size={14} />
                Hinigaran, Negros Occidental, PH
              </span>
              <span className={`${styles.metaItem} ${styles.available}`}>
                <HiOutlineStatusOnline size={15} />
                Open to Opportunities
              </span>
            </div>
            <p className={styles.profileBio}>
              I'm passionate about building intelligent systems and bringing them to life
              through clean, interactive interfaces. Whether it's a quick question or a
              collaboration proposal — my inbox is always open.
            </p>
          </div>

          {/* Right — Contact links */}
          <div className={styles.links}>
            {contactLinks.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.contactLink}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <span className={styles.contactIcon}>{link.icon}</span>
                <div>
                  <p className={styles.contactLabel}>{link.label}</p>
                  <p className={styles.contactValue}>{link.value}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
