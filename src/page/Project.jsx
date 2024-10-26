import React from 'react'

import img1 from "../assets/img_Portfolio/img1.svg";
import img2 from "../assets/img_Portfolio/img2.svg";
import img3 from "../assets/img_Portfolio/img3.svg";

const Project = () => {

    const portfolioImg = [
        {
            id: 1,
            image: img1,
            title: 'Design Byte App'
        },
        {
            id: 2,
            image: img2,
            title: 'Cloud App'
        },
        {
            id: 3,
            image: img3,
            title: 'Design Furniture App'
        }
    ];

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-start items-center container mx-auto mt-[100px] mb-[58px] w-[1240px] h-[644px]'>
                {/* text */}
                <div className='text text-center justify-center w-[674px]'>
                    <p className='font-body font-semibold text-[24px] text-[#377DFF] leading-[24px] tracking-[0.01em]'>Our Portfolio</p>
                    <h2 className='font-body2 font-bold text-[55px] text-[#1D1D1D] tracking-[0.003em] mt-[20px]'>What do we do</h2>
                    <p className='font-body font-normal text-[20px] text-[#464646] leading-[34px] tracking-[0.01em] mt-[20px]'>all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</p>
                </div>
                {/* img */}
                <div className='img'>
                    <div className="flex justify-center items-center space-x-4 mt-10 gap-x-[69px]">
                        {portfolioImg.map((item, index) => (
                            <div key={item.id} className={`relative rounded-[30px] shadow-md overflow-hidden ${index === 1 ? 'w-[400px] h-[400px]' : 'w-[350px] h-[350px]'}`}>
                                <img src={item.image} alt={item.title} className="w-full object-cover" />
                                {/* text title */}
                                <div className={`absolute ${index === 1 ? 'top-[330px] left-[40px] right-0' : 'top-[280px] left-[40px] right-0'}`}>
                                    <p className="font-body text-[#FFFFFF] font-bold text-[24px] tracking-[0.003em]">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* button */}
                <div className='button mt-[40px]'>
                    <div className='border border-[#377DFF] pr-[50px] pl-[50px] pt-[12px] pb-[12px] h-[48px] rounded-[24px]'>
                        <a href="#" className='font-body font-bold text-[16px] leading-[24px] tracking-[0.01em] text-[#377DFF] h-[24px]'>See All Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project