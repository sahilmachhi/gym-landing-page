"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { content } from "@/lib/constant"

const HeroImageAnimation = () => {
  const {ManGym, WomenGym} = content.hero.imageSection

  return (
    <>
     <motion.div initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.0, ease: "easeInOut",delay:1.0 }}
      custom={{duration: 3 }}
      style={{ aspectRatio: "9/16"}} className='absolute h-[250px] top-[200px] left-[90px] rotate-12 w-auto z-10 ' >
        <Image src={WomenGym} className=" absolute  hidden xl:block  rounded-3xl object-cover rotate-12" alt='man on gym' style={{aspectRatio: "9/16"}} />
        </motion.div>
        <motion.div initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.0, ease: "easeInOut", delay:1.5 }}
      custom={{duration: 3 }}
      style={{ aspectRatio: "9/16"}} className='absolute h-[250px] top-[200px] right-[90px] -rotate-12 w-auto z-10' >
        <Image src={ManGym} className=" absolute hidden xl:block rounded-3xl object-cover -rotate-12" alt='man on gym' style={{aspectRatio: "9/16"}} />
        </motion.div>   
    </>
  )
}

export default HeroImageAnimation
