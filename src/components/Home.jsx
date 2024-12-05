import React from 'react';
import WhatWeDo from './services/whatwedo';
import Expertise from './services/expertise';
import { Link } from 'react-router-dom';
import Aboutus from './about/aboutus';
import Contactus from './contacts/contact-us';

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur notre site !</p>
      <Aboutus />
      <div className="h-70">
        <WhatWeDo />
        <Expertise />
      </div>
      <Contactus />
    </div>
  );
};

export default Home;
