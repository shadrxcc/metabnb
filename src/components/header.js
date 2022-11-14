import React, { Component } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import navLinks from "./navlinks";
//import MenuIcon from "@mui/icons-material/Menu";
//import CloseIcon from "@mui/icons-material/Close";
//import { Icon } from '@iconify/react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <header>
        <div>
          <Link id="navlink" className="sublink" to="/">
            <img src={logo} id="metabnb_logo" alt="metamask logo"></img>
          </Link>
          </div>

            <div className="sub">
              {navLinks.map((link, index) => {
                return (
                  <Link
                    key={index}
                    id={link.id}
                    className={link.class}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div>
              <button>Connect wallet</button>
            </div>

      </header>
    );
  }
}

export default Header;
