import React, { useState } from 'react';
import Logo from '../assets/Logo/Logo1.svg';
import { navLists } from '../data/data';
import { FiMenu, FiX } from 'react-icons/fi'; // ไอคอนเมนู

const Navbar = ({ scrollToSection, homeRef, aboutRef, servicesRef, projectsRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sections = {
        homeRef,
        aboutRef,
        servicesRef,
        projectsRef,
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='flex justify-center container mx-auto mt-[0px] md:mt-[72px]'>
            <nav className='flex justify-between fixed items-center w-full h-[50px] font-body px-4 md:px-8 lg:px-12 bg-white z-50'>
                {/* Logo */}
                <div className='logo'>
                    <img src={Logo} alt="Logo" className='h-10' />
                </div>

                {/* Desktop Navlist */}
                <div className='NavList hidden md:flex'>
                    <ul className='flex text-[18px] text-center items-center gap-[30px]'>
                        {navLists.map((list, index) => (
                            <li key={index} onClick={() => scrollToSection(sections[list.section])}>
                                <button className='text-[#1D1D1D] hover:font-bold duration-100'>{list.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Button */}
                <div className='button hidden sm:flex'>
                    <button className='border border-[#377DFF] px-[30px] py-[10px] rounded-3xl text-[#377DFF] text-[16px] font-bold hover:bg-[#377DFF] hover:text-white transition duration-200'>
                        Contacts
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-[#1D1D1D] focus:outline-none'>
                        {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`fixed top-[50px] border text-center left-0 h-full bg-white shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-full`}>
                <div className='flex flex-col p-4'>

                    {/* Close button inside the sidebar
                    <button onClick={toggleMenu} className='self-end text-[#1D1D1D] mb-4'>
                        <FiX className="h-6 w-6" />
                    </button> */}

                    {/* Sidebar Navigation Links */}
                    <ul className='flex flex-col text-[18px] gap-4'>
                        {navLists.map((list, index) => (
                            <li key={index} onClick={() => {
                                scrollToSection(sections[list.section]);
                                toggleMenu();
                            }}>
                                <button className='text-[#1D1D1D] hover:font-bold duration-100'>{list.name}</button>
                            </li>
                        ))}
                    </ul>

                    {/* Sidebar Contact Button */}
                    <button className='mt-6 border border-[#377DFF] px-[20px] py-[8px] rounded-3xl text-[#377DFF] text-[16px] font-bold hover:bg-[#377DFF] hover:text-white transition duration-200'>
                        Contacts
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

export default Navbar;
