/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function Products() {
  return (
    <div className="Container">
      <SearchBar />
      <Sidebar opt={2} />
      <div className="products">
        <div className="product">
          <div className="p-img"></div>
          <div className="p-text">
            <p>Title hai bhai </p>
            <p>20rs</p>
          </div>
          <div className="p-btn">
            <button className="p-btn1">
              <CreateIcon />
            </button>
            <button className="p-btn2">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
