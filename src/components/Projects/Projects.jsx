import { projects } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const ProjectCard = ({ project, index, inView, variant = 'default' }) => (
  <article
    key={project.id}
    className={`${styles.card} ${styles[variant]} ${inView ? styles.cardVisible : ''}`}
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    {/* Thumbnail */}
    {project.image && (
      <div className={styles.thumbnail}>
        <img src={project.image} alt={project.title} />
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

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {(project.github || project.live) && (
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
      )}
    </div>
  </article>
);

const Projects = () => {
  const { ref, inView } = useScrollAnimation();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

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

        {/* Featured Projects */}
        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} variant="featured" />
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <div className={`${styles.divider} ${inView ? styles.visible : ''}`}>
              <span>Other Projects</span>
            </div>
            <div className={styles.othersGrid}>
              {others.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={featured.length + i} inView={inView} variant="other" />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Projects;
