import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { SizeCard } from "../../components/SizeCard/SizeCard";
import Footer from "../../components/Footer/Footer";
import { Formik, Form } from "formik";

const axios = require("axios");

export const Step2 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [sizes, setSizes] = useState([]);

  const validationSchema = yup.object().shape({
    size: yup.string().required("Required"),
  });

  const getSizes = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/sizes?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setSizes(
      data.data.map((size) => ({
        ...size,
        selected: false,
      }))
    );
  };

  useEffect(() => {
    getSizes();
  }, []);

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Pick a size</h1>

      <Formik
        initialValues={{
          sizeId: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            {console.log(values)}
            <ul className="flex flex-row gap-x-6 mt-[100px]">
              {sizes.map((size) => {
                return (
                  <SizeCard
                    key={size.id}
                    id={size.id}
                    price={size.price}
                    name={size.name}
                    description={size.description}
                    currency={size.currency}
                    selected={size.selected}
                  />
                );
              })}
            </ul>
            <Footer />
          </Form>
        )}
      </Formik>
    </>
  );
};
