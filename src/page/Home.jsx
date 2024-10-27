import React from 'react'
import { IoIosStar } from "react-icons/io";
import Header1 from "../assets/img_Header/img2.svg";
import people from "../assets/img_Header/img1.svg";
import sky from "../assets/decorate/sky.svg";
import red from "../assets/decorate/red.svg";

const Home = () => {
  return (
    <div className='flex justify-center container mx-auto px-4 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 
                    mt-4 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-[58px] 2xl:mt-[60px] 
                    w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1240px] 2xl:w-[1536px] 
                    min-h-screen sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1001px] 2xl:h-[1100px]'>
      <div className='flex flex-col items-center w-full font-body'>
        {/* ข้อความ */}
        <div className='text-center px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 mt-[58px]'>
          <h1 className='text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] 2xl:text-[70px] 
                         font-extrabold font-body2'>
            Make your dream <br className='hidden sm:block' /> business goal come true
          </h1>
          <p className='text-[14px] sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[22px] 
                        font-normal font-body2 text-[#464646] opacity-80 
                        leading-[120%] sm:leading-[130%] md:leading-[140%] lg:leading-[145%] xl:leading-[150%] 2xl:leading-[155%] 
                        mt-[20px] sm:mt-3 md:mt-3 lg:mt-4 xl:mt-[20px] 2xl:mt-[24px] 
                        tracking-[0.005em] sm:tracking-[0.007em] md:tracking-[0.008em] lg:tracking-[0.009em] xl:tracking-[0.01em] 2xl:tracking-[0.012em] '>
            when you need us for improve your business, <br className='hidden sm:block' /> 
            then come with us to help your business have reach it, you just sit and feel that goal
          </p>
          {/* button */}
          <div className='mt-[20px] sm:mt-5 md:mt-6 lg:mt-7 xl:mt-[2rem] 2xl:mt-[2.5rem]'>
            <a href="" className='inline-block 
                                py-[10px] sm:py-1.5 md:py-2 lg:py-2.5 xl:pt-[12px] xl:pb-[12px] 2xl:py-4
                                px-[35px] sm:px-5 md:px-6 lg:px-7 xl:pl-[50px] xl:pr-[50px] 2xl:px-16
                                bg-[#377DFF] text-[#FFFFFF] 
                                rounded-[24px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[22px] xl:rounded-[24px] 2xl:rounded-[28px] 
                                text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-[16px] 2xl:text-xl
                                font-body2 
                                shadow-[0px_1px_4px] sm:shadow-[0px_1.5px_5px] md:shadow-[0px_2px_6px] 
                                shadow-[#6eb4ff]'>
              Start Project
            </a>
          </div>
        </div>

        {/* รูปภาพ */}
        <div className='mt-10 sm:mt-8 md:mt-[3rem] lg:mt-[4rem] xl:mt-[5rem] 2xl:mt-[6rem] 
                      justify-center items-center relative w-full'>
          {/* Great Project Card */}
          <div className="absolute 
                         top-auto right-auto 
                         sm:top-[80px] sm:right-[80px]
                         md:top-[20px] md:right-[580px]
                         lg:top-[25px] lg:right-[700px]
                         xl:top-[30px] xl:right-[900px]
                         2xl:top-[35px] 2xl:right-[1100px]
                         border-white shadow-[0px_2px_6px] shadow-[#00000032] text-[#1D1D1D] 
                         w-[99px] sm:w-[140px] md:w-[155px] lg:w-[165px] xl:w-[175px] 2xl:w-[185px]
                         h-[53px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[95px] 2xl:h-[100px]
                         rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl 2xl:rounded-3xl
                         bg-[#FFFFFF] z-40">
            <div className='p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 text-center'>
              <div className='flex flex-row gap-1 justify-center items-center text-center mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3'>
                <IoIosStar className='text-[#F8BD38] 
                                    text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-2xl' />
                <p className='font-body 
                             text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-[12.5px] 2xl:text-[14px]
                             font-bold text-[#1D1D1D] opacity-60 uppercase'>
                  Great Project
                </p>
              </div>
              <p className='font-body2 
                           text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]'>
                <span className='font-bold'>800+</span> Done
              </p>
            </div>
          </div>

          {/* Main Image Section */}
          <div className='relative 
                         w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[737px] 2xl:w-[800px]
                         h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[501px] 2xl:h-[550px]
                         mx-auto'>
            <img src={sky} alt="Background Image" 
                 className='absolute 
                           top-[180px] sm:top-[-10px] md:top-[-5px] lg:top-[-7px] xl:top-[10px] 2xl:top-[0px]
                           left-[0px] sm:left-[100px] md:left-[120px] lg:left-[130px] xl:left-[140px] 2xl:left-[150px]
                           w-[99px] sm:w-[120px] md:w-[130px] lg:w-[140px] xl:w-auto 2xl:w-auto
                           object-cover z-10 opacity-100' />
            <img src={Header1} alt="Header1" 
                 className='absolute top-0 left-0 w-full full object-cover z-20 
                           p-4 sm:p-3 md:p-4 lg:p-5 xl:p-[12px] 2xl:p-[14px]
                           rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl 2xl:rounded-3xl' />
            <img src={red} alt="Background Image" 
                 className='absolute 
                           top-[0px] sm:top-[280px] md:top-[300px] lg:top-[350px] xl:top-[430px] 2xl:top-[480px]
                           left-[258px] sm:left-[100px] md:left-[120px] lg:left-[130px] xl:left-[140px] 2xl:left-[150px]
                           w-[99px] sm:w-[120px] md:w-[130px] lg:w-[140px] xl:w-auto 2xl:w-auto
                           object-cover z-10 opacity-100' />
          </div>

          {/* Testimonial Card */}
          <div className="absolute 
                         bottom-[-70px] right-[0px]
                         sm:bottom-auto sm:right-auto sm:top-[-120px] sm:left-[500px]
                         md:top-[180px] md:left-[570px]
                         lg:top-[240px] lg:left-[700px]
                         xl:top-[340px] xl:left-[900px]
                         2xl:top-[380px] 2xl:left-[1000px]
                         border-white shadow-[0px_2px_6px] shadow-[#00000032] text-[#1D1D1D] 
                         w-[80px] sm:w-[120px] md:w-[140px] lg:w-[155px] xl:w-[166px] 2xl:w-[180px]
                         h-[90px] sm:h-[120px] md:h-[135px] lg:h-[150px] xl:h-[166px] 2xl:h-[180px]
                         rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl 2xl:rounded-3xl
                         bg-[#FFFFFF] z-30">
            <div className='p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 text-start'>
              <div className='flex flex-row gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3 
                             justify-start items-center text-start mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3'>
                <img src={people} alt="" 
                     className='text-start 
                               w-[20px] sm:w-[24px] md:w-[28px] lg:w-[30px] xl:w-[32px] 2xl:w-[36px]
                               h-[20px] sm:h-[24px] md:h-[28px] lg:h-[30px] xl:h-[32px] 2xl:h-[36px]' />
                <div>
                  <p className='font-body 
                               text-[7px] sm:text-[8px] md:text-[9px] lg:text-[9.5px] xl:text-[10px] 2xl:text-[11px]
                               font-bold text-[#1D1D1D] opacity-100'>
                    Bill Adams
                  </p>
                  <p className='font-body 
                               text-[5px] sm:text-[6px] md:text-[7px] lg:text-[7.5px] xl:text-[8px] 2xl:text-[9px]
                               font-semibold text-[#1D1D1D] opacity-50'>
                    CEO UpTech
                  </p>
                </div>

              </div>
              <p className='font-body2 
                           text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12px]
                           text-[#1D1D1D] text-start 
                           mt-1 sm:mt-2 md:mt-2.5 lg:mt-3 xl:mt-4 2xl:mt-5'>
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