import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FreeBSTemplates from "../pages/FreeBSTemplates";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Support from "../pages/Support";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/free-bootstrap-admin-templates" element={<FreeBSTemplates />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
        </Routes>
    );
};

export default AppRoutes;
