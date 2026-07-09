import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Leadership', to: 'leadership' },
  //{ label: 'Certificates', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
];

const socials = [
  { id: 'github', icon: <FiGithub size={18} />, href: 'https://github.com/ivankarll', label: 'GitHub' },
  { id: 'linkedin', icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/ivankarllobaton', label: 'LinkedIn' },
  { id: 'email', icon: <FiMail size={18} />, href: 'mailto:lobaton.ivankarll@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo + tagline */}
        <div className={styles.brand}>
          <Link to="hero" smooth duration={600} className={styles.logo}>
            Ivan Karl Lobaton
          </Link>
          <p className={styles.tagline}>
            Building cool things on the internet.
          </p>
        </div>

        {/* Nav links */}
        <nav className={styles.nav} aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-70}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className={styles.socialLink}
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© 2026 Ivan Karl Lobaton</p>
      </div>
    </footer>
  );
};

export default Footer;
