import React from "react";

export const SauceCard = ({
  field,
  id,
  title,
  description,
  setBillData,
  data,
}) => {
  return (
    <li className="size-card">
      <input {...field} className="peer hidden" type="radio" id={id} />
      <label
        onClick={() => {
          setBillData(() => ({
            ...data,
            souceName: title,
            souceId: id.toString(),
          }));
        }}
        htmlFor={id}
        className="flex flex-col py-3 pl-4 pr-[22px] w-full
        border border-[#E9E8F8] peer-checked:border-red-600 peer-checked:after:content-['✓'] peer-checked:after:bg-red-600 peer-checked:after:rounded-[50%] peer-checked:after:w-[18px] peer-checked:after:h-[18px]"
      >
        <h1 className="text-[20px] leading-[24px] font-bold mt-[9px]">
          {title}
        </h1>
        <p className="text-[14px] leading-[24px] mt-3">{description}</p>
      </label>
    </li>
  );
};
