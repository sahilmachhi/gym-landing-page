import Image from 'next/image';
import React from 'react';
import gymImage from "../../public/pexels-willpicturethis-1954524.jpg"

const AboutSection: React.FC = () => {
    return (
        <div className='pt-[140px]' id='about' >
            <section className='mx-auto text-center container px-10' >
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='flex lg:items-start items-center justify-center flex-col'>
                        <h1 className='text-3xl font-bold mb-4 lg:text-left text-center'>  
                 A Legacy of Strength and Fitness
                        </h1>
                        <p className='text-lg text-white/70 max-w-[420px] lg:text-left text-center'>
                        At ManOfSteel, we empower individuals to achieve their fitness goals with expert trainers, state-of-the-art equipment, and a welcoming community.
                        </p>
                    </div>
                    <div>
                      <Image src={gymImage} alt="gym Image" className='rounded-xl object-contain' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
