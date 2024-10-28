import React from 'react'

import img1 from "../assets/img_About/img1.svg";
import orange from "../assets/decorate/orange.svg";
import purple from "../assets/decorate/purple.svg";

import { PiPlayCircle } from "react-icons/pi";

const About = () => {
  return (
    <div className="container mx-auto px-4 
                    flex flex-col justify-center
                    mt-8 sm:mt-12 md:mt-[58px] 
                    pt-8 sm:pt-12 md:pt-[100px] 
                    mb-8 sm:mb-12 md:mb-[58px] 
                    w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:w-[1240px]
                    min-h-[400px] sm:min-h-[500px] md:min-h-[568px]">
      
      {/* Header Text */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h3 className="font-body text-lg sm:text-xl md:text-[24px] 
                      font-semibold text-[#377DFF] 
                      pb-2 sm:pb-3 md:pb-[12px] 
                      tracking-[0.1em]">
          About Us
        </h3>
        <h1 className="font-body2 
                      text-3xl sm:text-4xl md:text-[55px] 
                      font-bold text-[#1D1D1D] 
                      tracking-[0.03em]">
          Our Teammate
        </h1>
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-6">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative flex justify-center lg:justify-start items-center">
            {/* Main Image */}
            <img 
              src={img1} 
              alt="Team" 
              className="w-full sm:w-[450px] md:w-[500px] lg:w-[565px] 
                         h-auto sm:h-[300px] md:h-[350px] lg:h-[402px] 
                         z-20 
                         rounded-lg"
            />
            {/* Decorative Elements */}
            <img 
              src={purple} 
              alt="Decoration" 
              className="absolute 
                         hidden sm:block
                         top-[-5%] right-[20%] lg:right-[90%] 
                         w-[60px] sm:w-[80px] md:w-[100px] 
                         object-cover z-10 opacity-100" 
            />
            <img 
              src={orange}
              alt="Decoration" 
              className="absolute 
                         hidden sm:block
                         top-[80%] left-[20%] lg:left-[503px] 
                         w-[60px] sm:w-[80px] md:w-[100px] 
                         object-cover z-10 opacity-100" 
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Text Sections */}
          <div className="space-y-4 sm:space-y-6 md:space-y-6">
            <p className="font-body 
                         text-base sm:text-lg md:text-[20px] 
                         font-normal text-[#464646] 
                         tracking-[0.01em] leading-[1.6]
                         pr-2">
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
            </p>
            <p className="font-body 
                         text-base sm:text-lg md:text-[20px] 
                         font-normal text-[#464646] 
                         tracking-[0.01em] leading-[1.6]
                         pr-2">
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-6">
            {/* About Us Button */}
            <a href="#" 
               className="bg-[#377DFF] text-white 
                         shadow-[0px_2px_6px] shadow-[#6eb4ff] 
                         px-8 sm:px-10 md:px-[50px] 
                         py-3 sm:py-3 md:py-[12px] 
                         rounded-[24px] 
                         w-full sm:w-[171px] 
                         h-12 md:h-[48px] 
                         font-body font-bold 
                         text-base md:text-[16px]
                         flex items-center justify-center">
              About Us
            </a>
            
            {/* Our Story Button */}
            <a href="#" 
               className="border border-[#377DFF] text-[#377DFF] 
                         px-8 sm:px-10 md:px-[50px] 
                         py-3 sm:py-3 md:py-[12px] 
                         rounded-[24px] 
                         w-full sm:w-[210px] 
                         h-12 md:h-[48px]">
              <div className="flex justify-center items-center gap-2 sm:gap-[10px]">
                <PiPlayCircle className="text-xl md:text-[24px] text-[#377DFF]"/>
                <p className="font-body text-base md:text-[16px] font-semibold">
                  Our Story
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About