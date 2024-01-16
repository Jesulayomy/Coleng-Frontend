import React from "react";
import {FaTwitter, FaLinkedin, FaArrowRight} from "react-icons/fa"
import User from "./User";
import { motion } from "framer-motion"

const Team = () => {
  const team = [
    {
      name: "Ogunremi Taiwo Isaac",
      title: "President",
      img: "/pastorTee.jpeg",
      number: "09074334102"
    },
    {
      name: "Omoniyi Damilola",
      title: "Vice President",
      img: "/dodo.jpg",
      number: "08118261337"
    },
    {
      name: "Sodipe Oluwasina Ayowole",
      title: "General Secetary",
      img: "/hazy.jpg",
      number: "09136042391"
    },
    {
      name: "Sobiyede Timothy",
      title: "General Secretary",
      img: "/ags.jpeg",
      number: "08023394806"
    },
    {
      name: "Okolie Benjamin",
      title: "Financial Secretary",
      img: "/fc.jpeg",
      number: "08058632339"
    },
    {
      name: "Olonade Ifeoluwa",
      title: "Treasurer",
      img: "/ife.jpeg",
      number: "09035870554"
    },
    {
      name: "Atoyebi Ayomide",
      title: "Welfare Secetary",
      img: "/ws.jpeg",
      number: "09013532414"
    },
    {
      name: "Alabi Mustapha",
      title: "Social Secetary",
      img: "/ss.jpeg",
      number: "09089001052"
    },
    {
      name: "Olanrewaju Ayomide",
      title: "Sport Secretary",
      img: "/sp.jpeg",
      number: "08117633198"
    },
    
    {
      name: "Nwaire Chibuzor",
      title: "P.R.O 1",
      img: "/pro.jpeg",
      number: "08052686633"
    },
    {
      name: "Soga Oluwatimileyin",
      title: "P.R.O 2",
      img: "/pro2.jpeg",
      number: "08022111482"
    },
        
  ]

  return (
   <div className="px-xPadding my-10 flex flex-col sm:px-0"
   >
      <div className="font-[700] text-[1.4em] flex items-center justify-between sm:px-xPadding">
        <div>
          <p>Meet The Excos</p>
        <div className='bg-primary1 w-[100px] h-2'/>
        </div>
        

        {/* <p className="hidden sm:block">
          <FaArrowRight />
        </p> */}
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
