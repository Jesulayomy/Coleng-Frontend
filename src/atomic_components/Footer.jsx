import React from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Information",
      link: "/information",
    },
    {
      title: "Resources",
      link: "/resources",
    },
  ];
  return (
    <div className="bg-black flex flex-col items-center justify-center py-20 text-white">
      <h2 className="font-[1000] text-[3em]">NUESA</h2>

      <div className="flex gap-10 text-gray-100">
        {nav.map((item, i) => {
          return (
            <a href={item.link} className="text-[0.8em]">
              {item.title}
            </a>
          );
        })}
      </div>

      <div className="flex gap-3 py-2">
        <div className="circle-border">
          <a href="https://instagram.com/nuesafunaab?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
            <FiInstagram />
          </a>
        </div>

        <div className="circle-border">
          <a href="https://www.linkedin.com/company/nuesa-funaab/" target="_blank">
            {" "}
            <FiLinkedin />
          </a>
        </div>

        <div className="circle-border">
          <a href="https://x.com/nuesafunaab?s=11" target="_blank">
            {" "}
            <FiTwitter />
          </a>
        </div>
      </div>

      <div className="w-[70%] my-2 h-[1px] bg-gray-300" />
      <p>Copyright &copy; 2023 All rights reserved.</p>
      <p className="pt-2 text-[0.8em]">made by <a href="https://wa.me/+2349048988583" className="underline">DevEmmy</a> </p>
    </div>
  );
};

export default Footer;
