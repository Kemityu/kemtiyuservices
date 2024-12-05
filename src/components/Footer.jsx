import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#ac9120] text-white py-8">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Colonne Liens Rapides */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Liens Rapides</h4>
                    <ul>
                        <Link to="/" className="block hover:text-gray-200 mb-2">Accueil</Link>
                        <Link to="/about" className="block hover:text-gray-200 mb-2">A Propos</Link>
                        <Link to="/services" className="block hover:text-gray-200 mb-2">Services</Link>
                        <Link to="/contact" className="block hover:text-gray-200 mb-2">Contact</Link>
                    </ul>
                </div>

                {/* Colonne Coordonnées */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Contactez-nous</h4>
                    <p className="mb-2">📍 Adresse : Votre adresse ici</p>
                    <p className="mb-2">📞 Téléphone : +225 07 97 49 92 80 / </p>
                    <p className="mb-2">✉️ Email : contact@kemtiyu.com</p>
                </div>

                {/* Colonne Réseaux Sociaux */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-2xl items-center hover:text-gray-200"><FaFacebook /></a>
                       
                    </div>
                </div>
            </div>

            {/* Mention de Copyright */}
            <div className="text-center mt-8 pt-4 border-t border-white/20">
                <p>© {currentYear} Kemtiyu Services. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;