import { Field } from "formik";
import React from "react";

export const SaouceCard = (props) => {
  return (
    <li className="size-card">
      <Field
        className="peer"
        name="sauceId"
        type="radio"
        id={props.id}
        value={props.id.toString()}
      />
      <label
        htmlFor={props.id}
        className="flex flex-col py-3 pl-4 pr-[22px] w-full
        border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        <h1 className="text-[20px] leading-[24px] font-bold mt-[9px]">
          {props.name}
        </h1>
        <p className="text-[14px] leading-[24px] mt-3">{props.description}</p>
      </label>
    </li>
  );
};
