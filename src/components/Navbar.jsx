import React from 'react'
import Logo from '../assets/Logo/Logo1.svg'
import { navLists } from '../data/data'

const Navbar = ({ scrollToSection, homeRef, aboutRef, servicesRef, projectsRef }) => {

    const sections = {
        homeRef,
        aboutRef,
        servicesRef,
        projectsRef,
    };

    return (
        <header className='flex justify-center container mx-auto mt-[12px] md:mt-[72px]'>
            <nav className='flex justify-between items-center w-full font-body px-4 md:px-8 lg:px-12'>
                {/* Logo */}
                <div className='logo'>
                    <img src={Logo} alt="Logo" className='h-10' /> {/* กำหนดความสูงของ Logo */}
                </div>

                {/* Navlist */}
                <div className='NavList hidden md:flex'> {/* ซ่อน NavList ในหน้าจอเล็ก */}
                    <ul className='flex text-[18px] text-center items-center gap-[30px]'> {/* ปรับขนาด gap */}
                        {navLists.map((list, index) => (
                            <li key={index} onClick={() => scrollToSection(sections[list.section])}>
                                <button className='text-[#1D1D1D] hover:font-bold duration-100'>{list.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Button */} 
                <div className='button hidden sm:flex'>
                    <button className='border border-[#377DFF] px-[30px] py-[10px] rounded-3xl text-[#377DFF] text-[16px] font-bold hover:bg-[#377DFF] hover:text-white transition duration-200'> {/* ปรับ padding ของปุ่ม */}
                        Contacts
                    </button>
                </div>

                {/* Responsive Nav Toggle Button for Mobile */}
                <div className='md:hidden'>
                    <button className='text-[#1D1D1D] focus:outline-none'>
                        {/* ไอคอนเมนูที่เปิด/ปิด สามารถใช้ไอคอน SVG หรือ Font Awesome */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
