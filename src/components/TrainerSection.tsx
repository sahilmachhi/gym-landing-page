"use client"
import React from 'react';
import { FocusCards } from './ui/focus-card';
import { content } from '@/lib/constant';
const TrainerSection = () => {
  const {trainer} = content

  return (
    <>
    <div className='pt-[140px]' id='trainer'>
        <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
       <div className='flex flex-col items-center justify-center'>
       <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl poppins-bold'>{trainer.header}</h2>
            <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl inter-description'>{trainer.description}</p>
       </div>
         <div className='z-10 w-full mt-12'>
         <FocusCards cards={trainer.trainers}  />
         </div>
        </section>
    </div>
    </>
  );
};

export default TrainerSection;
