import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span
        className="navbar-brand"
        style={{ display: "flex", gap: "1rem", alignItems: "center" }}
      >
        <i className="fas fa-calendar-alt"></i>
        Calendar app
      </span>
    </div>
  );
};
