import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={project.img} alt={project.title} />
      </div>
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        
        <div className="project-tech">
          {project.tech.map((technology, index) => (
            <span key={index} className="tech-badge">{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-btn"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </div>
  )
}