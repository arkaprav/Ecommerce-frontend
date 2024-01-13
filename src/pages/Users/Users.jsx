/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Search Bar/SearchBar";
import "./style.css";

function Users() {
  return (
    <div className="Container">
      <SearchBar />
      <Sidebar opt={5} />
    </div>
  );
}

export default Users;
