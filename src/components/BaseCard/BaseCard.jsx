import { Field } from "formik";
import React from "react";

export const BaseCard = (props) => {
  let publicURL = "https://fet.app.fsd.rs";
  return (
    <li className="base-card">
      <Field
        className="peer"
        name="baseId"
        type="radio"
        id={props.id}
        value={props.id.toString()}
      />
      <label
        htmlFor={props.id}
        className="flex flex-col p-5 pt-2.5 gap-x-4 w-[410px] h-[300px]
        border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        <img
          src={`${publicURL}` + `${props.imagePath}`}
          alt={props.name}
          className="h-[128px] w-[128px] self-center"
        />
        <h1 className="text-[20px] leading-[24px] font-bold mt-[9px]">
          {props.name}
        </h1>
        <p className="text-[14px] leading-[24px] mt-3">{props.description}</p>
      </label>
    </li>
  );
};
