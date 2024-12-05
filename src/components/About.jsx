import React from 'react';
import { Link } from 'react-router-dom';
import itcompany from "../assets/itcomp.jpg";
import { CgWebsite } from "react-icons/cg";

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

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <img
              src={itcompany} 
              alt="Team working"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2 text-[#ac9120]">
              \ A propos de nous \
            </h3>
            <h2 className="text-3xl font-bold text-black leading-tight mb-4">
              L'un des moyens les plus rapides de croître en affaires.
            </h2>
            <p className="text-gray-600 mb-6">
              Nous croyons fermement que l'innovation et l'adaptabilité sont les clés du succès dans un monde des affaires
              en constante évolution. Grâce à nos solutions sur mesure, nous permettons à nos clients d'atteindre rapidement
              leurs objectifs de croissance et de se distinguer dans un environnement compétitif.
            </p>

            {/* Service Card Section */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-black">
              {/* Icône à gauche */}
              <div className="mr-4">
                <CgWebsite className="h-10 w-10 text-[#ac9120]" />
              </div>

              {/* Textes à droite */}
              <div className="text-left w-full">
                <h2 className="text-l font-semibold text-[#333]">Obtenez des conseils professionnels instantanés.</h2>
                <p className="text-gray-600">Appelez-nous <span className='text-[#ac9120] font-bold'>+225 0797499280</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
