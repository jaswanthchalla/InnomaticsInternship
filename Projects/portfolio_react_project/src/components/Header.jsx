import { Link } from 'react-scroll'

export const Header = () => (
  <section className="hero-section">
  <div className="container">
    <div className="hero-content">
      <h1>CHALLA DURGA ANU JASWANTH</h1>
      <p>Full Stack Web Developer | Machine Learning Engineer</p>
      <div className="cta-container">
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="cta-button"
        >
          View My Work
        </Link>
      </div>
    </div>
  </div>
</section>
)