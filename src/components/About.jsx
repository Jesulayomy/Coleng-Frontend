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
      <Nav active={1} />
      <div
        style={{ background: "url(./amtesAi.png)", backgroundSize: "cover" }}
        className="h-[80vh] relative flex justify-center items-center text-center"
      >
        <div className="dark__bg " />
        <div className="text-white z-10">
          <h1 className="text-[3em] font-[1000] shadow-md">About NUESA</h1>
          <p className="w-[70%] m-auto font-[500]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
            enim accusamus, officia sit quas tempore aspernatur ut suscipit
            minima.
          </p>
        </div>
      </div>
      {/* <AboutNuesa /> */}
      <ImgAndText
        props="./smiling.png"
        title="What We Do"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempore facilis, porro debitis veritatis atque, sed voluptate molestiae illo ad omnis ullam ab dolore. Vero aliquam libero sequi vitae nam!"
      />
      <Team />
      {/* <Excos /> */}
      {/* <PreFooter /> */}
      <Footer />
    </>
  );
};

export default About;
