import React from "react";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../Icons/Icons";

const Cart = ({ amount }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`border py-2 rounded text-[14px] leading-6 flex justify-center items-center border-[#F86060] pl-4 pr-5 gap-3 relative ${
        amount > 0 && "bg-[#F86060]"
      }`}
      onClick={() => navigate(`/cart-overview`)}
      type="button"
    >
      <CartIcon stroke={amount > 0 ? "#FFFFFF" : "#292838"} />
      <label className={`text-[#292838] ${amount > 0 && "text-white"}`}>
        Cart
      </label>
      {amount > 0 && (
        <div className="flex justify-center items-center rounded-[50%] bg-[#292838] text-white w-5 h-5 absolute -top-2 -right-2">
          {amount}
        </div>
      )}
    </button>
  );
};

export default Cart;
