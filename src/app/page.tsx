import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="items-center flex justify-center w-full mt-[200px]">
        <h1 className="text-7xl text-white/70 font-bold text-center max-w-3xl">
          Celebrate fitness goal with your mates with same{" "}
          <span className="text-black bg-white/70 rounded-full px-6">
            Mindset
          </span>
        </h1>
      </div>
    </>
  );
}
