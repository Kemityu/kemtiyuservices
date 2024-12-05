import React from 'react';

import { Link } from 'react-router-dom';
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
      <h2 className="text-4xl font-bold">Contactez-Nous</h2>
      <p className="mt-4 text-lg">Si vous avez des questions ou des demandes, n'hésitez pas à nous contacter.</p>
    </section>
  );
};

export default Contact;
