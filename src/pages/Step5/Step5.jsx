import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Checkbox } from "../../components/Atoms/Checkbox";
import Footer from "../../components/Footer/Footer";
import { Warning } from "../../components/Warning/Warning";
import { useNavigate, useLocation } from "react-router-dom";

const axios = require("axios");

export const Step5 = () => {
  let token = process.env.REACT_APP_API_TOKEN;
  const navigate = useNavigate();
  const location = useLocation();
  const [ingredients, setIngredients] = useState([]);
  const [showMaxWarning, setShowMaxWarning] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [active, setActive] = useState(false);
  const [billData, setBillData] = useState(location.state.billData);
  const maxIngredients = billData.maxIngredients;

  const getIngredients = async () => {
    const { data } = await axios.get(
      "https://fet.app.fsd.rs/api/ingredients?currentPage=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setIngredients(data.data);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const backPageHandler = () => {
    navigate(`/step4`);
  };

  const selectIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
    setBillData({
      ...billData,
      ingredients: selectedIngredients,
    });
    if (selectedIngredients.length >= maxIngredients) {
      setShowMaxWarning(true);
      setActive(true);
    }
  };

  console.log(selectedIngredients);

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
        // validationSchema={validationSchema}
        initialValues={billData}
        onSubmit={(values) => {
          navigate(`/step6`, { state: { billData } });
        }}
      >
        {({ values }) => (
          <Form>
            <ul className="grid grid-cols-4 gap-x-6 gap-y-5 mt-10">
              {ingredients.map((ingredient) => {
                return (
                  <Field
                    key={ingredient.id}
                    name="ingredients"
                    value={ingredient.id}
                    component={Checkbox}
                    id={ingredient.id}
                    title={ingredient.name}
                    setBillData={() => selectIngredient(ingredient)}
                    disabled={active}
                  />
                );
              })}
            </ul>
            {showMaxWarning && (
              <Warning sizeName={maxIngredients} className="mt-[32px]" />
            )}
            <Footer backPageHandler={backPageHandler} />
          </Form>
        )}
      </Formik>
    </>
  );
};
