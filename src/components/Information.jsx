import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import NoContent from '@/atomic_components/NoContent';
import React from 'react';
import { motion } from "framer-motion"
import Event from '@/atomic_components/Event';

const eventData = [
  {
    title: "Amtes Symposium / Title",
    text: "lorem",
    day: 16,
    month: "FEB",
    year: "2023",
  },
  {
    title: "Amtes Symposium / Title",
    text: "lorem",
    day: 16,
    month: "FEB",
    year: "2023",
  },
  {
    title: "Amtes Symposium / Title",
    text: "lorem",
    day: 16,
    month: "FEB",
    year: "2023",
  },
];

const Information = () => {
  return (
    <>
      <Nav active={3} />

      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2,type: "spring", stiffness: "100", delay: 0 }}
      className="flex gap-10 flex-row p-xPadding items-center sm:flex-col">
        <div className='flex gap-3 flex-col'>
          <h2 className='text-[2.5em] font-[700]' >Get Informed.</h2>
          <p className='text-gray-700'>Welcome to your one-stop destination for staying informed and thriving in your academic journey at NUESA. We understand that access to the right information and resources is vital for your success</p>
          <button className='bg-primary1 text-white px-5 py-2 rounded-md w-fit'>
            Continue
          </button>
        </div>

        <div>
          <img src="./smiling.png" alt="" className='rounded-md'/>
        </div>
      </motion.div>

      {/* UPDATES */}
      <motion.div 
       viewport={{once: false}}
       initial={{opacity: 0, y: 100}}
       whileInView={{opacity:1, y: 0}}
       transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}
      className='px-xPadding'>
        <h2 className="font-[500] text-[2rem] text-center">Updates</h2>
        <p className="text-center text-[0.8em] text-gray-500">Stay updated with the latest information about our college</p>

        <NoContent text={"updates"}/>
      </motion.div>
      
      <div></div>

      {/* UPCOMING EVENTS */}
      <motion.div 
       viewport={{once: false}}
       initial={{opacity: 0, y: 100}}
       whileInView={{opacity:1, y: 0}}
       transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}
      className="p-xPadding">
        <h2 className="font-[500] text-[2rem] text-center">Upcoming Events</h2>

        {/* {eventData.map((event) => {
          return <>
            <div className="flex flex-row items-center justify-center gap-[5rem] py-[2rem] border-b-[1px]">
              <div className="bg-black py-[1rem] px-[2rem] flex flex-col items-center">
                <span className="text-[2rem] block">{event.day}</span>
                <br /> FEB
             <br /> 2023
            </div>
              <div>
                <h3 className="text-gray mb-[1rem]">{event.title}</h3>
                <p className="text-[0.8rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At natus saepe odio porro non fugit?</p>
              </div>
              <button className="btn px-5 py-2 rounded-md border-[2px]">Learn More</button>
            </div>
          </>
        })} */}

        {/* <NoContent text={"upcoming events"} /> */}
        <Event few={true} />
       
      </motion.div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Information;
