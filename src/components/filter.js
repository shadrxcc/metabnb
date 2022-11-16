import React from "react";
import locationName from "./filtermap";
import { Link } from "react-router-dom";
import settings from '../assets/settings.svg'

const Filter = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-evenly">
        {locationName.map((location, index) => {
          return (
            <Link
              key={index}
              id={location.id}
              className={location.class}
              to={location.path}
            >
              {location.name}
            </Link>
          );
          })}
          <div className="d-flex justify-content-between">
          <div>
            <h5 className="">Location</h5>
          </div>
          <div>
            <img src={settings} className="w-75" alt="settings icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
