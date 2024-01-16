/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./style.css";
import UserStatus from "../../components/User Status/UserStatus";

function Transactions() {
  return (
    <div className="Container">
      <Sidebar opt={6} />
      <div className="container-prod">
        <SearchBar />
        <div className="transactions">
          <table>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>PAYMENT</th>
              {/* <th>STATUS</th> */}
              <th>MODE OF PAYMENT</th>
            </tr>
            <>
              <tr>
                <td>1</td>
                <td>Arnab Chakraborty</td>
                <td>2 Jun 2021</td>

                <td>
                  <UserStatus status="pend" />
                </td>
                {/* <td>
                  <UserStatus status="delivered" />
                </td> */}
                <td>CREDIT CARD</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Arnab Chakraborty</td>
                <td>2 Jun 2021</td>

                <td>
                  <UserStatus status="paid" />
                </td>
                {/* <td>
                  <UserStatus status="out" />
                </td> */}
                <td>CREDIT CARD</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Arnab Chakraborty</td>
                <td>2 Jun 2021</td>

                <td>
                  <UserStatus status="cancelled" />
                </td>
                {/* <td>
                  <UserStatus status="dispatched" />
                </td> */}
                <td>CREDIT CARD</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Arnab Chakraborty</td>
                <td>2 Jun 2021</td>

                <td>
                  <UserStatus status="failed" />
                </td>
                {/* <td>
                  <UserStatus status="ready" />
                </td> */}
                <td>CREDIT CARD</td>
              </tr>
            </>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
