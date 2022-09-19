import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Bill from "../../components/Bill/Bill";
import { ExtraIngredientCard } from "../../components/ExtraIngredientCard/ExtraIngredientCard";
import { useNavigate, useLocation } from "react-router-dom";
import { addOrder } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const axios = require("axios");

export const Step6 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [extraIngredients, setExtraIngredients] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const orderState = location.state.values;

  const [billData, setBillData] = useState(location.state.billData);
  const order = {};

  console.log(billData);

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

  const selectIngredient = (extraIngredient) => {
    setSelectedIngredients([...selectedIngredients, extraIngredient]);
    setBillData({
      ...billData,
      extraIngredients: selectedIngredients,
    });
  };

  // const backPageHandler = () => {
  //   navigate(`/step5`);
  // };

  const goToCheckout = (order) => {
    // dispatch(addToCart(order));
    // navigate(`/checkout`);
  };

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
            // validationSchema={validationSchema}
            initialValues={{
              ...orderState,
            }}
            onSubmit={(values) => {
              dispatch(addOrder(values));
              // navigate(`/`);
            }}
          >
            {({ onChange, values }) => (
              <Form>
                <ul className="flex flex-col gap-y-5 mt-10">
                  {extraIngredients.map((extraIngredient) => {
                    return (
                      <Field
                        key={extraIngredient.id}
                        name="extraIngredients"
                        value={extraIngredient.id.toString()}
                        component={ExtraIngredientCard}
                        onChange={onChange}
                        id={extraIngredient.id}
                        title={extraIngredient.name}
                        price={extraIngredient.price}
                        currency={extraIngredient.currency}
                        orderState={orderState}
                        goToCheckout={goToCheckout}
                        setBillData={() => selectIngredient(extraIngredient)}
                      />
                    );
                  })}
                </ul>
                <Bill
                  orderState={values}
                  billData={billData}
                  extraIngredients={selectedIngredients}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
