/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Categories() {
  return (
    <div className="Container">
      <SearchBar />
      <Sidebar opt={4} />
    </div>
  );
}

export default Categories;
