"use client";

import Banner from '@/atomic_components/Banner';
import Banner2 from '@/atomic_components/Banner2';
import Event from '@/atomic_components/Event';
import Footer from '@/atomic_components/Footer';
import ImageAndText from '@/atomic_components/ImageAndText';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import Objectives from './Objectives';
import React from 'react';
import Sections from './Sections';
import Team from '@/atomic_components/Team';


const LandingPage = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Banner2 />
      <Sections />
      <ImageAndText shorten={true} />
      <Objectives />
      <Event />
      <Team />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LandingPage;
