import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        background: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <div className="title">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default MenuItem;
