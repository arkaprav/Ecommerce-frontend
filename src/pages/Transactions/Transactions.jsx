/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./style.css";

function Transactions() {
  return (
    <div className="Container">
      <Sidebar opt={6} />
      <div className="container-prod">
        <SearchBar />
      </div>
    </div>
  );
}

export default Transactions;
