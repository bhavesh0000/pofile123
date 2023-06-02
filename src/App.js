//import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Positions from './pages/POR';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './component/Header';
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
    <Header/>
    <Container>
  <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/por" element={<Positions />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </AnimatePresence>
    </Container>
    </>
  );
}

export default App;
