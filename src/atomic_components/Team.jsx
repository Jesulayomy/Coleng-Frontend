import React from "react";
import {FaTwitter, FaLinkedin} from "react-icons/fa"
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
    }
  ]
  return (
   <div className="px-xPadding py-20 flex flex-col items-center justify-center text-center">
      <h2 className="font-[700] text-[1.4em]">Meet The Excos</h2>
      <p className="w-[60%] text-[0.8em] text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolores at ipsum reiciendis. Temporibus, dolores. Quod quibusdam inventore veniam magnam!</p>

      <div className="flex gap-10 items-center justify-centerflex-wrap py-10">
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
