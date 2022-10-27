import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/list/:type" element={<List/>} />
            </Routes>
        </BrowserRouter>
    </Layout>
  );
};

export default AppRoutes;

