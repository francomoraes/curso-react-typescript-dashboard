import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import SignIn from "../Pages/SignIn";

const AuthRoutes: React.FC = () => {
    const { logged } = useAuth();
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            { !logged && <Route path="*" element={<Navigate to="/" replace />} /> }
        </Routes>
    </HashRouter>
  );
};

export default AuthRoutes;

