import React from "react";
import Button from "../Atoms/Button";
import { Cart, Logo } from "../Icons/Icons";

export const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 flex border items-center justify-between bg-white p-[22px] shadow">
      <Logo />
      <Button
        className="border-[#F86060] pl-4 pr-5 gap-3"
        type="button"
        icon={<Cart />}
        label="Cart"
      />
    </nav>
  );
};
