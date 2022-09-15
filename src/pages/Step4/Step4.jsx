import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { SaouceCard } from "../../components/SauceCard/SauceCard";
import { Form, Formik } from "formik";

const axios = require("axios");

export const Step4 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [sauces, setSauces] = useState([]);

  const getSauces = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/sauces?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setSauces(
      data.data.map((sauce) => ({
        ...sauce,
        selected: false,
      }))
    );
  };

  useEffect(() => {
    getSauces();
  }, []);

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Pick a sauce</h1>

      <p className="text-[16px] leading-[24px] mt-3">
        Most sauces mix well with the base of the poke bowl. Make sure to read
        the their ingredients and pick one thats right for you.
      </p>

      <Formik
        initialValues={{
          sauceId: "",
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            {console.log(values)}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-5 mt-10">
              {sauces.map((sauce) => {
                return (
                  <SaouceCard
                    key={sauce.id}
                    id={sauce.id}
                    name={sauce.name}
                    description={sauce.description}
                    selected={sauce.selected}
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
