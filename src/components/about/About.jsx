import React from 'react';
import { Link } from 'react-router-dom';

import Aboutus from './aboutus';

const About = () => {
  return (
    <section className="px-4">
      <div className="bg-black h-40 w-full">
        <h2 className="text-4xl font-bold text-[#ac9120] py-5">A propos</h2>
        <div className="text-white">
          <Link to="/" className="hover:underline">Accueil</Link>
          <span className="mx-2">/</span>
          <Link to="/about" className="hover:underline">A propos</Link>
        </div>
      </div>

      <Aboutus />
    </section>
  );
};

export default About;
