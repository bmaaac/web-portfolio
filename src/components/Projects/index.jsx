import "./index.scss";
import websiteImage1 from "./webimg.png"; // Replace with your actual image paths
import websiteImage2 from "./webimg2.png";

const Projects = () => {
  const projectData = [
    {
      title: "Product Management",
      description: "simple crud app with Firebase Realtime Database",
      image: websiteImage1,
      link: "https://bmaaac.github.io/crud_reactfirebase/",
    },
    {
      title: "Outsource_html",
      description:
        "Website mockup design for an outsourcing business, showcasing a clean, modern interface with a focus on simplicity and functionality.",
      image: websiteImage2,
      link: "https://outsource-html.vercel.app/",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-page">
      <div className="text-zone">
        <h1>My Projects</h1>
        <div className="cards-container">
          {projectData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img
                  src={project.image}
                  draggable="false"
                  alt={project.title}
                />
                <div className="card-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="projects-BGanimation">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
