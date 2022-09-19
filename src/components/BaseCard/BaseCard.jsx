import { Field } from "formik";
import React from "react";

export const BaseCard = ({
  field,
  id,
  title,
  description,
  imagePath,
  setBillData,
  data,
}) => {
  let publicURL = "https://fet.app.fsd.rs";
  return (
    <li className="base-card">
      <input {...field} className="peer hidden" type="radio" id={id} />
      <label
        onClick={() => {
          setBillData(() => ({
            ...data,
            baseName: title,
            baseId: id.toString(),
          }));
        }}
        htmlFor={id}
        className="flex flex-col p-5 pt-2.5 gap-x-4 w-[410px] h-[300px]
        border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        <img
          src={`${publicURL}` + `${imagePath}`}
          alt={title}
          className="h-[128px] w-[128px] self-center"
        />
        <h1 className="text-[20px] leading-[24px] font-bold mt-[9px]">
          {title}
        </h1>
        <p className="text-[14px] leading-[24px] mt-3">{description}</p>
      </label>
    </li>
  );
};
