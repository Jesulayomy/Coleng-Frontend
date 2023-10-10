import { AboutNuesa } from "@/atomic_components/AboutNuesa";
import Excos from "@/atomic_components/Excos";
import Footer from "@/atomic_components/Footer";
import ImageAndText from "@/atomic_components/ImageAndText";
import ImgAndText from "@/atomic_components/ImgAndText";
import Nav from "@/atomic_components/Nav";
import NewsLetter from "@/atomic_components/NewsLetter";
import PreFooter from "@/atomic_components/PreFooter";
import Team from "@/atomic_components/Team";
import React from "react";
import { motion } from "framer-motion"

const About = () => {
  return (
    <>
      <Nav active={1} />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2,type: "spring", stiffness: "100", delay: 0 }}
        className="h-auto relative flex justify-center items-center text-center flex-col gap-10 my-10"
      >
        {/* <div className="dark__bg " /> */}
        <div className="text-black z-10">
          <h1 className="text-[3em] font-[1000] sm:text-[2em]">About NUESA</h1>
          <p className="w-[70%] m-auto font-[500] sm:w-[90%]">
          Welcome to the About Us page of NUESA Funaab Chapter, where we take pride in our rich heritage, commitment to excellence, and vision for the future.
          </p>
        </div>

        <img src="./bg.jpg" alt="" className="w-[90%] rounded-3xl h-auto sm:h-[60vh] object-cover shadow-2xl border-solid border-primary1 border-4"/>
      </motion.div>
      {/* <AboutNuesa /> */}
      <ImgAndText
        props="./smiling.png"
        title="Our Mission"
        text="Our mission is to inspire and educate the next generation of engineers, fostering innovation, leadership, and ethical values. We are dedicated to providing a transformative educational experience that prepares students to tackle global challenges."
      />
      <ImageAndText />
      <Team />
      {/* <Excos /> */}
      {/* <PreFooter /> */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default About;
