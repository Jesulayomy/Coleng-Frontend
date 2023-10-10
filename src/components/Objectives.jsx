import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from "framer-motion"

const Objectives = () => {
    const objectives = [
        "Promote the Spirit of Unity within Engineering Students in Funaab",
        "Promote cordial relationship, awareness and understanding between engineering students and the rest of the University community.",
        "Promote Cordial relationship between students and constituted authority.",
        "Promote Socio-Cultural, intellectual and sporting activities of members",
        "Promote friendly relationship with other student Bodies within and outside Nigeria whose aims and objectives are similar to those of the association.",
        "Assist the Engineering Students with Industrial Training programs through the Alumni whom are ready to offer or render help in such means.",
        "Embark on lawful activities which are under the rules and regulations of the University to help attain these aims and Objectives",
    ]

  return (
    <motion.div
    viewport={{once: false}}
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1, y: 0}}
    transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}

    className='px-xPadding my-10 flex flex-col gap-5'>
        <div className=''>
            <h2 className='text-[2em] font-[700]'>Our Aim and Objectives</h2>
            <div className='bg-primary1 w-[200px] h-2'/>
        </div>
        
        <ul className='flex list-disc flex-col gap-2'>
            {
                objectives.map((obj, i)=>{
                    return(
                        <li key={i} className='flex gap-2'>
                            {/* <FaCheckCircle color='green' size={"20px"} /> */}
                            <p> - </p>
                            {obj}
                        </li>
                    )
                })
            }
        </ul>
    </motion.div>

  )
}

export default Objectives