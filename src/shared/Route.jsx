import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../ui/Header";
import Portfolio from "../pages/Portfolio";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
