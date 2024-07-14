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

const RestCard = ({ resName, cuisineName }) => {
  return (
    <div className="order-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG" />
      <h3>{resName}</h3>
      <h5>{cuisineName}</h5>
      <h6>4.4 Stars</h6>
      <h6>32 mins</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body">
      <div className="search">Search</div>
      <div className="cards__container">
        <RestCard resName="Leon's" cuisineName="Grills, Wings, Chicken" />
        <RestCard resName="KFC" cuisineName="Burgers, Fried Chicken, Shakes" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
