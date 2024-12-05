import React from 'react';
import WhatWeDo from './whatwedo' ;
import Expertise from './expertise';

import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <section className=" px-4 ">
        <div className='bg-black h-40 w-200'>
                <h2 className='text-4xl font-bold text-[#ac9120] py-5'>Nos services</h2>
                <div className="row text-white">
                            <Link to="/" className="hover:underline">Accueil</Link> 
                            <span className="mx-2">/</span>
                            <Link to="/services" className="hover:underline">Services</Link>
                </div>
        </div>
        <div className="h-70">
            <WhatWeDo />
            <Expertise />
        </div>
        
      
    </section>
  );
};

export default Services;
