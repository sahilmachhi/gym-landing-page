"use client"
import React from 'react';
import { FocusCards } from './ui/focus-card';
import Priya from "../../public/GymTrainers/Personal-Trainer-Portraits.jpg"
import Michael from "../../public/GymTrainers/roles-and-responsibilities-of-a-personal-trainer-1024x683.jpg"
import Sarah from "../../public/GymTrainers/portrait-gym-trainer-using-digital-tablet_107420-30388.jpg"

const TrainerSection = () => {
    const trainers = [
        {
          name: "Alexander",
          specialization: "Strength Training & Weightlifting",
          certifications: [
            "Certified Strength and Conditioning Specialist (CSCS)",
            "USA Weightlifting Level 1 Coach",
          ],
          experience: "8+ years",
          quote: "I believe in building strength—inside and out.",
          image: Sarah, // Replace with actual image URL
        },
        {
          name: "Michael Lee",
          specialization: "High-Intensity Interval Training (HIIT) & Functional Fitness",
          certifications: [
            "Certified Personal Trainer (CPT) by NASM",
            "TRX Suspension Training Certified",
          ],
          experience: "5+ years",
          quote: "Fitness is about pushing limits and redefining possibilities.",
          image: Michael, // Replace with actual image URL
        },
        {
          name: "Priya Desai",
          specialization: "Yoga & Flexibility Training",
          certifications: [
            "Registered Yoga Teacher (RYT 200)",
            "Certified Pilates Instructor",
          ],
          experience: "6+ years",
          quote: "A strong body starts with a peaceful mind.",
          image: Priya, // Replace with actual image URL
        },
      ];
  return (
    <>
    <div className='mt-[140px]'>
        <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
       <div>
       <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>Meet Our Expert Trainers</h2>
            <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Our team of certified trainers is dedicated to helping you achieve your fitness goals. With diverse specializations, years of experience, and a passion for health and wellness, they are here to guide, motivate, and inspire you every step of the way. Whether you’re a beginner or a seasoned athlete, our trainers provide personalized support to ensure your success.</p>
       </div>
         <div className='z-10 w-full mt-12'>
         <FocusCards cards={trainers}  />
         </div>
        </section>
    </div>
    </>
  );
};

export default TrainerSection;
