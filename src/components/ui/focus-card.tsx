"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.image}
        alt={card.name}
        fill
        className="object-cover absolute inset-0 rounded-lg overflow-hidden"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow [text-shadow:2px_2px_4px_black]">
          {card.name}
          </h3>
          <p className="text-white/90 drop-shadow [text-shadow:2px_2px_4px_black] ">
          {card.experience} of experience
          </p>
          <p className="[text-shadow:2px_2px_4px_black] text-white/90">
            spacialization in {" "}
          {card.specialization}
          </p>
          <p className="[text-shadow:2px_2px_4px_black] text-white font-medium italic text-lg">
          '{card.quote}'
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: any[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
    </>
  );
}
