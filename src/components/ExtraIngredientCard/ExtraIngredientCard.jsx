import React from "react";

export const ExtraIngredientCard = ({
  field,
  id,
  title,
  currency,
  price,
  setBillData,
}) => {
  return (
    <li className="w-[450px] bg-white">
      <input
        {...field}
        name="extraIngredients"
        className="peer hidden"
        type="checkbox"
        id={id}
        value={id.toString()}
      />
      <label
        onClick={setBillData}
        htmlFor={id}
        className="flex flex-row py-3 pl-4 pr-[53px] justify-between cursor-pointer
      border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        <p className="text-[16px] leading-[24px] font-bold">{title}</p>
        <span className="text-[16px] leading-[24px] font-bold">
          {currency}
          {price}
        </span>
      </label>
    </li>
  );
};
