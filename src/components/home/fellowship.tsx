import { Award, Globe, Heart } from "lucide-react";
import Image from "next/image";
import icon from "../../../public/assets/fellowship1.png";
import icon2 from "../../../public/assets/fellowship2.png";
import icon3 from "../../../public/assets/fellowship3.png";
import felloshipMain from "../../../public/assets/fellowshipMain.png";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";

export default function FellowshipHonorsSection() {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Pastors who invite others receive Founding Church badges on their profile.",
      img: icon,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Churches are introduced to global partners",
      text: "Churches are introduced to global partners — with prayer and recognition.",
      img: icon2,
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Every new church story is welcomed and prayed for in the alliance.",
      img: icon3,
    },
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <PrimaryButton text="FELLOWSHIP" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                A Fellowship That
                <br />
                Honors You
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.text} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-[#C79C441F]">
                    <Image
                      src={feature.img}
                      alt=""
                      className="w-8 h-8 object-contain text-[#C79C44]"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-2">
                    <p className="text-[#737373] text-[24px] font-semibold">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <CTAButton text="Be Recognized as a Founding Member" href="/join" />
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative  rounded-br-[150px] overflow-hidden shadow-2xl">
              <Image
                src={felloshipMain}
                alt="Church ceremony with pastor in purple vestments"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
