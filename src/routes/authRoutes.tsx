import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import { useAuth } from "../hooks/auth";

import SignIn from "../Pages/SignIn";

const AuthRoutes: React.FC = () => {
    const { logged } = useAuth();
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            { !logged && <Route path="*" element={<Navigate to="/" replace />} /> }
        </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;

