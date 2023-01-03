import { useEffect, useState } from 'react';
import './Home.css';
import githubIcon from '../images/githubIcon.svg';
import websiteIcon from '../images/websiteIcon.svg';
import projects from '../db/projects';

function Home() {
  
  const [aboutInfo, setAboutInfo] = useState(false);
  const [projectsInfo, setProjectsInfo] = useState(false);
  const [aboutClasses, setAboutClasses] = useState('Home-about-container');
  const [projectsClasses, setProjectsClasses] = useState('Home-project-container');
  
  useEffect(() => {
    document.title = 'Matheus Diógenes - Full Stack Web Dev';
  }, []);

  useEffect(() => {
    if (aboutInfo) {
      setAboutClasses('Home-about-container Home-showing-container')
    } else {
      setAboutClasses('Home-about-container');
    }
  }, [aboutInfo]);

  useEffect(() => {
    if (projectsInfo) {
      setProjectsClasses('Home-project-container Home-showing-container')
    } else {
      setProjectsClasses('Home-project-container');
    }
  }, [projectsInfo]);

  const handleAbout = (bool) => {
    setAboutInfo(bool);
    setProjectsInfo(false);
  }

  const handleProjects = (bool) => {
    setProjectsInfo(bool);
    setAboutInfo(false);
  }

  return (
    <main className="Home-main-container">
      <div className="Home-content-container">
        <div className="Home-name-title">
          Matheus Diógenes
        </div>
        <hr className="Home-division-hr" />
        <div className="Home-links-container">
          <div 
            className="Home-about"
            onClick={ () => handleAbout(!aboutInfo) }
          >
            About
          </div>
          <div 
            className="Home-projects"
            onClick={ () => handleProjects(!projectsInfo) }
          >
            Projects
          </div>
        </div>
      </div>
      <div className="Home-info-container">
        <div className={ aboutClasses }>
          <p>Biologist switching careers to Information Technology area, focusing in web development full stack. Skills in JavaScript ES6, React.js, React Redux, HTML5, CSS3, Bootstrap, Git & GitHub, Jest, RTL, Docker, MySQL, Node.js and Linux.</p>
        </div>
        <div className={ projectsClasses }>
          {projects.map(({name, github, application}) => (
            <div className="Home-individual-project-container">
            <p className="Home-project-name">
              {name}
            </p>
            <div className="Home-icons-project-container">
              <a href={ github } target="_blank" rel="noreferrer">
                <img
                  alt=""
                  src={ githubIcon }
                  className="Home-icon-project"
                />
              </a>
              <a href={ application } target="_blank" rel="noreferrer">
                <img
                  alt=""
                  src={ websiteIcon }
                  className="Home-icon-project"
                />
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home;