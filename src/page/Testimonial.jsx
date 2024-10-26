import React from 'react'

import people from "../assets/Testimonial/people.svg";

const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            name: 'Angel Rose',
            role: 'Creative Manager',
            image: people, // Replace with actual image path or URL
            text: 'There are many variations passages of Lorem Ipsum majority some by words which don’t look.',
        },
        {
            id: 2,
            name: 'Angel Rose',
            role: 'Creative Manager',
            image: people, // Replace with actual image path or URL
            text: 'There are many variations passages of Lorem Ipsum majority some by words which don’t look.',
        },
        {
            id: 3,
            name: 'Angel Rose',
            role: 'Creative Manager',
            image: people, // Replace with actual image path or URL
            text: 'There are many variations passages of Lorem Ipsum majority some by words which don’t look.',
        }
    ];

    return (
        <div className='flex flex-col justify-start items-center container mx-auto mt-[200px] mb-[58px] w-[1240px] h-[644px]'>
            {/* text */}
            <div className='text text-center justify-center w-[674px]'>
                <p className='font-body font-semibold text-[24px] text-[#377DFF] leading-[24px] tracking-[0.01em]'>Testimonial</p>
                <h2 className='font-body2 font-bold text-[55px] text-[1D1D1D] tracking-[0.003em] mt-[20px]'>People Talk about us</h2>
            </div>
            {/* img */}
            <div className='img'>
                <div className="flex justify-center items-center gap-[50px] mt-[50px]">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-[380px] h-[335px] bg-white p-6 rounded-[20px] shadow-lg">
                            <div className='flex flex-row pt-[30px]'>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-[70px] h-[70px] rounded-full mx-[24px] mb-4"
                                />
                                <div className='flex flex-col'>
                                    <h3 className="font-body font-semibold text-[20px] leading-[34px] tracking-[0.01em] text-[#377DFF]">{testimonial.name}</h3>
                                    <p className="font-body font-normal text-[11px] leading-[14px] tracking-[0.01em] text-[#464646] opacity-[50%] mb-4">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="font-body font-normal text-[18px] leading-[28px] tracking-[0.01em] text-[#464646] w-[309px] opacity-[80%] mx-[24px] mt-[15px]">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial