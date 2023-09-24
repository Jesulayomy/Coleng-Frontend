import Footer from "@/atomic_components/Footer";
import Nav from "@/atomic_components/Nav";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Nav />
      <div
        style={{ background: "url(./amtesAi.png)", backgroundSize: "cover" }}
        className="h-[80vh] relative flex justify-center items-center text-center"
      >
        <div className="dark__bg " />
        <div className="text-white z-10">
          <h1 className="text-[3em] font-[1000] shadow-md">Contact Us</h1>
          <p className="w-[70%] m-auto font-[500]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
            enim accusamus, officia sit quas tempore aspernatur ut suscipit
            minima.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
