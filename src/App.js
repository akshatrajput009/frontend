import React from "react";
import { ContextApi } from "./context/contextApi.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import { Policy } from "./components/Policy.js";

const App = () => {
  return (
    <ContextApi>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/policy" element={<Policy />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextApi>
  );
};

export default App;
