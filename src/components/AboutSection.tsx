import Image from "next/image";
import React from "react";
import { content } from "@/lib/constant";

const AboutSection: React.FC = () => {
  const { about } = content;
  return (
    <div className="pt-[140px]" id="about">
      <section className="mx-auto text-center container px-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex lg:items-start items-center justify-center flex-col">
            <h1 className="text-3xl mb-4 lg:text-left text-center poppins-bold">
              {about.header}
            </h1>
            <p className="text-lg text-white/70 max-w-[420px] lg:text-left text-center inter-description">
              {about.description}
            </p>
          </div>
          <div>
            <Image
              src={about.image}
              alt="gym Image"
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
