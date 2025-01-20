"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import WomenGym from "../../../public/Hero/fd748581-3be3-4115-a8db-cce18866934e.jpg"
import ManGym from "../../../public/Hero/funny-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background.jpg"
const HeroImageAnimation = () => {
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
