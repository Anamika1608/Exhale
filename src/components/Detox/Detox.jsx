import React from 'react';

import './Detox.css'
function Detox() {
  return (
    <div className=' bg-custom text-center '>
      <div className='p-7 text-6xl font-betofin'>Digital Detox</div>
      <div className='text-center text-3xl bg-[#372E2C] text-white opacity-70 p-4'>Harmonize Your Inner Self And Your Body While
      <div className='text-center'>Meditating Your Blues Away.</div></div>
      <div className=' bg-white rounded-full h-96 w-96 mx-auto'>
            <div className='flex'>
            <img src="/Detox/women.svg" alt="w" className='-mt-24 -ml-20 scale-110 z-10' />
            <img src="/Detox/men.svg" alt="m" className='-mt-40 -ml-48 ' />
            </div>
            
      </div>
      <button className=" mb-7 px-6 py-3 mt-10 text-2xl bg-[#E8D9CA] border-4 border-black text-black rounded-full hover:bg-[#DFDBF4] hover:text-black transition duration-300 hover:text-medium hover:font-semibold">
         Explore Now
        </button>
    </div>
  );
}

export default Detox;
