import React from "react";
import {FaTwitter, FaLinkedin, FaArrowRight} from "react-icons/fa"
import User from "./User";

const Team = () => {
  const team = [
    {
      name: "Victory Benson",
      title: "President",
      img: "/architect.png"
    },
    {
      name: "Victory Benson",
      title: "President",
      img: "/architect.png"
    },
    {
      name: "Victory Benson",
      title: "President",
      img: "/architect.png"
    },
    {
      name: "Victory Benson",
      title: "President",
      img: "/architect.png"
    },
    {
      name: "Victory Benson",
      title: "President",
      img: "/architect.png"
    },
    {
      name: "Victory Benson",
      title: "President",
      img: "/architect.png"
    }
  ]
  return (
   <div className="px-xPadding my-10 flex flex-col sm:px-0">
      <div className="font-[700] text-[1.4em] flex items-center justify-between px-xPadding">
        <p>Meet The Excos</p>

        <p>
          <FaArrowRight />
        </p>
      </div>
      <p className="w-[60%] px-xPadding text-[1em] text-gray-600 sm:w-[100%]">Get to know our dedicated executive team.</p>

      <div className="flex gap-10 items-center overflow-x-scroll py-10 w-full min-w-full">
      {
        team.map((user, i)=>{
          return(
           <User key={i} {...user}/>
          )
        })
      }
    </div>
   </div>
  );
};

export default Team;
