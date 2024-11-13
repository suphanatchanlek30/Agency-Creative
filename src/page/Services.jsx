import React from 'react'

import { GoArrowRight } from "react-icons/go";
import { CgScreen } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { PiPenNibStraight } from "react-icons/pi";
import { FiTv } from "react-icons/fi";

const Services = () => {

    const services = [
        { id: 1, title: "Social Media Management", icon: <CgScreen />, bgColor: "bg-[#377DFF]" },
        { id: 2, title: "Search Engine Optimization", icon: <FiSettings />, bgColor: "bg-[#FF2D2D]" },
        { id: 3, title: "Design", icon: <PiPenNibStraight className='rotate-[135deg]' />, bgColor: "bg-[#7CE761]" },
        { id: 4, title: "Ads", icon: <FiTv />, bgColor: "bg-[#FFA800]" }
      ];

    return (
        <div className='container mx-auto px-4 
                    flex flex-col justify-center
                    mt-80 sm:mt-12 md:mt-[58px] 
                    pt-8 sm:pt-12 md:pt-[100px] 
                    mb-[150%] sm:mb-12 md:mb-[58px] 
                    w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:w-[1240px]
                    min-h-[400px] sm:min-h-[500px] md:min-h-[568px]'>
            {/* right left */}
            <div className='flex sm:flex-row flex-col h-screen mt-6 justify-center sm:gap-6 gap-0'>
                {/* left */}
                <div className='left sm:w-1/2 w-full sm:text-start text-center'>
                    {/* text */}
                    <div className='text w-[330px] sm:w-[521px] h-[414px] sm:mt-[60px] mt-[50%]'>
                        <p className='font-body font-semibold text-[16px] sm:text-[24px] text-[#377DFF] tracking-[0.01em] leading-[24px]'>Our Services</p>
                        <h2 className='font-body2 font-bold text-[24px] sm:text-[55px] text-[#1D1D1D] tracking-[0.003em] leading-[1.3em] mt-[32px]'>Perfect and Fast Movement</h2>
                        <p className='font-body font-normal text-[14px] sm:text-[20px] text-[#464646] tracking-[0.01em] leading-[32px] mt-[18px]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>

                        {/* icon and text */}
                        <a href="#" className='icon_text flex justify-start sm:justify-end items-center gap-[16px] mt-[36px]'>
                            <p className='font-body font-bold text-[14px] sm:text-[20px] text-[#377DFF] tracking-[0.01em] leading-[34px]'>Read more</p>
                            <GoArrowRight className='text-[#377DFF] text-[1rem] sm:text-[1.5rem]' />
                        </a>
                    </div>
                </div>

                {/* right */}
                <div className='right sm:w-1/2 w-full'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-[10%] sm:gap-x-[20%] gap-y-[4%] sm:ml-10 ml-10'>
                        {services.map(service => (
                            <div key={service.id} className='flex flex-col items-center justify-center border bg-[#FFFFFF] w-[262px] h-[269px] rounded-[30px] duration-300 hover:shadow-[3px_3px_15px] hover:shadow-[#e1e1e1]'>
                                <div className={`text-white w-[100px] h-[100px] rounded-full ${service.bgColor}`}>
                                    <div className='flex justify-center items-center h-full w-full text-[40px]'>
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className='font-body w-[140px] sm:w-full sm:text-[24px] text-[16px] font-bold mt-[32px] text-center text-[#1D1D1D] tracking-[0.01em] leading-[34px]'>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services