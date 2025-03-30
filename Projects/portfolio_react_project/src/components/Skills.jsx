import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiExpress, 
  SiMysql, 
  SiMongodb,
  SiPandas,
  SiNumpy
} from 'react-icons/si';

export const Skills = () => {
    const skills = [
        { icon: <SiCplusplus />, name: 'C++', level: 85 },
        { icon: <FaPython />, name: 'Python', level: 90 },
        { icon: <SiHtml5 />, name: 'HTML', level: 95 },
        { icon: <SiCss3 />, name: 'CSS', level: 90 },
        { icon: <SiJavascript />, name: 'JavaScript', level: 80 },
        { icon: <FaReact />, name: 'React', level: 85 },
        { icon: <FaNodeJs />, name: 'Node.js', level: 80 },
        { icon: <SiExpress />, name: 'Express.js', level: 80 },
        { icon: <SiNumpy />, name: 'NumPy', level: 75 },
        { icon: <SiPandas />, name: 'Pandas', level: 75 },
        { icon: <SiMysql />, name: 'MySQL', level: 80 },
        { icon: <SiMongodb />, name: 'MongoDB', level: 75 }
      ];

      return (
        <section id="skills" className="skills">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                  
                  <div className="skill-details">
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
}