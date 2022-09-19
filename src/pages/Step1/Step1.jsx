import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { BowlCard } from "../../components/BowlCard/BowlCard";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const axios = require("axios");

export const Step1 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const initialValues = {
    ingredients: [],
    extraIngredients: [],
  };
  const [bowls, setBowls] = useState([]);
  const [billData, setBillData] = useState(initialValues);
  let navigate = useNavigate();

  // const validationSchema = yup.object({
  //   bowlId: yup.string().required("Required"),
  //   sizeId: "",
  //   baseId: "",
  //   sauceId: "",
  //   ingredients: [],
  //   extraIngredients: [],
  // });

  const getBowls = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/bowls?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setBowls(data.data);
  };

  useEffect(() => {
    getBowls();
  }, []);

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Make your own poke bowl</h1>

      <p className="text-[16px] leading-[24px] mt-3">
        Select the type of bowl your’d like, the size, add the base, sauce and
        all the added ingredients. We’ll take care of the rest!
      </p>

      <Formik
        // validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          navigate(`/step2`, { state: { billData } });
        }}
      >
        {({ values }) => (
          <Form>
            <ul className="flex flex-row gap-x-6 mt-10 " role="group">
              {bowls.map((bowl) => {
                return (
                  <Field
                    name="bowlId"
                    type="radio"
                    value={bowl.id.toString()}
                    component={BowlCard}
                    key={bowl.id}
                    id={bowl.id}
                    title={bowl.name}
                    description={bowl.description}
                    imagePath={bowl.imagePath}
                    setBillData={setBillData}
                    data={billData}
                  />
                );
              })}
            </ul>
            {/* {errors.bowl && touched.bowl ? <div>{errors.bowl}</div> : null} */}
            <Footer noBack />
          </Form>
        )}
      </Formik>
    </>
  );
};
