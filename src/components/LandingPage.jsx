"use client"
import Banner from '@/atomic_components/Banner'
import Banner2 from '@/atomic_components/Banner2'
import Footer from '@/atomic_components/Footer'
import ImageAndText from '@/atomic_components/ImageAndText'
import Nav from '@/atomic_components/Nav'
import Team from '@/atomic_components/Team'
import React from 'react'
import Objectives from './Objectives'

const LandingPage = () => {
  return (
    <>
        <Nav />
        <Banner />
        <Banner2 />
        <ImageAndText />
        <Objectives />
        <Team />
        <Footer />
    </>
  )
}

export default LandingPage