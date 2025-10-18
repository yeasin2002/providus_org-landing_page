import type React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { OpportunityCard } from "./oppurtunityCard";
import opurturnityImg from "../../../../public/assets/oppurtunityOne.jpg";
import opurturnityImg1 from "../../../../public/assets/oppurtunityTwo.jpg";
import { CTAButton, PrimaryButton } from "@/components/reUsabale/buttons";
import { Heading } from "@/components/reUsabale/heading-title";
interface Opportunity {
  id: string;
  title: string;
  description: string;

  imageUrl: any;
  imageAlt: string;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "The €1000 grant opportunity is currently open.",
    description: "Apply now to receive funding for your church ministry",
    imageUrl: opurturnityImg,
    imageAlt: "Church interior with cross",
  },
  {
    id: "2",
    title:
      "The first 100 churches this year will be honored as Founding Members on the Showcase.",
    description: "Be part of our founding community",
    imageUrl: opurturnityImg1,
    imageAlt: "Church interior with arched ceiling",
  },
];

export const SpecialOpportunitySection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#023C5E0A]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <PrimaryButton text="URGENCY" />
          <Heading
            title="Special Opportunity"
            subtitle="Join a worldwide fellowship of churches and open new doors of support for your ministry."
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              title={opportunity.title}
              description={opportunity.description}
              imageUrl={opportunity.imageUrl}
              imageAlt={opportunity.imageAlt}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <CTAButton text="Don’t Miss My Church’s Chance" />
        </div>
      </div>
    </section>
  );
};
