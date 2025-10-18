import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";
import finalImgOne from "../../../public/assets/finalimgOnee.png";
import finalImgTwo from "../../../public/assets/finalimgtwo.png";
import finalImgThree from "../../../public/assets/finalimgThree.png";

export default function FinalCallSection() {
  const cards = [
    {
      image: finalImgOne,
      title: "Your church deserves to be recognized.",
      link: "Read More",
    },
    {
      image: finalImgTwo,
      title: "Your story deserves to be heard.",
      link: "Read More",
    },
    {
      image: finalImgThree,
      title: "Your ministry deserves real support.",
      link: "Read More",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <PrimaryButton text="FINAL CALL" />
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            ICSA makes it simple, free,
            <br className="hidden sm:block" />
            and pastor-friendly.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-start"
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-br-[100px] shadow-md group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="space-y-3 text-left sm:text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-[#C79C44] transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-[#C79C44] font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>{card.link}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <CTAButton text="Yes, I Want My Church to Join ICSA" />
        </div>
      </div>
    </section>
  );
}
