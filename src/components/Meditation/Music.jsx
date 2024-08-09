import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { motion, AnimatePresence } from 'framer-motion';

function Audio() {
  const sources = [
    "/Meditation/test.mp3",
    "/Meditation/test.mp3",
    "/Meditation/test.mp3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === sources.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sources.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex bg-[#FBF4EE]'>
      <div>
        <div className='text-xl font-bold m-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam velit reprehenderit aliquam ab quia voluptatibus, expedita laborum quasi, atque fugit sunt cum libero, fuga consectetur nobis quis quod exercitationem!
        </div>
        <div className='text-xl ml-14 my-10 mr-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam velit reprehenderit aliquam ab quia voluptatibus, expedita laborum quasi, atque fugit sunt cum libero, fuga consectetur nobis quis quod exercitationem!
        </div>
        <div className='mx-14 inline-block bg-[#7C6448] rounded-3xl mb-10'>
        <div className='p-3  text-white  text-xl '>Guided Meditation by Exhale.</div>
        </div>
        

        <div className='flex items-center ml-44 scale-125'>
          <img src="/Meditation/Backward.svg" alt="back" onClick={handlePrev} className='cursor-pointer' />

          <div className='relative  w-80 h-12 mx-4 overflow-hidden '>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full"
              >
                <ReactAudioPlayer
                  src={sources[currentIndex]}
                  controls
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <img src="/Meditation/Forward.svg" alt="next" onClick={handleNext} className='cursor-pointer' />
        </div>
      </div>

      <div className='flex mr-36 my-32 relative'>
        <img src="/Meditation/women.svg" alt="women" className='relative scale-150' />
        <img src="/Meditation/flower.svg" alt="flower" className='absolute right-48 -bottom-28 scale-90' />
        <img src="/Meditation/sun.svg" alt="sun" className='absolute -right-36 -top-14 scale-90' />
      </div>
    </div>
  );
}

export default Audio;
