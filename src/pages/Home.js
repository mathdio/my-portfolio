import { useEffect } from 'react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  
  useEffect(() => {
    document.title = 'Matheus Diógenes - Full Stack Web Dev';
  }, []);

  return (
    <main className="Home-main-container">
      <Header />
      {/* <div className="Home-info-container">
        <div className={ aboutClasses }>
          <p>Biologist switching careers to Information Technology area, focusing in web development full stack. Skills in JavaScript ES6, React.js, React Redux, HTML5, CSS3, Bootstrap, Git & GitHub, Jest, RTL, Docker, MySQL, Node.js and Linux.</p>
        </div>
        <div className={ projectsClasses }>
          {projects.map(({name, github, application}) => (
          <div 
            className="Home-individual-project-container"
            key={ uuid() }  
          >
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
      </div> */}
    </main>
  )
}

export default Home;