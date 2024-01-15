/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ListIcon from "@mui/icons-material/List";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ opt }) {
  // const [clicked, setClicked] = useState(1);
  const [option, setOption] = useState(opt);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!display ? (
        <div className="sidebar">
          <div className="sidebarItems">
            <div
              onClick={() => {
                setDisplay(!display);
              }}
              className="slide"
            >
              {" "}
              <ReorderIcon />
            </div>

            <div className="sidebarItem">
              <button
                className={option == 1 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(1);
                  // setClicked(1);
                  navigate("/");
                }}
              >
                <div className="icons">
                  <HomeIcon />
                </div>
                Dashboard
              </button>
            </div>
            <div className="sidebarItem">
              <button
                className={option == 2 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(2);
                  navigate("/products");
                }}
              >
                <div className="icons">
                  <ShoppingBagIcon />
                </div>
                Products
              </button>
            </div>
            <div className="sidebarItem">
              <button
                className={option == 3 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(3);
                  navigate("/addproduct");
                }}
              >
                <div className="icons">
                  <ShoppingCartIcon />
                </div>
                Add Product
              </button>
            </div>
            <div className="sidebarItem">
              <button
                className={option == 4 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(4);
                  navigate("/categories");
                }}
              >
                <div className="icons">
                  <ListIcon className=" icons" />
                </div>
                Categories
              </button>
            </div>
            <div className="sidebarItem">
              <button
                className={option == 5 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(5);
                  navigate("/users");
                }}
              >
                <div className="icons">
                  <GroupIcon className=" icons" />
                </div>
                Users
              </button>
            </div>
            <div className="sidebarItem">
              <button
                className={option == 6 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(6);
                  navigate("/transactions");
                }}
              >
                {" "}
                <div className="icons">
                  <PaidIcon className=" icons" />
                </div>
                Transactions
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar" style={{ width: "90px" }}>
          <div className="sidebarItems">
            <div
              onClick={(e) => {
                e.preventDefault();
                setDisplay(!display);
              }}
              className="slide"
              style={{ marginLeft: "8px" }}
            >
              {" "}
              <ReorderIcon />
            </div>

            <div className="sidebarItem">
              <button
                className={option == 1 ? "clicked" : "normal"}
                style={{ width: "40px" }}
                onClick={() => {
                  setOption(1);
                  navigate("/");
                  // setClicked(1);
                }}
              >
                <div className="icons">
                  <HomeIcon />
                </div>
              </button>
            </div>
            <div className="sidebarItem">
              <button
                style={{ width: "40px" }}
                className={option == 2 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(2);
                  navigate("/products");
                }}
              >
                <div className="icons">
                  <ShoppingBagIcon />
                </div>
              </button>
            </div>
            <div className="sidebarItem">
              <button
                style={{ width: "40px" }}
                className={option == 3 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(3);
                  navigate("/addproduct");
                }}
              >
                <div className="icons">
                  <ShoppingCartIcon />
                </div>
              </button>
            </div>
            <div className="sidebarItem">
              <button
                style={{ width: "40px" }}
                className={option == 4 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(4);
                  navigate("/categories");
                }}
              >
                <div className="icons">
                  <ListIcon className=" icons" />
                </div>
              </button>
            </div>
            <div className="sidebarItem">
              <button
                style={{ width: "40px" }}
                className={option == 5 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(5);
                  navigate("/users");
                }}
              >
                <div className="icons">
                  <GroupIcon className=" icons" />
                </div>
              </button>
            </div>
            <div className="sidebarItem">
              <button
                style={{ width: "40px" }}
                className={option == 6 ? "clicked" : "normal"}
                onClick={() => {
                  setOption(6);
                  navigate("/transactions");
                }}
              >
                {" "}
                <div className="icons">
                  <PaidIcon className=" icons" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
