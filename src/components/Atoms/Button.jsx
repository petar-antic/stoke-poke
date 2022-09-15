import React from "react";

const Button = ({ className, type, onClick, icon, label }) => {
  return (
    <Button
      className={`border py-2 rounded text-[14px] leading-6 flex justify-center items-center  ${
        className ?? ""
      }`}
      onClick={onClick}
      type={type}
    >
      {icon}
      {label}
    </Button>
  );
};

export default Button;
