import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';

const ROLES = [
  'Computer Engineer',
  'Web Developer',
  'Machine Learning Developer',
  'Backend API Developer',
  'Data Analytics',
];

const TECH_BADGES = ['React', 'Laravel', 'Python', 'TensorFlow', 'Flask', 'MySQL'];

const useTypewriter = (texts, typingSpeed = 70, deletingSpeed = 40, pauseMs = 1800) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs);
      }
    } else if (phase === 'pausing') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed);
      } else {
        setIndex((i) => (i + 1) % texts.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, index, texts, typingSpeed, deletingSpeed, pauseMs]);

  return display;
};

const Hero = () => {
  const typedRole = useTypewriter(ROLES);

  return (
    <section id="hero" className={styles.hero}>
      {/* ambient glow handled by ::before in CSS */}
      <div className={styles.container}>

        {/* Greeting badge */}
        <div className={styles.greetingBadge}>
          <span className={styles.greetingDot} aria-hidden="true" />
          Hello, world!&nbsp;I'm available for opportunities
        </div>

        {/* Name */}
        <h1 className={styles.name}>Hi, I'm <span className={styles.nameHighlight}>Ivan Karl</span>.</h1>

        {/* Typewriter role */}
        <p className={styles.role}>
          <span className={styles.rolePrefix}>{'>'}&nbsp;</span>
          <span className={styles.typed}>{typedRole}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </p>

        {/* Subheadline / bio */}
        <p className={styles.bio}>
          Computer Engineering graduate passionate about <strong>developing modern web applications</strong>,
          <strong> machine learning</strong>, and <strong>practical software solutions</strong>.
          I enjoy building technology that solves real-world problems while creating
          intuitive user experiences.
        </p>

        {/* CTA buttons */}
        <div className={styles.ctas}>
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-70}
            className="btn-primary"
            style={{ cursor: 'pointer' }}
          >
            Explore Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-70}
            className="btn-outline"
            style={{ cursor: 'pointer' }}
          >
            Contact Me
          </Link>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href="https://github.com/ivankarll"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ivankarllobaton"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:lobaton.ivankarll@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>

        {/* Tech badges */}
        <div className={styles.badges}>
          {TECH_BADGES.map((tech) => (
            <span key={tech} className={styles.badge}>{tech}</span>
          ))}
        </div>

      </div>

      {/* Scroll hint */}
      <Link to="about" smooth duration={600} offset={-70} className={styles.scrollHint} style={{ cursor: 'pointer' }}>
        <FiArrowDown size={22} />
      </Link>
    </section>
  );
};

export default Hero;
