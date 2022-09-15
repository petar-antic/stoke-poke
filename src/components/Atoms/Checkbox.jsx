import { Field } from "formik";
import React from "react";

export const Checkbox = ({
  name,
  className,
  id,
  selected,
  ingredient,
  selectIngredient,
}) => {
  // console.log(selected);
  return (
    <li>
      <label className={`flex flex-row gap-x-2 ${className ?? ""}`}>
        <Field
          className="peer cursor-pointer h-[24px] w-[24px] rounded-[2px] focus:ring-red-500 text-[#292838] text-[16px] leading-[24px] accent-[#F86060] hover:accent-[#F86060]"
          name="ingredientId"
          type="checkbox"
          id={id}
          value={id.toString()}
          // onClick={() => console.log(id)}
        />
        <span className="cursor-pointer">{name}</span>
      </label>
    </li>
  );
};
