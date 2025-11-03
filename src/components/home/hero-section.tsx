import Image from "next/image";
import bgImg from "../../../public/assets/background.jpg";
import star from "../../../public/assets/star.png";
import { CTAButton } from "../reUsabale/buttons";

export const HeroSection = () => {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src={bgImg} alt="Background" fill className="object-cover" />

        {/* Black linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-32 h-48 bg-blue-900/20 rounded-t-full backdrop-blur-sm"></div>
          <div className="absolute top-20 right-1/4 w-32 h-48 bg-blue-900/20 rounded-t-full backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Join the Alliance, tell your story, gain recognition, and connect
            with donors who want to support your church
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            The Alliance gives your church a platform where your ministry is
            introduced to new supporters, your projects are displayed, and
            donors can give directly.
          </p>
          <CTAButton text="Join For Free" href="/join" />
        </div>
      </div>
      <div className="h-[80px] bg-[#C79C44] flex justify-center items-center">
        <Image src={star} alt="star" className="mr-3" />
        <div className="text-center ">
          <h3 className="md:text-[24px] text-[16px] font-semibold text-[#FFFFFF] leading-3 uppercase">
            INTERNATIONAL CHURCH SUPPORT Alliance
          </h3>
        </div>
        <Image src={star} alt="star" className="ml-3" />
      </div>
    </div>
  );
};
