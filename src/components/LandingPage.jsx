"use client";
import Banner from "@/atomic_components/Banner";
import Banner2 from "@/atomic_components/Banner2";
import Footer from "@/atomic_components/Footer";
import ImageAndText from "@/atomic_components/ImageAndText";
import Nav from "@/atomic_components/Nav";
import Team from "@/atomic_components/Team";
import Event from "@/atomic_components/Event";
import React from "react";
import Objectives from "./Objectives";
import NewsLetter from "@/atomic_components/NewsLetter";
import Sections from "./Sections";

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
