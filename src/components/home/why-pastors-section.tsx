import Image from "next/image";
import imgTwo from "../../../public/assets/whyImage.png";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";

export default function PastorsJoiningSection() {
  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <Image src={imgTwo} alt="none" />
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PrimaryButton text="About us" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[60px] font-bold text-[#000000] leading-tight">
                Why Pastors Are Joining
              </h2>
            </div>
            <div className="space-y-6">
              {/* Direct Support */}
              <div className="space-y-2">
                <h3 className="text-[24px] font-bold text-[#000000]">
                  Direct Support
                </h3>
                <p className="text-[#737373] text-[16px] leading-relaxed">
                  Members contribute for a short grant, tailored to your
                  church's needs.
                </p>
                <h1 className="border border-b border-[#C1C1C1] my-4"></h1>
              </div>

              {/* Visibility Without Tech Skills */}
              <div className="space-y-2">
                <h3 className="text-[24px] font-bold text-[#000000]">
                  Visibility Without Tech Skills
                </h3>
                <p className="text-[#737373] text-[16px] leading-relaxed">
                  Simply reply to emails and receive a global or short story —
                  no guide you need by hand.
                </p>
                <h1 className="border border-b border-[#C1C1C1] my-4"></h1>
              </div>

              {/* Credibility */}
              <div className="space-y-2">
                <h3 className="text-[24px] font-bold text-[#000000]">
                  Credibility
                </h3>
                <p className="text-[#737373] text-[16px] leading-relaxed">
                  Receive your official membership certificate once your church
                  has completed the journey.
                </p>
                <h1 className="border border-b border-[#C1C1C1] my-4"></h1>
              </div>

              {/* European Connections */}
              <div className="space-y-2">
                <h3 className="text-[24px] font-bold text-[#000000]">
                  European Connections
                </h3>
                <p className="text-[#737373] text-[16px] leading-relaxed">
                  We introduce your church to established European ministries
                  and networks.
                </p>
                <h1 className="border border-b border-[#C1C1C1] my-4"></h1>
              </div>

              {/* Fellowship */}
              <div className="space-y-2">
                <h3 className="text-[24px] font-bold text-[#000000]">
                  Fellowship
                </h3>
                <p className="text-[#737373] text-[16px] leading-relaxed">
                  Recognition and encouragement alongside pastor's worldwide.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <CTAButton text="Claim My Free Membership Journey" />
          </div>
        </div>
      </div>
    </div>
  );
}
