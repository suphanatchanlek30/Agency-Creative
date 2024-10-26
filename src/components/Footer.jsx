import React from 'react'

import Logo2 from "../assets/Logo/Logo2.svg";

import { TbBrandTwitter } from "react-icons/tb";
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';

const Footer = ({scrollToSection, homeRef, aboutRef, servicesRef}) => {
    const sections = {
        homeRef,
        aboutRef,
        servicesRef,
    };

    const socialLinks = [
        { icon: <SlSocialFacebook />, link: 'https://facebook.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <LuLinkedin />, link: 'https://linkedin.com' },
        { icon: <MdOutlineMail />, link: 'mailto:test@gmail.com' },
        { icon: <TbBrandTwitter />, link: 'https://twitter.com' },
    ];

    return (
        <footer className='bg-[#383638] mt-[100px]'>
            <div className='flex container mx-auto pt-[150px] w-[1240px] justify-start items-start gap-[80px]'>
                {/* Logo */}
                <div className="mb-6 md:mb-0 flex items-start">
                    <div className="">
                        <img src={Logo2} alt="Agency Logo" className="w-[187px] h-[88px]" />
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:flex space-x-20 text-sm text-gray-300">
                    <div>
                        <h3 className="font-body font-bold text-[22px] text-[#FFFFFF]">Terms & policies</h3>
                        <ul className='font-body font-light text-[18px] text-[#FFFFFF] mt-4'>
                            <li><a onClick={() => scrollToSection(sections.servicesRef)} className="hover:text-[#cecece] leading-[45px] cursor-pointer">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#cecece] leading-[45px]">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-body font-bold text-[22px] text-[#FFFFFF]">Company</h3>
                        <ul className='font-body font-light text-[18px] text-[#FFFFFF] leading-[45px] mt-4'>
                            <li><a onClick={() => scrollToSection(sections.homeRef)}  className="hover:text-[#cecece] cursor-pointer">Home</a></li>
                            <li><a onClick={() => scrollToSection(sections.aboutRef)} className="hover:text-[#cecece] cursor-pointer">About Us</a></li>
                            <li><a href="#" className="hover:text-[#cecece]">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-body font-bold text-[22px] text-[#FFFFFF]">Contact</h3>
                        <p className="leading-[45px] font-body font-light text-[18px] text-[#FFFFFF] mt-4">(+62) 893912392190</p>
                        <p className="hover:text-white leading-[45px] font-body font-light text-[18px] text-[#FFFFFF]">agencycr@gmail.com</p>
                    </div>

                    <div>
                        <h3 className="font-body font-bold text-[22px] text-[#FFFFFF]">Location</h3>
                        <p className='font-body font-light text-[18px] text-[#FFFFFF] leading-[45px] mt-4'>PT Osiris Real Estate Internasional</p>
                        <p className='font-body font-light text-[18px] text-[#FFFFFF] leading-[45px]'>Jl. KH. Wahid Hasyim Kel No.10D</p>
                        <p className='font-body font-light text-[18px] text-[#FFFFFF] leading-[45px]'>Jakarta, Indonesia</p>
                        <p className="hover:text-white font-body font-light text-[18px] text-[#FFFFFF] leading-[45px]">team@OsirisRealEstate.com</p>
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-[70px]">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        className="bg-white w-[40px] h-[40px] rounded-full text-[#383638] hover:text-gray-500 flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-2xl">{social.icon}</div>
                    </a>
                ))}
            </div>

             {/* Divider */}
            <hr className="border-t border-[#FFFFFF] my-6 mx-auto w-[500px]" />

            {/* Copyright */}
            <p className="font-body font-normal text-[18px] text-[#FFFFFF] text-center pb-[30px]">
                Copyright © 2022 Agency Creative. All Rights Reserved
            </p>

        </footer>
    )
}

export default Footer