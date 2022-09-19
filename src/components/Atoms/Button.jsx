import React from "react";

const Button = ({ className, type, onClick, icon, label }) => {
  return (
    <button
      className={`border py-2 rounded text-[14px] leading-6 flex justify-center items-center  ${
        className ?? ""
      }`}
      onClick={onClick}
      type={type}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
