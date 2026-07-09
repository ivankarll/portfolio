import { projects } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" className={styles.projects}>
      <div className="container" ref={ref}>

        {/* Section Header */}
        <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className="section-tag">// what I've built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've designed, built, and shipped.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''} ${inView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image — only rendered when a screenshot is available */}
              {project.image && (
                <div className={styles.thumbnail}>
                  <img src={project.image} alt={project.title} />
                  {/* Hover overlay with quick links */}
                  <div className={styles.thumbnailOverlay}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.overlayLink}>
                        <FiGithub size={14} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.overlayLink}>
                        <FiExternalLink size={14} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Body */}
              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FiGithub size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkLive}`}>
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
