// ProjectCard.jsx — project tile used in grids.

const ProjectCard = ({ project, onOpen }) => (
  <button
    type="button"
    className="project-card"
    onClick={() => onOpen(project)}
    data-screen-label={project.title}
  >
    <div
      className="project-card__img"
      style={{ backgroundImage: `url(${project.image})` }}
      role="img"
      aria-label={project.title}
    />
    <div className="project-card__body">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {project.tags.length > 4 && (
          <span className="tag tag--ghost">+{project.tags.length - 4}</span>
        )}
      </div>
    </div>
  </button>
);

window.ProjectCard = ProjectCard;
