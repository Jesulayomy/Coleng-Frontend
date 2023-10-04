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
      <div className="font-[700] text-[1.4em] flex items-center justify-between sm:px-xPadding">
        <div>
          <p>Meet The Excos</p>
        <div className='bg-primary1 w-[100px] h-2'/>
        </div>
        

        <p className="hidden sm:block">
          <FaArrowRight />
        </p>
      </div>
      <p className="w-[60%] sm:px-xPadding text-[1em] text-gray-600 sm:w-[100%] mt-3">Get to know our dedicated executive team.</p>

      <div className="gap-10 items-center overflow-x-scroll py-10 w-full min-w-full hidden sm:flex">
      {
        team.map((user, i)=>{
          return(
           <User key={i} {...user}/>
          )
        })
      }
    </div>

    <div className="flex flex-wrap gap-12 items-center justify-center sm:hidden">
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
