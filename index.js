import React from "react";
import { render } from "react-dom";
import ReactDom from "react-dom/client";
import "./index.css";
// import logo from ""

const Title = () => {
  return (
    <div className="logo">
      <h1>EatsNow</h1>
    </div>
  );
};
const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Foods</a>
        </li>
        <li>
          <a href="#">Available</a>
        </li>
        <li>
          <a href="#" className="active">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="flex">
      <div className="container flex">
        <Title />
        <NavBar />
      </div>
    </header>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/a159b2e6d74ebf56a457b1d86e508f3d"
        alt="card"
      />
      <h4>Burger King</h4>
      <h5>Indian, Punjabi, South</h5>
      <h5>4.5 star</h5>
    </div>
  );
};

const Body = () => {
  return (
    <section className="restaurant-list flex container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </section>
  );
};
const Footer = () => {
  return <h3 className="footer">Footer</h3>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
