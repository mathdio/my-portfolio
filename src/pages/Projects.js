import uuid from "react-uuid";
import Header from "../components/Header";
import projects from "../db/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import githubIcon from '../images/githubIcon.svg';
import websiteIcon from '../images/websiteIcon.svg';
import './Projects.css';

function Projects() {
  const [projectsClasses, setProjectsClasses] = useState('Projects-carousel');

  useEffect(() => {
    setProjectsClasses('Projects-carousel Projects-carousel-transitioning');
  }, []);

	return (
		<main className="Projects-main-container">
      <Header />
      <Carousel className={ projectsClasses }>
        {projects.map(({name, github, application, screenshot}) => (
          <div key={ uuid() }>
              <img
                src={ screenshot }
                alt=""
                className="Projects-screenshot"
              />
              <p className="legend Recipes-project-name" style={{'fontSize': '1rem'}}>{name}</p>
              <div className="Projects-icons-container">
                <a href={ github } target="_blank" rel="noreferrer" className="Projects-icon-link">
                  <img 
                    src={ githubIcon }
                    alt=""
                    className="Projects-icon"
                  />
                </a>
                <a href={ application } target="_blank" rel="noreferrer" className="Projects-icon-link">
                  <img 
                    src={ websiteIcon }
                    alt=""
                    className="Projects-icon"
                  />
                </a>
              </div>
          </div>
        ))}
      </Carousel>
		</main>
	)
}

export default Projects;