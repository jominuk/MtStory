import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../ui/Layout";
import Header from "../ui/Header";

import ScrollToTop from "./ScrollToTop";
import Portfolio from "../pages/Portfolio";

import Ezipdetail from "../pages/Ezipdetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ezipdetail" element={<Ezipdetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
