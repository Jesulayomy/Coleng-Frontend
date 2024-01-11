"use client"
import Footer from '@/atomic_components/Footer'
import Nav from '@/atomic_components/Nav'
import { createTransaction } from '@/utils/requests';
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { v4 as uuidv4 } from 'uuid';
require("dotenv").config()

const page = () => {
    

      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [matricNumber, setMatricNumber] = useState();
      const [department, setDepartment] = useState()
      const [level, setLevel] = useState("100L");
      const [price, setPrice] = useState("4,000")

      const handleEmailChange = (e)=>{
        setEmail(e.target.value)
      }

      const handleNameChange = (e)=>{
        setName(e.target.value)
      }

      const handleMChange = (e)=>{
        setMatricNumber(e.target.value)
      }

      const handleDepartmentChange = (e)=>{
        setDepartment(e.target.value)
      }

      const handleLevelChange = (e)=>{
        let price1 = ((e.target.value === "100L") || (e.target.value === "200L DE")) ? "4,000" : "3,000";
        console.log(price1)
        setPrice(price1)
        setLevel(e.target.value)
      }

      let data = {email, name, matricNumber, department, level}

      const config = {
        reference: uuidv4(),
        email: email,
        amount: ((level === "100L") || (level === "200L DE")) ? 416300 : 314800, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        studentType: ((level === "100L") || (level === "200L DE")) ? "Fresher/DE" : "Returning Student",
        publicKey: process.env.NEXT_PUBLIC_PK,
      };

      const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        
        let data = {
          email,
          name,
          amount: config.amount / 100,
          ref: reference.reference,
          matricNumber,
          studentType: config.studentType
        }

        createTransaction(data)
      };
  
      
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
      const componentProps = {
          ...config,
          text: 'Proceed to Payment',
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
      
  
  return (
    <div>
        <Nav />

        <div className='px-xPadding my-[60px] flex flex-col items-center justify-center'>
            <p className='uppercase text-center md:text-[14px]'>Payment of college Due</p>
            <p className='text-[60px] text-center leading-[68px] w-2/3 m-auto md:text-[30px] md:w-full md:leading-[40px]'>Kindly provide necessary and accurate information</p>

            <form action="" className='grid grid-cols-2 md:grid-cols-none gap-[20px] mt-10 w-full'>
                <input type="text" placeholder='full name' onChange={handleNameChange} value={name} required/>
                <input type="email" placeholder='email' onChange={handleEmailChange} value={email} required/>
                <input type="tel" placeholder='matric number' onChange={handleMChange} value={matricNumber} required/>
                <select name="" id="" placeholder="Select Department" onChange={handleDepartmentChange} value={department} required>
                    <option value="Agricultural & Bio-resources Engineering">Agricultural & Bio-resources Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>

                <select name="" id="" placeholder="Select Level" onChange={handleLevelChange} value={level} required>
                    <option value="100L">100L</option>
                    <option value="200L">200L</option>
                    <option value="200L DE">200L DE</option>
                    <option value="300L">300L</option>
                    <option value="400L">400L</option>
                    <option value="500L">500L</option>
                </select>

                <div className='form'>
                  {price}
                </div>
            </form>

            {/* <button className=''> */}
                <PaystackButton {...componentProps} className='border-primary1 border-2 py-3 px-16 md:w-full rounded-md text-primary1 my-5 hover:bg-primary1 hover:text-white transition-all' />
            {/* </button> */}
            
        </div>

        <Footer />
    </div>
  )
}

export default page