import React from 'react'

function Dost() {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div>
                    <div className='font-tan text-6xl text-white p-14 pt-20 text-shadow-custom'>
                        let us help you <span className='text-[#878eff]'>heal</span> <br /> <br /> with a DOST.
                    </div>
                    <button className="ml-56 mb-14 px-6 py-3 text-4xl bg-white border-2 border-black text-black rounded-full hover:bg-[#e1e3e6] hover:text-black transition duration-300 hover:text-medium">
                        Connect
                    </button>
                </div>

                <img src="/Dost/dost.svg" alt="dost" className='scale-75' />
            </div>

        </div>
    )
}

export default Dost