import { HashRouter, Routes, Route } from "react-router-dom";
// import { useRoutes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";

import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";


// const Routes = () => useRoutes([
//     {
//         path: "/",
//         element: (<Dashboard />)
//     },
//     {
//         path: "list/:movementType",
//         element: (<List />)
//     },
//     { path: '*', element: <Navigate to="/dashboard" replace /> },
// ])

// export default Routes;

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

