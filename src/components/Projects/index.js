import "./index.scss";
import hireMe from "./HireMe.png";
import websiteImage1 from "./webimg.png"; // Replace with your actual image paths
// import websiteImage2 from "./websiteImage2.png";

const Projects = () => {
  const projectData = [
    {
      title: "Product Management",
      description: "simple crud app with Firebase Realtime Database",
      image: websiteImage1,
      link: "https://bmaaac.github.io/crud_reactfirebase/", // Replace with actual link
    },
    // {
    //   title: "Youtube",
    //   description: "TEST: directs to youtube",
    //   image: websiteImage1,
    //   link: "https://www.youtube.com", // Replace with actual link
    // },
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
      <div className="hireme">
        <img src={hireMe} draggable="false" alt="" />
      </div>
    </div>
  );
};

export default Projects;
