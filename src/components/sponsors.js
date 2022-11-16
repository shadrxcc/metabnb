import React from "react";
import mbtoken from "../assets/MBTOKEN.svg";
import metamask from "../assets/METAMASK.svg";
import opensea from "../assets/OPENSEA.svg";

const Sponsors = () => {
  return (
    <div className="text-center" id="sponsors">
      <div className="row">
        <div className="col-md">
          <img
            src={mbtoken}
            alt="mbtoken logo"
            className="img-fluid py-2 mw-100"
          ></img>
        </div>
        <div className="col-md">
          <img
            src={metamask}
            alt="metamask logo"
            className="img-fluid py-2 mw-100"
          ></img>
        </div>
        <div className="col-md">
          <img
            src={opensea}
            alt="opensea logo"
            className="img-fluid py-2 mw-100"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
