import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Checkbox } from "../../components/Atoms/Checkbox";
import Footer from "../../components/Footer/Footer";
import { Warning } from "../../components/Warning/Warning";

const axios = require("axios");

export const Step5 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const [ingredients, setIngredients] = useState([]);
  const maxIngredients = 8;
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showMaxWarning, setShowMaxWarning] = useState(false);

  // console.log(selectedIngredients);
  // console.log(selectedIngredients.length);
  // console.log(showMaxWarning);

  const selectIngredient = (ingredient) => {
    if (selectedIngredients.lenght >= maxIngredients) {
      setShowMaxWarning(true);
    }
  };

  const unselectIngredient = (ingredient) => {
    // ovo je objekat koji predstavlja ingredient {id: 1, name: 'pasulj'}
    if (selectedIngredients.lenght < maxIngredients) {
      setShowMaxWarning(false);
    }
  };

  const getIngredients = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/ingredients?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setIngredients(
      data.data.map((ingredient) => ({
        ...ingredient,
        selected: false,
      }))
    );
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <>
      <h1 className="text-[32px] leading-[42px] font-bold">
        Pick other ingredients
      </h1>

      <p className="text-[16px] leading-[24px] mt-3">
        This is what its all about. Pick up to 8 added ingredients to make your
        <br />
        poke bowl perfectly to your taste.
      </p>

      <Formik
        initialValues={{
          ingredientId: [],
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form onChange={() => console.log(values)}>
            {console.log("pera", values)}
            <ul className="grid grid-cols-4 gap-x-6 gap-y-5 mt-10">
              {ingredients.map((ingredient) => {
                return (
                  <Checkbox
                    key={ingredient.id}
                    id={ingredient.id}
                    name={ingredient.name}
                    selectIngredient={selectIngredient}
                  />
                );
              })}
            </ul>
            {showMaxWarning && <Warning sizeName="medium" />}
            <Footer />
          </Form>
        )}
      </Formik>
    </>
  );
};
