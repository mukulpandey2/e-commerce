import React from "react";
import Header from "../components/header/Header";
import Tab from "../components/tab-section/Tab";
import Image1 from "../assets/1-(5).png";
import Image2 from "../assets/1 (1).png";
import Image3 from "../assets/1 (3).png";
import Image4 from "../assets/1 (4).png";
import Image5 from "../assets/1 (2).png";
import HeartIcon from "../assets/heart.png";

import "./home.css";
import ShoppingDetails from "../components/shopping-details/ShoppingDetails";
import Carousel from "../components/carousel/Carousel";
const imageList = [Image1, Image3, Image2, Image4, Image5];

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <Tab />
        <div className="home-image-wrapper">
          <div className="home-img-block">
            <img src={Image1} className="home-image" />

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={Image3} className="home-image1" />
              <img src={Image2} className="home-image1" />
            </div>
            <img src={Image4} className="home-image" />
            <img src={Image5} className="home-image" />
          </div>
          <img src={HeartIcon} className="home-heart" />
        </div>
        <ShoppingDetails />
        <Carousel images={imageList} />
      </div>
      <div className="footer-container">
        <div className="footer-name-wrap">
          <li className="footer-name">jonathan simkhai</li>
          <li className="footer-name">blazers</li>
          <li className="footer-name">viscose</li>
        </div>
        <div className="footer-about-wrap">
          <h3 className="footer-about-heading">a note from the editor</h3>
          <p className="footer-about-para">
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
            lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the
            sky.
          </p>
          <h3 className="footer-author">
            ---By <span>MINNA SHIM</span>, Fashion Editor
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
