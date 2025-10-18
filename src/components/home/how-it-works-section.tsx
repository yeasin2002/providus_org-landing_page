// src/components/HowItWorksSection.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";
import { Heading } from "../reUsabale/heading-title";

import workImgOn1 from "../../../public/assets/workImg1.png";
import workImgOn2 from "../../../public/assets/workImg2.png";
import workImgOn3 from "../../../public/assets/workImg3.png";
import workImgOn4 from "../../../public/assets/workImg4.png";
import workImgOn5 from "../../../public/assets/workImg5.png";
import workingArrow from "../../../public/assets/workingArrog.png";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Join with one short form",
    description:
      "Simply reply to emails and upload a photo or short story — we guide you step by step.",
    icon: workImgOn1,
  },
  {
    id: 2,
    title: "Begin your guided journey",
    description:
      "Simple emails lead you step by step. No technical skills required.",
    icon: workImgOn2,
  },
  {
    id: 3,
    title: "Showcase your story",
    description:
      "We prepare and publish it on the international ICSA platform.",
    icon: workImgOn3,
  },
  {
    id: 4,
    title: "Receive your official membership certificate",
    description: "Once your church has been onboarded and recognized.",
    icon: workImgOn4,
  },
  {
    id: 5,
    title: "Apply for the €1000 grant",
    description:
      "Apply for the €1000 grant and connect with donors and partner churches.",
    icon: workImgOn5,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-[#023C5E0A] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Button */}
        <PrimaryButton text="PROCESS" />

        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl">
          <Heading
            title="How It Works"
            subtitle="Join a worldwide fellowship of churches and open new doors of support for your ministry."
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16 relative justify-items-center w-full">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-start bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Step Icon */}
              <div className="mb-6 relative z-10 w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src={step.icon}
                  alt={step.title}
                  className="object-contain"
                  fill
                />
              </div>

              {/* Step Number */}
              <div className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100 z-0 select-none">
                {step.id}
              </div>

              {/* Step Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 relative z-10">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-base leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Connecting Arrow (hidden on small devices) */}

              <div className="hidden lg:block absolute -right-15 top-1/2 -translate-y-1/2">
                <Image
                  src={workingArrow}
                  height={60}
                  width={60}
                  alt="step arrow"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <CTAButton text="Start My Church's Journey" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
