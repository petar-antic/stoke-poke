import React from "react";

export const Checkbox = ({
  field,
  title,
  className,
  id,
  setBillData,
  disabled,
}) => {
  return (
    <li>
      <label
        onClick={setBillData}
        className={`flex flex-row gap-x-2 ${className ?? ""}`}
      >
        <input
          {...field}
          className="peer cursor-pointer h-[24px] w-[24px] rounded-[2px] focus:ring-red-500 text-[#292838] text-[16px] leading-[24px] accent-[#F86060] hover:accent-[#F86060]"
          name="ingredients"
          type="checkbox"
          id={id}
          value={id.toString()}
          disabled={disabled}
        />
        <span className="pointer-events-none">{title}</span>
      </label>
    </li>
  );
};
