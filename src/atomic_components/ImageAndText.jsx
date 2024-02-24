import React from 'react';
import { motion } from 'framer-motion';


const ImageAndText = ({shorten = false}) => {
  return (
    <div
      className="grid grid-cols-2 gap-10 px-xPadding sm:px-2 py-20 items-center sm:flex flex-col"
      id="presidents-speech"
    >
      <div className="sm:px-2">
        <h2 className="text-[2em] font-[700]">President's speech.</h2>
        <p className="py-2 text-gray-700">
          The Nigerian Universities Engineering Students' Association (NUESA), FUNAAB Chapter, is a leading student organization that promotes technological innovation and excellence among its members for the benefit of society
        </p>

        <p className="py-2 text-gray-700">
          I am honored to be the current president of NUESA, FUNAAB Chapter, which has over 1,500 members from five departments in the College of Engineering. With the help of my dedicated Executive team(Team Versatility), Dean of college of engineering, Staff Adviser and Patron/Matron, we work to ensure that every NUESA member has a smooth and successful journey through the college.
        </p>

        <p className="py-2 text-gray-700">
          As a student branch, our goal is to uphold the organization's mission of technological excellence and professional development for students. We aim to provide our members with opportunities to enhance their skills both academically and professionally. We strive to be successful in helping to develop outstanding engineers who will make positive impacts throughout the world.{" "}
        </p>

        {
          shorten ?
          <a href="/about#presidents-speech">
            <button className="bg-primary1 py-3 px-5 rounded-md text-white">
              Read More
            </button>
          </a>
          :
          <>
            <p className="py-2 text-gray-700">
              We have undertaken a number of initiatives to support the academic and technical growth of our students. These include: Starting a Tech community, having a tech Lounge, Organizing weekly academic tutorials, Fresh students orientation program, Intellectual competitions, NUESA fresher's cup coming up, along side the following ones like Informative and interactive webinars, Health, and safety, and environment training, Project management training and certification, Career fair, Intra-collegiate debate competition, 8th Annual Engineering conference, NUESA Week '24, NUESA Olympics, Treasure Hunt, Launching a website and so on.
            </p>
            <p className="py-2 text-gray-700">
              We also plan to embark on a physical building project(Relaxation Centre), and to host more webinars. We are highly dedicated to helping our students achieve academic and technical excellence.
            </p>
            <p className="py-2 text-gray-700">
              I hereby use this opportunity to welcome you to the best college in the Federal University of Agriculture Abeokuta.
            </p>
          </>
        }
        {/* <button className="bg-primary1  text-white rounded-md py-3 px-6 text-[0.8em] font-[700]">
          Read More
        </button> */}
      </div>
      
      <img
        src="./pastorTee.jpeg"
        alt="president pics"
        className="w-[90%] shadow-2xl rounded-2xl border-[5px] border-primary1"
      />
    </div>
  );
};

export default ImageAndText;
