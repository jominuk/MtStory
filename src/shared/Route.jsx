import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../ui/Header";
import Portfolio from "../pages/Portfolio";
import ScrollToTop from "./ScrollToTop";
import Layout from "../ui/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
