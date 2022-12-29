import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    document.title = 'Matheus Diógenes - Full Stack Web Dev';
  }, []);

  const [aboutInfo, setAboutInfo] = useState(false);
  const [aboutClasses, setAboutClasses] = useState('Home-about-container');

  const handleAbout = () => {
    setAboutInfo(true);
    setAboutClasses('Home-about-container Home-showing-container')
  }

  return (
    <main className="Home-main-container">
      <div className="Home-content-container">
        <div className="Home-name-title">
          <h1>
            Matheus Diógenes
          </h1>
        </div>
        <hr className="Home-division-hr" />
        <div className="Home-links-container">
          <div 
            className="Home-about"
            onClick={ () => handleAbout() }
          >
            About
          </div>
          <div className="Home-projects">Projects</div>
        </div>
      </div>
      <div className="Home-info-container">
        {aboutInfo && <div className={ aboutClasses }></div>}
      </div>
    </main>
  )
}

export default Home;