import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/shop">Orders</a>
        <a href="/shop">Inventory</a>
        <a href="/shop">About</a>
      </div>
    </nav>
  );
};

export default Header;
