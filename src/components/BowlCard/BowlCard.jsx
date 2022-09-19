import React from "react";

export const BowlCard = ({
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
    <li className="bowl-card w-1/4">
      <input {...field} className="peer hidden" type="radio" id={id} />
      <label
        onClick={() => {
          setBillData(() => ({
            ...data,
            bowlId: id.toString(),
            bowlName: title,
          }));
        }}
        htmlFor={id}
        className="flex flex-col px-5 pb-5 pt-2.5 w-full cursor-pointer
        border border-[#E9E8F8] peer-checked:border-[#F86060]"
      >
        <img
          src={`${publicURL}` + `${imagePath}`}
          alt={title}
          className="w-[150px] h-[150px] self-center"
        />
        <h1 className="text-[20px] leading-[24px] font-bold mt-[9px]">
          {title}
        </h1>
        <p className="text-[14px] leading-[24px] mt-3">{description}</p>
      </label>
    </li>
  );
};
