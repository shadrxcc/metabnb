import { Routes, Route } from "react-router-dom";
import App from "./components/App";
import Header from "./components/header";
import Home from "./pages/home";

const RouteSwitch = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
