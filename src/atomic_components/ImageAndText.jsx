import React from "react";

const ImageAndText = () => {
  return (
    <div className="grid grid-cols-2 gap-10 px-xPadding sm:px-2 py-20 items-center sm:flex flex-col">
      <img
        src="./president.png"
        alt="president pics"
        className="w-[90%] rounded-2xl border-[5px] border-primary1"
      />

      <div className="sm:px-2">
        <h2 className="text-[2em] font-[700]">President's speech.</h2>
        <p className="py-2 text-gray-700">
          The Nigerian Universities Engineering Students' Association (NUESA),
          FUNAAB Chapter, is a leading student organization that promotes
          technological innovation and excellence among its members for the
          benefit of society
        </p>

        <p className="py-2 text-gray-700">
          I am honored to be the current president of NUESA, FUNAAB Chapter,
          which has about 1,500 members from five departments in the College of
          Engineering. With the help of my dedicated Executive team(Team
          Synergy), Dean of college of engineering, Staff Adviser and
          Patron/Matron, we work to ensure that every NUESA member has a smooth
          and successful journey through the college.{" "}
        </p>

        <p className="py-2 text-gray-700">
          As a student branch of NUESA, our goal is to uphold the organization's
          mission of technological excellence and professional development for
          students. We aim to provide our members with opportunities to enhance
          their skills both academically and professionally. We strive to be
          successful in helping to develop outstanding engineers who will make
          positive impacts throughout the world.{" "}
        </p>

        <p className="py-2 text-gray-700">
          We have undertaken a number of initiatives to support the academic and
          technical growth of our students. These include: Starting a Tech
          community, Organizing weekly academic tutorials, Fresh students
          orientation program, NUESA fresher's cup, Informative and interactive
          webinars, Health, safety, and environment training, Project management
          training and certification, Career fair, Intra-collegiate debate
          competition, 7th Annual Engineering conference, NUESA Week '23, NUESA
          Olympics, Launching a website and so on.
        </p>
        <p className="py-2 text-gray-700">
          We also plan to embark on a physical building project(Tech lounge),
          and to host more webinars. We are highly dedicated to helping our
          students achieve academic and technical excellence.
        </p>
        <p className="py-2 text-gray-700">
          I hereby use this opportunity to welcome you to the best college in
          the Federal University of Agriculture Abeokuta.
        </p>

        {/* <button className="bg-primary1  text-white rounded-md py-3 px-6 text-[0.8em] font-[700]">
          Read More
        </button> */}
      </div>
    </div>
  );
};

export default ImageAndText;
