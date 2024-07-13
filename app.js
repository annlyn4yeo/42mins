import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__container">
        <img src="https://e7.pngegg.com/pngimages/315/870/png-clipart-swiggy-office-swiggy-corporate-online-food-ordering-discounts-and-allowances-coupon-others-company-text.png" />
      </div>
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const RestCard = () => {
  return (
    <div className="order-card">
      <h3>KFC</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="cards__container">
        <RestCard />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
