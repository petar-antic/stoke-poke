import React from "react";
import Button from "../Atoms/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ChevronRight } from "../Icons/Icons";

const Footer = () => {
  return (
    <nav className="fixed w-full bottom-0 left-0 flex border items-center justify-between bg-white px-[80px] pt-[20px] pb-[33px] shadow">
      <ProgressBar />
      <Button
        className="border-[#292838] bg-[#292838] pl-4 pr-5 flex-row-reverse gap-5 text-white"
        type="submit"
        icon={<ChevronRight />}
        label="Next"
        // onClick={nextPageHandler}
      />
    </nav>
  );
};

export default Footer;
