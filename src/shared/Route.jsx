import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import PortfolioPage from "./PortfolioPage";
import Ezipdetail from "../pages/Ezipdetail";
import Ueatdetail from "../pages/Ueatdetail";
import Aidetail from "../pages/Aidetail";
import Slackdetail from "../pages/Slackdetail";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/ezipdetail" element={<Ezipdetail />} />
        <Route path="/ueatdetail" element={<Ueatdetail />} />
        <Route path="/aidetail" element={<Aidetail />} />
        <Route path="/slackdetail" element={<Slackdetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
