import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { BaseCard } from "../../components/BaseCard/BaseCard";
import Footer from "../../components/Footer/Footer";

const axios = require("axios");

export const Step3 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [bases, setBases] = useState([]);

  const getBases = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/bases?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setBases(
      data.data.map((base) => ({
        ...base,
        selected: false,
      }))
    );
  };

  useEffect(() => {
    getBases();
  }, []);

  return (
    <>
      <h1 className="text-[32px] leading-[42px]">Pick the base</h1>
      <p className="text-[16px] leading-[24px] mt-3">
        Temperature is important – the base of your poke bowl should be warm and
        the other ingredients should be cold.
      </p>

      <Formik
        initialValues={{
          baseId: "",
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            {console.log(values)}
            <ul className="flex flex-row gap-x-6 mt-10">
              {bases.map((base) => {
                return (
                  <BaseCard
                    key={base.id}
                    id={base.id}
                    imagePath={base.imagePath}
                    name={base.name}
                    description={base.description}
                    selected={base.selected}
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
