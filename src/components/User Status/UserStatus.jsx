/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./style.css";
import { yellow } from "@mui/material/colors";

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
      {status === "pend" && (
        <span className="stat-btn4">
          <FiberManualRecordIcon
            fontSize="small"
            sx={{ color: " rgb(255, 171, 0)" }}
          />{" "}
          Pending
        </span>
      )}
      {status === "paid" && (
        <span className="stat-btn5">
          <FiberManualRecordIcon fontSize="small" sx={{ color: "#71dd37" }} />{" "}
          Paid
        </span>
      )}
      {status === "cancelled" && (
        <span className="stat-btn6">
          <FiberManualRecordIcon fontSize="small" sx={{ color: "#8592a3" }} />{" "}
          Cancelled
        </span>
      )}
      {status === "failed" && (
        <span className="stat-btn7">
          <FiberManualRecordIcon fontSize="small" sx={{ color: "#ff3e1d" }} />{" "}
          Failed
        </span>
      )}
      {status === "delivered" && <span className="stat-btn8">DELIVERED</span>}
      {status === "dispatched" && <span className="stat-btn9">DISPATCHED</span>}
      {status === "out" && <span className="stat-btn10">OUT FOR DELIVERY</span>}
      {status === "ready" && (
        <span className="stat-btn11">READY TO PICKUP</span>
      )}
      {status === "instock" && <span className="stat-btn12">IN STOCK</span>}
      {status === "outstock" && (
        <span className="stat-btn13">OUT OF STOCK</span>
      )}
    </div>
  );
};

export default UserStatus;
