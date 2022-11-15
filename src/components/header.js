import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import navLinks from "./navlinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <header>
      <Link id="navlink" className="sublink" to="/">
        <img src={logo} id="metabnb_logo" alt="metamask logo"></img>
      </Link>

      <ul
        className={Mobile ? "nav-menu active" : "nav-menu"}
        onClick={() => setMobile(false)}
      >
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                key={index}
                id={link.id}
                className={link.class}
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
};

export default Header;
