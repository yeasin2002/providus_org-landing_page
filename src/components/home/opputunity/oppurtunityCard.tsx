import type React from "react";

import Image from "next/image";
interface OpportunityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-white text-balance leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-200 mt-2">{description}</p>
      </div>
    </div>
  );
};
