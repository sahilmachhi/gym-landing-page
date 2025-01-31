import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { content } from "@/lib/constant";

const FeaturesSection = () => {
  const { feature } = content;
  return (
    <div className="pt-[140px]" id="features">
      <section className="mx-auto text-center flex items-center flex-col justify-center container px-10">
        <h2 className="text-center text-3xl poppins-bold  tracking-tight text-white md:text-5xl max-w-4xl">
          {feature.header}
        </h2>
        <p className="text-center text-2xl inter-description mt-6 text-white/70 max-w-5xl">
          {feature.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {feature.CardContent.map(({ title, description, image, CTA }, i) => (
            <CardContainer key={i} className="inter-var border-zinc-900">
              <CardBody className="flex flex-col items-center justify-around hover:from-muted/60 hover:to-muted/20 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-grid-pattern-light size-full bg-repeat bg-[length:30px_30px]  border-white/[0.2] rounded-xl border w-full h-[720px] px-4 py-8">
                <CardItem
                  className="text-4xl poppins-bold text-white"
                  translateZ={70}
                >
                  {title}
                </CardItem>
                <CardItem
                  className="text-1xl text-white/70 mt-4 max-w-[280px] text-center inter-description"
                  as={"p"}
                  translateZ={60}
                >
                  {description}
                </CardItem>
                <CardItem className="mt-4" translateZ={50}>
                  <Image
                    src={image}
                    alt={title}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    height="1000"
                    width="1000"
                  />
                </CardItem>
                <CardItem
                  className="mt-8 w-full"
                  translateZ={80}
                  translateX={10}
                >
                  <button className="w-full bg-white text-black rounded-2xl poppins-semibold text-xl py-4 ">
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
