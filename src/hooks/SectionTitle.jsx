import React from "react";

const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="text-center md:w-4/12 mx-auto mb-4">
      <p className="text-violet-600 font-[curve] mb-2">---{subHeading}---</p>
      <h3 className="text-4xl uppercase font-[curve] italic border-y-4 py-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
