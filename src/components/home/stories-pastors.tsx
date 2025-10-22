import Image from "next/image";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";
import { Heading } from "../reUsabale/heading-title";
import benefits1 from "../../../public/assets/stories.png";
import profile from "../../../public/assets/profile.png";
export const Stories = () => {
  const benefitsData = [
    {
      quote:
        "“We didn’t need any computer skills. Just followed the emails, sent one photo, and our story was online. Now people know us!”",
      name: "Pastor Samuel",
      country: "Kenya",
      icon: benefits1,
    },
    {
      quote:
        "“ICSA connected us with brothers and sisters in Europe. It gave us encouragement and real partners.”",
      name: "Pastor Maria",
      country: "Philippines",
      icon: benefits1,
    },
    {
      quote:
        "“We didn’t need any computer skills. Just followed the emails, sent one photo, and our story was online. Now people know us!”",
      name: "Pastor Samuel",
      country: "Kenya",
      icon: benefits1,
    },
  ];

  return (
    <section className="bg-[#023C5E0A] py-20 px-4 sm:px-6 lg:px-8 font-sans" id="stories">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <PrimaryButton text="BENEFITS" />
        <div className="mb-12 max-w-3xl">
          <Heading
            title="Stories from Pastors"
            subtitle="Join a worldwide fellowship of churches and open new doors of support for your ministry."
          />
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full py-10">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="relative h-[380px] bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-start text-start"
            >
              <div className=" w-20 h-20 flex justify-center items-center mb-2">
                <Image
                  src={benefit.icon}
                  alt={benefit.name}
                  className="object-contain w-10 h-10"
                />
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xs">
                {benefit.quote}
              </p>
              <div className="flex gap-3 mt-3 absolute bottom-10">
                <Image
                  src={profile}
                  alt="Stories of Pastors"
                  className="object-contain w-12 h-12 border-4 rounded-full border-yellow-300 "
                />
                <div>
                  <h3 className="text-[#0E0D0A] text-[24px]">{benefit.name}</h3>
                  <h3 className="text-[16px] text-[#737373]">
                    {benefit.country}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CTAButton text="Join the Growing Family of Churches" />
        </div>
      </div>
    </section>
  );
};
