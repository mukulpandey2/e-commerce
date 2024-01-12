import React, { useState } from "react";
import "./header.css";
import SearchIcon from "../../assets/Search.svg";
import BasketIcon from "../../assets/Bag.svg";
import AvtarIcon from "../../assets/Account.svg";
import Sidebar from "../sidebar/Sidebar";
import BarIcon from "../../assets/bar.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = [
    { label: "home" },
    { label: "the edit" },
    { label: "new arrivals" },
    { label: "designers" },
    { label: "clothing" },
    { label: "shoes" },
    { label: "bags" },
    { label: "accessories" },
    { label: "jewelry" },
    { label: "beauty" },
  ];
  return (
    <div className="header-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="header-logo">my company.com</h1>
      <div className="header-menuList-wrap">
        {menuList.map((list, index) => {
          return (
            <li key={index} className="header-menuList">
              {list.label}
            </li>
          );
        })}
      </div>
      <div className="header-profile-wrap">
        <img src={SearchIcon} />
        <img src={BasketIcon} />
        <img src={AvtarIcon} className="avtarIcon" />
        <img
          src={BarIcon}
          className="barIcon"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default Header;
