import { Routes, Route } from "react-router-dom";
import App from "./components/App";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Places from "./pages/places";

const RouteSwitch = () => {
  return (
    <>
      <Header />
      <div className="mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default RouteSwitch;
