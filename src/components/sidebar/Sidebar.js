import React from "react";
import "./sidebar.css";
import CrossIcon from "../../assets/cross.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
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
    <div
      className={`sidebar-container  ${
        isOpen ? "activeSidebar" : "inActiveSidebar"
      }`}
    >
      <div className="crossIconWrap">
        <img src={CrossIcon} width={30} onClick={() => setIsOpen(false)} />
      </div>
      <div className="sidebar-list-block">
        {menuList.map((list, i) => {
          return (
            <li className="sidebarListWrap" key={i}>
              <a className="sidebar-list">{list.label}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
