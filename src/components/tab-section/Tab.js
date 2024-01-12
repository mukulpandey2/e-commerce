import React, { useState } from "react";
import "./tab.css";

const Tab = () => {
  const [ToggleState, setToggleState] = useState(0);
  const tabList = [
    { label: "details" },
    { label: "delivery" },
    { label: "fit" },
    { label: "share" },
  ];
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="tab-container">
      <div className="tabList-wrap">
        {tabList.map((tabList, index) => {
          return (
            <li
              key={index}
              className={`tabList ${
                ToggleState === index ? "activeTabList" : ""
              }`}
              onClick={() => toggleTab(index)}
            >
              {tabList.label}
            </li>
          );
        })}
      </div>
      <div className="tab-container-para-wrapper">
        <p className="tab-container-para">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. it
          has a straight fit with well defined shoulders and a shawl collar
          culminating in a button and has been flawlessly finished with three
          jet pockets with a sartorial feel.
        </p>
        <p className="tab-container-span">
          See the <span className="tab-editor">EDITOR’S NOTE</span>
        </p>
        <p className="tab-container-span">
          Learn about the <span className="tab-designer">DESIGNER</span>
        </p>
      </div>
    </div>
  );
};

export default Tab;
