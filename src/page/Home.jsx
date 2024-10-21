import React from 'react'

import { IoIosStar } from "react-icons/io";
// img
import Header1 from "../assets/img_Header/img2.svg";
import people from "../assets/img_Header/img1.svg";
import sky from "../assets/decorate/sky.svg";
import red from "../assets/decorate/red.svg";

const Home = () => {
  return (
    <div className='flex justify-center container mx-auto mt-[58px] w-[1240px] h-[1001px]'>
      <div className='flex flex-col items-center w-full font-body'>
        {/* ข้อความ */}
        <div className='text-center'>
          <h1 className='text-[62px] font-extrabold font-body2'>Make your dream <br /> business goal come true</h1>
          <p className='text-[20px] font-normal font-body2 text-[#464646] opacity-80 leading-[150%] mt-[20px] tracking-[0.01em] '>when you need us for improve your business, <br />then come with us to help your business have reach it, you just sit and feel that goal</p>
          {/* button */}
          <div className='mt-[2rem]'>
            <a href="" className='pt-[12px] pb-[12px] pl-[50px] pr-[50px] bg-[#377DFF] text-[#FFFFFF] rounded-[24px] text-[16px] font-body2 shadow-[0px_2px_6px]  shadow-[#6eb4ff]'>Start Project</a>
          </div>
        </div>

        {/* รูปภาพ */}
        <div className='mt-[4rem] justify-center items-center relative'>
          <div class="relative top-[120px] right-[100px] border-white shadow-[0px_2px_6px] shadow-[#00000032] text-[#1D1D1D] w-[175px] h-[95px] rounded-3xl bg-[#FFFFFF]  z-40">
            <div className='p-4 text-center'>
              <div className='flex flex-row gap-1 justify-center items-center text-center mb-2'>
                <IoIosStar className='text-[#F8BD38] text-[20px]' />
                <p className='font-body text-[12.5px] font-bold text-[#1D1D1D] opacity-60 justify-center items-center uppercase'>Great Project</p>
              </div>
              <p className='font-body2 text-[24px]'><span className='font-body2 text-[24px] font-bold'>800+</span> Done</p>
            </div>
          </div>

          <div className='relative w-[737px] h-[501px]'>
            {/* รูปที่อยู่ด้านหลัง */}
            <img src={sky} alt="Background Image" className='absolute top-[-20px] left-[140px] object-cover z-10 opacity-100' />

            {/* รูปหลัก */}
            <img src={Header1} alt="Header1" className='absolute top-0 left-0 w-full h-full object-cover z-20' />

            {/* รูปที่อยู่ด้านหลัง */}
            <img src={red} alt="Background Image" className='absolute top-[450px] left-[140px] object-cover z-10 opacity-100' />

          </div>

          <div class="relative top-[-160px] left-[670px] border-white shadow-[0px_2px_6px] shadow-[#00000032] text-[#1D1D1D] w-[166px] h-[166px] rounded-3xl bg-[#FFFFFF] z-30">
            <div className='p-4 text-start'>
              <div className='flex flex-row gap-2 justify-start items-center text-start mb-2'>
                <img src={people} alt="" className='text-start w-[32px] h-[32px]' />
                <div>
                  <p className='font-body text-[10px] font-bold text-[#1D1D1D] opacity-100'>Bill Adams</p>
                  <p className='font-body text-[8px] font-semibold text-[#1D1D1D] opacity-50'>CEO UpTech</p>
                </div>
              </div>
              <p className='font-body2 text-[11px] text-[#1D1D1D] text-start mt-4'>“ This team is really the best in its field,I don't regret working with them, and will come back again thanks “</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home