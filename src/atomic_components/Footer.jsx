import React from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import {FaCopyright} from "react-icons/fa"

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
    <div className="w-full bg-slate-100 px-xPadding">
      <div className="flex flex-wrap py-8 gap-48 border-b-2 border-gray-500">
        <div className="text-[2em] font-[700] text-primary1">NUESA</div>

        <ul className="leading-10">
          <li className="font-[700]">Company</li>
          {nav.map((item, i) => {
            return (
              <li className="text-[0.9rem] hover:cursor-pointer hover:text-slate-400">
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="leading-10">
          <li className="font-[700]">Company</li>
          {nav.map((item, i) => {
            return (
              <li className="text-[0.9rem] hover:cursor-pointer hover:text-slate-400">
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="leading-10">
          <li className="font-[700]">Company</li>
          {nav.map((item, i) => {
            return (
              <li className="text-[0.9rem] hover:cursor-pointer hover:text-slate-400">
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-between py-10 items-center">
        <p className="text-[20] flex items-center gap-3"><FaCopyright/> 2023 NUESA FUNAAB, All right reserved.</p>
        <div className="flex gap-12 cursor-pointer">
            <FiFacebook />
            <FiGithub />
            <FiInstagram />
            <FiTwitter />
            <FiLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
