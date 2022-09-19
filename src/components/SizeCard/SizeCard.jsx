import React, { useState } from "react";
import small from "../../assets/smallSize.png";
import medium from "../../assets/mediumSize.png";
import large from "../../assets/largeSize.png";

export const SizeCard = ({
  field,
  id,
  price,
  title,
  description,
  currency,
  setBillData,
  data,
  maxIngredients,
}) => {
  return (
    <li className="size-card">
      <input {...field} className="peer hidden" type="radio" id={id} />
      <label
        onClick={() => {
          setBillData(() => ({
            ...data,
            sizeName: title,
            sizeId: id.toString(),
            maxIngredients: maxIngredients,
          }));
        }}
        htmlFor={id}
        className="flex flex-row px-5 p-[15px] gap-x-4 w-[410px] h-[160px]
        border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        {title === "Small" && <img src={small} alt={title} />}
        {title === "Medium" && <img src={medium} alt={title} />}
        {title === "Large" && <img src={large} alt={title} />}
        <div className="flex flex-col ">
          <h1 className="text-[20px] leading-[24px] font-bold">{title}</h1>
          <p className="text-[14px] leading-[24px] mt-3">{description}</p>
          <span className="price text-[24px] leading-[24px] mt-4 font-bold">
            {currency}
            {price}
          </span>
        </div>
      </label>
    </li>
  );
};
