import { Link } from 'react-scroll'
import { FaTimes, FaBars } from 'react-icons/fa'

export const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="hero" smooth className="logo">
          Jaswanth Challa
        </Link>

        <ul className="desktop-menu">
          <li><Link to="about" smooth>About</Link></li>
          <li><Link to="skills" smooth>Skills</Link></li>
          <li><Link to="projects" smooth>Projects</Link></li>
          <li><Link to="contact" smooth>Contact</Link></li>
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <Link to="about" smooth onClick={() => setIsOpen(false)}>About</Link>
          <Link to="skills" smooth onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="projects" smooth onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="contact" smooth onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}