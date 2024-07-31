import React from 'react'

function Session() {
  return (
    <div>
  <div className='flex justify-end'>
    <img src="/session/Squiggle.svg" alt="squiggle" className='absolute right-0 -mt-28 -mr-7 scale-75' />
  </div>
  <div className='text-center font-rocaLt text-white text-5xl pt-10'>
    <div className='relative flex justify-center'>
      <img src="/session/star.svg" alt="star" className='pr-6 -mt-7' />
      Accepting &nbsp;
      <span className='relative inline-block px-3'>
        <span className='relative inline-block'>
          help
          <img
            src="/session/oval.svg"
            alt="oval"
            className='absolute top-0 right-0 bottom-0 mx-auto mt-1'
            style={{ transform: 'scale(2)' }}
          />
        </span>
      </span>
      &nbsp; is its own
    </div>
    <div className='flex justify-center text-center ml-64'>
      kind of <span className='font-rocaIt'> &nbsp;Strength</span>
      <img src="/session/star2.svg" alt="star" className='ml-20' />
    </div>
  </div>

  <div className='flex p-4'>
    <div className='pt-8  pl-24 relative'>
      <div className='bg-white rounded-[67px] w-2/3 h-96 absolute'></div>
      <img src="/session/man.svg" alt="man" className='w-3/4 relative -top-9 -left-3 z-10' />
    </div>

    <div>
      <div className='text-white text-5xl mt-20 ml-20'>
        "It is possible to <div className='font-betofin pt-5 underline'>Smile Again"</div>
        <button className="ml-16 mt-16 px-6 py-3 text-2xl bg-transparent border-4 border-[#DFDBF4] text-black rounded-full hover:bg-[#DFDBF4] hover:text-black transition duration-300 hover:text-medium hover:font-semibold">
          Book A Session
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Session