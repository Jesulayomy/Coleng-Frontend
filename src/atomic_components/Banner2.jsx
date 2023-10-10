import React from 'react'
import { motion } from "framer-motion"

const Banner2 = () => {
  return (
    <motion.div
    viewport={{once: false}}
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1, y: 0}}
    transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}

    className='bg-primary2 px-xPadding py-20 flex flex-col gap-3 text-white text-center'>
        <h2 className='text-[2em] sm:text-[1.5em] w-full font-[700]'>Empowering the Engineers of Tomorrow</h2>
        <p className='w-[80%] sm:w-[96%] m-auto'>Welcome to NUESA, where innovation meets education. With state-of-the-art facilities and a world-class faculty, we're shaping future engineers and technology leaders. Join us to explore diverse programs, engage in hands-on research, and transform your passion into a profession. Your engineering adventure begins here!</p>
    </motion.div>
  )
}

export default Banner2