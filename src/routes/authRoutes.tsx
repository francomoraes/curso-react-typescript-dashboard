import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import SignIn from "../Pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;

