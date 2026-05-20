// ProjectDialog.jsx — modal opened when a project tile is clicked.

const { useEffect } = React;

const ProjectDialog = ({ project, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="dialog__close" onClick={onClose} aria-label="Lukk">
          <window.IconX size={18} />
        </button>

        <div className="dialog__media" style={{ backgroundImage: `url(${project.image})` }} />

        <div className="dialog__body">
          <h2 id="dialog-title" className="dialog__title">{project.title}</h2>
          <p className="dialog__desc">{project.description}</p>

          <ul className="dialog__meta">
            <li>
              <window.IconUsers size={16} />
              <span><b>Rolle:</b> {project.role}</span>
            </li>
            <li>
              <window.IconBuilding size={16} />
              <span><b>Klient:</b> {project.client}</span>
            </li>
            <li>
              <window.IconCalendar size={16} />
              <span><b>Når:</b> {project.year}</span>
            </li>
          </ul>

          <div className="dialog__tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {project.demoUrl && (
            <div className="dialog__actions">
              <button className="btn btn--accent">Se demo <window.IconArrowRight size={14} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

window.ProjectDialog = ProjectDialog;
