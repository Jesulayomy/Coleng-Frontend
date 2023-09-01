import Banner from '@/atomic_components/Banner'
import Banner2 from '@/atomic_components/Banner2'
import Footer from '@/atomic_components/Footer'
import ImageAndText from '@/atomic_components/ImageAndText'
import Nav from '@/atomic_components/Nav'
import React from 'react'

const LandingPage = () => {
  return (
    <>
        <Nav />
        <Banner />
        <Banner2 />
        <ImageAndText />
        <Footer />
    </>
  )
}

export default LandingPage