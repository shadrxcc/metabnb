import React from "react";
import heroimg from "../assets/clusteredimg.png";
//import Box from "@mui/material/Box";
//import Paper from "@mui/material/Paper";
//import Grid from "@mui/material/Grid";
//import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
//import Button from "@mui/material/Button";

const Herosection = () => {
  return (
    <div className="container mt-2 pt-3 text-center">
      <div className="row d-flex dflex align-items-center">
        <div className="col-lg py-4">
          <h1 id="heading" className="text-lg-start text-md-start">
            Rent a <span className="purple">Place</span> away from{" "}
            <span className="purple">Home</span> in the{" "}
            <span className="purple">Metaverse</span>
          </h1>
          <p id="description" className="text-lg-start text-md-start">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </p>
          <div className="text-start px-3 px-md-2 row">
            <input
              type="text"
              placeholder="Search for location"
              className="search my-1"
            />
            <button className="searchbtn my-1">Search</button>
          </div>
        </div>
        <div className="col-lg py-4">
          <img src={heroimg} className="img-fluid mw-100"></img>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
