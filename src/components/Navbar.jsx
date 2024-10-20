import React from 'react'
import Logo from '../assets/Logo/Logo1.svg'
import { navLists } from '../data/data'

const Navbar = () => {
  return (
    <header className='flex justify-center container mx-auto mt-[72px] w-[1240px] h-[50px]'>
        <nav className='flex justify-between items-center w-full font-body'>
                {/* logo */}
                <div className='logo'>
                    <img src={Logo} alt="Logo" />
                </div>
                
                {/* Navlist */}
                <div className='NavList'>
                    <ul className='flex text-[18px] text-center items-center gap-[50px]'>
                        {navLists.map((list, index) => (
                            <li key={index}>
                                <button className='text-[#1D1D1D] hover:font-bold duration-100'>{list.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Button */} 
                <div className='button'>
                    <button className='border border[1px] border-[#377DFF] px-[50px] py-[12px] rounded-3xl text-[#377DFF] text-[16px] font-bold'>Contacts</button>
                </div>
        </nav>
    </header>
  )
}

export default Navbar