/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="container">
        <SearchBar />
        <Sidebar opt={1} />
      </div>
    </>
  );
}

export default Dashboard;
