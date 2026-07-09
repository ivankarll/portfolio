import { useInView } from 'react-intersection-observer';

/**
 * useScrollAnimation
 *
 * Wraps react-intersection-observer to provide a simple
 * "animate when enters viewport" hook for section content.
 *
 * Usage:
 *   const { ref, inView } = useScrollAnimation();
 *   <div ref={ref} className={inView ? styles.visible : styles.hidden}>
 *
 * @param {object}  options
 * @param {number}  options.threshold  - Visibility ratio to trigger (0–1). Default 0.15
 * @param {boolean} options.triggerOnce - Only animate once. Default true
 */
export const useScrollAnimation = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    ...options,
  });
  return { ref, inView };
};
