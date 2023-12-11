import React, { useContext } from "react";
import { ReactDOM } from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../utlis/logo.jpg";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // consume the context
  const { loggedInInfo } = useContext(UserContext);

  const [btnLogin, setBtnLogin] = useState("Logout");

  const onlineStatus = useOnlineStatus();

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex m-1 justify-between border-2 rounded-md border-amber-900">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 m-8" src={logo}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="p-4">Internet Status: {onlineStatus ? "✅" : "🛑"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="p-4 font-bold text-lg italic">{loggedInInfo}</li>
          <button
            className="p-2 m-2 border border-black border-solid bg-black text-sky-100 rounded-xl w-20 h-10"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
