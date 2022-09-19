import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { SauceCard } from "../../components/SauceCard/SauceCard";
import { Field, Form, Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

const axios = require("axios");

export const Step4 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [sauces, setSauces] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [billData, setBillData] = useState(location.state.billData);

  // const validationSchema = yup.object({
  //   bowlId: yup.string().required("Required"),
  //   sizeId: "",
  //   baseId: "",
  //   sauceId: "",
  //   ingredients: [],
  //   extraIngredients: [],
  // });

  const getSauces = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/sauces?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setSauces(data.data);
  };

  useEffect(() => {
    getSauces();
  }, []);

  const backPageHandler = () => {
    navigate(`/step3`);
  };

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Pick a sauce</h1>

      <p className="text-[16px] leading-[24px] mt-3">
        Most sauces mix well with the base of the poke bowl. Make sure to read
        the their ingredients and pick one thats right for you.
      </p>

      <Formik
        // validationSchema={validationSchema}
        initialValues={billData}
        onSubmit={(values) => {
          navigate(`/step5`, { state: { billData } });
        }}
      >
        {() => (
          <Form>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-5 mt-10">
              {sauces.map((sauce) => {
                return (
                  <Field
                    name="sauceId"
                    type="radio"
                    value={sauce.id.toString()}
                    component={SauceCard}
                    key={sauce.id}
                    id={sauce.id}
                    title={sauce.name}
                    description={sauce.description}
                    selected={sauce.selected}
                    setBillData={setBillData}
                    data={billData}
                  />
                );
              })}
            </ul>
            <Footer backPageHandler={backPageHandler} />
          </Form>
        )}
      </Formik>
    </>
  );
};
