"use client";

import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import React from 'react';


const ContactUs = () => {
  return (
    <>
      <Nav active={2} />
      <div
        className="h-auto my-20 relative flex justify-center items-center flex-col"
      >
        {/* <div className="dark__bg " /> */}
        <div className="text-black z-10">
          <h1 className="text-[3em] font-[1000] text-center">Contact Us</h1>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-none items-start justify-between gap-10 mx-xPadding my-5">
          <h3 className="text-[4em] font-[500] sm:text-[1em]">
            Get in Touch with us today by reaching out to us.
          </h3>

          <form action="" className="flex flex-col gap-3">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Emmy Doe" name="name"/>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="emmydoe@mail.com"/>
            </div>

            <div>
            <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="Request for an Information"/>
            </div>

            <div>
            <label htmlFor="message">Message</label>
              <textarea name="message" id="" rows={"5"} className="resize-none" placeholder="Your message..."/>
            </div>

            <button className="bg-primary1 text-white text-center w-full p-3 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ContactUs;
