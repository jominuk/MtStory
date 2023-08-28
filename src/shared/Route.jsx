import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../ui/Header";
import Portfolio from "../pages/Portfolio";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
