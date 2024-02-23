import React from 'react';
import { motion } from 'framer-motion';


const ImgAndText = ({ props, text, title }) => {
  return (
    <motion.div 
      viewport={{once: false}}
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity:1, x: 0}}
      transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}
      className="grid grid-cols-2 gap-10 px-xPadding py-20 items-center sm:flex flex-col-reverse"
    >
      <img
        src={props}
        alt=""
        className="w-[100%] rounded-3xl md:h-[100%] object-cover border-solid border-primary1 border-4 shadow-2xl"
      />

      <div className="">
        <h2 className="text-[2em] font-[700]">{title}</h2>
        <p className="py-2 text-gray-700">{text} </p>

        {/* <p className="py-2 text-gray-700">{text} </p>

        <p className="py-2 text-gray-700">{text} </p> */}
      </div>
    </motion.div>
  );
};

export default ImgAndText;
