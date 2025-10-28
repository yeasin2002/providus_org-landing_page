import React from "react";
import { ArrowRight, Church } from "lucide-react";
import visionImg from "../../../public/assets/vision.jpg";
import Image from "next/image";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";
export default function VisionHeroSection() {
  return (
    <div
      className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      id="vision"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <PrimaryButton text="Our Vision" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Every local church has a story worth telling.
              </h1>
              <p className="text-xl text-[#000000] mb-4 font-semibold">
                Through ICSA, your story is{" "}
                <span className="font-semibold">
                  prepared, published, and connected
                </span>{" "}
                — without barriers.
              </p>
            </div>

            {/* Quote Box */}
            <div className="border-l-4 border-yellow-500 bg-white pl-6 py-4">
              <p className="text-[#737373] italic leading-relaxed">
                Together, these stories form a global testimony and open doors
                for prayer, fellowship, and support across nations.
              </p>
            </div>

            {/* CTA Button */}
            <CTAButton text="Share My Church’s Story Today" />
          </div>

          {/* Image Section with Badge */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative  rounded-br-[200px] overflow-hidden shadow-2xl">
              <Image
                src={visionImg}
                alt="Beautiful church interior with gothic architecture"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>

            {/* Circular Badge */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-yellow-600 rounded-full flex items-center justify-center shadow-xl animate-pulse-slow">
              <div className="text-center">
                {/* Circular Text */}
                <svg
                  className="absolute inset-0 w-full h-full border-white border-5 rounded-full"
                  viewBox="0 0 160 160"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  <text className="text-[11px] md:text-[13px] fill-white font-semibold uppercase tracking-wider">
                    <textPath href="#circlePath" startOffset="0%">
                      SEARCH FOR A NEW LIFE • SEARCH FOR A NEW LIFE •
                    </textPath>
                  </text>
                </svg>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Church className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
