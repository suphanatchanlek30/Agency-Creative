import React from 'react'

const Home = () => {
  return (
    <div className='border flex justify-center container mx-auto mt-[58px] w-[1240px] h-[1001px]'>
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
        <div></div>
      </div>
    </div>
  )
}

export default Home