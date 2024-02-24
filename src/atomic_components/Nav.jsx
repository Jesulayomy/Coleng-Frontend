"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import useLocalStorage from 'use-local-storage';
import React, { useState } from 'react';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { HiMenuAlt2, HiMenuAlt3, HiX } from 'react-icons/hi';


const Nav = ({ active = 0 }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [student, setStudent] = useLocalStorage("student", "");

  const nav = [
    {
      title: "Home",
      link: "/"
    },
    // {
    //   title: "Profile",
    //   link: "/profile",
    // },
    {
      title: "About",
      link: "/about",
    },
    // {
    //   title: "Contact",
    //   link: "/contact",
    // },
    {
      title: "Information",
      link: "/information",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    // {
    //   title: "Blogs",
    //   link: "/blogs"
    // }
  ];

  return (
    <div className="flex px-xPadding py-2 justify-between border-b-2 border-gray-100">
      <div className="text-[2em] font-[1000] text-primary1">
        <a href={"/"} className="flex gap-2 items-center">
          <Image src={logo.src} alt="" className="" width={40} height={40}/>
          <p>NUESA</p>
        </a>
      </div>

      <div className="flex w-2/5 items-center gap-6 justify-end">
        <div className="flex justify-between gap-2 text-[0.8em] font-[500] text-gray-800 md:hidden">
          {nav.map((item, i) => {
            return (
              <a
                href={item.link}
                className={`${
                  active === i && "bg-gray-200"
                } py-2 px-5 rounded-md`}
                key={i}
              >
                {item.title}
              </a>
            );
          })}
        </div>

        <div className="bg-primary1 text-white rounded-md py-2 w-full text-center text-[0.8em] font-[600] sm:hidden">
          <a href="https://pay.nuesafunaab.com.ng/" target="_blank">
            Pay Due
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="hidden md:block z-20">
          <HiMenuAlt3
            size={30}
            className="text-xl"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          {toggleMenu && (
            <div className="fixed top-0 left-0 w-[100%] h-auto bg-white flex border-b-2 shadow-xl items-start pl-4 justify-between flex-col z-5 slide-bottom">
              <HiX
                className="text-27 cursor-pointer absolute top-5 right-5 text-black text-2xl"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
              <div className="flex flex-col items-start my-10 w-full">
                {nav.map((item, i) => {
                  return (
                    <a
                      href={item.link}
                      className={`py-2 rounded-md w-full  m-8 text-start sm:m-1 ${
                        active === i ? " text-primary1 font-extrabold" : "text-gray-700"
                      } `}
                      key={i}
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      {item.title}
                    </a>
                  );
                })}

                {/* <div className="bg-primary1 text-white rounded-md py-2 px-6 text-[0.8em] font-[700] text-center">
                  {
                    student ?
                    <a href="/profile">Profile</a>
                    :
                    <a href="/sign-in">
                      Login
                    </a>
                  }
                  
                </div> */}

                <div className="bg-primary1 text-white rounded-md py-2 px-6 text-[0.8em] font-[700] text-center">
                  <a href="https://pay.nuesafunaab.com.ng/" target="_blank">
                    Pay Due
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
