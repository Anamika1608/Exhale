import React from 'react'

function Audio() {
    return (
        <div className='bg-[#F3F3F9]'>
            <div className='flex justify-center items-center pt-14'>
                <img src="/AV/head.svg" alt="head" className='pr-5' />
                <div className='inline-block bg-[#fffbad] relative'>
                    <div className=' font-Rspring text-5xl'>Take a Break from <span className='text-[#0E176E] relative'>Screen</span> <img src="/AV/line.svg" alt="line" className='absolute left-96 top-4'/></div>
                </div>
                
            </div>

            <div className='flex justify-center items-center py-16'>
                <img src="/AV/Frame.svg" alt="f" className='pr-6 cursor-pointer'/>
                <img src="/AV/Frame5.svg" alt="f" className='pr-6 cursor-pointer'/>
                <img src="/AV/Frame6.svg" alt="f" className='pr-6 cursor-pointer'/>
                <img src="/AV/Frame2.svg" alt="f" className='pr-6 cursor-pointer'/>
                <img src="/AV/Frame3.svg" alt="f" className='pr-6 cursor-pointer'/>
                <img src="/AV/Frame4.svg" alt="f" className='pr-6 cursor-pointer' />
            </div>
        </div>
    )
}

export default Audio