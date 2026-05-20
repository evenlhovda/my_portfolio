// ProjectsGrid.jsx — "Prosjekter 2025" and "Tidligere prosjekter".

const ProjectsGrid = ({ projects, onOpen }) => {
  const ongoing = window.ONGOING_IDS
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);
  const previous = projects.filter((p) => !window.ONGOING_IDS.includes(p.id));

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Prosjekter 2025</h2>
      <div className="project-grid">
        {ongoing.map((p) => (
          <window.ProjectCard key={p.id} project={p} onOpen={onOpen} />
        ))}
      </div>

      <h2 className="section-title section-title--margin-top">Tidligere prosjekter</h2>
      <div className="project-grid">
        {previous.map((p) => (
          <window.ProjectCard key={p.id} project={p} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
};

window.ProjectsGrid = ProjectsGrid;
