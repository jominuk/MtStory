import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Ezipdetail from "../pages/Ezipdetail";
import PortfolioPage from "./PortfolioPage";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/ezipdetail" element={<Ezipdetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
