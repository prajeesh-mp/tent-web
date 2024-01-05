import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FreeBSTemplates from "../pages/FreeBSTemplates";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/blog/free-bootstrap-admin-templates"
        element={<FreeBSTemplates />}
      />
    </Routes>
  );
};

export default AppRoutes;
