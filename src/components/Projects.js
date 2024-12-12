import React from "react";
import "./Projects.css";
import eventsecurity from "../images/eventsecurity.jpg";
import mobilepatrol from "../images/mobilepetrol.jpg";
import security from "../images/seurityimage.jpg";

const projects = [
  {
    id: 1,
    title: "Event Security",
    description: "Providing top-tier security for high-profile events.",
    image: eventsecurity,
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Patrol",
    description: "Ensuring safety through mobile security services.",
    image: mobilepatrol,
    link: "#",
  },
  {
    id: 3,
    title: "CCTV Monitoring",
    description: "24/7 advanced surveillance for peace of mind.",
    image: security,
    link: "#",
  },
  {
    id: 4,
    title: "Access Control",
    description: "Managing access to ensure authorized entry only.",
    image: eventsecurity,
    link: "#",
  },
];

const steps = [
  { id: 1, title: "Consultation", description: "Understanding your security needs." },
  { id: 2, title: "Planning", description: "Developing a custom security strategy." },
  { id: 3, title: "Implementation", description: "Deploying trained professionals and technology." },
  { id: 4, title: "Monitoring", description: "Ensuring safety through continuous oversight." },
];

const Projects = () => {
  return (
    <>
      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-overlay"></div>
        <div className="projects-container">
          <h2 className="projects-title"><i class="fa-solid fa-bars-progress"></i> Our Projects</h2>
          <p className="projects-description">
            Explore our featured projects that showcase our expertise and commitment to excellence.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Accordion Section */}
      <section className="how-we-work-section">
        <div className="how-we-work-overlay"></div>
        <div className="how-we-work-container">
          <h2 className="how-we-work-title"><i class="fa-solid fa-list-check"></i> How We Work</h2>
          <div className="accordion" id="accordionExample">
            {steps.map((step) => (
              <div className="accordion-item" key={step.id}>
                <h2 className="accordion-header" id={`heading${step.id}`}>
                  <button
                    className={`accordion-button ${step.id === 1 ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${step.id}`}
                    aria-expanded={step.id === 1 ? "true" : "false"}
                    aria-controls={`collapse${step.id}`}
                  >
                    {step.title}
                  </button>
                </h2>
                <div
                  id={`collapse${step.id}`}
                  className={`accordion-collapse collapse ${step.id === 1 ? "show" : ""}`}
                  aria-labelledby={`heading${step.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
