import React from "react";
type Tprops = {
  title: string;
  subtitle: string;
};
export const Heading = ({ title, subtitle }: Tprops) => {
  return (
    <div>
      <h3 className="text-[#000000] text-[60px] font-bold">{title}</h3>
      <h3 className="text-[#737373] text-[18px] font-medium">{subtitle}</h3>
    </div>
  );
};
