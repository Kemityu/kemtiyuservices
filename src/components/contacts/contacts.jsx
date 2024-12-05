import React from 'react';

import { Link } from 'react-router-dom';
import Contactus from './contact-us';
const Contact = () => {
  return (
    <section className="px-4">
        <div className='bg-black h-40 w-200'>
                <h2 className='text-4xl font-bold text-[#ac9120] py-5'>Contactez-nous</h2>
                <div className="row text-white">
                            <Link to="/" className="hover:underline">Accueil</Link> 
                            <span className="mx-2">/</span>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
        </div>
      <Contactus />
    </section>
  );
};

export default Contact;
