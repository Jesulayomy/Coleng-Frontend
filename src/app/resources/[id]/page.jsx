"use client"
import Resources from '@/components/Resources'
import React from 'react'

const page = ({params}) => {
    return (
        <Resources book={params.id}/>
    )
}

export default page