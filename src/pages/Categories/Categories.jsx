/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Categories() {
  return (
    <div className="Container">
      <Sidebar opt={4} />

      <div className="container-prod">
        <SearchBar />
      </div>
    </div>
  );
}

export default Categories;
