import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  
  const [aboutInfo, setAboutInfo] = useState(false);
  const [aboutClasses, setAboutClasses] = useState('Home-about-container');
  
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

  const handleAbout = (bool) => {
    setAboutInfo(bool);
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
            onClick={ () => handleAbout(!aboutInfo) }
          >
            About
          </div>
          <div className="Home-projects">Projects</div>
        </div>
      </div>
      <div className="Home-info-container">
        <div className={ aboutClasses }></div>
      </div>
    </main>
  )
}

export default Home;