import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { BaseCard } from "../../components/BaseCard/BaseCard";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const axios = require("axios");

export const Step3 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [bases, setBases] = useState([]);
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

  const getBases = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/bases?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setBases(data.data);
  };

  useEffect(() => {
    getBases();
  }, []);

  const backPageHandler = () => {
    navigate(`/step2`);
  };

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Pick the base</h1>
      <p className="text-[16px] leading-[24px] mt-3">
        Temperature is important – the base of your poke bowl should be warm and
        the other ingredients should be cold.
      </p>

      <Formik
        // validationSchema={validationSchema}
        initialValues={billData}
        onSubmit={(values) => {
          navigate(`/step4`, { state: { billData } });
        }}
      >
        {({ values }) => (
          <Form>
            <ul className="flex flex-row gap-x-6 mt-10" role="group">
              {bases.map((base) => {
                return (
                  <Field
                    name="baseId"
                    type="radio"
                    value={base.id.toString()}
                    component={BaseCard}
                    key={base.id}
                    id={base.id}
                    title={base.name}
                    description={base.description}
                    imagePath={base.imagePath}
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
