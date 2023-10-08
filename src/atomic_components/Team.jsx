import React from "react";
import {FaTwitter, FaLinkedin, FaArrowRight} from "react-icons/fa"
import User from "./User";

const Team = () => {
  const team = [
    {
      name: "Aremu Adeolu Samuel",
      title: "President",
      img: "/president.png",
      number: "08163967418"
    },
    {
      name: "Ogunremi Taiwo isaac",
      title: "Vice President",
      img: "/pastorTee.jpg",
      number: "09074334102"
    },
    {
      name: "Adesanya, Emmanuel Adebowale",
      title: "General Secretary",
      img: "/emlex.jpg",
      number: "08131057173"
    },
    {
      name: "Macauley Timilehin",
      title: "Assistant General Secretary",
      img: "/andy.jpg",
      number: "08103802309"
    },
    {
      name: "Adeyemi Remilekun Taiwo",
      title: "The Welfare Director",
      img: "/remi.jpg",
      number: "07016090521"
    },
    {
      name: "Tiamiyu Teslim Omobolaji",
      title: "Social Director",
      img: "/Tewary.png",
      number: "08168544983"
    },
    {
      name: "Oladele Nurudeen Gbolahan",
      title: "Sport Secretary",
      img: "/aon.jpg",
      number: "09027978381"
    },
    {
      name: "Babatunde Timothy Oluwaseyi",
      title: "Financial Secretary",
      img: "/gg.jpg",
      number: "08157803818"
    },
    {
      name: "Omoniyi Damilola",
      title: "Treasurer",
      img: "/dodo.jpg",
      number: "08118261337"
    },
    {
      name: "Adesanya Rhoda",
      title: "P.R.O 1",
      img: "/rhoda.jpeg",
      number: "08118261337"
    },
    {
      name: "Sodipe Oluwasina Ayowole",
      title: "PRO 2",
      img: "/hazy.jpg",
      number: "09136042391"
    },    
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
