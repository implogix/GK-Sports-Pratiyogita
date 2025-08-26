import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Registration from './components/pages/Registration';
import Schedule from './components/pages/Schedule';
import Supporters from './components/pages/Supporters';
import Results from './components/pages/Results';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/supporters" element={<Supporters />} />
            <Route path="/results" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}