import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/projects" element={ <Projects /> } />
    </Routes>
  );
}

export default App;
