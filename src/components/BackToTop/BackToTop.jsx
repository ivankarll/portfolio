import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import styles from './BackToTop.module.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Link
      to="hero"
      smooth
      duration={700}
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </Link>
  );
};

export default BackToTop;
