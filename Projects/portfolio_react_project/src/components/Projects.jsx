import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const projects = [
    {
      title: "Innomatics Website Clone",
      desc: "This project is a frontend clone of the Innomatics Research Labs website. Focus was on proper structuring, semantic HTML, and styling elements to match the original site.",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/jaswanthchalla/InnomaticsClone.git",
      demo: "https://jaswanthchalla.github.io/InnomaticsClone/",
      img: "/src/assets/images/project1.jpg"
    },
    {
      title: "Memory Matching Game",
      desc: "A fun and interactive game where users match pairs of cards. Implemented randomized card shuffling to make each game session unique.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/jaswanthchalla/MemoryMatchingGame.git",
      demo: "https://jaswanthchalla.github.io/MemoryMatchingGame/",
      img: "/src/assets/images/project2.jpg"
    },
    {
      title: "To-Do List App",
      desc: "A task management app built using React.js to add, remove, and mark tasks as completed. Used React state management (useState) to handle the list dynamically. Included features like editing tasks, filtering by completion status, and persistent storage (localStorage).",
      tech: ["React Js", "JavaScript","HTML5", "CSS3"],
      github: "https://github.com/jaswanthchalla/ToDoApp.git",
      demo: "to-do-app-delta-coral.vercel.app",
      img: "/src/assets/images/project3.jpg"
    },
    {
      title: "Shopping Cart",
      desc: "A task management app built using React.js to add, remove, and mark tasks as completed. Used React state management (useState) to handle the list dynamically. Included features like editing tasks, filtering by completion status, and persistent storage (localStorage).",
      tech: [ "JavaScript","HTML5", "CSS3"],
      github: "https://github.com/jaswanthchalla/ShoppingCart.git",
      demo: "https://jaswanthchalla.github.io/ShoppingCart/",
      img: "/src/assets/images/project4.jpg"
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}