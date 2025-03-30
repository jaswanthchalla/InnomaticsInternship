import profileImage from '../assets/images/profile.jpg'

export const About = () => {
  const education = [
    { year: '2021-2025', title: 'Electrical And Electronics Engineering', institution: 'NIT Andhra Pradesh' },
    { year: '2019-2021', title: 'Intermediate Education', institution: 'ST ANNS Junior College' },
    { year: '2018-2019', title: 'Class X', institution: 'ST ANNS EM High School' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Profile" className="profile-img"/>
          </div>
          <div className="about-text">
            <p>Final-year B.Tech (EEE) student (CGPA: 9.25) passionate about programming, software development, and machine learning. I thrive on solving real-world challenges through hands-on projects, deep learning models, and full-stack web development.</p><br/>

            <p>With a strong foundation in Python, Django, JavaScript, and cloud technologies, I have built scalable applications and participated in national-level competitions, securing All India 2nd Rank in Naukri Campus Young Turks Contest.</p>

            <p>Certified in industry-relevant technologies, I have a keen eye for problem-solving, data-driven insights, and system optimization. Excited about opportunities to apply my technical expertise in dynamic, growth-oriented environments to build impactful solutions.</p><br/>
            
            <div className="education-timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.institution}</p>
                  </div>
                  <div className="timeline-year">{item.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}