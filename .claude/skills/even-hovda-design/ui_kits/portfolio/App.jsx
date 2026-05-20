// App.jsx — main controller. Single-page interactive prototype:
// hero, core areas, about, projects (with dialog modal), contact form.

const { useState, useEffect: useEffectApp } = React;

const App = () => {
  const [route, setRoute] = useState("home");
  const [openProject, setOpenProject] = useState(null);

  const navigate = (id) => {
    setRoute(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll spy — light-touch, updates active link as sections cross threshold.
  useEffectApp(() => {
    const ids = ["projects", "about", "contact"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setRoute(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <React.Fragment>
      <window.SiteHeader route={route} onNavigate={navigate} />
      <main className="container">
        <window.HeroSection onSeeProjects={() => navigate("projects")} />
        <window.CoreAreasSection />
        <window.AboutSection />
        <window.ProjectsGrid projects={window.PROJECTS} onOpen={setOpenProject} />
        <window.ContactForm />
      </main>
      <window.SiteFooter />
      {openProject && (
        <window.ProjectDialog
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </React.Fragment>
  );
};

window.App = App;
