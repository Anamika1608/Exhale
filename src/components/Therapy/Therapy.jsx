import React from 'react'

function Therapy() {

    return (
        <div className="top-0 left-0 bg-[#1d2129] p-6">
            <div className='flex justify-center items-center '>
                <img src="/Therapy/i2.svg" alt="img" className='p-10 pr-32' />
                <div className=' pt-10 font-rocaThin text-6xl text-white text-center '>Try Our Audio<div className='mt-5'>& Video Therapy</div>
                </div>
                <img src="/Therapy/i4.svg" alt="img" className='pl-20' />
            </div>

            <div className='flex justify-center items-center '>
                <img src="/Therapy/i3.svg" alt="img" className='p-10 pr-20' />
                <div className='px-20 pr-44'>
                    <button className=" px-8 py-4 text-3xl border-2 border-white text-white rounded-full hover:bg-[#cacfcc] hover:text-black transition duration-300 hover:text-medium hover:font-semibold">
                        Try Now
                    </button>
                </div>


                <img src="/Therapy/i1.svg" alt="img" className='' />
            </div>


        </div>


    )
}

export default Therapy
