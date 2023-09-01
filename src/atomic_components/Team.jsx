import React from "react";
import {FaTwitter, FaLinkedin} from "react-icons/fa"

const Team = () => {
  return (
    <div className="flex p-xPadding justify-between">
      <div className="w-[30%]">
        <h2 className="text-[2em] font-[700]">Our Excos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam
          labore aspernatur aut laudantium sed velit! Dolore non amet, aut nemo
          quaerat modi pariatur? Voluptas quos quod quaerat hic consequatur!
        </p>
        <button className="">Connect</button>
      </div>
      <div className="flex gap-6 ml-6">
        <div className="">
          <img src="https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg" />
          <span className="flex justify-between items-center py-2">
            <span>
              <p className="text-[1.5em] font-[500]">Deepak Rony</p>
              <p>President</p>
            </span>
            <span className="flex gap-6">
              <FaLinkedin />
              <FaTwitter />
            </span>
          </span>
        </div>
        <div className="">
          <img src="https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg" />
          <span className="flex justify-between items-center py-2">
            <span>
              <p className="text-[1.5em] font-[500]">Deepak Rony</p>
              <p>President</p>
            </span>
            <span className="flex gap-6">
              <FaLinkedin />
              <FaTwitter />
            </span>
          </span>
        </div>
        <div className="">
          <img src="https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg" />
          <span className="flex justify-between items-center py-2">
            <span>
              <p className="text-[1.5em] font-[500]">Deepak Rony</p>
              <p>President</p>
            </span>
            <span className="flex gap-6">
              <FaLinkedin />
              <FaTwitter />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
