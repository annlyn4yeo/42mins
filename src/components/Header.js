import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo__container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLogin}>
            {isLoggedIn ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
