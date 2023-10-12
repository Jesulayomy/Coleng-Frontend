"use client";
import EachEvent from '@/atomic_components/EachEvent'
import React from 'react'

const page = (props) => {
  let {id} = props.params;

  return (
    <EachEvent id={id}/>
  )
}

export default page;