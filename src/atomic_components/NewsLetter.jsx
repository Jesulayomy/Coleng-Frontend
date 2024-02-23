import React from 'react';
import { FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';


const NewsLetter = () => {
  return (
    <motion.div 
      viewport={{once: false}}
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity:1, y: 0}}
      transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}
      className='bg-primary1 text-white mx-xPadding rounded-md my-20 p-5  py-10 flex flex-col items-center justify-center sm:py-6 sm:my-10'
    >
      <p className='text-[2em] font-[600]'>Subscribe to our newsletter</p>
      <form action="" className='flex w-1/2 sm:w-full'>
        <input type="text" className='border-none rounded-none' placeholder='emmydoe@mail.com'/>
        <button className='bg-black px-5 flex gap-2 items-center'> 
          Join
          <FaLock />
        </button>
      </form>
    </motion.div>
  );
};

export default NewsLetter;
