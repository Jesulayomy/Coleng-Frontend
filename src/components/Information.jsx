import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import React from 'react';

const Information = () => {
  return (
    <>
      <Nav />
      <div classname="flex gap-10 px-xPadding items-center py-20 sm:flex-col sm:p-sPadding">
        <div>
          <h2>Get know us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quo hic, culpa beatae minus iste vitae odit vero illum, inventore sint itaque aperiam illo eos obcaecati facilis. Optio, voluptas rerum?</p>
        </div>
        <div><img src='/smiling.png' /></div>
      </div>
      <div>
        <h2>Updates</h2>
      </div>
      <Footer />
    </>
  )
}

export default Information