import Image from "next/image";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";
import { Heading } from "../reUsabale/heading-title";
import benefits1 from "../../../public/assets/benefits1.png";
import benefits2 from "../../../public/assets/benefits2.png";
import benefits3 from "../../../public/assets/benefits3.png";

export const Benefits = () => {
  const benefitsData = [
    {
      quote: "After onboarding, receive a unique ID & verification link.",
      title: "Membership Certificate",
      country: "Kenya",
      icon: benefits1,
    },
    {
      quote:
        "Your story, photo, or video shared online — we prepare it for you.",
      title: "Showcase Page",
      country: "Philippines",
      icon: benefits2,
    },
    {
      quote:
        "Connect with European churches and ministries through official introductions.",
      title: "European Church Introductions",
      country: "Kenya",
      icon: benefits3,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <PrimaryButton text="BENEFITS" />
        <div className="mb-12 max-w-3xl">
          <Heading
            title="What You Will Receive"
            subtitle="Join a worldwide fellowship of churches and open new doors of support for your ministry."
          />
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-[#C79C440A] p-8 sm:p-10 rounded-2xl rounded-br-[80px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-start text-start"
            >
              {/* Icon */}
              <div className="bg-[#C79C44] rounded-full w-20 h-20 flex justify-center items-center mb-6 shadow-md">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  className="object-contain w-10 h-10"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              {/* Quote */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xs">
                {benefit.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CTAButton text="Get My Church Recognized" />
        </div>
      </div>
    </section>
  );
};
