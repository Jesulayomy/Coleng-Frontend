import React from "react";
import AboutBox from "./AboutBox";
import { FaBook, FaFlag, FaLink, FaPeriscope } from "react-icons/fa";

export const AboutNuesa = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center h-[50vh] bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-no-repeat bg-cover">
        <h1 className="text-[3em] text-center font-[700]">ABOUT US</h1>
        <p class="w-[80%] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          sed recusandae aliquid, consequatur ab exercitationem unde quidem fuga
          voluptas minima impedit labore libero veritatis iste dignissimos
          perspiciatis alias facere numquam animi cum, nihil atque vitae!
          Ratione blanditiis quisquam rerum temporibus. Officiis repellendus
          mollitia odit, ipsam animi qui recusandae quas laudantium.
        </p>
      </div>
      <div className="flex md:flex-wrap">
        <AboutBox
          props={<FaLink />}
          title={"Connection"}
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
        />
        <AboutBox
          props={<FaPeriscope />}
          title={"Adaptability"}
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
        />
        <AboutBox
          props={<FaFlag />}
          title={"Located"}
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
        />
        <AboutBox
          props={<FaBook />}
          title={"Understanding"}
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
        />
      </div>
    </div>
  );
};
