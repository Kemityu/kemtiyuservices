import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logo from "../assets/logo.png";

const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); // Toggle menu on click

    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
            <ul className='text-center text-xl p-4'>
                <Link to="/home">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Accueil
                    </li>
                </Link>
                <Link to="/about">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        A Propos
                    </li>
                </Link>
                <Link to="/services">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Services
                    </li>
                </Link>
                <Link to="/contact">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className='h-16 flex justify-between z-50 text-black lg:py-5 px-4 py-4 flex-1'>
                {/* Logo & Texte */}
                <div className='flex items-center flex-1'>
                    <img src={logo} alt="Logo" className='w-24 h-24 mr-4' />
                    <div>
                        <p className='text-3xl font-bold text-[#ac9120]'>Kemtiyu</p>
                        <p className='text-xl text-[#ac9120]'>Services</p>
                    </div>
                </div>

                {/* Menu de navigation pour les grands écrans */}
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <Link to="/home">
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
