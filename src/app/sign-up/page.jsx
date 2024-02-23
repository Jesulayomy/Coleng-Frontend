"use client";

import React, { useState } from 'react'
import { signUp } from '@/utils/requests';
import { FaChevronLeft } from 'react-icons/fa'


const page = () => {
  const [primaryEmail, setEmail] = useState();
  const [matricNumber, setMatric] = useState();
  const [fullName, setFullname] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handlMatric = (e) => {
    setMatric(e.target.value);
  }

  const handleFullname = (e) => {
    setFullname(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      primaryEmail, matricNumber, fullName, password
    };

    signUp(data);
  }

  return (
    <div className='flex flex-col items-center justify-center my-auto mt-[10vh] px-xPadding'>
      <div className='fixed top-10 left-xPadding'>
        <a href="/" className='no-underline'>
          <FaChevronLeft />
        </a>
      </div>

      <div className='my-5 flex flex-col gap-3 items-center text-center'>
        <img src="./logo.png" alt="" />
        <h2 className='font-bold text-[2em]'>Sign Up</h2>
        <p>Welcome here</p>
      </div>

      <form action="" className='flex flex-col gap-5 w-full'>
        <input type="number" name="" id="" placeholder='matric number' onChange={handlMatric} />
        <input type="email" name="" id="" placeholder='email' onChange={handleEmail} />
        <input type="text" name="" id="" placeholder='full name' onChange={handleFullname} />
        <input type="password" name="" id="" placeholder='password' onChange={handlePassword} />

        <button className='bg-primary1 text-white font-bold py-3 rounded-lg' onClick={handleSubmit}>
          Sign Up
        </button>

        <p className='text-center'>
          I have an acount, <a href="/sign-in" className='underline text-primary1'>Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default page;
