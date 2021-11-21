import React from "react";
import logo from "../images/logo-01.png";
import { FaShoppingCart } from "react-icons/fa";

function Header({ totalItemQty }) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="cartIcon">
        <FaShoppingCart />
        {totalItemQty !== 0 && (
          <div className="iconItemsTotal">{totalItemQty}</div>
        )}
      </div>
    </div>
  );
}

export default Header;
