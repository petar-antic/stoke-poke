import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <div className="grid h-full bg-[#FAFBFF]">
      <NavBar />
      <div className="container h-full py-[110px] px-[80px]">{children}</div>
    </div>
  );
};
