import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Utilisez Link pour naviguer
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logo from "../assets/logo.png";

const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); // Toggle menu on click

    const closeMenu = () => setClick(false); // Fermer le menu après un clic

    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0  transition'>
            <ul className='text-center text-lg p-4'>
                <Link to="/" onClick={closeMenu}>
                    <li className='my-2 py-2 border-b border-[#ac9120] hover:bg-[#ac9120] hover:text-white hover:rounded'>
                        Accueil
                    </li>
                </Link>
                <Link to="/about" onClick={closeMenu}>
                    <li className='my-2 py-2 border-b border-[#ac9120] hover:bg-[#ac9120] hover:text-white hover:rounded'>
                        A Propos
                    </li>
                </Link>
                <Link to="/services" onClick={closeMenu}>
                    <li className='my-2 py-2 border-b border-[#ac9120] hover:bg-[#ac9120] hover:text-white hover:rounded'>
                        Services
                    </li>
                </Link>
                <Link to="/contact" onClick={closeMenu}>
                    <li className='my-2 py-2 border-b border-[#ac9120] hover:bg-[#ac9120] hover:text-white hover:rounded'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className='h-16 flex justify-between items-center z-50 text-black lg:py-4 px-4 py-2 flex-1'>
                {/* Logo & Texte */}
                <div className='flex items-center flex-1 space-x-1 lg:space-x-2'>
                    <img src={logo} alt="Logo" className='w-20 h-20' />
                    <div>
                        <p className='text-xl font-bold text-[#ac9120]'>Kemtiyu <em> Services</em></p>
                    </div>
                </div>

                {/* Menu de navigation pour les grands écrans */}
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-4 mr-8 text-[16px]'>
                            <Link to="/">
                                <li className='hover:text-[#ac9120] transition border-b-2 border-slate-900 hover:border-[#ac9120] cursor-pointer'>
                                    Accueil
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className='hover:text-[#ac9120] transition border-b-2 border-slate-900 hover:border-[#ac9120] cursor-pointer'>
                                    A Propos
                                </li>
                            </Link>
                            <Link to="/services">
                                <li className='hover:text-[#ac9120] transition border-b-2 border-slate-900 hover:border-[#ac9120] cursor-pointer'>
                                    Services
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className='hover:text-[#ac9120] transition border-b-2 border-slate-900 hover:border-[#ac9120] cursor-pointer'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* Menu mobile (affiché quand 'click' est true) */}
                <div>{click && content}</div>

                {/* Bouton hamburger pour afficher/fermer le menu */}
                <button className='lg:hidden block transition' onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    );
};

export default Nav;
