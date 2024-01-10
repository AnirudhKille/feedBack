import React from "react";
import { Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Welcome from "./components/Welcome";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;
