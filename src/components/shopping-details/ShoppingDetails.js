import React, { useState } from "react";
import "./shopping-details.css";
import Image1 from "../../assets/img2.svg";
import Image2 from "../../assets/img.svg";
import ArrowIcon from "../../assets/Right.svg";

const ShoppingDetails = () => {
  const [ToggleSize, setToggleSize] = useState(0);
  const toggleTab = (index) => {
    setToggleSize(index);
  };
  const sizeTab = ["xs", "s", "m", "l", "xxl"];
  return (
    <div className="shopping-details-container">
      <div className="shopping-details-heading-wrap">
        <h1 className="shopping-details-heading1">jonathan simkhai</h1>
        <h4 className="shopping-details-heading2">
          lurex linen viscose jacket in conchiglia
        </h4>
        <h4 className="shopping-details-price">$225</h4>
      </div>
      <div className="shopping-details-color">
        <h3 className="shopping-details-color-name">
          color <span className="shopping-details-color-span">conchiglia</span>
        </h3>
        <div className="shopping-details-cloth-wrap">
          <div className="shopping-details-cloth">
            <img src={Image1} />
          </div>
          <div className="shopping-details-cloth2">
            <img src={Image2} />
          </div>
        </div>
      </div>
      <div className="shopping-details-size-wrap">
        <div className="shopping-details-size-guide-wrap">
          <h3 className="shopping-details-size">size l</h3>
          <h3 className="shopping-details-size-guide">size guide</h3>
        </div>
        <div className="shopping-details-size-list-wrap">
          {sizeTab.map((s, ind) => {
            return (
              <li
                className={`shopping-details-size-list ${
                  ToggleSize === ind ? "activeSize" : ""
                }`}
                key={ind}
                onClick={() => toggleTab(ind)}
              >
                {s}
              </li>
            );
          })}
        </div>
      </div>
      <div className="shopping-details-addBtn">
        <button className="addBtn">
          add to bag <img src={ArrowIcon} style={{ paddingLeft: "8px" }} />
        </button>
        <p style={{ fontSize: "14px" }}>
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </p>
        <p style={{ fontSize: "14px" }}>Speak to a Personal Stylist CHAT NOW</p>
      </div>
    </div>
  );
};

export default ShoppingDetails;
