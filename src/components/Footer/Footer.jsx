import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-[#ac9120] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">A propos de nous</h3>
          <p className="text-sm mb-4 justify">
                Nous croyons fermement que l'innovation et l'adaptabilité sont les clés du succès dans un monde des affaires
              en constante évolution. Grâce à nos solutions sur mesure, nous permettons à nos clients d'atteindre rapidement
              leurs objectifs de croissance et de se distinguer dans un environnement compétitif.
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} />

            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />

            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} />

            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} />

            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Design et Developpement</li>
            <li>Application mobile</li>
            <li>Email professionnel</li>
            <li>Hébergement</li>
          </ul>
        </div>

        

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletters</h3>
          <p className="text-sm mb-4">
          Restez informé des dernières mises à jour, promotions et nouveautés en
          vous abonnant à notre newsletter.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-md bg-white text-gray-900"
            />
            <button
              type="submit"
              className="bg-black hover:bg-red-700 text-white py-2 px-4 rounded-md"
            >
              Souscrire
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
