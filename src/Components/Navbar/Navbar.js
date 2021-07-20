import React, { Component, useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import img from "./Icon.png";
import MenuIcon from "@material-ui/icons/Menu";
import HamDropdown from "./HamDropdown";
const Navbar = () => {
  const [drpdwn, setdrpdwn] = useState(false);
  return (
    <div>
      {drpdwn ? <HamDropdown setDrpdwn={setdrpdwn} /> : null}
      <nav className="NavbarItems">
        <a href="/">
          <img
            src="https://i0.wp.com/tilakshah.com/wp-content/uploads/2017/05/jaihind-logo-2.png?fit=396%2C484&ssl=1"
            className="navbar-logo"
          />
        </a>

        {window.innerWidth > 600 ? (
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
        ) : (
          <MenuIcon
            style={{ color: "#ffffff" }}
            fontSize="large"
            className="menu-ham"
            onClick={() => {
              setdrpdwn(true);
            }}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
