import React from 'react'

import img1 from "../assets/img_Interesting/img1.svg";
import img2 from "../assets/img_Interesting/img2.svg";
import point1 from "../assets/img_Interesting/point1.svg";
import point2 from "../assets/img_Interesting/point2.svg";

const Interesting = () => {
  return (
    <div className='flex flex-col justify-start container mx-auto mt-[200px] mb-[58px] w-[1240px] h-[568px]'>
        {/* left right */}
        <div className='flex h-screen justify-center gap-6'>
            {/* left */}
            <div className='left w-1/2'>
                {/* text and button */}
                <div className='w-[491px]'>
                    <h3 className='font-body2 font-bold text-[55px] tracking-[0.003em] text-[#1D1D1D] mt-[20px]'>Interesting Collaboration With Us?</h3>
                    <p className='font-body font-normal text-[20px] leading-[34px] tracking-[0.01em] text-[#464646]'>Help you to reach your business goal</p>
                    {/* button */}
                    <div className='border border-[#377DFF] bg-[#377DFF] w-[193px] text-center pt-[12px] pb-[12px] pr-[40px] pl-[40px] rounded-[24px] mt-[20px] shadow-[0px_2px_6px] shadow-[#6eb4ff]'>
                        <a href="#" className='font-body font-bold text-[16px] leading-[24px] tracking-[0.01em] text-[#FFFFFF]'>Get Started</a>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className='left w-1/2'>
                <div className='flex relative justify-center'>
                    {/* img 1 */}
                    <div className='absolute top-[90px] left-[10px] right-0 z-20'>
                        <img src={img1} alt="img1" className='w-[325px] h-[288px]' />
                    </div>
                    {/* img 2 */}
                    <div className='absolute top-[0px] left-[300px] right-0'>
                        <img src={img2} alt="img1" className='w-[294px] h-[288px]' />
                    </div>
                    {/* point blue */}
                    <div className='absolute top-[55px] left-[-9px] right-0 z-0'>
                        <img src={point1} alt="img1" className='w-[103.73px] h-[75.68px]' />
                    </div>
                    {/* point orange */}
                    <div className='absolute top-[286.85px] left-[305px] right-0 z-0'>
                        <img src={point2} alt="img1" className='w-[201.21px] h-[70.93px]' />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Interesting