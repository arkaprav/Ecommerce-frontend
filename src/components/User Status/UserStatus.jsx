/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

const UserStatus = ({ status }) => {
  return (
    <div>
      {status === "active" && (
        <span className="stat-btn1" style={{ color: "green" }}>
          ACTIVE
        </span>
      )}
      {status === "inactive" && (
        <span className="stat-btn2" style={{ color: "grey" }}>
          INACTIVE
        </span>
      )}
      {status === "pending" && (
        <span className="stat-btn3" style={{ color: "yellow" }}>
          PENDING
        </span>
      )}
    </div>
  );
};

export default UserStatus;
