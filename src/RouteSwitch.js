import { Routes, Route } from "react-router-dom";
import App from "./components/App";
//import Header from "./components/header";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
