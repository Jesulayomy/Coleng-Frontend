<<<<<<< HEAD
"use client";
import Banner from "@/atomic_components/Banner";
import Banner2 from "@/atomic_components/Banner2";
import Footer from "@/atomic_components/Footer";
import ImageAndText from "@/atomic_components/ImageAndText";
import Nav from "@/atomic_components/Nav";
import Event from "@/atomic_components/Event";
import Team from "@/atomic_components/Team";
import React from "react";
=======
"use client"
import Banner from '@/atomic_components/Banner'
import Banner2 from '@/atomic_components/Banner2'
import Footer from '@/atomic_components/Footer'
import ImageAndText from '@/atomic_components/ImageAndText'
import Nav from '@/atomic_components/Nav'
import Team from '@/atomic_components/Team'
import React from 'react'
import Objectives from './Objectives'
import NewsLetter from '@/atomic_components/NewsLetter'
>>>>>>> fbb3f4152b63025c362da92d3fce2f47b3787f5b

const LandingPage = () => {
  return (
    <>
<<<<<<< HEAD
      <Nav />
      <Banner />
      <Banner2 />
      <ImageAndText />
      <Event />
      <Team />
      <Footer />
=======
        <Nav />
        <Banner />
        <Banner2 />
        <ImageAndText shorten={true} />
        <Objectives />
        <Team />
        <NewsLetter />
        <Footer />
>>>>>>> fbb3f4152b63025c362da92d3fce2f47b3787f5b
    </>
  );
};

export default LandingPage;
