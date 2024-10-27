import React from 'react'
import { IoIosStar } from "react-icons/io";
import Header1 from "../assets/img_Header/img2.svg";
import people from "../assets/img_Header/img1.svg";
import sky from "../assets/decorate/sky.svg";
import red from "../assets/decorate/red.svg";

const Home = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-[100px] min-h-screen'>
      <div className='flex flex-col items-center w-full font-body'>
        {/* ข้อความ */}
        <div className='text-center px-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold font-body2 leading-tight mt-[60px] sm:mt-[0]'>
            Make your dream <br className='hidden sm:block' /> business goal come true
          </h1>
          <p className='text-base sm:text-lg lg:text-[20px] font-normal font-body2 text-[#464646] opacity-80 leading-[150%] mt-[20px] sm:mt-[20px] md:mt-[60px] tracking-[0.01em]'>
            when you need us for improve your business, <br className='hidden sm:block' />
            then come with us to help your business have reach it, <br className='hidden sm:block' />
            you just sit and feel that goal
          </p>
          {/* button */}
          <div className='mt-[20px] sm:mt-8 lg:mt-[2rem]'>
            <a href="" className='inline-block font-body font-bold py-3 px-6 sm:pt-[12px] sm:pb-[12px] sm:pl-[50px] sm:pr-[50px] bg-[#377DFF] text-white rounded-[24px] text-sm sm:text-[16px] shadow-[0px_2px_6px] shadow-[#6eb4ff] hover:bg-[#2461d1] transition-colors'>
              Start Project
            </a>
          </div>
        </div>

        {/* รูปภาพ */}
        <div className='mt-[50px] sm:mt-[50px] md:mt-[80px] lg:mt-[5rem] w-full relative'>
          {/* Great Project Card */}
          <div className="absolute 
                  left-[-2%] sm:left-auto sm:right-[75%] md:right-[580px] lg:right-[80%] xl:right-[900px] 2xl:right-[1040px]
                  top-[-5%] sm:top-[100px] md:top-[15px] lg:top-[120px] xl:top-[20px] 2xl:top-[30px] 
                  w-[99px] sm:w-[160px] md:w-[165px] lg:w-[175px] xl:w-[180px] 
                  h-[53px] sm:h-[85px] md:h-[90px] lg:h-[95px] xl:h-[100px] 
                  rounded-[6px] xl:rounded-[16px]
                  bg-white shadow-lg z-40 transition-all duration-300">

            <div className='p-2 sm:p-3.5 md:p-3.5 lg:p-4 xl:p-5'>

              <div className='flex flex-row 
                    gap-1 sm:gap-1.5 md:gap-2 
                    justify-center items-center text-center 
                    mb-1 sm:mb-2.5 md:mb-3'>

                <IoIosStar className='text-[#F8BD38] 
                text-base sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] transition-all' />

                <p className='font-body 
                    text-[6px] sm:text-[11px] md:text-[12px] lg:text-[12.5px] xl:text-[12px] 
                    font-bold text-[#1D1D1D] opacity-60 uppercase'>
                  Great Project
                </p>

              </div>

              <p className='font-body2 text-center
              text-[12px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[24px]'>
                <span className='font-bold'>800+</span> Done
              </p>

            </div>
          </div>

          {/* Main Image Container */}
          <div className='relative w-full sm:w-[550px] md:w-[650px] lg:w-[737px] h-[300px] sm:h-[400px] lg:h-[501px] mx-auto'>
            {/* Background Images */}
            <img src={sky}
              alt="Background Image"
              className='absolute 
                  top-[190px] sm:top-[-15px] md:top-[-18px] lg:top-[-20px] xl:top-[-22px] 
                  left-[-9px] sm:left-[100px] md:left-[120px] lg:left-[140px] xl:left-[160px] 
                  w-[99px] sm:w-[300px] md:w-auto lg:w-[99px] xl:w-auto 
                  z-10  opacity-100'/>

            {/* Main Image */}
            <img src={Header1}
              alt="Header1"
              className='absolute 
                  top-0 left-0 w-full
                  h-[250px] sm:h-[300px] md:h-full lg:h-[450px] xl:h-full 
                  md:rounded-[20px]
                  object-cover z-20' />

            {/* Bottom Background */}
            <img src={red}
              alt="Background Image"
              className='absolute 
                  top-[-10px] sm:top-[-15px] md:top-[345px] lg:top-[-20px] xl:top-[450px] 
                  left-[268px] sm:left-[100px] md:left-[120px] lg:left-[140px] xl:left-[160px] 
                  w-[99px] sm:w-[300px] md:w-auto lg:w-[99px] xl:w-auto 
                  z-10  opacity-100' />
          </div>

          {/* Testimonial Card */}
          <div className="absolute 
                  right-4 sm:right-auto bottom-0 
                  left-[80%] sm:left-[70%] md:left-[600px] lg:left-[75%] xl:left-[900px] 2xl:left-[1050px]
                  top-[180px] sm:top-[40%] md:top-[260px] lg:top-[30%] xl:top-[340px] 2xl:top-[340px]
                  w-[80px] sm:w-[155px] md:w-[160px] lg:w-[166px] xl:w-[170px] 
                  h-[80px] sm:h-[155px] md:h-[160px] lg:h-[166px] xl:h-[170px] 
                  rounded-[6px] sm:rounded-3xl xl:rounded-[16px] 
                bg-white shadow-lg z-30 transition-all duration-300">

            <div className='p-2 sm:p-3.5 md:p-4 lg:p-4 xl:p-5 text-start'>

              <div className='flex flex-row gap-2 justify-start items-center text-start mb-2'>

                <img src={people} alt="" 
                className='w-[16px] sm:w-[28px] md:w-[30px] lg:w-[32px] xl:w-[34px] 
                  h-[16px] sm:h-[28px] md:h-[30px] lg:h-[32px] xl:h-[34px]' />
              
                <div>
                  <p className='font-body text-[6px] sm:text-[9px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] font-bold text-[#1D1D1D]'>
                    Bill Adams
                  </p>

                  <p className='font-body text-[5px] sm:text-[7px] md:text-[7.5px] lg:text-[8px] xl:text-[9px] font-semibold text-[#1D1D1D] opacity-50'>
                    CEO UpTech
                  </p>
                </div>

              </div>

              <p className='font-body2 text-[5px] sm:text-[10px] md:text-[10.5px] lg:text-[11px] xl:text-[10.5px] 
                text-[#1D1D1D] text-start 
                  mt-2 sm:mt-3 md:mt-3.5 lg:mt-4 xl:mt-4
                  p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0
                  leading-relaxed tracking-[0.01em]'>
                " This team is really the best in its field,I don't regret working with them, and will come back again thanks "
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home