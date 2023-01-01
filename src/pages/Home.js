import { useEffect, useState } from 'react';
import './Home.css';

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
        <div className={ aboutClasses }></div>
        <div className={ projectsClasses }>
          <div>Recipes App Application</div>
        </div>
      </div>
    </main>
  )
}

export default Home;