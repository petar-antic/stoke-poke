import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { BowlCard } from "../../components/BowlCard/BowlCard";
import Footer from "../../components/Footer/Footer";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const axios = require("axios");

export const Step1 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [bowls, setBowls] = useState([]);
  let navigate = useNavigate();

  const validationSchema = yup.object({
    bowl: yup.string().required("Required"),
  });

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

  const nextPageHandler = () => {
    navigate(`/pick-size`);
  };

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Make your own poke bowl</h1>

      <p className="text-[16px] leading-[24px] mt-3">
        Select the type of bowl your’d like, the size, add the base, sauce and
        all the added ingredients. We’ll take care of the rest!
      </p>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          bowlId: "",
          sizeId: "",
          baseId: "",
          sauceId: "",
          ingredients: [],
          extraIngredients: [],
        }}
        onSubmit={() => {}}
      >
        {({ values, errors, touched }) => (
          <Form>
            {console.log(values)}
            <ul className="flex flex-row gap-x-6 mt-10 " role="group">
              {bowls.map((bowl) => {
                return (
                  <Field
                    name="bowlId"
                    type="radio"
                    value={bowl.id.toString()}
                    component={BowlCard}
                    id={bowl.id}
                    title={bowl.name}
                    description={bowl.description}
                    imagePath={bowl.imagePath}
                  />
                );
              })}
            </ul>
            {/* {errors.bowl && touched.bowl ? <div>{errors.bowl}</div> : null} */}
            <Footer />
          </Form>
        )}
      </Formik>
    </>
  );
};
