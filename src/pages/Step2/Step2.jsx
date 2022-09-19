import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { SizeCard } from "../../components/SizeCard/SizeCard";
import Footer from "../../components/Footer/Footer";
import { Formik, Form, Field } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

const axios = require("axios");

export const Step2 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  let navigate = useNavigate();
  const location = useLocation();

  const [billData, setBillData] = useState(location.state.billData);
  const [sizes, setSizes] = useState([]);
  const getSizes = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/sizes?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setSizes(data.data);
  };
  useEffect(() => {
    getSizes();
  }, []);

  const backPageHandler = () => {
    navigate(`/`);
  };

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Pick a size</h1>

      <Formik
        // validationSchema={validationSchema}
        initialValues={billData}
        onSubmit={(values) => {
          navigate(`/step3`, { state: { billData } });
        }}
      >
        {({ values }) => (
          <Form>
            <ul className="flex flex-row gap-x-6 mt-[100px]">
              {sizes.map((size) => {
                if (size.name === "Small") {
                  return (
                    <Field
                      name="sizeId"
                      type="radio"
                      value={size.id.toString()}
                      component={SizeCard}
                      key={size.id}
                      id={size.id}
                      price={size.price}
                      title={size.name}
                      description={size.description}
                      currency={size.currency}
                      setBillData={setBillData}
                      data={billData}
                      maxIngredients={5}
                    />
                  );
                }
                if (size.name === "Medium") {
                  <Field
                    name="sizeId"
                    type="radio"
                    value={size.id.toString()}
                    component={SizeCard}
                    key={size.id}
                    id={size.id}
                    price={size.price}
                    title={size.name}
                    description={size.description}
                    currency={size.currency}
                    setBillData={setBillData}
                    data={billData}
                    maxIngredients={8}
                  />;
                } else {
                  <Field
                    name="sizeId"
                    type="radio"
                    value={size.id.toString()}
                    component={SizeCard}
                    key={size.id}
                    id={size.id}
                    price={size.price}
                    title={size.name}
                    description={size.description}
                    currency={size.currency}
                    setBillData={setBillData}
                    data={billData}
                    maxIngredients={10}
                  />;
                }
              })}
            </ul>
            <Footer backPageHandler={backPageHandler} />
          </Form>
        )}
      </Formik>
    </>
  );
};
