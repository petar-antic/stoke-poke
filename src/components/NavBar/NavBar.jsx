import React from "react";
import Cart from "../Cart/Cart";
import { Logo } from "../Icons/Icons";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className="fixed w-full top-0 left-0 flex border items-center justify-between bg-white p-[22px] shadow">
      <Logo />
      <Cart amount={amount} />
    </nav>
  );
};
