/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import UserStatus from "../../components/User Status/UserStatus";

function Products() {
  return (
    <div className="Container">
      <Sidebar opt={2} />
      <div className="container-prod">
        <SearchBar />
        <div className="products">
          <table>
            <tr>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>STOCK</th>
              <th>PRICE</th>
              <th>QTY</th>
            </tr>
            <>
              <tr>
                <td className="prod-name">
                  <div className="image">
                    <img
                      className="prod-img"
                      src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1212,c_limit/pjwdnan4wsg27ikvefva/air-force-1.jpg"
                      alt=""
                    />
                  </div>

                  <span className="prod-text">Nike Air Force One's</span>
                </td>
                <td>Shoes</td>
                <td>
                  <UserStatus status="instock" />
                </td>
                <td>Rs. 4000</td>
                <td>100</td>
              </tr>
              <tr>
                <td className="prod-name">
                  <div className="image">
                    <img
                      className="prod-img"
                      src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1212,c_limit/pjwdnan4wsg27ikvefva/air-force-1.jpg"
                      alt=""
                    />
                  </div>

                  <span className="prod-text">Nike Air Force One's</span>
                </td>
                <td>Shoes</td>
                <td>
                  <UserStatus status="outstock" />
                </td>
                <td>Rs. 4000</td>
                <td>100</td>
              </tr>
            </>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
