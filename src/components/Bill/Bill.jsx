import React from "react";
import Button from "../Atoms/Button";

const Bill = () => {
  return (
    <div className="bill flex flex-col px-5 pt-[32px] pb-6 border border-[#E9E8F8] bg-white">
      <div className="flex flex-row gap-x-[90px] text-[#292838]">
        <div className="leftSide flex flex-col gap-y-3 text-[16px] leading-[24px]">
          <h1 className="mb-2 text-[24px] leading-[24px] font-bold">
            Salmon poke bowl
          </h1>
          <span>Medium size</span>
          <span>White rice base</span>
          <span>Ginger sauce</span>
          <div>
            <h2>Added ingredients:</h2>
            <div className="ingredientsList flex flex-col ml-2 mt-[2px]">
              <span>Edamame</span>
              <span>Spring Onion</span>
              <span>Shallots</span>
              <span>Beets</span>
              <span>Cucumber</span>
              <span>Kohlrabi</span>
              <span>Nori algae</span>
            </div>
          </div>
          <div className="extraIngrediensList flex flex-col gap-y-[13px]">
            <span>Wakame algae</span>
            <span>Salmon +50g</span>
          </div>
        </div>
        <div className="rightSide flex flex-col justify-between items-end text-[24px] leading-[24px] font-bold">
          <div>$6.99</div>
          <div className="extraIngredientsPrices flex flex-col items-end gap-y-[13px]">
            <span>$0.99</span>
            <span>$1.99</span>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-6">Line</div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-6">
          <span className="text-[16px] leading-[24px] text-[#F86060]">
            Full Price:
          </span>
          <span className="self-end text-[24px] leading-[24px] font-bold text-[#F86060]">
            $9.97
          </span>
        </div>
        <div className="buttons flex flex-row justify-between">
          <Button
            className="border-[#292838] bg-white px-9 flex-row-reverse gap-5 text-[#292838] "
            type="submit"
            label="Go to checkout"
          />
          <Button
            className="border-[#292838] bg-[#292838] px-9 flex-row-reverse gap-5 text-white "
            type="submit"
            label="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Bill;
