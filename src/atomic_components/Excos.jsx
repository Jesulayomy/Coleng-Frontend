import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Excos = () => {
  const nav = [
    {
      name: "John Doe",
      title: "Secretary",
      link: "./architect.png",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "./smiling.png",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "./architect.png",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "./smiling.png",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "./architect.png",
    },
    {
      name: "John Doe",
      title: "Secretary",
      link: "./smiling.png",
    },
  ];


  return (
    <div className="p-xPadding">
      <h2 className="text-[2em] font-[700]">Some More Excos</h2>
      <div className="flex flex-wrap justify-evenly">
        {nav.map((item) => {
          return (
            <>
              <span className="flex flex-col items-center gap-1 my-5">
                <img
                  alt={item.name}
                  className="w-[300px] h-[300px] object-cover"
                  src={item.link}
                />
                <p className="text-[1.2em] text-center font-semibold">
                  {item.name}
                </p>
                <p className="text-center">{item.title}</p>
                <span className="flex justify-between gap-2">
                  <FaTwitter />
                  <FaLinkedinIn />
                </span>
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Excos;
