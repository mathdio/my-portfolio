import { useEffect, useState } from 'react';
import Header from "../components/Header";
import './About.css';

function About() {
  const [aboutClasses, setAboutClasses] = useState('About-text');

  useEffect(() => {
    setAboutClasses('About-text About-text-transitioning');
  }, []);

	return (
		<main className="About-main-container">
      <Header />
      <div className={ aboutClasses }>
        <p>
          Biologist switching careers to Information Technology area, focusing in web development full stack.
        </p>
        <br />
        <p>
          Skills in JavaScript ES6, React.js, React Redux, HTML5, CSS3, Bootstrap, Git & GitHub, Jest, RTL, Docker, MySQL, Node.js and Linux.
        </p>
      </div>
		</main>
	)
}

export default About;