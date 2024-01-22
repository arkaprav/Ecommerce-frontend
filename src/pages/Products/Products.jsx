/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./style.css";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import UserStatus from "../../components/User Status/UserStatus";
import { data } from "../../data/Data";
import { filterData } from "../../helpers/datafilter";

function Products() {
  const [pData, setPData] = useState(data);
  const [stock, setStock] = useState(null);
  const [cat, setCat] = useState(null);
  const [brand, setBrand] = useState(null);

  // get unique data function

  const getUniqueData = (objectdata, field) => {
    let uniqueData = objectdata.map((obj) => obj[field]);
    let x = new Set(uniqueData);
    return [...x];
  };

  //  filter function

  useEffect(() => {
    if (brand !== null || cat !== null || stock !== null) {
      let filterList = [];
      if (brand !== null) {
        if (brand === "all") {
          // do nothing
        } else {
          filterList.push({
            field: "brand",
            value: `${brand}`,
            operator: (a, b) => a === b,
          });
        }
      }
      if (cat !== null) {
        if (cat === "all") {
          // do nothing
        } else {
          filterList.push({
            field: "category",
            value: `${cat}`,
            operator: (a, b) => a === b,
          });
        }
      }

      if (stock !== null) {
        if (stock === "all") {
          // do nothing
        } else {
          filterList.push({
            field: "quantity",
            value: `${stock}`,
            operator:
              stock === "in stock"
                ? (a, b) => {
                    return a > 0;
                  }
                : (a, b) => {
                    return a === 0;
                  },
          });
        }
      }

      console.log(filterList);
      let newData = filterData(data, filterList);
      setPData(newData);
    }
  }, [cat, brand, stock]);

  // return statement

  return (
    <div className="Container">
      <Sidebar opt={2} />
      <div className="container-prod">
        <SearchBar />

        {/* --------------------------Filters---------------------------------- */}

        <div className="filter">
          <select
            name="filter-search"
            id="filter"
            value={stock}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          >
            <option value="all">All</option>

            <option value="in stock">In Stock</option>
            <option value="out of stock"> Out of Stock</option>
          </select>

          <select
            name="filter-search"
            id="filter"
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
            }}
          >
            <option value="all">All</option>
            {getUniqueData(data, "category").map((x) => (
              <option key={x.id} value={x}>
                {x}
              </option>
            ))}
          </select>

          <select
            name="filter-search"
            id="filter"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          >
            <option value="all">All</option>
            {getUniqueData(data, "brand").map((x) => (
              <option key={x.id} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        {/* --------------------------Products---------------------------------- */}

        <div className="products">
          <table>
            <tr>
              <th>PRODUCT</th>
              <th>BRAND</th>
              <th>CATEGORY</th>
              <th>STOCK</th>
              <th>PRICE</th>
              <th>QTY</th>
            </tr>
            <>
              {pData?.map((item) => (
                <tr key={item.id}>
                  <td className="prod-name">
                    <div className="image">
                      <img
                        className="prod-img"
                        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1212,c_limit/pjwdnan4wsg27ikvefva/air-force-1.jpg"
                        alt=""
                      />
                    </div>

                    <span className="prod-text">{item.product_name}</span>
                  </td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>
                    <UserStatus
                      status={item.quantity > 0 ? "instock" : "outstock"}
                    />
                  </td>
                  <td>Rs {item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
