import React from "react";
import small from "../../assets/smallSize.png";
import medium from "../../assets/mediumSize.png";
import large from "../../assets/largeSize.png";
import { Field } from "formik";

export const SizeCard = (props) => {
  return (
    <li className="size-card">
      <Field
        className="peer"
        name="sizeId"
        type="radio"
        id={props.id}
        value={props.id.toString()}
      />
      <label
        htmlFor={props.id}
        className="flex flex-row px-5 p-[15px] gap-x-4 w-[410px] h-[160px]
        border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        {props.name === "Small" && <img src={small} alt={props.name} />}
        {props.name === "Medium" && <img src={medium} alt={props.name} />}
        {props.name === "Large" && <img src={large} alt={props.name} />}
        <div className="flex flex-col ">
          <h1 className="text-[20px] leading-[24px] font-bold">{props.name}</h1>
          <p className="text-[14px] leading-[24px] mt-3">{props.description}</p>
          <span className="price text-[24px] leading-[24px] mt-4 font-bold">
            {props.currency}
            {props.price}
          </span>
        </div>
      </label>
    </li>
  );
};
