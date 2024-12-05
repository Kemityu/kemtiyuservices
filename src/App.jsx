import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/services/services';
import Contact from './components/contacts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;