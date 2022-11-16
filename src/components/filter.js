import React from "react";
import locationName from "./filtermap";
import { Link } from "react-router-dom";
import settings from "../assets/settings.svg";

const Filter = () => {
  return (
    <div>
      <div id="filter" className="d-flex m-auto justify-content-between">
        <Link className="locations" to="/" id="">
          Restaurant
        </Link>
        <Link className="locations" to="/" id="">
          Cottage
        </Link>
        <Link className="locations" to="/" id="">
          Castle
        </Link>
        <Link className="locations" to="/" id="">
          fantastic city
        </Link>
        <Link className="locations" to="/" id="">
          Beach
        </Link>
        <Link className="locations" to="/" id="">
          Cabins
        </Link>
        <Link className="locations" to="/" id="">
          Carbins
        </Link>
        <Link className="locations" to="/" id="">
          Off-grid
        </Link>
        <Link className="locations" to="/" id="">
          Farm
        </Link>
        <button className="settingsbtn">
          Location
          <img src={settings} className="img-fluid float-end" alt="settings icon"></img>
        </button>
      </div>
    </div>
  );
};

export default Filter;
