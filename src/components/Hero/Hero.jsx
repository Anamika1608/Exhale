import React from 'react'


function Hero() {
    return (
        <section className="bg-[#122620] rounded-bl-[299px] shadow-shd ">
            <div className="flex flex-row ml-36 ">

                <div className="text-white mt-20 ">
                    <div className="text-5xl mb-4 font-galpike relative">
                        You’re
                        <span className="font-galpike">
                            <span>
                                &nbsp; Not Alone :
                            </span>
                            <img src="/underline/under.svg" alt="img" className="absolute top-0 left-0 transform -translate-y-5 ml-40" />
                        </span>
              <br /> <br />
                        {/* <span className="relative"><br />this Journey</span> */}
                    </div>

                    <div className="text-4xl mb-6 font-galpike">Exhale for Better</div>
                    <div className="text-7xl font-mioge mb-6 text-[#F5D9D6]">Mental Health.</div>

                    <button className=" mb-14 px-6 py-3 text-2xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:bg-[#F5D9D6] hover:text-black transition duration-300 ml-24 hover:text-medium">
                        Wanna Talk About It?
                    </button>

                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                    <img src="/path/to/your/image.jpg" alt="Mental Health" className="rounded-lg shadow-lg" />
                </div>
            </div>




        </section >
    )
}

export default Hero