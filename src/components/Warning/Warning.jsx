import React from "react";

export const Warning = ({ sizeName, className }) => {
  return (
    <p className={className}>
      <span className="text-[#F86060]">*</span> You’ve chosen the maximum amout
      of ingrediants for a {sizeName} size bowl.
    </p>
  );
};
