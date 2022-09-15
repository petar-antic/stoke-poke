import "./App.css";
import { Layout } from "./layout/layout";
import { Routes, Route } from "react-router-dom";
import { Step1 } from "./pages/Step1/Step1";
import { Step2 } from "./pages/Step2/Step2";
import { Step3 } from "./pages/Step3/Step3";
import { Step4 } from "./pages/Step4/Step4";
import { Step5 } from "./pages/Step5/Step5";
import { Step6 } from "./pages/Step6/Step6";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/step6" element={<Step6 />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
