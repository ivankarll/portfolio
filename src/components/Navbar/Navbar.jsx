import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiArrowDownTray } from 'react-icons/hi2';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Leadership', to: 'leadership' },
  // { label: 'Certificates', to: 'certificates' }, // hidden until ready
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="hero" smooth duration={600} className={styles.logo}>
          Ivan Karl Lobaton
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-70}
              spy
              activeClass={styles.active}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href={`${import.meta.env.BASE_URL}files/Lobaton_IvanKarl_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
        >
          <HiArrowDownTray size={15} />
          Resume
        </a>

        {/* Hamburger */}
        <button
          id="navbar-menu-toggle"
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={600}
            offset={-70}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}files/Lobaton_IvanKarl_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileResume}
          onClick={() => setMenuOpen(false)}
        >
          <HiArrowDownTray size={15} />
          Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
