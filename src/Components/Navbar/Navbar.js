import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import img from "./Icon.png";
class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <img
          src="https://i0.wp.com/tilakshah.com/wp-content/uploads/2017/05/jaihind-logo-2.png?fit=396%2C484&ssl=1"
          className="navbar-logo"
        />
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
