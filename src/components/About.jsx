import { AboutNuesa } from "@/atomic_components/AboutNuesa";
import Excos from "@/atomic_components/Excos";
import Footer from "@/atomic_components/Footer";
import ImgAndText from "@/atomic_components/ImgAndText";
import Nav from "@/atomic_components/Nav";
import PreFooter from "@/atomic_components/PreFooter";
import Team from "@/atomic_components/Team";
import React from "react";

const About = () => {
  return (
    <>
      <Nav />
      <AboutNuesa />
      <ImgAndText
        props="./smiling.png"
        title="What We Do"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempore facilis, porro debitis veritatis atque, sed voluptate molestiae illo ad omnis ullam ab dolore. Vero aliquam libero sequi vitae nam!"
      />
      <Team />
      <Excos />
      <PreFooter />
      <Footer/>
    </>
  );
};

export default About;
