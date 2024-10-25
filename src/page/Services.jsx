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
        <div className='flex flex-col justify-center container mx-auto mt-[200px] mb-[58px] w-[1240px] h-[568px]'>
            {/* right left */}
            <div className='flex h-screen mt-6 justify-center gap-6'>
                {/* left */}
                <div className='left w-1/2'>
                    {/* text */}
                    <div className='text w-[521px] h-[414px] mt-[60px]'>
                        <p className='font-body font-semibold text-[24px] text-[#377DFF] tracking-[0.01em] leading-[24px]'>Our Services</p>
                        <h2 className='font-body2 font-bold text-[55px] text-[#1D1D1D] tracking-[0.003em] leading-[1.3em] mt-[32px]'>Perfect and Fast Movement</h2>
                        <p className='font-body font-normal text-[20px] text-[#464646] tracking-[0.01em] leading-[32px] mt-[18px]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>

                        {/* icon and text */}
                        <a href="#" className='icon_text flex justify-end items-center gap-[16px] mt-[36px]'>
                            <p className='font-body font-bold text-[20px] text-[#377DFF] tracking-[0.01em] leading-[34px]'>Read more</p>
                            <GoArrowRight className='text-[#377DFF] text-[1.5rem]' />
                        </a>
                    </div>
                </div>

                {/* right */}
                <div className='right w-1/2'>
                    <div className='grid grid-cols-2 gap-y-[30px] gap-x-[30px] ml-10'>
                        {services.map(service => (
                            <div key={service.id} className='flex flex-col items-center justify-center border bg-[#FFFFFF] w-[262px] h-[269px] rounded-[30px] duration-300 hover:shadow-[3px_3px_15px] hover:shadow-[#e1e1e1]'>
                                <div className={`text-white w-[100px] h-[100px] rounded-full ${service.bgColor}`}>
                                    <div className='flex justify-center items-center h-full w-full text-[40px]'>
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className='font-body text-[24px] font-bold mt-[32px] text-center text-[#1D1D1D] tracking-[0.01em] leading-[34px]'>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services