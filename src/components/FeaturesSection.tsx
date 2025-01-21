import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
// import personalTraining from "../../public/pexels-willpicturethis-1954524.jpg"
import Image from 'next/image';
import personalTraining from "../../public/Features/istockphoto-1503324969-612x612.jpg"
import Classes from "../../public/Features/64a12c30d307e16231853618_group fitness class.webp"
import Strength from "../../public/Features/tacticalphysique1200x630-min.jpeg"


const FeaturesSection = () => {
    const cardContent = [
        {
          title: 'One-on-One Personal Training',
          description: 'Achieve your fitness goals faster with personalized training programs tailored to your needs. Our certified trainers provide expert guidance and motivation to help you every step of the way.',
          image: personalTraining,
          CTA: "Book a Free Session"
        },
        {
            title: 'Fun & Engaging Group Classes',
            description: 'Join our high-energy group classes like yoga, Zumba, HIIT, and more. Work out with others, stay motivated, and make fitness a fun experience.',
            image: Classes,
            CTA: "View Class Schedule"
          },

          {
            title: 'Strength & Conditioning Workouts',
            description: 'Build muscle, increase endurance, and improve overall fitness with our cutting-edge equipment and expertly designed strength training programs.',
            image: Strength,
            CTA: "Get Started Today"
          },
  
        
    ]
  return (
    <div className='pt-[140px]' id='features'>
        <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
            <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>Transform Your Fitness Journey with Our Exceptional Features</h2>
            <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Discover a world-class gym experience designed to cater to every fitness level. From personalized training sessions to energizing group classes and cutting-edge strength and conditioning programs, we offer everything you need to achieve your goals</p>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
         {cardContent.map(({title,description,image,CTA},i)=> (
                <CardContainer key={i} className='inter-var border-zinc-900'>
                <CardBody className='flex flex-col items-center justify-around hover:from-muted/60 hover:to-muted/20 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-grid-pattern-light size-full bg-repeat bg-[length:30px_30px]  border-white/[0.2] rounded-xl border w-full h-[660px] px-4 py-8'>
                   <CardItem className='text-4xl font-bold text-white' translateZ={70}>
                    {title}
                   </CardItem>
                   <CardItem className='text-1xl text-white/70 mt-4 max-w-[280px] text-center' as={"p"} translateZ={60}>
                    {description}
                   </CardItem>
                   <CardItem className='mt-4' translateZ={50}>
                    <Image src={image} alt={title} className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl' height="1000"
            width="1000"  />
                   </CardItem>
                   <CardItem className='mt-8 w-full' translateZ={80} translateX={10}>
                    <button className='w-full bg-white text-black rounded-2xl font-medium text-xl py-4'>
                        {CTA}
                    </button>
                   </CardItem>
                </CardBody>
            </CardContainer>
            ))}
         </div>
                
        </section>
    </div>
  );
};

export default FeaturesSection;
