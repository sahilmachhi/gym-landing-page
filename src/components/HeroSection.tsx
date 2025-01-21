import React from 'react';

import { Squares } from './ui/squares-background';
import { Spotlight } from './ui/Spotlight';
import SparklesText from './ui/sparkles-text';
import { EyeCatchingButton_v1 } from './ui/CallToActionButton';
import HeroImageAnimation from './ui/HeroImageAnimation';


const Hero = () => {
  return (
    <>
      <div className="relative h-[768px]" id="home">
        <HeroImageAnimation />
        <div className='absolute w-full h-[90px] z-10 bottom-0 bg-gradient-to-b from-transparent to-black'></div>
        <Squares className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
          speed={1} direction="diagonal" squareSize={40} />
        <section className="relative container mx-auto px-10"
          style={
            { overflow: "hidden" }
          }>
          <Spotlight className="lg:-top-[200px] lg:left-[580px] absolute" />
          <div className="items-center flex justify-center w-full flex-col">
            <h1 className="md:text-7xl text-5xl max-w-4xl font-bold text-center mt-[180px]">
              Celebrate fitness goal with your mates with same {" "}
              <span className="text-black bg-white/70 rounded-full px-4">
                <SparklesText text="Mindset" className="md:text-7xl text-5xl px-4 !leading-[1.3]" />
              </span>
            </h1>
            <div className='mt-10 flex justify-center'>
              <EyeCatchingButton_v1 textname="Get Membership" className="text-xl px-8 py-6" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
