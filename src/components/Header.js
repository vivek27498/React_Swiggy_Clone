import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  //no dependency array then called on every render
  //empty array [] then called on only initial render just once
  //with some variable it is called when value of that variable is changed
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-container">
        <ul>
          <li>
            <Link className="card-styling-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="card-styling-link" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="card-styling-link" to="/contact-us">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
