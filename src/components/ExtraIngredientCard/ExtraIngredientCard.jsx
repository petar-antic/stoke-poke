import { Field } from "formik";
import React from "react";

export const ExtraIngredientCard = (props) => {
  return (
    <li className="w-[450px] bg-white">
      <Field
        className="peer hidden"
        name="extraIngredients"
        type="checkbox"
        id={props.id}
        value={props.id.toString()}
      />
      <label
        htmlFor={props.id}
        className="flex flex-row py-3 pl-4 pr-[53px] justify-between cursor-pointer
      border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        <p className="text-[16px] leading-[24px] font-bold">{props.name}</p>
        <span className="text-[16px] leading-[24px] font-bold">
          {props.currency}
          {props.price}
        </span>
      </label>
    </li>
  );
};
