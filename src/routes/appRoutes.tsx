import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/list/:movementType" element={<List/>} />
            </Routes>
        </HashRouter>
    </Layout>
  );
};

export default AppRoutes;

