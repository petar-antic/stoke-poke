import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TrashCircle } from "../../components/Icons/Icons";
// import { useSelector } from "react-redux";
// import { orderState } from "../../redux/order";
import pokeBowl from "../../assets/pokeBowl.png";

export const CartOverview = () => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  // const order = useSelector((state) => state.order);

  return (
    <>
      <h1 className="text-[32px] leading-[42px] font-bold">Checkout</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Item</th>
            <th>Base</th>
            <th>Sauce</th>
            <th>Ingredients</th>
            <th>Extras</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="flex flex-row items-center">
          <TrashCircle />
          <img src={pokeBowl} alt="pokeBowl" />
          <tr className="flex flex-col">
            <td>Salmon poke bowl</td>
            <td>Medium size</td>
          </tr>
          <tr>
            <td>White Rice</td>
          </tr>
          <tr>
            <td>Ginger</td>
          </tr>
          <tr>
            <td>Edamame</td>
            <td>Spring Onion</td>
            <td>Shallots</td>
            <td>Beets</td>
            <td>Cucumber</td>
            <td>Kohlrabi</td>
            <td>Nori algae</td>
          </tr>
          <tr>
            <td>Wakame algae</td>
            <td>Salmon +50g</td>
          </tr>
          <tr>
            <td>Wakame algae</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
