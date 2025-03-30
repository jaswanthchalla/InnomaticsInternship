import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              <FaEnvelope className="icon" />
              jaswanthchalla2004@gmail.com
            </p>
            <div className="social-links">
              <a href="https://github.com/jaswanthchalla" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/durga-anu-jaswanth-challa-561a59268/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}