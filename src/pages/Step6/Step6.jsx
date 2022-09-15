import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Bill from "../../components/Bill/Bill";
import { ExtraIngredientCard } from "../../components/ExtraIngredientCard/ExtraIngredientCard";
import Footer from "../../components/Footer/Footer";

const axios = require("axios");

export const Step6 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [extraIngredients, setExtraIngredients] = useState([]);

  const getExtraIngredients = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/extra_ingredients?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setExtraIngredients(
      data.data.map((extraIngredient) => ({
        ...extraIngredient,
        selected: false,
      }))
    );
  };

  useEffect(() => {
    getExtraIngredients();
  }, []);

  console.log(extraIngredients);

  return (
    <>
      <div className="flex flex-row justify-between items-start">
        <div className="extra-ingredients">
          <h1 className="text-[32px] leading-[42px] font-bold">
            Pick an extra ingredient
          </h1>
          <p className="text-[16px] leading-[24px] mt-3">
            Weather its more sashimi or an ingrediant you’d like to try out,
            feel free
            <br /> to add whatever you’d like.
          </p>

          <Formik
            initialValues={{
              extraIngredients: [],
            }}
            onSubmit={async (values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
              <Form>
                {console.log(values)}
                <ul className="flex flex-col gap-y-5 mt-10">
                  {extraIngredients.map((extraIngredient) => {
                    return (
                      <ExtraIngredientCard
                        key={extraIngredient.id}
                        id={extraIngredient.id}
                        name={extraIngredient.name}
                        price={extraIngredient.price}
                        currency={extraIngredient.currency}
                      />
                    );
                  })}
                </ul>
                <Footer />
              </Form>
            )}
          </Formik>
        </div>
        <Bill />
      </div>
    </>
  );
};
