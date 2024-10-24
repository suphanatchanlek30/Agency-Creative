import React from 'react'

import img1 from "../assets/img_About/img1.svg";
import orange from "../assets/decorate/orange.svg";
import purple from "../assets/decorate/purple.svg";


import { PiPlayCircle } from "react-icons/pi";

const About = () => {
  return (
    <div className='flex flex-col justify-center container mx-auto mt-[58px] mb-[58px] w-[1240px] h-[568px]'>  
        {/* text */}
        <div className='text-center'>
            <h3 className='font-body text-[24px] font-semibold text-[#377DFF] pb-[12px] tracking-[0.1em]'>About Us</h3>
            <h1 className='font-body2 text-[55px] font-bold text-[#1D1D1D] tracking-[0.03em]'>Our Teammate</h1>
        </div>

        {/* right left */}
        <div className='flex h-screen mt-6 justify-center gap-6'>
            {/* left */}
            <div className='w-1/2'>
                {/* img */}
                <div className='flex justify-start items-center relative'>
                    <img src={img1} alt="img1" className='w-[565px] h-[402px] z-20'/>
                    <img src={orange} alt="Background Image" className='absolute top-[-18px] right-[540px] object-cover z-10 opacity-100' />
                    <img src={purple} alt="Background Image" className='absolute top-[340px] left-[503px] object-cover z-10 opacity-100' />
                </div>
            </div>           

            {/* right */}
            <div className='w-1/2 flex flex-col'>
                {/* text 1*/}
                <div className='mt-6 flex'>
                    <p className='font-body text-[20px] font-normal pr-2 text-[#464646] tracking-[0.01em] leading-[32px]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                </div>
                {/* text 2*/}
                <div className='mt-6 flex'>
                    <p className='font-body text-[20px] font-normal pr-2 text-[#464646] tracking-[0.01em] leading-[32px]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                </div>
                {/* button */}
                <div className='mt-6 flex gap-6'>
                    {/* left */}
                    <a href="#" className='bg-[#377DFF] text-[#FFFFFF] shadow-[0px_2px_6px] shadow-[#6eb4ff] pr-[50px] pl-[50px] pt-[12px] pb-[12px] rounded-[24px] w-[171px] h-[48px] font-body font-bold text-[16px]'>
                        About Us
                    </a>
                    {/* right */}
                    <a href="#" className='border border-[#377DFF] text-[#377DFF] pr-[50px] pl-[50px] pt-[12px] pb-[12px] rounded-[24px] w-[210px] h-[48px]'>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <PiPlayCircle className='text-[24px] text-[#377DFF]'/>
                            <p className='font-body text-[16px] font-semibold'>Our Story</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About