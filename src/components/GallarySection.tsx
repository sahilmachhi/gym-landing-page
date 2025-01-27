import { content } from "@/lib/constant";
import Image from "next/image";

const GallarySection = () => {
  const { header, description, image } = content.gallary;
  return (
    <>
      <div className="mt-[140px]">
        <section className="mx-auto text-center flex items-center flex-col justify-center container px-10">
          <h2 className="text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl">
            {header}
          </h2>
          <p className="text-center text-2xl mt-6 text-white/70 max-w-5xl">
            {description}
          </p>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={image.imageOne}
                alt="Placeholder Image 1"
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
            </div>
            <div className="bg-gray-800 rounded-lg col-span-2 overflow-hidden">
              <Image
                src={image.imageTwo}
                alt="Placeholder Image 2"
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
            </div>
            <div className="bg-gray-800 rounded-lg col-span-2 overflow-hidden">
              <Image
                src={image.imageThree}
                alt="Placeholder Image 3"
                className=""
              />
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={image.imageFour}
                alt="Placeholder Image 4"
                className=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GallarySection;
