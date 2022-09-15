import { Form, Formik } from "formik";
import React, { useState } from "react";
// import Footer from "../Footer/Footer";
import Button from "../Atoms/Button";

export const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (step === childrenArray.length - 1) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form autoComplete="off">{children}</Form>
      {currentChild}

      {step > 0 ? (
        <Button onClick={() => setStep((s) => s - 1)}>Back</Button>
      ) : null}
      <Button type="submit">{isLastStep() ? "Submit" : "Next"}</Button>
    </Formik>
  );
};
