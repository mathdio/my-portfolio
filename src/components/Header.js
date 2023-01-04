import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../images/githubIcon.svg';
import linkedinIcon from '../images/linkedinIcon.svg';
import './Header.css';

function Header() {
  const [headerClasses, setHeaderClasses] = useState('Header-header-container');

  useEffect(() => {
    setHeaderClasses('Header-header-container Header-header-transiotioning');
  }, []);

  return (
    <header className={ headerClasses }>
      <div className="Header-name-title">
        Matheus Diógenes
      </div>
      <hr className="Header-division-hr" />
      <div className="Header-links-container">
        <Link to="/about">
          <div className="Header-about-link">
            About
          </div>
        </Link>
        <Link to="/projects">
          <div className="Header-projects-link">
            Projects
          </div>
        </Link>
      </div>
      <hr className="Header-contact-hr" />
      <div className="Header-contact-icons">
        <a href="https://github.com/mathdio" target="_blank" rel="noreferrer">
          <img
            alt=""
            src={ githubIcon }
            className="Header-contact-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/matheus-diogenes-almeida/" target="_blank" rel="noreferrer">
          <img
            alt=""
            src={ linkedinIcon }
            className="Header-contact-icon"
          />
        </a>
      </div>
    </header>
  )
}

export default Header;